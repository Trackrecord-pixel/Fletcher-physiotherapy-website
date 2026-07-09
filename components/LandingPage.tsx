import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
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
};

export default function LandingPage({ c }: { c: LandingContent }) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        breadcrumb={[
          { name: "Home", href: "/" },
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

            {c.sections.map((sec) => (
              <div key={sec.h2} className="mt-10">
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
              <div className="card bg-navy-900 text-white">
                <h2 className="text-xl text-white">Book a home visit</h2>
                <p className="mt-2 text-sm text-navy-100">
                  We come to you across Newcastle, Lake Macquarie and the Central
                  Coast.
                </p>
                <Link href="/contact" className="btn-accent mt-5 w-full">
                  Book Online <Icon name="arrow" className="h-4 w-4" />
                </Link>
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

      <CTASection title={c.ctaTitle} />
      <ServiceSchema name={c.serviceName} description={c.intro} slug={c.slug} />
      <FaqSchema items={c.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: c.eyebrow, href: `/${c.slug}` },
        ]}
      />
    </>
  );
}
