import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["mobile-physiotherapist-newcastle"];

export const metadata: Metadata = {
  title: "Mobile Physiotherapist | Newcastle NSW",
  description:
    "Need a mobile physiotherapist in Newcastle? Fletcher Physiotherapy comes to you with expert in-home care across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/mobile-physiotherapist-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
