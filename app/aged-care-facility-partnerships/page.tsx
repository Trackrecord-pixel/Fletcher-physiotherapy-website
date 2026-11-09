import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import HeroVideo from "@/components/HeroVideo";
import FAQAccordion from "@/components/FAQAccordion";
import AgedCareEnquiryForm from "@/components/AgedCareEnquiryForm";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

// Residential aged care facility partnerships — B2B landing page (mirrors /onsite-physiotherapy).
// Ahpra: no outcome statistics, client logos or testimonials. Regulatory facts quote official sources only.

const VIDEO = "/videos/fletcher-aged-care.mp4";
const POSTER = "/videos/fletcher-aged-care-poster.jpg";

const title = "Aged Care Facility Physiotherapy Partnerships";
const description =
  "Physiotherapy partnerships for residential aged care homes in Sydney, Newcastle, Lake Macquarie and the Central Coast: regular onsite physio, pain management, group exercise and staff training. Free consultation.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/aged-care-facility-partnerships" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/aged-care-facility-partnerships",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy aged care facility partnerships" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "calendar", title: "Regular onsite physiotherapy", text: "Scheduled visits on agreed days for resident assessments, mobility and falls prevention programs, post-fall reviews and individual treatment, documented in your care records." },
  { icon: "pulse", title: "Pain management program", text: "Pain assessment and management for residents, including residents who find it hard to communicate their pain. Led by Daniel Lee, an APA Titled Pain Physiotherapist." },
  { icon: "users", title: "Group exercise classes", text: "Strength, balance and mobility classes for residents, adapted to different abilities and run in your lounge or activity room." },
  { icon: "shield", title: "Staff training", text: "Practical sessions for care staff on safe manual handling and transfers, and on how to respond after a resident falls." },
];

const goals = [
  { title: "Keep residents moving", text: "Mobility and exercise built into each resident's routine." },
  { title: "Support falls prevention", text: "Assessment, exercise and post-fall review delivered on site." },
  { title: "Manage pain", text: "Regular pain assessment and planning alongside your clinical team." },
  { title: "Support your team", text: "Training and clear communication with care and clinical staff." },
];

const pilot = [
  { step: "Free consultation", text: "We meet your facility or clinical care manager to understand your residents, current physio arrangements and priorities." },
  { step: "Facility walk-through", text: "We look at resident areas, activity spaces and equipment to tailor the program to your home." },
  { step: "4 weeks on site", text: "Scheduled visits at a frequency we agree — resident assessments, pain management, group exercise and a staff training session." },
  { step: "Review & recommendations", text: "A summary of what we did (de-identified), with recommendations for an ongoing arrangement. No lock-in." },
];

const areas = ["Greater Sydney", "Newcastle", "Lake Macquarie", "Central Coast"];

const faqs = [
  { q: "What does an aged care physiotherapy partnership include?", a: "Regular onsite physiotherapy visits for resident assessment and treatment, a pain management program, group exercise classes and staff training. We agree the mix of services and visit frequency with your facility." },
  { q: "What is the 4-Week Aged Care Physio Pilot Program?", a: "A short, no-lock-in trial: a free consultation and facility walk-through, four weeks of scheduled visits, then a review with recommendations. It lets you see how we work with your residents and staff before committing longer term." },
  { q: "Which areas do you cover?", a: "Residential aged care homes across Greater Sydney, Newcastle, Lake Macquarie and the Central Coast. Contact us to confirm your location." },
  { q: "How is physiotherapy in residential aged care funded?", a: "The Australian Government funds the care component of residential aged care through the AN-ACC funding model, which covers clinical and non-clinical services in the Residential Care Service List. The AN-ACC price is $303.19 from 1 October 2026. Physiotherapy services are arranged and paid for by the registered provider." },
  { q: "How much does a partnership cost?", a: "It depends on the size of your home, the services you choose and how often we visit. After the free consultation we provide a clear written quote." },
  { q: "How do you document care?", a: "We record assessments, treatment and recommendations in line with your facility's care records system, and communicate with your clinical team about any changes or concerns." },
  { q: "Can residents also see you privately?", a: "Yes. Residents and families can arrange additional individual physiotherapy privately. We'll explain the options during the consultation." },
];

export default function AgedCareFacilityPartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER})`, backgroundColor: "#0a0f0d" }}
      >
        <HeroVideo src={VIDEO} poster={POSTER} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(10,15,13,0.68)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0f1714] to-transparent" />
        <div className="container-px w-full py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#c9d6d1]">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-white">Services</Link> <span className="mx-1.5">/</span>
            <span className="text-white">Aged Care Facilities</span>
          </nav>
          <p className="text-sm uppercase tracking-[0.18em] text-[#87f9d3]">Residential Aged Care Partnerships</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-[#f2fbf8] sm:text-5xl lg:text-6xl">
            Physiotherapy partnerships for aged care homes
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-[#e6fff6] sm:text-2xl">
            Mobility. Falls prevention. Pain management. <span className="text-[#87f9d3]">Staff support.</span>
          </p>
          <p className="mt-4 max-w-2xl text-base text-[#c9d6d1] sm:text-lg">
            Regular onsite physiotherapy, pain management, group exercise and staff training for residential aged care
            homes across Greater Sydney, Newcastle, Lake Macquarie and the Central Coast.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="btn-primary sm:w-auto">Book a Free Partnership Consultation <Icon name="arrow" className="h-4 w-4" /></a>
            <a href={site.phoneHref} className="btn-outline sm:w-auto"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-py bg-white">
        <div className="container-px">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Why partner with us</p>
          <h2 className="mt-2 max-w-2xl text-3xl text-navy-900 sm:text-4xl">Physiotherapy built into resident care</h2>
          <p className="mt-4 max-w-2xl text-navy-600">Our aged care programs are built around four goals for your residents and your team.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, i) => (
              <div key={g.title} className="card">
                <p className="font-display text-sm text-euc-600">0{i + 1}</p>
                <h3 className="mt-3 text-xl text-navy-900">{g.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-cream">
        <div className="container-px">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">What we provide</p>
          <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">Aged care physiotherapy services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-euc-700 text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot program */}
      <section className="section-py bg-white" id="pilot">
        <div className="container-px">
          <div className="rounded-[2rem] border border-navy-100 bg-sand p-7 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Try it first</p>
            <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">4-Week Aged Care Physio Pilot Program</h2>
            <p className="mt-4 max-w-2xl text-navy-700">See how we work with your residents and staff before committing long term. No lock-in contract.</p>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pilot.map((p, i) => (
                <li key={p.step} className="rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-euc-700 text-sm font-semibold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg text-navy-900">{p.step}</h3>
                  <p className="mt-2 text-sm text-navy-600">{p.text}</p>
                </li>
              ))}
            </ol>
            <a href="#consult" className="btn-primary mt-10">Ask about the 4-week pilot <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* Standards + funding (facts only) */}
      <section className="section-py bg-cream">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Strengthened Quality Standards</p>
            <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">What Standard 5 asks of providers</h2>
            <p className="mt-6 text-navy-700">
              The strengthened Aged Care Quality Standards started on 1 November 2025. Residential care providers
              (Category 6) must meet Quality Standards 1 to 7. Standard 5 (Clinical care) includes:
            </p>
            <ul className="mt-5 space-y-3 text-sm text-navy-700">
              <li className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-euc-600" /><span><strong>Action 5.4.3</strong> — referring and facilitating access to relevant registered health practitioners and rehabilitation and allied health services.</span></li>
              <li className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-euc-600" /><span><strong>Action 5.5.4 (Falls and mobility)</strong> — minimising falls and harm from falls by maximising mobility to prevent functional decline, delivering effective and timely post-falls care, and monitoring falls and injuries.</span></li>
              <li className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-euc-600" /><span><strong>Action 5.5.8 (Pain)</strong> — assessing pain, including where a resident has challenges communicating it, and planning for, monitoring and responding to the need for pain relief.</span></li>
            </ul>
            <p className="mt-4 text-xs text-navy-500">
              Source:{" "}
              <a href="https://www.health.gov.au/sites/default/files/2026-08/strengthened-aged-care-quality-standards.pdf" target="_blank" rel="noopener noreferrer" className="underline">Strengthened Aged Care Quality Standards</a>;{" "}
              <a href="https://www.agedcarequality.gov.au/aged-care-quality-standards" target="_blank" rel="noopener noreferrer" className="underline">Aged Care Quality and Safety Commission</a>.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Funding</p>
            <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">How residential care is funded</h2>
            <p className="mt-6 text-navy-700">
              The Australian Government funds the care component of residential aged care through the AN-ACC funding
              model. It funds clinical and non-clinical services in the Residential Care Service List. The AN-ACC price
              is $303.19 from 1 October 2026.
            </p>
            <p className="mt-4 text-xs text-navy-500">
              Source:{" "}
              <a href="https://www.health.gov.au/our-work/residential-aged-care/funding/about-funding-for-residential-aged-care" target="_blank" rel="noopener noreferrer" className="underline">Department of Health, Disability and Ageing — About funding for residential aged care</a> (updated 1 October 2026).
            </p>
            <h2 className="mt-10 text-2xl text-navy-900 sm:text-3xl">Areas we cover</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {areas.map((x) => (
                <li key={x} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 text-navy-800">
                  <Icon name="pin" className="h-5 w-5 text-euc-600" /> {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-navy-700">
              Programs are led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Medicine (Pain
              Management) from the University of Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-px max-w-3xl">
          <h2 className="text-center text-2xl text-navy-900 sm:text-3xl">Aged care partnership FAQs</h2>
          <div className="mt-8"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="consult" className="section-py scroll-mt-24 bg-sand">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Free, no obligation</p>
            <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">Book a Free Partnership Consultation</h2>
            <p className="mt-4 text-navy-700">
              Tell us about your aged care home and we&rsquo;ll be in touch to arrange a time — or ask about the 4-Week
              Aged Care Physio Pilot Program.
            </p>
            <p className="mt-6 font-semibold text-navy-900">Fletcher Physiotherapy — Aged Care Partnerships</p>
            <p className="mt-1 text-sm text-navy-600">Greater Sydney, Newcastle, Lake Macquarie &amp; Central Coast</p>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 font-semibold text-navy-900 hover:text-euc-700">
                <Icon name="phone" className="h-5 w-5 text-euc-600" /> {site.phone}
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 font-semibold text-navy-900 hover:text-euc-700">
                <Icon name="mail" className="h-5 w-5 text-euc-600" /> {site.email}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7"><AgedCareEnquiryForm /></div>
        </div>
      </section>

      <ServiceSchema name="Aged Care Facility Physiotherapy" description={description} slug="aged-care-facility-partnerships" />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Aged Care Facilities", href: "/aged-care-facility-partnerships" }]} />
    </>
  );
}
