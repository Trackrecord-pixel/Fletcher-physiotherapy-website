"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";
import { submitEnquiry, readForm, validateFields, isBot, type SubmitResult } from "@/lib/submitEnquiry";

const interests = [
  "4-Week Onsite Physio Pilot Program",
  "Onsite physiotherapy treatment",
  "Manual handling & injury prevention training",
  "Workstation & ergonomic assessments",
  "Pre-shift warm-up & stretching program",
  "Early intervention & WorkCover rehabilitation",
  "Return to work & functional assessments",
  "Not sure yet — let's talk",
];

const sizes = ["1–20", "21–50", "51–100", "101–250", "250+"];

const inputCls =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200";

export default function WorkplaceEnquiryForm() {
  const [status, setStatus] = useState<SubmitResult | "idle" | "sending">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateFields(form)) return;
    setStatus("sending");
    const fields = readForm(form, {
      name: "Name",
      role: "Role",
      company: "Company",
      email: "Email",
      phone: "Phone",
      location: "Workplace location",
      size: "Number of employees",
      interest: "Interested in",
      message: "Message",
    });
    setStatus(
      await submitEnquiry(`Workplace consultation – ${fields.Company || fields.Name || "new enquiry"}`, fields, isBot(form))
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
            ? "We've received your request and will be in touch to arrange your free workplace consultation. To talk now, call "
            : "Your email app should have opened with your request filled in — please press Send. If it didn't open, call "}
          <a href={site.phoneHref} className="font-semibold text-navy-800 underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  const field = (id: string, label: string, opts: { type?: string; required?: boolean; autoComplete?: string } = {}) => (
    <div>
      <label htmlFor={`wp-${id}`} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {opts.required && <span className="text-navy-400">*</span>}
      </label>
      <input id={`wp-${id}`} name={id} type={opts.type ?? "text"} required={opts.required} autoComplete={opts.autoComplete} className={inputCls} />
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
        {field("role", "Role (e.g. WHS, HR, Operations)")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("company", "Company", { required: true, autoComplete: "organization" })}
        {field("location", "Workplace suburb")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("email", "Work email", { type: "email", required: true, autoComplete: "email" })}
        {field("phone", "Phone", { type: "tel", required: true, autoComplete: "tel" })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wp-size" className="mb-1.5 block text-sm font-medium text-navy-800">Number of employees</label>
          <select id="wp-size" name="size" className={inputCls}>
            {sizes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="wp-interest" className="mb-1.5 block text-sm font-medium text-navy-800">Interested in</label>
          <select id="wp-interest" name="interest" className={inputCls}>
            {interests.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="wp-message" className="mb-1.5 block text-sm font-medium text-navy-800">What&rsquo;s happening at your workplace?</label>
        <textarea id="wp-message" name="message" rows={4} placeholder="e.g. type of work, common aches or injuries, shifts, what you'd like to improve." className={inputCls} />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Book a Free Workplace Consultation"} <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-400">No obligation. Your details are only used to respond to your request.</p>
    </form>
  );
}
