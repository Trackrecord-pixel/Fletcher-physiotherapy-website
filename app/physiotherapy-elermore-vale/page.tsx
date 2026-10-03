import type { Metadata } from "next";
import ClinicPage from "@/components/ClinicPage";
import { clinics } from "@/lib/site";

const c = clinics.find((x) => x.slug === "physiotherapy-elermore-vale")!;

export const metadata: Metadata = {
  title: "Physiotherapy Elermore Vale",
  description:
    "Physio at Elermore Vale Medical Centre on Mondays — chronic pain, injury rehab and falls prevention. GPCCMP, DVA and private patients welcome.",
  keywords: ["Physiotherapy Elermore Vale", "Physiotherapist Elermore Vale", "Elermore Vale Physio", "Chronic Pain Physiotherapist Elermore Vale", "Medicare Physio Elermore Vale"],
  alternates: { canonical: "/physiotherapy-elermore-vale" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Elermore Vale | Fletcher Physiotherapy",
    description:
      "Physio at Elermore Vale Medical Centre on Mondays — chronic pain, injury rehab and falls prevention. GPCCMP, DVA and private patients welcome.",
    url: "/physiotherapy-elermore-vale",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Elermore Vale | Fletcher Physiotherapy",
    description:
      "Physio at Elermore Vale Medical Centre on Mondays — chronic pain, injury rehab and falls prevention. GPCCMP, DVA and private patients welcome.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <ClinicPage c={c} />;
}
