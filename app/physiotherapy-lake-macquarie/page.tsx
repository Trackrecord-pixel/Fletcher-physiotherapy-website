import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-lake-macquarie")!;

export const metadata: Metadata = {
  title: "Physiotherapy Lake Macquarie NSW",
  description:
    "Home visit physiotherapy across Lake Macquarie NSW — Warners Bay, Belmont, Charlestown, Cardiff, Toronto and Swansea. Mobile aged care, NDIS and Support at Home physio, falls prevention and rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-lake-macquarie" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
