import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-tuggerah")!;

export const metadata: Metadata = {
  title: "Physiotherapy Tuggerah NSW",
  description:
    "Home visit physiotherapy in Tuggerah, Central Coast NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-tuggerah" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
