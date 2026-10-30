import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import WhyHomeVisits from "./WhyHomeVisits";
import { site, suburbs } from "@/lib/site";
import { sydneySuburbs } from "@/lib/sydneySuburbs";
import { sydneyClinics } from "@/lib/sydneyClinics";
import { FaqSchema, ServiceSchema, BreadcrumbSchema } from "./StructuredData";
import type { Faq } from "@/lib/site";

export type LandingSection = { h2: string; body: string[]; list?: string[] };
export type LandingContent = {
  slug: string;
  eyebrow: string;
  h1: string;
  serviceName: string;
  intro: string;
  lead: string[];
  sections: LandingSection[];
  faqs: Faq[];
  related: { label: string; href: string }[];
  ctaTitle?: string;
  whyHome?: boolean;
  /** Which service area this page is about — controls sidebar text and suburb links. Default "newcastle". */
  region?: "newcastle" | "sydney" | "all";
  /** "clinic" pages show clinic booking; "home" shows home-visit booking; "both" shows both pathways. Default "home". */
  pathway?: "clinic" | "home" | "both";
  breadcrumbParent?: { name: string; href: string };
  /** Show the "bulk billing at our clinics" callout. */
  yagoonaCallout?: boolean;
  /** Anchor ids for sections, keyed by h2 (for deep links such as #neck-related-headaches). */
  sectionIds?: Record<string, string>;
};

export default function LandingPage({ c }: { c: LandingContent }) {
  const region = c.region ?? "newcastle";
  const pathway = c.pathway ?? "home";
  const areaLinks =
    pathway === "clinic"
      ? []
      : region === "sydney"
      ? sydneySuburbs.map((s) => ({ slug: s.slug, name: s.name }))
      : region === "all"
      ? [...suburbs, ...sydneySuburbs].map((s) => ({ slug: s.slug, name: s.name }))
      : suburbs.map((s) => ({ slug: s.slug, name: s.name }));
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        breadcrumb={[
          { name: "Home", href: "/" },
          ...(c.breadcrumbParent ? [c.breadcrumbParent] : []),
          { name: c.eyebrow, href: `/${c.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-navy space-y-4">
              {c.lead.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {c.yagoonaCallout && (
              <div className="mt-8 rounded-3xl border border-beige-200 bg-sand p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-euc-600">Bulk billing at our clinics</p>
                <p className="mt-2 text-navy-700">
                  Eligible Medicare patients referred under a GP Chronic Condition Management Plan (GPCCMP) can be bulk
                  billed at our Jesmond, Yagoona and Parramatta clinics.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                  <Link href="/bulk-billing-physiotherapy-yagoona" className="text-euc-700 hover:text-euc-800">How bulk billing works →</Link>
                  <Link href="/physiotherapy-yagoona" className="text-euc-700 hover:text-euc-800">Physiotherapy in Yagoona →</Link>
                </div>
              </div>
            )}

            {c.sections.map((sec) => (
              <div key={sec.h2} id={c.sectionIds?.[sec.h2]} className="mt-10 scroll-mt-28">
                <h2 className="text-2xl text-navy-900 sm:text-3xl">{sec.h2}</h2>
                <div className="prose-navy mt-4 space-y-4">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {sec.list && (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {sec.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-5">
                <FAQAccordion items={c.faqs} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-navy-900 p-7 text-white">
                <h2 className="text-xl text-white">
                  {pathway === "clinic" ? "Book a clinic appointment" : pathway === "both" ? "Clinic or home visit" : "Book a home visit"}
                </h2>
                <p className="mt-2 text-sm text-navy-100">
                  {pathway === "clinic"
                    ? "Clinics in Jesmond, Yagoona and Parramatta."
                    : region === "sydney"
                    ? "We come to you across Sydney Olympic Park, the Inner West, Parramatta and Bankstown–Yagoona."
                    : region === "all"
                    ? "Clinics in Jesmond, Yagoona and Parramatta, and home visits across Sydney, Newcastle and the Central Coast."
                    : "We come to you across Newcastle, Lake Macquarie and the Central Coast."}
                </p>
                <div className="mt-5 grid gap-2.5">
                  {pathway !== "home" && (
                    <Link href="/find-a-clinic" className="btn-primary w-full">
                      Find a Clinic <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                  {pathway !== "clinic" && (
                    <Link href={region === "sydney" ? "/home-visit-physiotherapy-sydney" : "/home-visits"} className="btn w-full bg-white text-navy-900 hover:bg-beige-50">
                      Book a Home Visit <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                  <a href={site.phoneHref} className="mt-1 text-center text-sm font-semibold text-beige-200 hover:text-white">
                    Call {site.phone}
                  </a>
                </div>
                <Link
                  href="/refer-a-patient"
                  className="mt-3 block text-center text-sm font-semibold text-beige-200 hover:text-white"
                >
                  Or make a referral
                </Link>
              </div>
              <div className="card">
                <h2 className="text-lg text-navy-900">Related services</h2>
                <ul className="mt-4 space-y-2">
                  {c.related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900"
                      >
                        <Icon name="arrow" className="h-4 w-4 text-navy-400" />
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {c.whyHome && <WhyHomeVisits region={region === "sydney" ? "sydney" : "newcastle"} />}

      {pathway === "clinic" ? (
        <section className={`section-py ${c.whyHome ? "bg-white" : "bg-cream"}`}>
          <div className="container-px">
            <h2 className="text-2xl text-navy-900 sm:text-3xl">Our clinics</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link href="/physiotherapy-jesmond" className="card card-hover">
                <p className="tag">Newcastle · Mondays</p>
                <h3 className="mt-3 text-xl text-navy-900">Jesmond</h3>
                <p className="mt-1 text-sm text-navy-600">HealthSure Medical Centre Jesmond</p>
              </Link>
              {sydneyClinics.map((sc) => (
                <Link key={sc.slug} href={`/${sc.slug}`} className="card card-hover">
                  <p className="tag">Sydney{sc.days ? ` · ${sc.days.split(",")[0]}` : ""}</p>
                  <h3 className="mt-3 text-xl text-navy-900">{sc.suburb}</h3>
                  <p className="mt-1 text-sm text-navy-600">{sc.hostCentre}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className={`section-py ${c.whyHome ? "bg-white" : "bg-cream"}`}>
          <div className="container-px">
            <h2 className="text-center text-2xl text-navy-900 sm:text-3xl">
              {region === "sydney" ? "Sydney suburbs we visit" : region === "all" ? "Areas we visit" : "Suburbs we service"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-navy-600">
              {region === "sydney"
                ? "Home visit physiotherapy around Sydney Olympic Park, the Inner West, Parramatta and Bankstown–Yagoona."
                : region === "all"
                ? "Home visits across Sydney, Newcastle, Lake Macquarie and the Central Coast."
                : "Home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast."}
            </p>
            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
              {areaLinks.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/${sub.slug}`}
                  className="rounded-full border border-beige-300 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-euc-600 hover:text-euc-700"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-navy-900 sm:text-3xl">
              Enquire about {c.eyebrow}
            </h2>
            <p className="mt-4 text-navy-600">
              Send us a message and our friendly team will be in touch. Prefer to
              talk now? Call us any time.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-6">
              <Icon name="phone" className="h-5 w-5" /> {site.phone}
            </a>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection title={c.ctaTitle} />
      <ServiceSchema name={c.serviceName} description={c.intro} slug={c.slug} />
      <FaqSchema items={c.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          ...(c.breadcrumbParent ? [c.breadcrumbParent] : []),
          { name: c.eyebrow, href: `/${c.slug}` },
        ]}
      />
    </>
  );
}
