"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";
import { submitEnquiry, readForm, validateFields, isBot, type SubmitResult } from "@/lib/submitEnquiry";

const services = [
  "Home Visit Physiotherapy",
  "Sydney home visit / free phone consultation (from 9 Nov 2026)",
  "Clinic appointment (Jesmond or Elermore Vale)",
  "NDIS Physiotherapy",
  "Support at Home Physiotherapy",
  "Chronic Pain Management",
  "Falls Prevention",
  "Post Hospital Rehabilitation",
  "Other / Not sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitResult | "idle" | "sending">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateFields(form)) return;
    setStatus("sending");
    const fields = readForm(form, {
      name: "Name",
      phone: "Phone",
      email: "Email",
      suburb: "Suburb",
      service: "Service",
      message: "Message",
    });
    setStatus(await submitEnquiry(`Website enquiry – ${fields.Name || "new client"}`, fields, isBot(form)));
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
            ? "Your enquiry has been received. Our team will be in touch shortly. For urgent matters please call "
            : "Your email app should have opened with your enquiry filled in — please press Send. If it didn't open, call "}
          <a href={site.phoneHref} className="font-semibold text-navy-800 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onInput={(e) => (e.target as HTMLInputElement).setCustomValidity?.("")} onSubmit={onSubmit} className="card space-y-5" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-clay-50 p-3 text-sm text-navy-800">
          Sorry, your enquiry couldn&rsquo;t be sent. Please call{" "}
          <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> or email{" "}
          <a href={site.emailHref} className="font-semibold underline">{site.email}</a>.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required autoComplete="name" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" type="email" required autoComplete="email" />
        <Field id="suburb" label="Suburb" autoComplete="address-level2" />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-800">
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your situation, goals or funding (NDIS, Support at Home, GP care plan, private)."
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
        />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Enquiry"} <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-400">
        We respect your privacy. Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-navy-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
      />
    </div>
  );
}
