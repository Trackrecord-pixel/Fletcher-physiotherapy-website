import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["home-visit-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy | Newcastle NSW",
  description:
    "Home visit physiotherapy in Newcastle for older adults, NDIS and Support at Home clients. Mobile physio at home for falls prevention, mobility and strength. Book today.",
  alternates: { canonical: "/home-visit-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Home Visit Physiotherapy | Newcastle NSW",
    description:
      "Home visit physiotherapy in Newcastle for older adults, NDIS and Support at Home clients. Mobile physio at home for falls prevention, mobility and strength. Book today.",
    url: "/home-visit-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Visit Physiotherapy | Newcastle NSW",
    description:
      "Home visit physiotherapy in Newcastle for older adults, NDIS and Support at Home clients. Mobile physio at home for falls prevention, mobility and strength. Book today.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
