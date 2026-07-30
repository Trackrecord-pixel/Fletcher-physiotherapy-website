import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { clinics, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment | Fletcher Physiotherapy Newcastle",
  description:
    "Book physiotherapy with Fletcher Physiotherapy — at our Jesmond clinic (Mondays), Elermore Vale clinic (Thursdays), or as a home visit across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Choose how you'd like to see us"
        intro="Attend one of our two Newcastle clinics, or have a physiotherapist visit you at home. Select an option below to book online, or call us on your preferred number."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Book", href: "/book" }]}
      />
      <section className="section-py bg-white">
        <div className="container-px grid gap-6 md:grid-cols-3">
          {clinics.map((c) => (
            <div key={c.slug} className="card flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name="pin" className="h-6 w-6" /></span>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700"><Icon name="clock" className="h-3.5 w-3.5" /> {c.dayShort}</span>
              <h2 className="mt-3 text-xl text-navy-900">{c.hostCentre}</h2>
              <p className="mt-2 flex-grow text-sm text-navy-600">{c.address}</p>
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">Book Appointment <Icon name="arrow" className="h-4 w-4" /></a>
              <Link href={`/${c.slug}`} className="mt-3 text-center text-sm font-semibold text-navy-700 hover:text-navy-900">Clinic details</Link>
            </div>
          ))}
          <div className="card flex h-full flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name="home" className="h-6 w-6" /></span>
            <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700"><Icon name="home" className="h-3.5 w-3.5" /> We come to you</span>
            <h2 className="mt-3 text-xl text-navy-900">Home Visit Physiotherapy</h2>
            <p className="mt-2 flex-grow text-sm text-navy-600">Mobile physiotherapy across Newcastle, Lake Macquarie and the Central Coast — no travel, parking or waiting rooms.</p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">Book Appointment <Icon name="arrow" className="h-4 w-4" /></a>
            <Link href="/home-visit-physiotherapy-newcastle" className="mt-3 text-center text-sm font-semibold text-navy-700 hover:text-navy-900">Learn more</Link>
          </div>
        </div>
        <div className="container-px mt-10">
          <div className="card flex flex-col items-start justify-between gap-4 bg-sand sm:flex-row sm:items-center">
            <p className="text-navy-700">Prefer to speak with us first? We're happy to help you choose and book.</p>
            <a href={site.phoneHref} className="btn-secondary flex-shrink-0"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </section>
      <CTASection />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Book", href: "/book" }]} />
    </>
  );
}
