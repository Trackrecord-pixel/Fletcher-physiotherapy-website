import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-warners-bay")!;

export const metadata: Metadata = {
  title: "Physiotherapy Warners Bay NSW",
  description:
    "Home visit physiotherapy in Warners Bay, Lake Macquarie. Mobile physio for older adults, NDIS & Support at Home \u2014 falls prevention, mobility, strength.",
  alternates: { canonical: "/physiotherapy-warners-bay" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Warners Bay NSW",
    description:
      "Home visit physiotherapy in Warners Bay, Lake Macquarie. Mobile physio for older adults, NDIS & Support at Home \u2014 falls prevention, mobility, strength.",
    url: "/physiotherapy-warners-bay",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Warners Bay NSW",
    description:
      "Home visit physiotherapy in Warners Bay, Lake Macquarie. Mobile physio for older adults, NDIS & Support at Home \u2014 falls prevention, mobility, strength.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
