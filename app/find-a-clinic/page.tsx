import type { Metadata } from "next";
import Link from "next/link";
import ClinicChooser from "@/components/ClinicChooser";
import Icon from "@/components/Icon";

// Quick clinic picker — every "Find a Clinic" button lands here.
// Kept out of the index (noindex) so it doesn't compete with /clinic-physiotherapy.
export const metadata: Metadata = {
  title: { absolute: "Find a Clinic | Jesmond, Yagoona & Parramatta | Fletcher" },
  description: "Choose your Fletcher Physiotherapy clinic: Jesmond (Newcastle), Yagoona or Parramatta (Sydney).",
  alternates: { canonical: "/find-a-clinic" },
  robots: { index: false, follow: true },
};

export default function FindAClinicPage() {
  return (
    <section className="bg-cream pb-16 pt-6 lg:pb-24 lg:pt-8">
      <div className="container-px">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 md:mb-8">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-8 bg-clay-500" /> Our clinics
            </p>
            <h1 className="mt-2 text-3xl text-navy-900 sm:text-4xl">Find a clinic near you</h1>
          </div>
          <Link href="/home-visits" className="inline-flex items-center gap-1.5 text-sm font-semibold text-euc-700 hover:text-euc-800">
            <Icon name="home" className="h-4 w-4" /> Prefer a home visit?
          </Link>
        </div>

        <ClinicChooser />

        <p className="mt-8 text-center text-sm text-navy-600">
          Not sure which clinic suits you? Call us on{" "}
          <a href="tel:+61404791756" className="font-semibold text-euc-700 underline underline-offset-4">0404 791 756</a>{" "}
          or see{" "}
          <Link href="/locations" className="font-semibold text-euc-700 underline underline-offset-4">all locations and home visit areas</Link>.
        </p>
      </div>
    </section>
  );
}
