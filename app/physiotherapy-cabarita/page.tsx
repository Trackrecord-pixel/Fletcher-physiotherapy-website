import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-cabarita")!;

export const metadata: Metadata = {
  title: "Physiotherapy Cabarita Sydney NSW",
  description:
    "Home visit and aged-care physiotherapy in Cabarita, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-cabarita" },
  openGraph: {
    type: "website", siteName: "Fletcher Physiotherapy", locale: "en_AU",
    title: "Physiotherapy Cabarita Sydney NSW",
    description:
      "Home visit and aged-care physiotherapy in Cabarita, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.",
    url: "/physiotherapy-cabarita",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title: "Physiotherapy Cabarita Sydney NSW", description: "Home visit and aged-care physiotherapy in Cabarita, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.", images: ["/images/og-default.png"] },
};

export default function Page() { return <SuburbPage s={s} />; }
