import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-adamstown")!;

export const metadata: Metadata = {
  title: "Physiotherapy Adamstown NSW",
  description:
    "Home visit physiotherapy in Adamstown, Newcastle NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-adamstown" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
