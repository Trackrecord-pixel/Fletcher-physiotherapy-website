import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["senior-exercise-programs-newcastle"];

export const metadata: Metadata = {
  title: "Senior Exercise Programs Newcastle",
  description:
    "Personalised senior exercise programs in Newcastle, delivered at home. Build strength, balance and confidence to stay independent. NDIS and Home Care Package.",
  alternates: { canonical: "/senior-exercise-programs-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Senior Exercise Programs Newcastle",
    description:
      "Personalised senior exercise programs in Newcastle, delivered at home. Build strength, balance and confidence to stay independent. NDIS and Home Care Package.",
    url: "/senior-exercise-programs-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Exercise Programs Newcastle",
    description:
      "Personalised senior exercise programs in Newcastle, delivered at home. Build strength, balance and confidence to stay independent. NDIS and Home Care Package.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <LandingPage c={c} />;
}
