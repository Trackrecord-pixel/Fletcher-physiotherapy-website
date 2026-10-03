import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import AuthorReview from "./AuthorReview";
import OfferWindow from "./OfferWindow";
import { BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site } from "@/lib/site";
import { sydneySuburbs, type SydneySuburb } from "@/lib/sydneySuburbs";

const services = [
  { label: "Home visit physiotherapy", href: "/home-visit-physiotherapy-newcastle", icon: "home" },
  { label: "NDIS physiotherapy", href: "/ndis-physiotherapy-newcastle", icon: "shield" },
  { label: "Support at Home physiotherapy", href: "/support-at-home-physiotherapy-newcastle", icon: "heart" },
  { label: "Falls prevention", href: "/falls-prevention-physiotherapy-newcastle", icon: "balance" },
  { label: "Aged care & retirement living", href: "/aged-care-physiotherapy-newcastle", icon: "user" },
  { label: "Persistent pain care", href: "/chronic-pain-management", icon: "pulse" },
] as const;

export default function SydneySuburbPage({ s }: { s: SydneySuburb }) {
  const others = sydneySuburbs.filter((x) => x.slug !== s.slug);
  const faqs = [
    {
      q: `When do home visits start in ${s.name}?`,
      a: `Our Sydney home visits start on 9 November 2026. You're welcome to call now to ask questions, register your interest or arrange a first appointment.`,
    },
    ...s.faqs,
    {
      q: "Do I need a referral?",
      a: "No — you can book privately without a referral. A GP referral is needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), and NDIS and Support at Home have their own arrangements.",
    },
  ];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Sydney", href: "/physiotherapy-sydney" },
    { name: s.name, href: `/${s.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Mobile Physiotherapy · ${s.name} ${s.postcode}`}
        title={`Home Visit Physiotherapy in ${s.name}`}
        intro={s.intro}
        breadcrumb={crumbs}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                <Icon name="clock" className="h-3.5 w-3.5" /> Available from 9 November 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                <Icon name="shield" className="h-3.5 w-3.5" /> Registered NDIS provider
              </span>
            </div>

            <div className="prose-navy mt-6 space-y-4">
              {s.local.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Why home visits work well in {s.name}</h2>
              <div className="prose-navy mt-4 space-y-4">
                {s.homeVisitNotes.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">How we can help</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Strength, balance and falls prevention",
                  "Rehabilitation after hospital or surgery",
                  "Walking, mobility and walking-aid advice",
                  "Persistent and complex pain",
                  "NDIS functional assessments and therapy",
                  "Support at Home physiotherapy",
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
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Local hospitals &amp; rehab services</h2>
              <p className="prose-navy mt-4">
                With your consent, we coordinate with hospital discharge teams, GPs and care providers so your
                recovery at home is joined up. Hospitals and rehab services near {s.name} include:
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {s.hospitals.map((h) => (
                  <div key={h.name} className="card">
                    <h3 className="flex items-start gap-2 text-base font-semibold text-navy-900">
                      <Icon name="pulse" className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-700" /> {h.name}
                    </h3>
                    <p className="mt-2 text-sm text-navy-600">{h.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-navy-400">Listed for local context only — Fletcher Physiotherapy is independent of these services.</p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Funding options</h2>
              <p className="prose-navy mt-4">
                We see NDIS participants (agency, plan and self-managed), Support at Home clients (formerly Home Care
                Packages), people with a GP Chronic Condition Management Plan (GPCCMP), DVA and private clients.
                Read more about{" "}
                <Link href="/ndis-physiotherapy-newcastle" className="font-semibold underline">NDIS physiotherapy</Link> and{" "}
                <Link href="/support-at-home-physiotherapy-newcastle" className="font-semibold underline">Support at Home physiotherapy</Link>.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Our services</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {services.map((sl) => (
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
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Also visiting near {s.name}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.nearby.map((n) => (
                  <li key={n} className="rounded-full bg-beige-100 px-3.5 py-1.5 text-sm font-medium text-navy-700">{n}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-navy-600">
                See our other Sydney areas:{" "}
                {others.map((o, i) => (
                  <span key={o.slug}>
                    <Link href={`/${o.slug}`} className="font-semibold text-navy-800 underline">{o.name}</Link>
                    {i < others.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                — or the full <Link href="/physiotherapy-sydney" className="font-semibold text-navy-800 underline">Sydney service page</Link>.
              </p>
            </div>

            <AuthorReview pageUrl={`/${s.slug}`} reviewed="October 2026" />

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">{s.name} physiotherapy FAQs</h2>
              <div className="mt-5">
                <FAQAccordion items={faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="card bg-navy-900 text-white">
                <h2 className="text-xl text-white">Book a home visit in {s.name}</h2>
                <p className="mt-2 text-sm text-navy-100">
                  Sydney home visits from 9 November 2026. Call to book or check availability.
                </p>
                <a href={site.phoneHref} className="btn-accent mt-5 w-full">
                  <Icon name="phone" className="h-4 w-4" /> Call {site.phone}
                </a>
                <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white">
                  Send an enquiry <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <OfferWindow>
                <div className="card border-clay-200 bg-clay-50">
                  <p className="text-sm font-semibold text-navy-900">FREE phone consultation for new Sydney clients</p>
                  <p className="mt-2 text-xs leading-relaxed text-navy-600">
                    Available 9 November – 31 December 2026. Phone consultations only; not a substitute for a full
                    assessment; subject to availability.
                  </p>
                </div>
              </OfferWindow>
              <div className="card">
                <p className="text-sm font-semibold text-navy-900">Referring a client in {s.name}?</p>
                <p className="mt-2 text-sm text-navy-600">GPs, providers, support coordinators and discharge teams are welcome to refer.</p>
                <Link href="/refer-a-patient" className="btn-secondary mt-4 w-full">Refer a patient</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Mobile physiotherapy in ${s.name}`,
            serviceType: "Home visit physiotherapy",
            url: `${site.url}/${s.slug}`,
            provider: { "@id": `${site.url}/#business` },
            areaServed: [
              { "@type": "Place", name: `${s.name} NSW ${s.postcode}` },
              ...s.nearby.map((n) => ({ "@type": "Place", name: `${n}, NSW` })),
            ],
          }),
        }}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
