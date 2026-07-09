import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-wyong")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Wyong NSW",
  description:
    "Home visit physiotherapy in Wyong, Central Coast. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-wyong" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
