import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-central-coast")!;

export const metadata: Metadata = {
  title: "Physiotherapy Central Coast NSW",
  description:
    "Home visit physiotherapy across the Central Coast NSW — Gosford, Erina, Wyong and Tuggerah. Mobile aged care, NDIS and Support at Home physio, falls prevention and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-central-coast" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
