import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-lambton")!;

export const metadata: Metadata = {
  title: "Physiotherapy Lambton NSW",
  description:
    "Physiotherapy in Lambton, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
  alternates: { canonical: "/physiotherapy-lambton" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Lambton NSW",
    description:
      "Physiotherapy in Lambton, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    url: "/physiotherapy-lambton",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Lambton NSW",
    description:
      "Physiotherapy in Lambton, Newcastle NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
