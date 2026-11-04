import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["aged-care-physiotherapy-sydney"];
const title = "Aged Care Physio Sydney | Home Visits";
const description = "Aged care physiotherapy at home, in retirement living and aged care around Sydney Olympic Park, Inner West, Parramatta and Bankstown. Falls and balance.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/aged-care-physiotherapy-sydney" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/aged-care-physiotherapy-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
