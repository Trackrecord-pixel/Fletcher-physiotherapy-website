import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-belmont")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Belmont NSW",
  description:
    "Home visit physiotherapy in Belmont, Lake Macquarie. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-belmont" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
