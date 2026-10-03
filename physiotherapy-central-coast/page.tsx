import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-central-coast")!;

export const metadata: Metadata = {
  title: "Physiotherapy Central Coast NSW",
  description:
    "Home visit physiotherapy across the Central Coast NSW — Gosford, Erina, Wyong and Tuggerah. Mobile aged care, NDIS and Support at Home physio, falls prevention and post-hospital rehabilitation at home.",
  alternates: { canonical: "/physiotherapy-central-coast" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Central Coast NSW",
    description:
      "Home visit physiotherapy across the Central Coast NSW — Gosford, Erina, Wyong and Tuggerah. Mobile aged care, NDIS and Support at Home physio, falls prevention and post-hospital rehabilitation at home.",
    url: "/physiotherapy-central-coast",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Central Coast NSW",
    description:
      "Home visit physiotherapy across the Central Coast NSW — Gosford, Erina, Wyong and Tuggerah. Mobile aged care, NDIS and Support at Home physio, falls prevention and post-hospital rehabilitation at home.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
