import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["shoulder-pain-physiotherapy"];
const title = "Shoulder Pain Physio | Rotator Cuff & Frozen Shoulder";
const description = "Physiotherapy for shoulder pain, rotator cuff conditions and frozen shoulder — individualised rehab in Jesmond, Yagoona and Parramatta, or at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/shoulder-pain-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/shoulder-pain-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
