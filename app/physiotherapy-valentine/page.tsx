import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-valentine")!;

export const metadata: Metadata = {
  title: "Physiotherapy Valentine NSW",
  description:
    "Physiotherapy in Valentine, Lake Macquarie NSW. Home visit physio for older adults, NDIS, aged care, Support at Home and falls prevention \u2014 expert care delivered at home.",
  alternates: { canonical: "/physiotherapy-valentine" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Valentine NSW",
    description:
      "Physiotherapy in Valentine, Lake Macquarie NSW. Home visit physio for older adults, NDIS, aged care, Support at Home and falls prevention \u2014 expert care delivered at home.",
    url: "/physiotherapy-valentine",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Valentine NSW",
    description:
      "Physiotherapy in Valentine, Lake Macquarie NSW. Home visit physio for older adults, NDIS, aged care, Support at Home and falls prevention \u2014 expert care delivered at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
