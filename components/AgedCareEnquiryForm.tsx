"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";
import { submitEnquiry, readForm, validateFields, isBot, type SubmitResult } from "@/lib/submitEnquiry";

const interests = [
  "4-Week Aged Care Physio Pilot Program",
  "Regular onsite physiotherapy",
  "Pain management program",
  "Group exercise classes",
  "Staff training (manual handling, falls response)",
  "Not sure yet — let's talk",
];

const sizes = ["Under 40 beds", "40–80 beds", "81–120 beds", "121–200 beds", "200+ beds"];

const inputCls =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200";

export default function AgedCareEnquiryForm() {
  const [status, setStatus] = useState<SubmitResult | "idle" | "sending">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateFields(form)) return;
    setStatus("sending");
    const fields = readForm(form, {
      name: "Name",
      role: "Role",
      facility: "Facility",
      email: "Email",
      phone: "Phone",
      location: "Facility suburb",
      size: "Number of beds",
      interest: "Interested in",
      message: "Message",
    });
    setStatus(
      await submitEnquiry(`Aged care partnership – ${fields.Facility || fields.Name || "new enquiry"}`, fields, isBot(form))
    );
  };

  if (status === "sent" || status === "mailto") {
    return (
      <div className="card text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige-100 text-navy-800">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-3 text-navy-600">
          {status === "sent"
            ? "We've received your request and will be in touch to arrange a free partnership consultation. To talk now, call "
            : "Your email app should have opened with your request filled in — please press Send. If it didn't open, call "}
          <a href={site.phoneHref} className="font-semibold text-navy-800 underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  const field = (id: string, label: string, opts: { type?: string; required?: boolean; autoComplete?: string } = {}) => (
    <div>
      <label htmlFor={`ac-${id}`} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {opts.required && <span className="text-navy-400">*</span>}
      </label>
      <input id={`ac-${id}`} name={id} type={opts.type ?? "text"} required={opts.required} autoComplete={opts.autoComplete} className={inputCls} />
    </div>
  );

  return (
    <form onInput={(e) => (e.target as HTMLInputElement).setCustomValidity?.("")} onSubmit={onSubmit} className="card space-y-5" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-clay-50 p-3 text-sm text-navy-800">
          Sorry, your request couldn&rsquo;t be sent. Please call{" "}
          <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> or email{" "}
          <a href={site.emailHref} className="font-semibold underline">{site.email}</a>.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Your name", { required: true, autoComplete: "name" })}
        {field("role", "Role (e.g. Facility Manager, Clinical Care Manager)")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("facility", "Facility / provider name", { required: true, autoComplete: "organization" })}
        {field("location", "Facility suburb")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("email", "Work email", { type: "email", required: true, autoComplete: "email" })}
        {field("phone", "Phone", { type: "tel", required: true, autoComplete: "tel" })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ac-size" className="mb-1.5 block text-sm font-medium text-navy-800">Number of beds</label>
          <select id="ac-size" name="size" className={inputCls}>
            {sizes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="ac-interest" className="mb-1.5 block text-sm font-medium text-navy-800">Interested in</label>
          <select id="ac-interest" name="interest" className={inputCls}>
            {interests.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="ac-message" className="mb-1.5 block text-sm font-medium text-navy-800">What would you like help with?</label>
        <textarea id="ac-message" name="message" rows={4} placeholder="e.g. current physio arrangements, resident needs, falls or pain management priorities, staff training." className={inputCls} />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Book a Free Partnership Consultation"} <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-400">No obligation. Your details are only used to respond to your request.</p>
    </form>
  );
}
