import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["aged-care-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Aged Care Physiotherapy | Newcastle NSW",
  description:
    "Aged care physiotherapy in Newcastle delivered at home. Balance training, strength, falls prevention and walking confidence to help seniors stay independent.",
  alternates: { canonical: "/aged-care-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
