import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-newcastle")!;

export const metadata: Metadata = {
  title: "Physiotherapy Newcastle NSW",
  description:
    "Physiotherapy in Newcastle, Newcastle NSW. Home visit physio for older adults, NDIS, aged care, Support at Home and falls prevention \u2014 expert care delivered at home.",
  alternates: { canonical: "/physiotherapy-newcastle" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
