import type { Metadata } from "next";
import SydneySuburbPage from "@/components/SydneySuburbPage";
import { sydneySuburbs } from "@/lib/sydneySuburbs";

const s = sydneySuburbs.find((x) => x.slug === "physiotherapy-lidcombe")!;
const title = "Mobile & Home Physio Lidcombe";

export const metadata: Metadata = {
  title,
  description: s.metaDescription,
  alternates: { canonical: "/physiotherapy-lidcombe" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description: s.metaDescription,
    url: "/physiotherapy-lidcombe",
    images: [{ url: "/images/sydney-promo.jpg", width: 1536, height: 1024, alt: "Fletcher Physiotherapy mobile physiotherapy in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: s.metaDescription,
    images: ["/images/sydney-promo.jpg"],
  },
};

export default function Page() {
  return <SydneySuburbPage s={s} />;
}
