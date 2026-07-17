import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

const highlights = [
  "Fast availability",
  "Experienced physiotherapists",
  "Newcastle, Lake Macquarie & Central Coast",
  "Evidence-based rehabilitation",
];

export default function Hero() {
  return (
    <section className="bg-sand">
      <div className="container-px grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <Icon name="home" className="h-5 w-5" /> Home Visit Physiotherapy · Newcastle
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl">
            Newcastle&rsquo;s Trusted Home Visit Physiotherapy Team
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-navy-700">
            Helping older adults, NDIS participants and Support at Home clients
            improve mobility, reduce falls and stay independent at home.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-navy-700">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Home Visit <Icon name="arrow" className="h-5 w-5" />
            </a>
            <Link href="/refer-a-patient" className="btn-secondary">
              <Icon name="users" className="h-5 w-5" /> Make a Referral
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-base text-navy-600">
            <Icon name="shield" className="h-5 w-5 text-navy-700" />
            Led by an APA Titled Pain Physiotherapist
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy-500">
              Fast, friendly help
            </p>
            <div className="mt-5 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 rounded-xl bg-sand p-3 hover:bg-beige-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-500">Call us today</span>
                  <span className="block font-semibold text-navy-900">{site.phone}</span>
                </span>
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 rounded-xl bg-sand p-3 hover:bg-beige-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-500">Email us</span>
                  <span className="block font-semibold text-navy-900">{site.email}</span>
                </span>
              </a>
              <p className="flex items-start gap-3 rounded-xl bg-sand p-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-500">We come to you across</span>
                  <span className="block font-semibold text-navy-900">
                    Newcastle · Lake Macquarie · Central Coast
                  </span>
                </span>
              </p>
            </div>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Book a Home Visit <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
