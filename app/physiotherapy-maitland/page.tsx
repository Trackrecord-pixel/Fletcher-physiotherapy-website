import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-maitland")!;

export const metadata: Metadata = {
  title: "Physiotherapy Maitland NSW",
  description:
    "Physiotherapy in Maitland, Hunter Region NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
  alternates: { canonical: "/physiotherapy-maitland" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Maitland NSW",
    description:
      "Physiotherapy in Maitland, Hunter Region NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    url: "/physiotherapy-maitland",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Maitland NSW",
    description:
      "Physiotherapy in Maitland, Hunter Region NSW. Home visit physio for older adults, NDIS, Support at Home and falls prevention.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
