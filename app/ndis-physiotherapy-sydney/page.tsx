import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorReview from "@/components/AuthorReview";
import OfferWindow from "@/components/OfferWindow";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";
import { sydneySuburbs } from "@/lib/sydneySuburbs";

const path = "/ndis-physiotherapy-sydney";
const title = "NDIS Home Physio Sydney Olympic Park";
const description =
  "Registered NDIS provider for physio at home around Sydney Olympic Park and the Inner West. Agency, plan and self-managed participants welcome.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: path,
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "NDIS home physiotherapy in Sydney – Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

const reg = site.ndisRegistrationNumber;

const helpWith = [
  "Walking, transfers and mobility around the home",
  "Strength, balance and falls risk",
  "Pain that limits daily activities",
  "Using mobility aids and equipment safely",
  "Getting out into the community",
  "Home exercise programs carers can support",
];

const coordinatorChecklist = [
  "Participant name, phone and suburb",
  "How the plan is managed (agency, plan or self-managed) and plan manager details",
  "Plan dates and available Capacity Building – Improved Daily Living funding",
  "Goals and reason for referral",
  "Relevant reports, diagnoses or precautions",
  "The participant's consent to share their information",
];

const faqs = [
  {
    q: "Are you a registered NDIS provider in Sydney?",
    a: `Yes. Fletcher Physiotherapy is a registered NDIS provider${reg ? ` (${reg})` : ""}. We see agency-managed, plan-managed and self-managed participants at home around Sydney Olympic Park and the Inner West.`,
  },
  {
    q: "Which part of an NDIS plan pays for physiotherapy?",
    a: "Physiotherapy is most commonly funded under Capacity Building – Improved Daily Living, linked to the goals in the participant's plan. The NDIA decides what is reasonable and necessary. If you're unsure, ask your support coordinator or call us and we'll talk it through.",
  },
  {
    q: "Can you do NDIS physio assessments and reports at home?",
    a: "Yes. We assess participants in their own home and community and provide initial assessment, progress and plan-review reports, plus recommendations for equipment such as walking aids. We agree the report type and timeframe when we accept the referral.",
  },
  {
    q: "Which Sydney suburbs do you visit for NDIS physio?",
    a: "Around Sydney Olympic Park and the Inner West, including Homebush, Strathfield, Concord, Rhodes, Lidcombe, Auburn, Wentworth Point and Newington. If your suburb isn't listed, call us to check.",
  },
  {
    q: "When can NDIS participants in Sydney start?",
    a: "Call us or send a referral and we'll arrange the first home visit. Participants, families and support coordinators can all refer.",
  },
  {
    q: "Do you speak Korean?",
    a: "Yes. Daniel Lee, our founder and an APA Titled Pain Physiotherapist, speaks English and Korean.",
  },
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Sydney", href: "/physiotherapy-sydney" },
  { name: "NDIS Physiotherapy Sydney", href: path },
];

export default function NdisSydneyPage() {
  return (
    <>
      <PageHero
        eyebrow="NDIS Physiotherapy · Sydney"
        title="NDIS Home Physiotherapy in Sydney"
        intro="Physiotherapy at home for NDIS participants around Sydney Olympic Park and the Inner West — from a registered NDIS provider."
        breadcrumb={crumbs}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                <Icon name="shield" className="h-3.5 w-3.5" /> Registered NDIS provider{reg ? ` · ${reg}` : ""}
              </span>
            </div>

            <div className="prose-navy mt-6 space-y-4">
              <p>
                Fletcher Physiotherapy brings NDIS physiotherapy to your home around Sydney Olympic Park, Homebush,
                Strathfield, Concord, Rhodes, Lidcombe and the Inner West. Because we&rsquo;re a registered provider, we
                can see <strong>agency-managed, plan-managed and self-managed</strong> participants.
              </p>
              <p>
                Therapy happens where your goals matter most — your own home and community — and we keep you, your
                family and your support coordinator in the loop.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">What we help with</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {helpWith.map((item) => (
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
              <h2 className="text-2xl text-navy-900 sm:text-3xl">How NDIS physiotherapy is funded</h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  Physiotherapy is usually funded from <strong>Capacity Building – Improved Daily Living</strong>, linked
                  to the goals in your plan. Assessments and reports are generally funded from the same budget.
                </p>
                <p>
                  Our fees follow the NDIS Pricing Arrangements and Price Limits, and we confirm sessions, travel and
                  any report time in a written service agreement before we start.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Assessments and reports at home</h2>
              <div className="prose-navy mt-4 space-y-4">
                <p>
                  We assess mobility, transfers, balance, strength, pain, equipment and home safety in your real
                  environment, then provide clear reports for plan reviews and recommendations for aids like walking
                  frames.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-sand p-6">
              <h2 className="text-xl text-navy-900">For support coordinators: what to send with a referral</h2>
              <ul className="mt-4 space-y-2 text-sm text-navy-700">
                {coordinatorChecklist.map((x) => (
                  <li key={x} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {x}</li>
                ))}
              </ul>
              <Link href="/refer-a-patient" className="btn-primary mt-5">
                Send a referral <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Sydney suburbs we visit</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sydneySuburbs.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="block rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 hover:border-navy-800 hover:text-navy-900">
                      {s.name}
                    </Link>
                  </li>
                ))}
                {["Auburn", "Wentworth Point", "Newington", "Homebush West"].map((n) => (
                  <li key={n} className="rounded-full bg-beige-100 px-4 py-2 text-sm font-medium text-navy-700">{n}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-navy-600">
                See our <Link href="/physiotherapy-sydney" className="font-semibold text-navy-800 underline">Sydney service page</Link> or{" "}
                <Link href="/ndis-physiotherapy-newcastle" className="font-semibold text-navy-800 underline">NDIS physiotherapy in Newcastle</Link>.
              </p>
            </div>

            <AuthorReview pageUrl={path} reviewed="October 2026" />

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">NDIS physio in Sydney: common questions</h2>
              <div className="mt-5"><FAQAccordion items={faqs} /></div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="card bg-navy-900 text-white">
                <h2 className="text-xl text-white">Talk to us about NDIS physio</h2>
                <p className="mt-2 text-sm text-navy-100">Sydney home visits. Call to book or check your suburb.</p>
                <a href={site.phoneHref} className="btn-accent mt-5 w-full"><Icon name="phone" className="h-4 w-4" /> Call {site.phone}</a>
                <Link href="/refer-a-patient" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white">
                  Send a referral <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <OfferWindow>
                <div className="card border-clay-200 bg-clay-50">
                  <p className="text-sm font-semibold text-navy-900">FREE phone consultation for new Sydney clients</p>
                  <p className="mt-2 text-xs leading-relaxed text-navy-600">
                    Until 31 December 2026. Phone consultations only; not a substitute for a full assessment;
                    subject to availability.
                  </p>
                </div>
              </OfferWindow>
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
            name: "NDIS home physiotherapy in Sydney",
            serviceType: "NDIS physiotherapy",
            url: `${site.url}${path}`,
            provider: { "@id": `${site.url}/#business` },
            areaServed: ["Sydney Olympic Park", "Homebush", "Strathfield", "Concord", "Rhodes", "Lidcombe", "Auburn", "Wentworth Point", "Newington"].map(
              (n) => ({ "@type": "Place", name: `${n}, NSW` })
            ),
            audience: { "@type": "Audience", audienceType: "NDIS participants" },
          }),
        }}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
