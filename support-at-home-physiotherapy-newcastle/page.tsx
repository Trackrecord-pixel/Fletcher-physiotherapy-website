import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["support-at-home-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Support at Home Physiotherapy Newcastle (formerly Home Care Packages)",
  description:
    "How to get home visit physio through Support at Home (formerly Home Care Packages): how it's arranged, what it costs you, restorative care & equipment. Newcastle & region.",
  alternates: { canonical: "/support-at-home-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Support at Home Physiotherapy Newcastle (formerly Home Care Packages)",
    description:
      "How to get home visit physio through Support at Home (formerly Home Care Packages): how it's arranged, what it costs you, restorative care & equipment. Newcastle & region.",
    url: "/support-at-home-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support at Home Physiotherapy Newcastle (formerly Home Care Packages)",
    description:
      "How to get home visit physio through Support at Home (formerly Home Care Packages): how it's arranged, what it costs you, restorative care & equipment. Newcastle & region.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
