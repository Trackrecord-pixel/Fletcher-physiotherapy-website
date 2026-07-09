import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["ndis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "NDIS Physiotherapy | Newcastle NSW",
  description:
    "NDIS physiotherapy in Newcastle at home. Functional goals, mobility, independence and clear reports for support coordinators. Self, plan and agency managed.",
  alternates: { canonical: "/ndis-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
