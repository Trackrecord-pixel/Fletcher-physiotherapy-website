import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["stroke-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Stroke Rehabilitation Newcastle",
  description:
    "Home-based stroke rehabilitation physiotherapy in Newcastle. Rebuild movement, strength and independence at home. NDIS and Home Care Package welcome.",
  alternates: { canonical: "/stroke-rehabilitation-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
