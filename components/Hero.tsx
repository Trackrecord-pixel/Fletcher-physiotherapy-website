import Link from "next/link";
import Icon from "./Icon";
import CallbackForm from "./CallbackForm";
import { site } from "@/lib/site";

const trust = [
  { icon: "star", label: "APA Titled Pain Physiotherapist" },
  { icon: "shield", label: `Registered NDIS provider${site.ndisRegistrationNumber ? ` · ${site.ndisRegistrationNumber}` : ""}` },
  { icon: "check", label: "AHPRA-registered physiotherapists" },
  { icon: "home", label: "Sydney home visits from 9 Nov 2026" },
] as const;

export default function Hero() {
  return (
    <section className="bg-sand">
      <div className="container-px grid items-start gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <Icon name="pulse" className="h-5 w-5" /> Mobile Physio · Sydney · Newcastle · Lake Macquarie · Central Coast
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl">
            Mobile &amp; Home Visit Physio in Sydney &amp; Newcastle — We Come to You
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-navy-700">
            Experienced physiotherapy in your own home, for older adults, families, NDIS participants and
            Support at Home clients — now visiting homes around Sydney Olympic Park and the Inner West from
            9 November 2026, alongside Newcastle, Lake Macquarie, the Central Coast and our two Newcastle clinics.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-primary">
              <Icon name="phone" className="h-5 w-5" /> Call {site.phone}
            </a>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Book online <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-3 text-sm font-medium text-navy-800">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-navy-800 shadow-card">
                  <Icon name={t.icon} className="h-4 w-4" />
                </span>
                {t.label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-navy-600">
            Medicare GPCCMP, DVA, NDIS, Support at Home &amp; private clients welcome ·{" "}
            <a href={site.reviewsUrl.replace("/review", "")} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-800 underline">
              Read our Google reviews
            </a>{" "}
            · <Link href="/physiotherapy-sydney" className="font-semibold text-navy-800 underline">Sydney service</Link>{" "}
            · <Link href="/physio-near-me" className="font-semibold text-navy-800 underline">Check your suburb</Link>
          </p>
        </div>

        <div className="lg:col-span-5" id="callback">
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
