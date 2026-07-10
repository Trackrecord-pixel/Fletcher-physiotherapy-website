import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingPages } from "@/lib/landing";

const c = landingPages["hip-replacement-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Hip Replacement Rehabilitation Newcastle",
  description:
    "Home visit hip replacement rehabilitation in Newcastle. Recover strength, movement and confidence safely at home, within your surgeon's guidelines.",
  alternates: { canonical: "/hip-replacement-rehabilitation-newcastle" },
};

export default function Page() {
  return <LandingPage c={c} />;
}
