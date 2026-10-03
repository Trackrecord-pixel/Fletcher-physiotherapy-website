import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["aged-care-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Aged Care Physiotherapy | Newcastle NSW",
  description:
    "Aged care physiotherapy in Newcastle delivered at home. Balance training, strength, falls prevention and walking confidence to help seniors stay independent.",
  alternates: { canonical: "/aged-care-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Aged Care Physiotherapy | Newcastle NSW",
    description:
      "Aged care physiotherapy in Newcastle delivered at home. Balance training, strength, falls prevention and walking confidence to help seniors stay independent.",
    url: "/aged-care-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aged Care Physiotherapy | Newcastle NSW",
    description:
      "Aged care physiotherapy in Newcastle delivered at home. Balance training, strength, falls prevention and walking confidence to help seniors stay independent.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
