import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["home-visit-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Newcastle | Mobile Physio at Home",
  description:
    "Home visit physiotherapy in Newcastle for older adults, NDIS and Support at Home clients. Mobile physio at home for falls prevention, mobility and strength. Book today.",
  alternates: { canonical: "/home-visit-physiotherapy-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
