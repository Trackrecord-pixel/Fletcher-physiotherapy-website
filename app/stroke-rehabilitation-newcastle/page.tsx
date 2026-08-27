import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["stroke-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Stroke Rehabilitation Newcastle",
  description:
    "Home-based stroke rehabilitation physiotherapy in Newcastle. Rebuild movement, strength and independence at home. NDIS and Home Care Package welcome.",
  alternates: { canonical: "/stroke-rehabilitation-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Stroke Rehabilitation Newcastle",
    description:
      "Home-based stroke rehabilitation physiotherapy in Newcastle. Rebuild movement, strength and independence at home. NDIS and Home Care Package welcome.",
    url: "/stroke-rehabilitation-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stroke Rehabilitation Newcastle",
    description:
      "Home-based stroke rehabilitation physiotherapy in Newcastle. Rebuild movement, strength and independence at home. NDIS and Home Care Package welcome.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
