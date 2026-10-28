import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["home-visit-physiotherapy-sydney"];
const title = "Home Visit Physio Sydney | Mobile Physiotherapist";
const description = "Mobile physiotherapy at home around Sydney Olympic Park, the Inner West, Parramatta and Bankstown. NDIS, Support at Home, DVA and private clients.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/home-visit-physiotherapy-sydney" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/home-visit-physiotherapy-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
