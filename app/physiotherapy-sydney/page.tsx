import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-sydney")!;

export const metadata: Metadata = {
  title: "Physiotherapy Sydney NSW",
  description:
    "Home visit and nursing-home physiotherapy in Sydney from November 2026. Mobile physio for Support at Home and NDIS clients around Sydney Olympic Park and the inner west — falls prevention, aged care and rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-sydney" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Sydney NSW",
    description:
      "Home visit and nursing-home physiotherapy in Sydney from November 2026. Mobile physio for Support at Home and NDIS clients around Sydney Olympic Park and the inner west — falls prevention, aged care and rehabilitation at home.",
    url: "/physiotherapy-sydney",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Sydney NSW",
    description:
      "Home visit and nursing-home physiotherapy in Sydney from November 2026. Mobile physio for Support at Home and NDIS clients around Sydney Olympic Park and the inner west — falls prevention, aged care and rehabilitation at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
