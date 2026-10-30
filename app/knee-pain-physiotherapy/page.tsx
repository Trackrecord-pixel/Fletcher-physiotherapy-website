import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["knee-pain-physiotherapy"];
const title = "Knee Pain Physio | Arthritis, Injury & Rehab";
const description = "Physiotherapy for knee pain, knee osteoarthritis, kneecap pain and ligament injuries in Jesmond, Yagoona and Parramatta, or at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/knee-pain-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/knee-pain-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
