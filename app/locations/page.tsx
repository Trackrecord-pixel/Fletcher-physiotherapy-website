import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { locations, suburbs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Newcastle, Lake Macquarie & Central Coast",
  description:
    "Fletcher Physiotherapy provides home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast. See the suburbs we service and book a mobile physio visit today.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Locations"
        title="Home visit physiotherapy across Newcastle, Lake Macquarie & the Central Coast"
        intro="Wherever you are in our service regions, we bring professional physiotherapy to your door. Not sure if we reach your suburb? Just ask."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />

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
                    <Link href="/contact" className="btn-primary mt-6">
                      Book in {loc.name} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
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

      <CTASection />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />
    </>
  );
}
