import type { Metadata } from "next";
import SydneySuburbPage from "@/components/SydneySuburbPage";
import { sydneySuburbs } from "@/lib/sydneySuburbs";

const s = sydneySuburbs.find((x) => x.slug === "physiotherapy-rhodes")!;
const title = "Mobile & Home Physio Rhodes";

export const metadata: Metadata = {
  title,
  description: s.metaDescription,
  alternates: { canonical: "/physiotherapy-rhodes" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description: s.metaDescription,
    url: "/physiotherapy-rhodes",
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
