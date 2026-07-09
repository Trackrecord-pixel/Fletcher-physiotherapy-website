import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["falls-prevention-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Falls Prevention Physiotherapy Newcastle | Home Visits",
  description:
    "Falls prevention physiotherapy in Newcastle at home. Balance assessment, strength and balance training and a home hazard review to reduce falls risk.",
  alternates: { canonical: "/falls-prevention-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
