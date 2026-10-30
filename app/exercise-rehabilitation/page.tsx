import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["exercise-rehabilitation"];
const title = "Exercise Rehabilitation & Strength Programs";
const description = "Physiotherapist-designed exercise rehabilitation for strength, mobility, balance and endurance after injury, surgery or illness — in clinic or at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/exercise-rehabilitation" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/exercise-rehabilitation",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
