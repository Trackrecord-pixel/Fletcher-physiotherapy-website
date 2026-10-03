"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";
import { submitEnquiry, readForm, validateFields, isBot, type SubmitResult } from "@/lib/submitEnquiry";

const needs = [
  "Home visit physiotherapy",
  "Clinic appointment (Jesmond / Elermore Vale)",
  "After a fall or worried about falls",
  "Coming home from hospital or surgery",
  "NDIS physiotherapy",
  "Support at Home physiotherapy",
  "Pain that isn't settling",
  "Sydney home visit (from 9 Nov 2026)",
  "Not sure — I'd like advice",
];

const input =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200";

export default function CallbackForm() {
  const [status, setStatus] = useState<SubmitResult | "idle" | "sending">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateFields(form)) return;
    setStatus("sending");
    const fields = readForm(form, {
      cb_name: "Name",
      cb_phone: "Phone",
      cb_suburb: "Suburb",
      cb_need: "Help with",
      cb_for: "Booking for",
    });
    setStatus(await submitEnquiry(`Call-back request – ${fields.Name || "website visitor"}`, fields, isBot(form)));
  };

  if (status === "sent" || status === "mailto") {
    return (
      <div className="rounded-3xl border border-navy-100 bg-white p-7 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige-100 text-navy-800">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-4 text-2xl text-navy-900">Thanks — we&rsquo;ll call you</h2>
        <p className="mt-2 text-sm text-navy-600">
          {status === "sent"
            ? "We've received your request and will call you back. "
            : "Your email app should have opened with your details — please press Send. "}
          Prefer to talk now? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-navy-900 underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onInput={(e) => (e.target as HTMLInputElement).setCustomValidity?.("")} onSubmit={onSubmit} noValidate className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-7">
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <p className="text-sm font-semibold uppercase tracking-widest text-clay-600">Request a call back</p>
      <h2 className="mt-1 text-2xl text-navy-900">Talk to a physio about your situation</h2>
      <p className="mt-1 text-sm text-navy-600">No obligation. We&rsquo;ll call to understand your needs and funding.</p>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-clay-50 p-3 text-sm text-navy-800">
          Sorry, that didn&rsquo;t send. Please call <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a>.
        </p>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="cb_name" className="sr-only">Your name</label>
          <input id="cb_name" name="cb_name" required autoComplete="name" placeholder="Your name *" className={input} />
        </div>
        <div>
          <label htmlFor="cb_phone" className="sr-only">Phone</label>
          <input id="cb_phone" name="cb_phone" type="tel" required autoComplete="tel" placeholder="Phone *" className={input} />
        </div>
        <div>
          <label htmlFor="cb_suburb" className="sr-only">Suburb</label>
          <input id="cb_suburb" name="cb_suburb" required autoComplete="address-level2" placeholder="Suburb *" className={input} />
        </div>
        <div>
          <label htmlFor="cb_for" className="sr-only">Who is it for?</label>
          <select id="cb_for" name="cb_for" className={input} defaultValue="Myself">
            <option>Myself</option>
            <option>My parent / family member</option>
            <option>A client or patient (referrer)</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="cb_need" className="sr-only">What do you need help with?</label>
        <select id="cb_need" name="cb_need" className={input} defaultValue={needs[0]}>
          {needs.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-accent mt-4 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my call back"} <Icon name="arrow" className="h-4 w-4" />
      </button>
      <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900">
        <Icon name="phone" className="h-4 w-4" /> Or call now: {site.phone}
      </a>
      <p className="mt-3 text-center text-xs text-navy-400">Your details are only used to respond to your enquiry.</p>
    </form>
  );
}
