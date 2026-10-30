import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["sports-injury-physiotherapy"];
const title = "Sports Injury Physio | Sydney & Newcastle";
const description = "Rehabilitation for sprains, strains, tendon and knee injuries, with return-to-sport planning at our Jesmond, Yagoona and Parramatta clinics.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/sports-injury-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/sports-injury-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
