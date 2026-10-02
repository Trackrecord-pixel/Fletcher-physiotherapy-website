import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-harris-park")!;

export const metadata: Metadata = {
  title: "Physiotherapy Harris Park Sydney NSW",
  description:
    "Home visit and aged-care physiotherapy in Harris Park, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-harris-park" },
  openGraph: {
    type: "website", siteName: "Fletcher Physiotherapy", locale: "en_AU",
    title: "Physiotherapy Harris Park Sydney NSW",
    description:
      "Home visit and aged-care physiotherapy in Harris Park, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.",
    url: "/physiotherapy-harris-park",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title: "Physiotherapy Harris Park Sydney NSW", description: "Home visit and aged-care physiotherapy in Harris Park, Sydney from November 2026. Mobile physio for Support at Home, NDIS and Rehab at Home clients — falls prevention, aged care and rehabilitation at home.", images: ["/images/og-default.png"] },
};

export default function Page() { return <SuburbPage s={s} />; }
