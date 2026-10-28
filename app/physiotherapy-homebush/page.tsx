import type { Metadata } from "next";
import SydneySuburbPage from "@/components/SydneySuburbPage";
import { sydneySuburbs } from "@/lib/sydneySuburbs";

const s = sydneySuburbs.find((x) => x.slug === "physiotherapy-homebush")!;
const title = "Mobile & Home Physio Homebush";

export const metadata: Metadata = {
  title,
  description: s.metaDescription,
  alternates: { canonical: "/physiotherapy-homebush" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description: s.metaDescription,
    url: "/physiotherapy-homebush",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy mobile physiotherapy in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: s.metaDescription,
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <SydneySuburbPage s={s} />;
}
