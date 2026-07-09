import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-wallsend")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Wallsend NSW",
  description:
    "Home visit physiotherapy in Wallsend, Newcastle NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-wallsend" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
