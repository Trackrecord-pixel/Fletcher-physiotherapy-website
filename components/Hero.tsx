import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-sand">
      <div className="container-px grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <Icon name="pulse" className="h-5 w-5" /> Newcastle Physiotherapy · Clinics &amp; Home Visits
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl">
            Newcastle&rsquo;s Trusted Physiotherapy Team
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-navy-700">
            Two ways to see us — book an appointment at one of our Newcastle clinics,
            or have a physiotherapist come to your home. Whatever suits you best.
          </p>

          {/* Two ways to see us */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy-900">Visit a Clinic</h2>
              <p className="mt-1 flex-grow text-sm text-navy-600">
                Jesmond (Mondays) &amp; Elermore Vale (Thursdays).
              </p>
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full">
                Book a Clinic Visit <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Icon name="home" className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy-900">Home Visit</h2>
              <p className="mt-1 flex-grow text-sm text-navy-600">
                We come to you across Newcastle, Lake Macquarie &amp; Central Coast.
              </p>
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full">
                Book a Home Visit <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-base text-navy-600">
            <Icon name="shield" className="h-5 w-5 text-navy-700" />
            Led by an APA Titled Pain Physiotherapist · Medicare EPC, DVA &amp; private patients welcome
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
              <Link href="/physiotherapy-jesmond" className="flex items-center gap-3 rounded-xl bg-sand p-3 hover:bg-beige-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-500">Clinic · Mondays</span>
                  <span className="block font-semibold text-navy-900">HealthSure Medical Centre Jesmond</span>
                </span>
              </Link>
              <Link href="/physiotherapy-elermore-vale" className="flex items-center gap-3 rounded-xl bg-sand p-3 hover:bg-beige-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-500">Clinic · Thursdays</span>
                  <span className="block font-semibold text-navy-900">Elermore Vale Medical Centre</span>
                </span>
              </Link>
            </div>
            <Link href="/book" className="btn-primary mt-6 w-full">
              Book an Appointment <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
