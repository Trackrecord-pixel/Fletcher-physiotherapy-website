import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-newcastle")!;

export const metadata: Metadata = {
  title: "Physiotherapy Newcastle NSW",
  description:
    "Physiotherapy in Newcastle, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
  alternates: { canonical: "/physiotherapy-newcastle" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Newcastle NSW",
    description:
      "Physiotherapy in Newcastle, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    url: "/physiotherapy-newcastle",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Newcastle NSW",
    description:
      "Physiotherapy in Newcastle, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
