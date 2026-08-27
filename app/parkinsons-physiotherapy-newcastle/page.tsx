import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["parkinsons-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Parkinson's Physiotherapy Newcastle",
  description:
    "Home visit physiotherapy for Parkinson's disease in Newcastle. Maintain movement, balance and independence and reduce falls risk. NDIS and Home Care Package.",
  alternates: { canonical: "/parkinsons-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Parkinson's Physiotherapy Newcastle",
    description:
      "Home visit physiotherapy for Parkinson's disease in Newcastle. Maintain movement, balance and independence and reduce falls risk. NDIS and Home Care Package.",
    url: "/parkinsons-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parkinson's Physiotherapy Newcastle",
    description:
      "Home visit physiotherapy for Parkinson's disease in Newcastle. Maintain movement, balance and independence and reduce falls risk. NDIS and Home Care Package.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
