import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["knee-replacement-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Knee Replacement Rehabilitation Newcastle",
  description:
    "Home visit knee replacement rehabilitation in Newcastle. Restore movement, strength and confidence in the comfort of your own home.",
  alternates: { canonical: "/knee-replacement-rehabilitation-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
