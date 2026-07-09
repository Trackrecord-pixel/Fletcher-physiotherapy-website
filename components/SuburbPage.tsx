import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import { ServiceSchema, BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site, type Suburb } from "@/lib/site";

const serviceLinks = [
  { label: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy-newcastle", icon: "home" },
  { label: "Aged Care Physiotherapy", href: "/aged-care-physiotherapy-newcastle", icon: "user" },
  { label: "Falls Prevention", href: "/falls-prevention-physiotherapy-newcastle", icon: "balance" },
  { label: "NDIS Physiotherapy", href: "/ndis-physiotherapy-newcastle", icon: "shield" },
  { label: "Support at Home Physiotherapy", href: "/support-at-home-physiotherapy-newcastle", icon: "heart" },
  { label: "Mobile Physiotherapist", href: "/mobile-physiotherapist-newcastle", icon: "pulse" },
] as const;

export default function SuburbPage({ s }: { s: Suburb }) {
  const faqs = [
    {
      q: `Do you provide home visit physiotherapy in ${s.name}?`,
      a: `Yes. Our mobile physiotherapists visit homes throughout ${s.name} and the surrounding ${s.region} area, so you receive expert physiotherapy without leaving home.`,
    },
    {
      q: `What does home physiotherapy in ${s.name} cost?`,
      a: `It depends on your funding — NDIS, Home Care Package, Support at Home or private. Contact us on ${site.phone} and we'll explain the options clearly.`,
    },
    {
      q: `How can physiotherapy help older adults in ${s.name} prevent falls?`,
      a: `Through balance assessment, strength and balance training and a review of hazards in your ${s.name} home — an evidence-based approach that reduces falls risk and builds confidence.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Physiotherapy ${s.name}`}
        title={`Home Visit Physiotherapy in ${s.name}`}
        intro={s.intro}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: s.name, href: `/${s.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-navy space-y-4">
              <p>{s.local}</p>
              <p>
                Fletcher Physiotherapy is a dedicated mobile service — we come to
                you. That means no travel, no parking and no waiting rooms for {s.name}{" "}
                residents, and physiotherapy delivered in the exact environment
                where you live and move every day. Our care is led by an APA
                Titled Pain Physiotherapist with extensive experience in aged
                care and functional rehabilitation.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Physiotherapy services we provide in {s.name}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {serviceLinks.map((sl) => (
                  <Link
                    key={sl.href}
                    href={sl.href}
                    className="card card-hover flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                      <Icon name={sl.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-navy-900">{sl.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Serving {s.name} and nearby suburbs
              </h2>
              <p className="prose-navy mt-4">
                We provide home visit physiotherapy across {s.name} and the wider
                {" "}{s.region} region, including nearby suburbs such as:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.nearby.map((n) => (
                  <li
                    key={n}
                    className="rounded-full bg-beige-100 px-3.5 py-1.5 text-sm font-medium text-navy-700"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-5">
                <FAQAccordion items={faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card sticky top-28 bg-navy-900 text-white">
              <h2 className="text-xl text-white">Book a visit in {s.name}</h2>
              <p className="mt-2 text-sm text-navy-100">
                Home visit physiotherapy for older adults, NDIS and Support at
                Home clients in {s.name}.
              </p>
              <Link href="/contact" className="btn-accent mt-5 w-full">
                Book Online <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Book home visit physiotherapy in ${s.name}`} />
      <ServiceSchema
        name={`Home Visit Physiotherapy ${s.name}`}
        description={s.intro}
        slug={s.slug}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: s.name, href: `/${s.slug}` },
        ]}
      />
    </>
  );
}
