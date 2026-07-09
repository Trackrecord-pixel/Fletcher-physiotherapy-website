import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { PersonSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Daniel Lee | APA Titled Pain Physiotherapist Newcastle | Fletcher Physiotherapy",
  description:
    "Daniel Lee is an APA Titled Pain Physiotherapist in Newcastle with a Master of Pain Management from the University of Sydney, specialising in chronic pain, older adult and home-based rehabilitation.",
  alternates: { canonical: "/daniel-lee-physiotherapist-newcastle" },
};

const qualifications = [
  "APA Titled Pain Physiotherapist",
  "Master of Pain Management — University of Sydney",
  "Registered Physiotherapist (AHPRA)",
];

const experience = [
  { icon: "pulse", title: "Chronic Pain", text: "Advanced, evidence-based management of persistent and complex pain conditions." },
  { icon: "user", title: "Older Adult Rehabilitation", text: "Restoring strength, balance and independence for older adults at home." },
  { icon: "recovery", title: "Neurological Rehabilitation", text: "Rehabilitation for stroke and other neurological conditions." },
  { icon: "shield", title: "NDIS Participants", text: "Functional, goal-focused physiotherapy for NDIS participants." },
  { icon: "joint", title: "Complex Presentations", text: "Confident assessment and treatment of complex, multi-factorial cases." },
  { icon: "home", title: "Home Rehabilitation", text: "Delivering expert rehabilitation in the comfort of the client's home." },
];

export default function DanielLeePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Director"
        title="Daniel Lee — APA Titled Pain Physiotherapist in Newcastle"
        intro="Director and Principal Physiotherapist at Fletcher Physiotherapy, specialising in chronic pain, older adult rehabilitation and home-based care across Newcastle, Lake Macquarie and the Central Coast."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Our Team", href: "/our-team" },
          { name: "Daniel Lee", href: "/daniel-lee-physiotherapist-newcastle" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-sand shadow-card">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/team/daniel-lee.jpg"
                  alt="Daniel Lee, APA Titled Pain Physiotherapist and Director of Fletcher Physiotherapy in Newcastle"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="card mt-6">
              <h2 className="text-lg text-navy-900">Qualifications</h2>
              <ul className="mt-4 space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-navy-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 prose-navy">
            <p>
              Daniel Lee is the Director and Principal Physiotherapist at Fletcher
              Physiotherapy, and an <strong>APA Titled Pain Physiotherapist</strong>
              {" "}— a credential awarded by the Australian Physiotherapy Association
              (APA) to physiotherapists who have completed advanced training and
              demonstrated specialist expertise in pain management. He holds a
              {" "}<strong>Master of Pain Management from the University of Sydney</strong>.
            </p>
            <p>
              Daniel&rsquo;s clinical focus is helping people move with confidence and
              return to the activities that matter to them. He works extensively with
              chronic pain, older adults and complex presentations, combining hands-on
              treatment with practical, evidence-based strategies and a strong emphasis
              on long-term, functional outcomes.
            </p>
            <p>
              He founded Fletcher Physiotherapy on a simple belief: people recover
              better in their own homes. By bringing specialist physiotherapy directly
              to clients across Newcastle, Lake Macquarie and the Central Coast, Daniel
              and the team remove the barriers of travel and waiting rooms, and deliver
              rehabilitation in the real environment where independence is won or lost.
            </p>

            <h2 className="mt-8 text-2xl text-navy-900 sm:text-3xl">Areas of expertise</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {experience.map((e) => (
                <div key={e.title} className="card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                    <Icon name={e.icon as never} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base text-navy-900">{e.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{e.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book with Daniel <Icon name="arrow" className="h-5 w-5" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-5 w-5" /> {site.phone}
              </a>
            </div>

            <h2 className="mt-10 text-2xl text-navy-900 sm:text-3xl">Related services</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { label: "Chronic Pain Management", href: "/chronic-pain-management" },
                { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
                { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
                { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
              ].map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900">
                    <Icon name="arrow" className="h-4 w-4 text-navy-400" /> {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Book with an APA Titled Pain Physiotherapist" />
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Our Team", href: "/our-team" },
          { name: "Daniel Lee", href: "/daniel-lee-physiotherapist-newcastle" },
        ]}
      />
    </>
  );
}
