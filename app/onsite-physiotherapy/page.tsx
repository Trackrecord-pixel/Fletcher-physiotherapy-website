import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import HeroVideo from "@/components/HeroVideo";
import FAQAccordion from "@/components/FAQAccordion";
import WorkplaceEnquiryForm from "@/components/WorkplaceEnquiryForm";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

// Onsite / workplace physiotherapy — B2B landing page.
// Ahpra: no outcome statistics, client logos or testimonials. Benefits are written as program goals.
// When the Kling video is ready, set VIDEO to "/videos/fletcher-onsite.mp4" and POSTER to its poster frame.
const VIDEO: string | null = "/videos/fletcher-onsite.mp4";
const POSTER = "/videos/fletcher-onsite-poster.jpg";

const title = "Onsite Physiotherapy Sydney | Workplace Physio";
const description =
  "Onsite workplace physiotherapy in Sydney: treatment, manual handling training, ergonomic assessments, pre-shift warm-ups and early intervention. Free consultation.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/onsite-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/onsite-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy onsite workplace physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "pulse", title: "Onsite physiotherapy treatment", text: "We come to your workplace to assess neck, shoulder, back and other musculoskeletal aches, with hands-on treatment and tailored exercise." },
  { icon: "strength", title: "Manual handling & injury prevention training", text: "Practical sessions for warehouse, logistics and manufacturing teams on safer lifting, pushing, pulling and work postures." },
  { icon: "user", title: "Workstation & ergonomic assessments", text: "We review desks, chairs, monitor set-up and working postures for office staff, and show simple ways to improve them." },
  { icon: "users", title: "Pre-shift warm-up & stretching programs", text: "Short, team-based warm-ups and stretching before work, designed around the physical demands of each role." },
  { icon: "shield", title: "Early intervention & WorkCover rehabilitation", text: "Early assessment of work-related musculoskeletal injuries, appropriate treatment and support for a safe return to duties. WorkCover treatment proceeds in line with insurer approvals and requirements." },
  { icon: "doc", title: "Return to work & functional assessments", text: "We assess physical capacity and job demands, and work with your WHS and HR team to plan a safe return to work." },
];

const goals = [
  { title: "Prevent injuries", text: "Spot early warning signs and address risky tasks before small aches become claims." },
  { title: "Reduce downtime", text: "Care happens on site, so staff spend less time travelling to appointments." },
  { title: "Keep your workforce moving", text: "Practical advice delivered where the work actually happens." },
  { title: "One point of contact", text: "Clear, consent-based communication with your WHS and HR team." },
];

const pilot = [
  { step: "Free consultation", text: "We meet your WHS, HR or operations lead, learn about your work, roles and current issues, and agree priorities." },
  { step: "Site walk-through", text: "We look at tasks, workstations and the work environment to tailor the program to your site." },
  { step: "4 weeks onsite", text: "Scheduled onsite sessions at a frequency we agree — treatment, manual handling training, ergonomic checks and pre-shift warm-ups." },
  { step: "Review & recommendations", text: "A summary of what we did and found (de-identified), with recommendations for next steps. No lock-in." },
];

const industries = ["Warehousing & logistics", "Distribution centres", "Manufacturing", "Offices & corporate teams"];

const faqs = [
  { q: "What is onsite physiotherapy?", a: "A physiotherapist visits your workplace on a regular schedule to provide treatment, injury prevention training and ergonomic advice for your staff, instead of employees travelling to a clinic." },
  { q: "What is the 4-Week Onsite Physio Pilot Program?", a: "A short, no-lock-in trial: a free consultation and site walk-through, four weeks of scheduled onsite sessions tailored to your workplace, then a review with recommendations. It lets you see how onsite physio fits your team before committing longer term." },
  { q: "Which areas do you service?", a: "Sydney Olympic Park, Parramatta and Greater Sydney. Contact us to confirm your site." },
  { q: "How much does it cost?", a: "It depends on your team size, the services you choose and how often we attend. After the free consultation we provide a clear written quote." },
  { q: "Do you need a treatment room?", a: "We'll talk through space requirements during the consultation — usually a private room or quiet space is all that's needed for treatment." },
  { q: "How is employee privacy handled?", a: "Clinical information stays confidential. We only share information about an individual with your WHS or HR team with that employee's consent; program reports to the business are de-identified." },
  { q: "Can you manage WorkCover injuries?", a: "Yes. We provide early assessment and rehabilitation for work-related injuries, and WorkCover treatment proceeds in line with the insurer's approvals and requirements." },
];

export default function OnsitePhysiotherapyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER})`, backgroundColor: "#0a0f0d" }}
      >
        {VIDEO && <HeroVideo src={VIDEO} poster={POSTER} />}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(10,15,13,0.68)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0f1714] to-transparent" />
        <div className="container-px w-full py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#c9d6d1]">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-white">Services</Link> <span className="mx-1.5">/</span>
            <span className="text-white">Onsite Physiotherapy</span>
          </nav>
          <p className="text-sm uppercase tracking-[0.18em] text-[#87f9d3]">Onsite Workplace Physiotherapy · Sydney</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-[#f2fbf8] sm:text-5xl lg:text-6xl">
            Onsite physiotherapy for Sydney workplaces
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-[#e6fff6] sm:text-2xl">
            Prevent Injuries. Reduce Downtime. <span className="text-[#87f9d3]">Keep Your Workforce Moving.</span>
          </p>
          <p className="mt-4 max-w-2xl text-base text-[#c9d6d1] sm:text-lg">
            Treatment, manual handling training, ergonomic assessments and early intervention — delivered at your site
            across Sydney Olympic Park, Parramatta and Greater Sydney.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="btn-primary sm:w-auto">Book a Free Workplace Consultation <Icon name="arrow" className="h-4 w-4" /></a>
            <a href={site.phoneHref} className="btn-outline sm:w-auto"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-py bg-white">
        <div className="container-px">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Why onsite</p>
          <h2 className="mt-2 max-w-2xl text-3xl text-navy-900 sm:text-4xl">Care where the work happens</h2>
          <p className="mt-4 max-w-2xl text-navy-600">
            Our onsite programs are built around four goals for your business and your people.
          </p>
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
          <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">Onsite physiotherapy services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">4-Week Onsite Physio Pilot Program</h2>
            <p className="mt-4 max-w-2xl text-navy-700">
              See how onsite physiotherapy fits your team before committing long term. No lock-in contract.
            </p>
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

      {/* Industries + privacy */}
      <section className="section-py bg-cream">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-navy-900 sm:text-3xl">Workplaces we support</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((x) => (
                <li key={x} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 text-navy-800">
                  <Icon name="check" className="h-5 w-5 text-euc-600" /> {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-navy-600">Other workplaces welcome — tell us about your site.</p>
          </div>
          <div>
            <h2 className="text-2xl text-navy-900 sm:text-3xl">Working with your WHS &amp; HR team</h2>
            <p className="mt-6 text-navy-700">
              We work alongside your WHS, HR and operations leads to plan the program, schedule sessions and support
              safe return to work. Clinical information stays confidential — we only share an individual&rsquo;s
              information with their consent, and business reports are de-identified.
            </p>
            <p className="mt-4 text-navy-700">
              Programs are led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Medicine (Pain
              Management) from the University of Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-px max-w-3xl">
          <h2 className="text-center text-2xl text-navy-900 sm:text-3xl">Onsite physiotherapy FAQs</h2>
          <div className="mt-8"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="consult" className="section-py scroll-mt-24 bg-sand">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Free, no obligation</p>
            <h2 className="mt-2 text-3xl text-navy-900 sm:text-4xl">Book a Free Workplace Consultation</h2>
            <p className="mt-4 text-navy-700">
              Tell us about your workplace and we&rsquo;ll be in touch to arrange a time — or ask about the 4-Week
              Onsite Physio Pilot Program.
            </p>
            <p className="mt-6 font-semibold text-navy-900">Fletcher Physiotherapy — Onsite Workplace Physiotherapy</p>
            <p className="mt-1 text-sm text-navy-600">Servicing Sydney Olympic Park, Parramatta &amp; Greater Sydney</p>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 font-semibold text-navy-900 hover:text-euc-700">
                <Icon name="phone" className="h-5 w-5 text-euc-600" /> {site.phone}
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 font-semibold text-navy-900 hover:text-euc-700">
                <Icon name="mail" className="h-5 w-5 text-euc-600" /> {site.email}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7"><WorkplaceEnquiryForm /></div>
        </div>
      </section>

      <ServiceSchema name="Onsite Workplace Physiotherapy" description={description} slug="onsite-physiotherapy" />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Onsite Physiotherapy", href: "/onsite-physiotherapy" }]} />
    </>
  );
}
