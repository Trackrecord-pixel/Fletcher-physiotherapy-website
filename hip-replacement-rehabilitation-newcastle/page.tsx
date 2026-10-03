import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["hip-replacement-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Hip Replacement Rehabilitation Newcastle",
  description:
    "Home visit hip replacement rehabilitation in Newcastle. Recover strength, movement and confidence safely at home, within your surgeon's guidelines.",
  alternates: { canonical: "/hip-replacement-rehabilitation-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Hip Replacement Rehabilitation Newcastle",
    description:
      "Home visit hip replacement rehabilitation in Newcastle. Recover strength, movement and confidence safely at home, within your surgeon's guidelines.",
    url: "/hip-replacement-rehabilitation-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hip Replacement Rehabilitation Newcastle",
    description:
      "Home visit hip replacement rehabilitation in Newcastle. Recover strength, movement and confidence safely at home, within your surgeon's guidelines.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
