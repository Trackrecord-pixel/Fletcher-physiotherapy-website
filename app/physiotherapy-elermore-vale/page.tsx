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
};

export default function Page() {
  return <ClinicPage c={c} />;
}
