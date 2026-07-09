import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["support-at-home-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Support at Home Physiotherapy | Newcastle NSW",
  description:
    "Support at Home and Home Care Package physiotherapy in Newcastle, delivered at home. Helping older adults stay strong, mobile and safely independent.",
  alternates: { canonical: "/support-at-home-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
