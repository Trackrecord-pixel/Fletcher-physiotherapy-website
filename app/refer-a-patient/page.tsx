import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ReferralForm from "@/components/ReferralForm";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refer a Patient | Home Visit Physiotherapy Newcastle",
  description:
    "Refer your client to Fletcher Physiotherapy. Easy referrals for case managers, support coordinators and aged care providers across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/refer-a-patient" },
};

const audience = [
  { icon: "user", title: "Case Managers", text: "Arrange reliable, goal-focused physiotherapy for your clients with clear communication and dependable care." },
  { icon: "users", title: "Support Coordinators", text: "Connect NDIS participants with home-based physiotherapy and thorough documentation for plan reviews." },
  { icon: "heart", title: "Aged Care Providers", text: "Refer Home Care Package and Support at Home clients for mobility, strength and falls-prevention support." },
  { icon: "doc", title: "GPs", text: "Refer patients for home-based physiotherapy, including Chronic Disease Management (CDM/EPC) plans." },
  { icon: "home", title: "Family Members", text: "Help a loved one stay safe and independent at home — we'll guide you through every step." },
];

const highlights = [
  "Easy, fast referral process",
  "Quick, reliable communication",
  "Regular progress updates",
  "Goal-focused, evidence-based treatment",
  "Experienced with aged care and disability",
  "Detailed reports when required",
];

export default function ReferAPatientPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer a Patient"
        title="Refer Your Client to Fletcher Physiotherapy"
        intro="We make referrals simple for case managers, support coordinators, aged care providers and GPs — with fast communication and dependable, goal-focused care delivered in your client's home."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Refer a Patient", href: "/refer-a-patient" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 70}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                    <Icon name={a.icon as never} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-lg text-navy-900">{a.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800">
        <div className="container-px grid items-center gap-8 py-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow bg-navy-700 text-beige-100">Why refer to us</span>
            <h2 className="mt-4 text-3xl text-white">A referral partner you can rely on</h2>
            <p className="mt-3 max-w-xl text-navy-100">
              We understand how much your clients depend on timely, well-communicated care.
              Our team makes the process effortless and keeps you informed throughout.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-300 text-navy-900">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-navy-50">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow"><Icon name="doc" className="h-4 w-4" /> Referral Form</span>
            <h2 className="mt-4 text-3xl text-navy-900">Send us a referral</h2>
            <p className="mt-4 text-navy-600">
              Complete the form and our team will contact the participant to arrange an
              initial home visit assessment. Prefer to talk first?
            </p>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 text-navy-800 hover:text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-800 shadow-card">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span className="font-semibold">{site.phone}</span>
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 text-navy-800 hover:text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-800 shadow-card">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span className="font-semibold">{site.email}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ReferralForm />
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Refer a Patient", href: "/refer-a-patient" },
        ]}
      />
    </>
  );
}
