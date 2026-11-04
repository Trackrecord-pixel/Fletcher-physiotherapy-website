import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["support-at-home-physiotherapy-sydney"];
const title = "Support at Home Physio Sydney | Home Visits";
const description = "Support at Home (formerly Home Care Package) physiotherapy at home around Sydney Olympic Park, the Inner West, Parramatta and Bankstown–Yagoona.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/support-at-home-physiotherapy-sydney" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/support-at-home-physiotherapy-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
