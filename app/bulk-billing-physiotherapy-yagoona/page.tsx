import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

// Single authoritative page for Medicare GPCCMP + bulk billing physiotherapy (services 21, 28, 29).
// COMPLIANCE: bulk billing applies to ELIGIBLE Medicare (GPCCMP) appointments at all clinics (Jesmond, Yagoona, Parramatta) — not home visits.

const yag = sydneyClinics.find((c) => c.slug === "physiotherapy-yagoona")!;
const tel = `tel:+61${yag.phone.replace(/\D/g, "").replace(/^0/, "")}`;
const slug = "bulk-billing-physiotherapy-yagoona";
const title = "Bulk Billing Physio Yagoona | Medicare GPCCMP | Fletcher";
const description =
  "Bulk billed physiotherapy in Yagoona for eligible Medicare patients with a GP Chronic Condition Management Plan. Near Bankstown. Call 02 8766 2477.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: `/${slug}`,
    images: [{ url: yag.poster?.src ?? "/images/og-default.png", alt: "Fletcher Physiotherapy Yagoona" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [yag.poster?.src ?? "/images/og-default.png"] },
};

const conditions = [
  { label: "Lower back pain and sciatica", href: "/lower-back-pain-physiotherapy" },
  { label: "Neck pain and neck-related headaches", href: "/neck-pain-physiotherapy" },
  { label: "Osteoarthritis and joint pain", href: "/arthritis-physiotherapy-newcastle" },
  { label: "Knee pain", href: "/knee-pain-physiotherapy" },
  { label: "Hip pain", href: "/hip-pain-physiotherapy" },
  { label: "Shoulder pain", href: "/shoulder-pain-physiotherapy" },
  { label: "Persistent (chronic) pain", href: "/chronic-pain-management" },
  { label: "Balance problems and falls risk", href: "/falls-prevention-physiotherapy-newcastle" },
  { label: "Rehabilitation after surgery", href: "/post-surgical-rehabilitation" },
];

const faqs = [
  {
    q: "Is physiotherapy at Yagoona bulk billed?",
    a: "Bulk billing is available at our Yagoona clinic for eligible Medicare appointments where you have a valid referral from your GP under a GP Chronic Condition Management Plan (GPCCMP). Private appointments without a GPCCMP referral are not bulk billed.",
  },
  {
    q: "Is bulk billing available at your other clinics?",
    a: "Yes. Bulk billing for eligible GPCCMP patients is also available at Fletcher Physiotherapy Parramatta (Parramatta Medical and Dental Centre) and our Jesmond clinic in Newcastle.",
  },
  {
    q: "What does bulk billing mean?",
    a: "Bulk billing means we accept the Medicare benefit as full payment for an eligible appointment, so there is no out-of-pocket gap fee for that appointment.",
  },
  {
    q: "How many Medicare-funded physio sessions can I have?",
    a: "Under current Medicare rules, eligible patients can generally access up to 5 allied health services per calendar year under a GPCCMP (up to 10 for Aboriginal and Torres Strait Islander people). These services are shared across all eligible allied health professions, such as physiotherapy, podiatry and dietetics. Your GP decides how they are allocated.",
  },
  {
    q: "Am I eligible for a GP Chronic Condition Management Plan?",
    a: "GPCCMPs are for people with a chronic or terminal medical condition, generally one that has been present (or is likely to be present) for at least six months. Your GP decides whether a plan is clinically appropriate for you.",
  },
  {
    q: "Do I need a referral for private physio?",
    a: "No. You can book a private appointment without a referral. A GP referral is only needed for Medicare-funded appointments.",
  },
  {
    q: "Are home visits bulk billed?",
    a: "Bulk billing applies to eligible appointments at our Yagoona, Parramatta and Jesmond clinics. Please ask about funding options for home visits when you call.",
  },
  {
    q: "How do I book?",
    a: `Call Yagoona Family HealthCare reception on ${yag.phone} and ask for a physiotherapy appointment with Fletcher Physiotherapy. Physio days: ${yag.days ?? "please ask reception"}.`,
  },
];

export default function BulkBillingYagoonaPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Physiotherapy Yagoona", href: "/physiotherapy-yagoona" },
    { name: "Bulk Billing Physiotherapy", href: `/${slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bulk Billing Physiotherapy in Yagoona",
    serviceType: "Physiotherapy (Medicare GP Chronic Condition Management Plan)",
    description,
    url: `${site.url}/${slug}`,
    provider: { "@id": `${site.url}/physiotherapy-yagoona#clinic` },
    areaServed: ["Yagoona", "Bankstown", "Birrong", "Bass Hill", "Regents Park", "Greenacre", "Condell Park", "Georges Hall", "Chester Hill"].map(
      (name) => ({ "@type": "Place", name })
    ),
  };

  return (
    <>
      <PageHero
        eyebrow="Medicare · GPCCMP · Yagoona"
        title="Bulk Billing Physiotherapy in Yagoona"
        intro="Bulk billed physiotherapy for eligible Medicare patients referred under a GP Chronic Condition Management Plan (GPCCMP), at our clinic inside Yagoona Family HealthCare."
        breadcrumb={crumbs}
      />

      {/* Booking strip */}
      <section className="border-b border-beige-200 bg-white">
        <div className="container-px grid gap-4 py-6 sm:grid-cols-3">
          <a href={tel} className="flex items-center gap-3 rounded-2xl bg-navy-900 p-4 text-white">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-clay-500"><Icon name="phone" className="h-5 w-5" /></span>
            <span><span className="block text-xs uppercase tracking-widest text-beige-200">Call reception to book</span><span className="text-lg font-semibold">{yag.phone}</span></span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-beige-200 p-4">
            <Icon name="pin" className="h-5 w-5 flex-shrink-0 text-euc-600" />
            <span className="text-sm text-navy-700">{yag.hostCentre}, {yag.streetAddress}, Yagoona NSW {yag.postcode}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-beige-200 p-4">
            <Icon name="clock" className="h-5 w-5 flex-shrink-0 text-euc-600" />
            <span className="text-sm text-navy-700">Physio: {yag.days ?? "ask reception"}</span>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-navy">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Bulk billed physiotherapy for eligible Medicare patients</h2>
              <p>
                Fletcher Physiotherapy provides bulk billed physiotherapy in Yagoona for eligible Medicare patients referred
                by their GP under a GP Chronic Condition Management Plan. For eligible Medicare-funded appointments, we accept
                the Medicare benefit as full payment, so there is no out-of-pocket gap fee.
              </p>
              <p>
                Our clinic is inside Yagoona Family HealthCare on the Hume Highway, a short trip for patients from Bankstown,
                Birrong, Bass Hill, Regents Park and Greenacre. Private appointments are also available.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Who may be eligible?</h2>
              <ul className="mt-4 space-y-3 text-navy-700">
                {[
                  "You have a chronic or terminal medical condition — generally one present (or likely to be present) for six months or more.",
                  "Your GP has prepared or reviewed a GP Chronic Condition Management Plan (GPCCMP) and referred you for physiotherapy.",
                  "You are eligible for Medicare and have Medicare-funded allied health services remaining for the calendar year.",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><Icon name="check" className="mt-1 h-4 w-4 flex-shrink-0 text-euc-600" /> {t}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-navy-500">
                Not every Medicare cardholder qualifies. Your GP decides whether a GPCCMP and allied health referral are clinically
                appropriate.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">What is a GP Chronic Condition Management Plan?</h2>
              <div className="prose-navy mt-4">
                <p>
                  A GP Chronic Condition Management Plan (GPCCMP) is a Medicare plan your GP prepares to help manage a chronic
                  condition. Since 1 July 2025 it has replaced the former GP Management Plan and Team Care Arrangements.
                </p>
                <p>
                  With a GPCCMP, your GP can refer you to allied health providers such as a physiotherapist. Eligible patients can
                  generally access up to 5 Medicare-funded allied health services per calendar year (up to 10 for Aboriginal and
                  Torres Strait Islander people). This allocation is shared across all eligible allied health services — for example
                  physiotherapy, podiatry and dietetics — not 5 for each.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Conditions physiotherapy may help with</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {conditions.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="flex items-center gap-2 text-navy-700 hover:text-euc-700">
                      <Icon name="arrow" className="h-4 w-4 text-euc-600" /> {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div id="how-it-works" className="mt-10 scroll-mt-28">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">How Medicare-funded appointments work</h2>
              <ol className="mt-4 space-y-4 text-navy-700">
                {[
                  ["See your GP", "Ask whether a GP Chronic Condition Management Plan and a physiotherapy referral are appropriate for you."],
                  ["Book through reception", `Call Yagoona Family HealthCare on ${yag.phone} and mention your GPCCMP referral.`],
                  ["Your appointment", "We assess your condition, discuss your goals and start an individualised treatment and exercise plan."],
                  ["Bulk billed", "For eligible Medicare-funded appointments, we bill Medicare directly and accept the benefit as full payment."],
                  ["Report to your GP", "We keep your GP updated, as required under the referral."],
                ].map(([h, t], i) => (
                  <li key={h} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-euc-600 text-sm font-semibold text-white">{i + 1}</span>
                    <span><strong className="text-navy-900">{h}.</strong> {t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">What to bring</h2>
              <ul className="mt-4 grid gap-3 text-navy-700 sm:grid-cols-2">
                {["Your Medicare card", "Your GPCCMP referral (or let reception know your GP has sent it)", "A list of current medications", "Any relevant scans or reports", "Comfortable clothing"].map((t) => (
                  <li key={t} className="flex gap-3"><Icon name="check" className="mt-1 h-4 w-4 flex-shrink-0 text-euc-600" /> {t}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Private appointments</h2>
              <p className="prose-navy mt-4">
                If you don&rsquo;t have a GPCCMP referral, you can still book a private physiotherapy appointment at Yagoona — no
                referral needed. We also see DVA, WorkCover and CTP patients subject to their funding requirements.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Common questions about Medicare and bulk billing</h2>
              <div className="mt-5"><FAQAccordion items={faqs} /></div>
              <p className="mt-4 text-xs text-navy-500">
                Medicare rules can change. For the latest information, see Services Australia or speak with your GP.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-navy-900 p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-beige-200">Our Yagoona clinic</p>
                <h2 className="mt-1 text-xl text-white">{yag.brandName}</h2>
                <p className="mt-1 text-sm text-navy-100">Inside {yag.hostCentre}</p>
                <p className="mt-4 text-sm text-navy-100">{yag.streetAddress}, Yagoona NSW {yag.postcode}</p>
                <p className="mt-1 text-sm text-navy-100">Physio: {yag.days}</p>
                <a href={tel} className="btn-primary mt-5 w-full"><Icon name="phone" className="h-4 w-4" /> Call {yag.phone}</a>
                <Link href="/physiotherapy-yagoona" className="mt-3 block text-center text-sm font-semibold text-beige-200 hover:text-white">
                  Yagoona clinic details →
                </Link>
              </div>
              <div className="card">
                <h2 className="text-lg text-navy-900">Related services</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    ["Persistent pain physiotherapy", "/chronic-pain-management"],
                    ["Musculoskeletal physiotherapy", "/musculoskeletal-physiotherapy"],
                    ["All physiotherapy services", "/services"],
                    ["Clinic physiotherapy", "/clinic-physiotherapy"],
                  ].map(([l, h]) => (
                    <li key={h}><Link href={h} className="text-navy-700 hover:text-euc-700">→ {l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
