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
  fields: Record<string, string>
): Promise<SubmitResult> {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (key) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject,
          from_name: "Fletcher Physiotherapy website",
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
