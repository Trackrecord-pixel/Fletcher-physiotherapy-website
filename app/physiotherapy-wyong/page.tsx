import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-wyong")!;

export const metadata: Metadata = {
  title: "Physiotherapy Wyong NSW",
  description:
    "Home visit physiotherapy in Wyong, Central Coast. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
  alternates: { canonical: "/physiotherapy-wyong" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Wyong NSW",
    description:
      "Home visit physiotherapy in Wyong, Central Coast. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
    url: "/physiotherapy-wyong",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Wyong NSW",
    description:
      "Home visit physiotherapy in Wyong, Central Coast. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, mobility and strength at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
