import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["hip-pain-physiotherapy"];
const title = "Hip Pain Physio | Hip Arthritis & Hip Bursitis";
const description = "Physiotherapy for hip osteoarthritis, hip bursitis (greater trochanteric pain syndrome) and gluteal tendinopathy — in clinic or at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/hip-pain-physiotherapy" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/hip-pain-physiotherapy",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
