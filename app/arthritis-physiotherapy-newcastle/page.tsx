import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["arthritis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Arthritis Physiotherapy Newcastle",
  description:
    "Home visit physiotherapy for arthritis in Newcastle. Ease joint pain and stiffness, protect your joints and stay active and independent at home.",
  alternates: { canonical: "/arthritis-physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Arthritis Physiotherapy Newcastle",
    description:
      "Home visit physiotherapy for arthritis in Newcastle. Ease joint pain and stiffness, protect your joints and stay active and independent at home.",
    url: "/arthritis-physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthritis Physiotherapy Newcastle",
    description:
      "Home visit physiotherapy for arthritis in Newcastle. Ease joint pain and stiffness, protect your joints and stay active and independent at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
