import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["arthritis-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Arthritis Physiotherapy Newcastle",
  description:
    "Home visit physiotherapy for arthritis in Newcastle. Ease joint pain and stiffness, protect your joints and stay active and independent at home.",
  alternates: { canonical: "/arthritis-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
