import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["mobile-physiotherapist-sydney"];
const title = "Mobile Physio Sydney | Home Visit Physiotherapist";
const description = "Mobile physio at your home or apartment around Sydney Olympic Park, the Inner West, Parramatta and Bankstown. NDIS, Support at Home, DVA and private.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/mobile-physiotherapist-sydney" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/mobile-physiotherapist-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
