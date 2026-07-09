import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-toronto")!;

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Toronto NSW",
  description:
    "Home visit physiotherapy in Toronto, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-toronto" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
