import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-charlestown")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Charlestown | Mobile Physio",
  description:
    "Home visit physiotherapy in Charlestown, Lake Macquarie. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-charlestown" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
