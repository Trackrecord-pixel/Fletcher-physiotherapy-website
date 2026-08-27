import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["ndis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "NDIS Physiotherapy | Newcastle NSW",
  description:
    "NDIS physiotherapy in Newcastle at home. Functional goals, mobility, independence and clear reports for support coordinators. Self, plan and agency managed.",
  alternates: { canonical: "/ndis-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "NDIS Physiotherapy | Newcastle NSW",
    description:
      "NDIS physiotherapy in Newcastle at home. Functional goals, mobility, independence and clear reports for support coordinators. Self, plan and agency managed.",
    url: "/ndis-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Physiotherapy | Newcastle NSW",
    description:
      "NDIS physiotherapy in Newcastle at home. Functional goals, mobility, independence and clear reports for support coordinators. Self, plan and agency managed.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
