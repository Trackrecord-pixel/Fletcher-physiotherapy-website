import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import OfferWindow from "@/components/OfferWindow";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { clinics, site } from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

export const metadata: Metadata = {
  title: "Book a Physio | Clinic & Home Visits",
  description:
    "Book physio at our Jesmond, Yagoona or Parramatta clinic, or a home visit across Newcastle, Lake Macquarie, the Central Coast and Sydney.",
  alternates: { canonical: "/book" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Book an Appointment | Fletcher Physiotherapy Newcastle",
    description:
      "Book physio at our Jesmond, Yagoona or Parramatta clinic, or a home visit across Newcastle, Lake Macquarie, the Central Coast and Sydney.",
    url: "/book",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment | Fletcher Physiotherapy Newcastle",
    description:
      "Book physio at our Jesmond, Yagoona or Parramatta clinic, or a home visit across Newcastle, Lake Macquarie, the Central Coast and Sydney.",
    images: ["/images/og-default.png"],
  },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Choose how you'd like to see us"
        intro="Visit one of our clinics in Jesmond, Yagoona or Parramatta, or have a physiotherapist visit you at home. Choose your location below."
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
          <div className="card flex h-full flex-col border-clay-200">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-500 text-white"><Icon name="home" className="h-6 w-6" /></span>
                        <h2 className="mt-3 text-xl text-navy-900">Sydney Home Visits</h2>
            <p className="mt-2 flex-grow text-sm text-navy-600">
              Mobile physiotherapy around Sydney Olympic Park, the Inner West and surrounding suburbs. To book or check
              whether we cover your suburb, please call or send an enquiry.
            </p>
            <OfferWindow>
              <p className="mt-3 rounded-lg bg-clay-50 px-3 py-2 text-xs text-navy-700">
                FREE phone consultation for new Sydney clients until 31 December 2026. Phone consultations only; subject to availability.
              </p>
            </OfferWindow>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full"><Icon name="phone" className="h-4 w-4" /> Call {site.phone}</a>
            <Link href="/physiotherapy-sydney" className="mt-3 text-center text-sm font-semibold text-navy-700 hover:text-navy-900">Sydney details</Link>
          </div>
          {sydneyClinics.map((c) => (
            <div key={c.slug} className="card flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name="pin" className="h-6 w-6" /></span>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700"><Icon name="clock" className="h-3.5 w-3.5" /> {c.days ?? "Book via reception"}</span>
              <h2 className="mt-3 text-xl text-navy-900">{c.brandName}</h2>
              <p className="mt-2 flex-grow text-sm text-navy-600">Inside {c.hostCentre}, {c.streetAddress}, {c.suburb} NSW {c.postcode}</p>
              <a href={`tel:+61${c.phone.replace(/\D/g, "").replace(/^0/, "")}`} className="btn-primary mt-5 w-full"><Icon name="phone" className="h-4 w-4" /> Call {c.phone}</a>
              <Link href={`/${c.slug}`} className="mt-3 text-center text-sm font-semibold text-navy-700 hover:text-navy-900">Clinic details</Link>
            </div>
          ))}
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
