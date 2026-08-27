import type { Metadata } from "next";
import ClinicPage from "@/components/ClinicPage";
import { clinics } from "@/lib/site";

const c = clinics.find((x) => x.slug === "physiotherapy-jesmond")!;

export const metadata: Metadata = {
  title: "Physiotherapy Jesmond | Fletcher Physiotherapy",
  description:
    "Book an appointment with Fletcher Physiotherapy at HealthSure Medical Centre Jesmond. Experienced physiotherapy for pain, injuries, rehabilitation, balance, falls prevention and Medicare EPC patients.",
  keywords: ["Physiotherapy Jesmond", "Physiotherapist Jesmond", "Jesmond Physio", "Chronic Pain Physiotherapist Jesmond", "Medicare Physio Jesmond"],
  alternates: { canonical: "/physiotherapy-jesmond" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Jesmond | Fletcher Physiotherapy",
    description:
      "Book an appointment with Fletcher Physiotherapy at HealthSure Medical Centre Jesmond. Experienced physiotherapy for pain, injuries, rehabilitation, balance, falls prevention and Medicare EPC patients.",
    url: "/physiotherapy-jesmond",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Jesmond | Fletcher Physiotherapy",
    description:
      "Book an appointment with Fletcher Physiotherapy at HealthSure Medical Centre Jesmond. Experienced physiotherapy for pain, injuries, rehabilitation, balance, falls prevention and Medicare EPC patients.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <ClinicPage c={c} />;
}
