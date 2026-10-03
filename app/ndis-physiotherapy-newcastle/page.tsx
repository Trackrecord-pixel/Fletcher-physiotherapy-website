import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["ndis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "NDIS Home Physiotherapy Newcastle | Registered NDIS Provider",
  description:
    "Registered NDIS provider for mobile physiotherapy at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments, plan-review reports, agency, plan & self-managed.",
  alternates: { canonical: "/ndis-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "NDIS Home Physiotherapy Newcastle | Registered NDIS Provider",
    description:
      "Registered NDIS provider for mobile physiotherapy at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments, plan-review reports, agency, plan & self-managed.",
    url: "/ndis-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Home Physiotherapy Newcastle | Registered NDIS Provider",
    description:
      "Registered NDIS provider for mobile physiotherapy at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments, plan-review reports, agency, plan & self-managed.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
