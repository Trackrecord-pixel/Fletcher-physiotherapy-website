import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["senior-exercise-programs-newcastle"];

export const metadata: Metadata = {
  title: "Senior Exercise Programs Newcastle",
  description:
    "Personalised senior exercise programs in Newcastle, delivered at home. Build strength, balance and confidence to stay independent. NDIS and Home Care Package.",
  alternates: { canonical: "/senior-exercise-programs-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
