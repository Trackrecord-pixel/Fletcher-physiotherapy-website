import type { Metadata } from "next";
import ClinicPage from "@/components/ClinicPage";
import { clinics } from "@/lib/site";

const c = clinics.find((x) => x.slug === "physiotherapy-elermore-vale")!;

export const metadata: Metadata = {
  title: "Physiotherapy Elermore Vale | Fletcher Physiotherapy",
  description:
    "Visit Fletcher Physiotherapy at Elermore Vale Medical Centre for expert physiotherapy, chronic pain management, injury rehabilitation, falls prevention and Medicare EPC physiotherapy.",
  keywords: ["Physiotherapy Elermore Vale", "Physiotherapist Elermore Vale", "Elermore Vale Physio", "Chronic Pain Physiotherapist Elermore Vale", "Medicare Physio Elermore Vale"],
  alternates: { canonical: "/physiotherapy-elermore-vale" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Elermore Vale | Fletcher Physiotherapy",
    description:
      "Visit Fletcher Physiotherapy at Elermore Vale Medical Centre for expert physiotherapy, chronic pain management, injury rehabilitation, falls prevention and Medicare EPC physiotherapy.",
    url: "/physiotherapy-elermore-vale",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Elermore Vale | Fletcher Physiotherapy",
    description:
      "Visit Fletcher Physiotherapy at Elermore Vale Medical Centre for expert physiotherapy, chronic pain management, injury rehabilitation, falls prevention and Medicare EPC physiotherapy.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <ClinicPage c={c} />;
}
