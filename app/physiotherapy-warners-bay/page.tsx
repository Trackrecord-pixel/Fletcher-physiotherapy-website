import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-warners-bay")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Warners Bay | Mobile Physio",
  description:
    "Home visit physiotherapy in Warners Bay, Lake Macquarie. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-warners-bay" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
