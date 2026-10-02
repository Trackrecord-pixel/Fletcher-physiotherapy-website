import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-auburn")!;

export const metadata: Metadata = {
  title: "Physiotherapy Auburn Sydney NSW",
  description:
    "Home visit and nursing-home physiotherapy in Auburn, Sydney from November 2026. Mobile physio for Support at Home and NDIS clients — falls prevention, aged care and rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-auburn" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Auburn Sydney NSW",
    description:
      "Home visit and nursing-home physiotherapy in Auburn, Sydney from November 2026. Mobile physio for Support at Home and NDIS clients — falls prevention, aged care and rehabilitation at home.",
    url: "/physiotherapy-auburn",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Auburn Sydney NSW",
    description:
      "Home visit and nursing-home physiotherapy in Auburn, Sydney from November 2026. Mobile physio for Support at Home and NDIS clients — falls prevention, aged care and rehabilitation at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
