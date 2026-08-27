import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["mobile-physiotherapist-newcastle"];

export const metadata: Metadata = {
  title: "Mobile Physiotherapist | Newcastle NSW",
  description:
    "Need a mobile physiotherapist in Newcastle? Fletcher Physiotherapy comes to you with expert in-home care across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/mobile-physiotherapist-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Mobile Physiotherapist | Newcastle NSW",
    description:
      "Need a mobile physiotherapist in Newcastle? Fletcher Physiotherapy comes to you with expert in-home care across Newcastle, Lake Macquarie and the Central Coast.",
    url: "/mobile-physiotherapist-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Physiotherapist | Newcastle NSW",
    description:
      "Need a mobile physiotherapist in Newcastle? Fletcher Physiotherapy comes to you with expert in-home care across Newcastle, Lake Macquarie and the Central Coast.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
