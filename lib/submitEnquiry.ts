/**
 * Sends website enquiries/referrals.
 *
 * 1. If NEXT_PUBLIC_WEB3FORMS_KEY is set (Vercel → Settings → Environment Variables),
 *    the form is delivered straight to the practice inbox via Web3Forms (free).
 * 2. Otherwise it falls back to opening the visitor's email app with the
 *    details pre-filled, so no enquiry is silently lost.
 */
export type SubmitResult = "sent" | "mailto" | "error";

const INBOX = "info@fletcherphysiotherapy.com.au";

export async function submitEnquiry(
  subject: string,
  fields: Record<string, string>,
  honeypot = false
): Promise<SubmitResult> {
  // A hidden field only bots fill in — pretend success and send nothing.
  if (honeypot) return "sent";
  // Web3Forms access keys are public by design (they only allow sending to the
  // practice inbox). The env var overrides this if it's ever set in Vercel.
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "1568b714-f175-4851-834e-8b146ce192e2";

  if (key) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject,
          from_name: "Fletcher Physiotherapy website",
          botcheck: honeypot ? "spam" : "",
          ...fields,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data as { success?: boolean }).success !== false) return "sent";
      return "error";
    } catch {
      return "error";
    }
  }

  const body = Object.entries(fields)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mailto";
}

/** Collects named form fields into a plain object with readable labels. */
export function readForm(form: HTMLFormElement, labels: Record<string, string>) {
  const fd = new FormData(form);
  const out: Record<string, string> = {};
  for (const [name, label] of Object.entries(labels)) {
    const v = fd.get(name);
    out[label] = typeof v === "string" ? v : "";
  }
  return out;
}

/**
 * Checks phone numbers, emails and names look real before sending.
 * Shows the browser's normal warning bubble on the first problem field.
 * Returns true if the form is OK to send.
 */
export function validateFields(form: HTMLFormElement): boolean {
  const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input"));
  for (const el of inputs) {
    const v = el.value.trim();
    el.setCustomValidity("");
    if (!v) continue; // empty required fields are handled by the browser
    if (el.type === "tel") {
      const digits = v.replace(/\D/g, "");
      if (!/^[+\d\s()-]+$/.test(v) || digits.length < 8 || digits.length > 12) {
        el.setCustomValidity("Please enter a valid phone number, e.g. 0412 345 678 or 02 9876 5432.");
      }
    } else if (el.type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        el.setCustomValidity("Please enter a valid email address, e.g. name@example.com.");
      }
    } else if (el.autocomplete === "name" || /name/i.test(el.name)) {
      if (v.replace(/[^A-Za-z\u00C0-\u024F\u3131-\uD79D]/g, "").length < 2) {
        el.setCustomValidity("Please enter your name.");
      }
    } else if (el.autocomplete === "address-level2" || /suburb/i.test(el.name)) {
      if (v.replace(/[^A-Za-z]/g, "").length < 3) {
        el.setCustomValidity("Please enter your suburb.");
      }
    }
  }
  return form.reportValidity();
}

/** True if the hidden spam-trap field was filled in (by a bot). */
export function isBot(form: HTMLFormElement): boolean {
  const trap = form.querySelector<HTMLInputElement>('input[name="company_website"]');
  return !!trap && trap.value.trim() !== "";
}
