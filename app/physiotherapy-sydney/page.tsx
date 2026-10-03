import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorReview from "@/components/AuthorReview";
import OfferWindow from "@/components/OfferWindow";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import { sydneySuburbs } from "@/lib/sydneySuburbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Mobile Physiotherapy Sydney | Home Visits | Fletcher Physiotherapy" },
  description:
    "Mobile physiotherapy and home visits around Sydney Olympic Park, the Inner West and surrounding Sydney suburbs. Supporting older adults, NDIS participants, Support at Home clients and post-hospital rehabilitation.",
  alternates: { canonical: "/physiotherapy-sydney" },
  openGraph: {
    type: "website", siteName: "Fletcher Physiotherapy", locale: "en_AU",
    title: "Mobile Physiotherapy Sydney | Home Visits | Fletcher Physiotherapy",
    description:
      "Mobile physiotherapy and home visits around Sydney Olympic Park, the Inner West and surrounding Sydney suburbs.",
    url: "/physiotherapy-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy mobile physiotherapy Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Physiotherapy Sydney | Home Visits | Fletcher Physiotherapy",
    description: "Mobile physiotherapy and home visits around Sydney Olympic Park, the Inner West and surrounding Sydney suburbs.",
    images: ["/images/og-default.png"],
  },
};

const serviceAreaSuburbs = [
  "Sydney Olympic Park", "Homebush", "Homebush West", "Lidcombe", "Auburn",
  "Strathfield", "Concord", "Rhodes", "Wentworth Point", "Newington",
];

const services: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Home visit physiotherapy" },
  { icon: "shield", label: "NDIS physiotherapy at home" },
  { icon: "heart", label: "Support at Home physiotherapy (formerly Home Care Packages)" },
  { icon: "user", label: "Physiotherapy in retirement communities and residential aged care" },
  { icon: "recovery", label: "Home rehabilitation after surgery or hospital discharge" },
  { icon: "balance", label: "Balance, strength, mobility and falls-prevention support" },
  { icon: "pulse", label: "Evidence-based physiotherapy for persistent and complex pain" },
  { icon: "clock", label: "Prompt appointments with flexible times and minimal waiting" },
];

const faqs = [
  { q: "When does Fletcher Physiotherapy start in Sydney?", a: "Our Sydney mobile physiotherapy service begins on 9 November 2026." },
  { q: "Which Sydney suburbs do you visit?", a: "We visit homes, retirement communities and residential aged care around Sydney Olympic Park, the Inner West and surrounding suburbs — including Homebush, Homebush West, Lidcombe, Auburn, Strathfield, Concord, Rhodes, Wentworth Point and Newington. If you are unsure whether we visit your suburb, contact our team and we can confirm availability." },
  { q: "Is there a free phone consultation?", a: "Yes. New Sydney clients can speak with our team for a free, no-obligation phone consultation to discuss service suitability, funding options and availability, from 9 November until 31 December 2026. The phone consultation is not a substitute for a full physiotherapy assessment or treatment session, and appointments remain subject to availability." },
  { q: "What funding do you work with?", a: "We work with NDIS participants (agency, plan and self-managed), Support at Home clients (the program that replaced Home Care Packages on 1 November 2025), privately funded clients, and people needing rehabilitation after hospital discharge." },
  { q: "Do I need a referral?", a: "Not for private physiotherapy — you can contact us directly. A referral may be needed for certain funding pathways, which we can talk through during your free phone consultation." },
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Sydney", href: "/physiotherapy-sydney" },
];

export default function SydneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Physiotherapy · Sydney"
        title="Mobile Physiotherapy & Home Visits in Sydney"
        intro="Fletcher Physiotherapy is expanding its mobile physiotherapy service to Sydney from 9 November 2026 — physiotherapy delivered where everyday mobility actually happens."
        breadcrumb={crumbs}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-navy space-y-4">
              <p>
                We provide physiotherapy in clients&rsquo; homes, retirement communities and residential
                aged care settings around <strong>Sydney Olympic Park, the Inner West and surrounding
                suburbs</strong>.
              </p>
              <p>
                Our Sydney service supports older adults, NDIS participants, Support at Home clients and
                people recovering after hospitalisation or surgery — with mobile physiotherapy home visits
                that remove the need to travel to a clinic.
              </p>
            </div>

            {/* Offer */}
            <OfferWindow>
              <div className="mt-8 overflow-hidden rounded-2xl border border-clay-200 bg-clay-50">
                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl text-navy-900">Sydney Mobile Physiotherapy – Available From 9 November</h2>
                  <p className="mt-2 text-lg font-semibold text-clay-600">FREE Phone Consultation for New Sydney Clients</p>
                  <p className="prose-navy mt-3">
                    Fletcher Physiotherapy is expanding our mobile physiotherapy home visit service to Sydney
                    from 9 November 2026. New Sydney clients can speak with our team for a FREE phone
                    consultation, with immediate appointment availability from 9 November until 31 December 2026.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a href={site.phoneHref} className="btn-primary">
                      <Icon name="phone" className="h-5 w-5" /> Book a FREE Phone Consultation
                    </a>
                    <Link href="/contact" className="btn-secondary">Enquire About a Sydney Home Visit</Link>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-navy-500">
                    Offer for new Sydney clients. Applies to phone consultations only, from 9 November to
                    31 December 2026. The phone consultation is to discuss service suitability, funding and
                    booking — it is not a substitute for a full physiotherapy assessment or treatment session.
                    Appointments are subject to availability.
                  </p>
                </div>
              </div>
            </OfferWindow>

            {/* Services */}
            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">How our Sydney physiotherapists can help</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <div key={s.label} className="flex items-start gap-3 rounded-xl border border-navy-100 p-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-beige-100 text-navy-800">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-navy-800">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="prose-navy mt-5">
                Not sure whether mobile physiotherapy is right for you or a family member?{" "}
                <Link href="/contact" className="font-semibold text-navy-800 underline decoration-clay-300 underline-offset-2">Get in touch</Link>{" "}
                and we can talk it through. You can also{" "}
                <Link href="/services" className="font-semibold text-navy-800 underline decoration-clay-300 underline-offset-2">explore all our physiotherapy services</Link>.
              </p>
            </div>

            {/* Referrers */}
            <div className="mt-8 rounded-2xl border border-navy-100 bg-sand p-6 sm:p-7">
              <h2 className="flex items-center gap-2 text-xl text-navy-900">
                <Icon name="users" className="h-5 w-5 text-clay-600" /> Sydney referrals welcome
              </h2>
              <p className="prose-navy mt-3">
                We welcome referrals for our Sydney service from GPs, Support at Home providers, residential
                aged care teams, NDIS support coordinators, rehabilitation providers, hospital discharge teams
                and families — for services commencing 9 November 2026.
              </p>
              <Link href="/refer-a-patient" className="btn-primary mt-4">
                Refer a patient <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <AuthorReview pageUrl="/physiotherapy-sydney" />

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Common questions</h2>
              <div className="mt-5"><FAQAccordion items={faqs} /></div>
            </div>
          </div>

          {/* Service area aside */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="card">
                <h2 className="text-xl text-navy-900">Sydney service area</h2>
                <p className="mt-2 text-sm text-navy-600">
                  Mobile physiotherapy around Sydney Olympic Park, the Inner West and surrounding suburbs —
                  roughly within 30 minutes of Sydney Olympic Park.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {serviceAreaSuburbs.map((s) => {
                    const page = sydneySuburbs.find((x) => x.name === s);
                    return page ? (
                      <li key={s}>
                        <Link href={`/${page.slug}`} className="block rounded-full bg-navy-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-navy-700">{s}</Link>
                      </li>
                    ) : (
                      <li key={s} className="rounded-full bg-beige-100 px-3 py-1.5 text-xs font-medium text-navy-700">{s}</li>
                    );
                  })}
                </ul>
                <p className="mt-4 text-xs text-navy-500">
                  Unsure whether we visit your suburb? Contact our team and we can confirm availability.
                </p>
                <a href={site.phoneHref} className="btn-primary mt-5 w-full">
                  <Icon name="phone" className="h-4 w-4" /> {site.phone}
                </a>
                <Link href="/contact" className="btn-secondary mt-3 w-full">Send an enquiry</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Sydney-specific bottom CTA */}
      <section className="bg-navy-900">
        <div className="container-px flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-white">Mobile physiotherapy home visits in Sydney</h2>
            <p className="mt-3 text-navy-100">
              Around Sydney Olympic Park, the Inner West and surrounding suburbs, from 9 November 2026.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-accent"><Icon name="phone" className="h-5 w-5" /> {site.phone}</a>
            <Link href="/contact" className="btn-secondary border-navy-700 bg-transparent text-white hover:bg-navy-800">Enquire online</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "Physiotherapy"],
            "@id": `${site.url}/physiotherapy-sydney#sydney-service`,
            name: "Fletcher Physiotherapy — Sydney Mobile Physiotherapy",
            url: `${site.url}/physiotherapy-sydney`,
            telephone: site.phone,
            email: site.email,
            medicalSpecialty: "Physiotherapy",
            image: `${site.url}/images/og-default.png`,
            parentOrganization: { "@id": `${site.url}/#organization` },
            areaServed: serviceAreaSuburbs.map((n) => ({ "@type": "Place", name: `${n}, NSW` })),
            serviceArea: { "@type": "AdministrativeArea", name: "Sydney Olympic Park & Inner West, Sydney NSW" },
          }),
        }}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
