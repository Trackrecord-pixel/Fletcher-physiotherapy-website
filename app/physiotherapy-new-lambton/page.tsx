import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-new-lambton")!;

export const metadata: Metadata = {
  title: "Physiotherapy New Lambton NSW",
  description:
    "Home visit physiotherapy in New Lambton, Newcastle. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-new-lambton" },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
