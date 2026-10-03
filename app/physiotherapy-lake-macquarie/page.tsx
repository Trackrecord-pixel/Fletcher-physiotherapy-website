import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/site";

const s = suburbs.find((x) => x.slug === "physiotherapy-lake-macquarie")!;

export const metadata: Metadata = {
  title: "Physiotherapy Lake Macquarie NSW",
  description:
    "Home visit physio across Lake Macquarie — Warners Bay, Belmont, Charlestown, Cardiff, Toronto, Swansea. NDIS, Support at Home and falls prevention.",
  alternates: { canonical: "/physiotherapy-lake-macquarie" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title: "Physiotherapy Lake Macquarie NSW",
    description:
      "Home visit physio across Lake Macquarie — Warners Bay, Belmont, Charlestown, Cardiff, Toronto, Swansea. NDIS, Support at Home and falls prevention.",
    url: "/physiotherapy-lake-macquarie",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy home visit physiotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Lake Macquarie NSW",
    description:
      "Home visit physio across Lake Macquarie — Warners Bay, Belmont, Charlestown, Cardiff, Toronto, Swansea. NDIS, Support at Home and falls prevention.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SuburbPage s={s} />;
}
