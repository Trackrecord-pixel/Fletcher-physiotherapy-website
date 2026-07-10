import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["parkinsons-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Parkinson's Physiotherapy Newcastle",
  description:
    "Home visit physiotherapy for Parkinson's disease in Newcastle. Maintain movement, balance and independence and reduce falls risk. NDIS and Home Care Package.",
  alternates: { canonical: "/parkinsons-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
