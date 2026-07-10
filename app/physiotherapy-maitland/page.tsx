import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-maitland")!;

export const metadata: Metadata = {
  title: "Physiotherapy Maitland NSW",
  description:
    "Physiotherapy in Maitland, Hunter Region NSW. Home visit physio for older adults, NDIS, aged care, Support at Home and falls prevention \u2014 expert care delivered at home.",
  alternates: { canonical: "/physiotherapy-maitland" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
