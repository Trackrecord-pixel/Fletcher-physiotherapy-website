import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-jesmond")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Jesmond NSW",
  description:
    "Home visit physiotherapy in Jesmond, Newcastle NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-jesmond" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
