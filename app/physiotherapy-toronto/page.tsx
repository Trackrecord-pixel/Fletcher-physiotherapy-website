import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-toronto")!;

export const metadata: Metadata = {
  title: "Physiotherapy Toronto NSW",
  description:
    "Home visit physiotherapy in Toronto, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-toronto" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Toronto NSW",
    description:
      "Home visit physiotherapy in Toronto, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
    url: "/physiotherapy-toronto",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Toronto NSW",
    description:
      "Home visit physiotherapy in Toronto, Lake Macquarie NSW. Mobile physio for older adults, NDIS and Support at Home clients \u2014 falls prevention, aged care and post-hospital rehabilitation at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
