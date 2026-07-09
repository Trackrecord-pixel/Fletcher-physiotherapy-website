import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import { BreadcrumbSchema, FaqSchema } from "./StructuredData";
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
      a: `Yes. Our mobile physiotherapists visit homes throughout ${s.name} and the surrounding ${s.region} area, so you receive expert physiotherapy without leaving home — no travel, parking or waiting rooms.`,
    },
    {
      q: `What does home physiotherapy in ${s.name} cost?`,
      a: `It depends on your funding — NDIS, Home Care Package, Support at Home or private. Contact us on ${site.phone} and we'll explain the options for ${s.name} residents clearly.`,
    },
    {
      q: `How can physiotherapy help older adults in ${s.name} prevent falls?`,
      a: `Through a balance assessment, strength and balance training and a review of hazards in your ${s.name} home — an evidence-based approach that reduces falls risk and rebuilds confidence.`,
    },
    {
      q: `Do I need a GP referral for physiotherapy in ${s.name}?`,
      a: `Not for private physiotherapy — you can contact us directly. A GP referral may be needed for certain funding streams such as a Chronic Disease Management (CDM/EPC) plan.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Physiotherapy ${s.name}`}
        title={`Physiotherapy ${s.name} NSW`}
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
                residents, and physiotherapy delivered in the exact environment where
                you live and move each day. Our care is led by an APA Titled Pain
                Physiotherapist with extensive experience in aged care, chronic pain
                and functional rehabilitation.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Conditions we treat in {s.name}
              </h2>
              <p className="prose-navy mt-4">
                Our {s.name} home visit physiotherapy supports a wide range of goals and
                conditions, with a particular focus on older adults and people who find
                travelling to a clinic difficult:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Mobility and walking difficulties",
                  "Balance problems and falls risk",
                  "Muscle weakness and deconditioning",
                  "Chronic and persistent pain",
                  "Post-surgical and post-hospital recovery",
                  "Arthritis and joint pain",
                  "Neurological conditions such as stroke",
                  "General strength and conditioning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                NDIS physiotherapy in {s.name}
              </h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  We support NDIS participants across {s.name}, working with self-managed,
                  plan-managed and agency-managed plans. Our physiotherapists deliver
                  functional assessments, mobility and strength programs, falls prevention
                  and clear reports to support plan reviews.
                </p>
                <p>
                  Because therapy happens in your {s.name} home, every session is practical
                  and directly relevant to your goals and daily life. We also communicate
                  reliably with support coordinators and families.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Support at Home &amp; Home Care Package physiotherapy in {s.name}
              </h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  For {s.name} residents with a Home Care Package or Support at Home funding,
                  physiotherapy is one of the most valuable services available — directly
                  supporting the mobility, strength and safety that independent living
                  depends on. We coordinate with your provider and care plan and supply any
                  documentation required.
                </p>
                <p>
                  Our focus is helping older adults in {s.name} stay strong, steady and safely
                  independent in the home they love.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Falls prevention &amp; elderly rehabilitation in {s.name}
              </h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  Falls are a leading cause of lost independence for older adults — and most
                  are preventable. Our {s.name} falls-prevention physiotherapy combines a
                  balance and mobility assessment, a tailored strength and balance program,
                  and a review of hazards around your home.
                </p>
                <p>
                  We also rebuild the confidence that so often fades after a fall or a period
                  of illness, helping {s.name} residents move freely and stay active in their
                  community.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Post-hospital rehabilitation in {s.name}
              </h2>
              <p className="prose-navy mt-4">
                Returning home to {s.name} after a hospital stay is a vulnerable time. Our
                home-based rehabilitation helps you recover safely after surgery, illness or
                a fall — rebuilding strength, restoring function and reducing the risk of
                readmission, all in the comfort of your own home.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Why choose Fletcher Physiotherapy in {s.name}?
              </h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  Fletcher Physiotherapy is a dedicated home visit service led by an
                  APA Titled Pain Physiotherapist. For {s.name} residents, that means
                  expert, evidence-based physiotherapy delivered where you live — no
                  travel, no parking and no waiting rooms — with a genuine focus on
                  helping you stay strong, mobile and independent at home.
                </p>
                <p>
                  We work with older adults, NDIS participants, Home Care Package and
                  Support at Home clients and their families across {s.name}, and we
                  communicate clearly with GPs, support coordinators and care providers
                  every step of the way.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Physiotherapy services we provide in {s.name}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="card card-hover flex items-center gap-4">
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
                We provide home visit physiotherapy across {s.name} and the wider {s.region}{" "}
                region, including nearby suburbs such as:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.nearby.map((n) => (
                  <li key={n} className="rounded-full bg-beige-100 px-3.5 py-1.5 text-sm font-medium text-navy-700">
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-5">
                <FAQAccordion items={faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card sticky top-28 bg-navy-900 text-white">
              <h2 className="text-xl text-white">Book a visit in {s.name}</h2>
              <p className="mt-2 text-sm text-navy-100">
                Home visit physiotherapy for older adults, NDIS and Support at Home clients
                in {s.name}.
              </p>
              <Link href="/contact" className="btn-accent mt-5 w-full">
                Book Online <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Book home visit physiotherapy in ${s.name}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": `${site.url}/${s.slug}#localbusiness`,
            name: `Fletcher Physiotherapy — ${s.name}`,
            url: `${site.url}/${s.slug}`,
            telephone: site.phone,
            email: site.email,
            medicalSpecialty: "Physiotherapy",
            image: `${site.url}/images/og-default.png`,
            parentOrganization: { "@id": `${site.url}/#organization` },
            areaServed: [
              { "@type": "City", name: s.name, address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
              ...s.nearby.map((n) => ({ "@type": "Place", name: n })),
            ],
            serviceArea: { "@type": "AdministrativeArea", name: `${s.region}, NSW` },
          }),
        }}
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
