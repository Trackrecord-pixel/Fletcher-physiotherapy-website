import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-mount-hutton")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Mount Hutton NSW",
  description:
    "Home visit physiotherapy in Mount Hutton, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-mount-hutton" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
