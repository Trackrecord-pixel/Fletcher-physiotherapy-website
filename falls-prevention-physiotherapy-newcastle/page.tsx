import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["falls-prevention-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Falls Prevention Physiotherapy | Newcastle NSW",
  description:
    "Falls prevention physiotherapy in Newcastle at home. Balance assessment, strength and balance training and a home hazard review to reduce falls risk.",
  alternates: { canonical: "/falls-prevention-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Falls Prevention Physiotherapy | Newcastle NSW",
    description:
      "Falls prevention physiotherapy in Newcastle at home. Balance assessment, strength and balance training and a home hazard review to reduce falls risk.",
    url: "/falls-prevention-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falls Prevention Physiotherapy | Newcastle NSW",
    description:
      "Falls prevention physiotherapy in Newcastle at home. Balance assessment, strength and balance training and a home hazard review to reduce falls risk.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
