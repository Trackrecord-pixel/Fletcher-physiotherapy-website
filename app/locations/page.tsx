import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import { locations, suburbs, clinics, site } from "@/lib/site";

const locationFaqs = [
  { q: "Which areas does Fletcher Physiotherapy cover?", a: "We provide home visit physiotherapy right across Newcastle, Lake Macquarie and the Central Coast, and see clients at our Jesmond (Mondays) and Elermore Vale (Thursdays) clinics. If you're not sure we reach your suburb, just call us." },
  { q: "Do you charge extra to travel to my home?", a: "Costs depend on your funding — NDIS, Home Care Package, Support at Home or private. Call us on " + site.phone + " and we'll explain the options for your area clearly before your first visit." },
  { q: "Do I need a referral to book?", a: "Not for private physiotherapy — you can contact us directly. A GP referral may be needed for certain funding streams such as a Chronic Disease Management (CDM/EPC) plan, DVA or some NDIS arrangements." },
  { q: "Can you visit someone in an aged care or retirement village?", a: "Yes. We regularly visit residents in private homes, retirement villages and residential settings across the region, coordinating with families, providers and support coordinators." },
];

export const metadata: Metadata = {
  title: "Locations | Newcastle Physiotherapy Clinics & Home Visits",
  description:
    "Fletcher Physiotherapy consults at HealthSure Medical Centre Jesmond (Mondays) and Elermore Vale Medical Centre (Thursdays), plus home visits across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Locations"
        title="Newcastle physiotherapy clinics & home visits"
        intro="Choose the option that suits you best — visit one of our two Newcastle clinics, or have a physiotherapist come to your home across Newcastle, Lake Macquarie and the Central Coast."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Clinic Appointments" title="Our Newcastle clinics" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {clinics.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <div className="card card-hover flex h-full flex-col">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                    <Icon name="clock" className="h-3.5 w-3.5" /> Consulting {c.dayShort}
                  </span>
                  <h3 className="mt-4 text-2xl text-navy-900">{c.hostCentre}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-navy-600"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {c.address}</p>
                  <p className="mt-4 flex-grow text-sm leading-relaxed text-navy-600">Physiotherapy, chronic pain management, musculoskeletal and sports injuries, falls prevention, balance assessment and post-operative rehabilitation. Medicare EPC, DVA and private patients welcome.</p>
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">Book Appointment <Icon name="arrow" className="h-4 w-4" /></a>
                    <Link href={`/${c.slug}`} className="btn-secondary w-full sm:w-auto">Clinic details</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px space-y-10">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 60}>
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="card h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                      <Icon name="pin" className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-2xl text-navy-900">{loc.name}</h2>
                    <p className="mt-2 text-navy-600">{loc.blurb}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-navy-500">
                      Suburbs we service
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {loc.suburbs.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-beige-100 px-3 py-1.5 text-xs font-medium text-navy-700"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={`/physiotherapy-${loc.name.toLowerCase().replace(/ /g, "-")}`} className="btn-primary">
                        {loc.name} physiotherapy <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                      <a href={site.phoneHref} className="btn-secondary">
                        <Icon name="phone" className="h-4 w-4" /> Call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${loc.name}, NSW, Australia`
                    )}&z=10&output=embed`}
                    title={`Map of the ${loc.name} service area`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[20rem] w-full rounded-3xl border border-navy-100"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-px py-12 text-center">
          <p className="text-navy-700">
            Not sure if we cover your suburb? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-navy-900 underline">
              {site.phone}
            </a>{" "}
            and we&rsquo;ll let you know.
          </p>
        </div>
      </section>

      {/* Suburb pages — internal linking */}
      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Suburbs we visit"
            title="Home visit physiotherapy near you"
            intro="Explore home visit physiotherapy in these Newcastle, Lake Macquarie and Central Coast suburbs."
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {suburbs.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${sub.slug}`}
                className="card card-hover flex items-center gap-3 py-4"
              >
                <Icon name="pin" className="h-5 w-5 text-navy-700" />
                <span className="font-semibold text-navy-900">{sub.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Local FAQs" title="Home visits across the region" intro="Common questions about our service areas, funding and referrals." />
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={locationFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={locationFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />
    </>
  );
}
