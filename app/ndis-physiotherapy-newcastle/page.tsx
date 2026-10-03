import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["ndis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Registered NDIS Physio at Home | Newcastle",
  description:
    "Registered NDIS provider for physio at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments and plan-review reports.",
  alternates: { canonical: "/ndis-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Registered NDIS Physio at Home | Newcastle",
    description:
      "Registered NDIS provider for physio at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments and plan-review reports.",
    url: "/ndis-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registered NDIS Physio at Home | Newcastle",
    description:
      "Registered NDIS provider for physio at home in Newcastle, Lake Macquarie & Central Coast. Functional assessments and plan-review reports.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
