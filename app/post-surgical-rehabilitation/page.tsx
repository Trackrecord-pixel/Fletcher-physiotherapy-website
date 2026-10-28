import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["post-surgical-rehabilitation"];
const title = "Post-Surgical Rehabilitation Physio | Clinic & Home";
const description = "Physiotherapy after hip and knee replacement, shoulder, spinal and orthopaedic surgery — at home early on, then in clinic. Sydney and Newcastle.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Fletcher` },
  description,
  alternates: { canonical: "/post-surgical-rehabilitation" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/post-surgical-rehabilitation",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function Page() {
  return <LandingPage c={c} />;
}
