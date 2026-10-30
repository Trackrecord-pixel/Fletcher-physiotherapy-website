import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["ctp-physiotherapy"];
const title = "CTP Physiotherapy | Car Accident Injury Physio";
const description = "Physiotherapy after a motor vehicle accident for eligible NSW CTP claims — whiplash, neck and back pain rehabilitation in clinic or at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/ctp-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/ctp-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
