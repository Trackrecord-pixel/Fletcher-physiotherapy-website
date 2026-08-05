import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-edgeworth")!;

export const metadata: Metadata = {
  title: "Physiotherapy Edgeworth NSW",
  description:
    "Home visit physiotherapy in Edgeworth, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients — falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-edgeworth" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
