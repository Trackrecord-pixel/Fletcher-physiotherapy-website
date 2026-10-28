import type { Metadata } from "next";
import SydneyClinicPage from "@/components/SydneyClinicPage";
import { sydneyClinics } from "@/lib/sydneyClinics";

const c = sydneyClinics.find((x) => x.slug === "physiotherapy-yagoona")!;
const title = `Physio ${c.suburb} | ${c.hostCentre}`;

export const metadata: Metadata = {
  title: { absolute: `Physio ${c.suburb} | ${c.brandName}` },
  description: c.metaDescription,
  alternates: { canonical: `/${c.slug}` },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description: c.metaDescription,
    url: `/${c.slug}`,
    images: [c.poster ? { url: c.poster.src, width: 1200, height: 1200, alt: c.poster.alt } : { url: "/images/og-default.png", width: 1200, height: 630, alt: c.brandName }],
  },
  twitter: { card: "summary_large_image", title, description: c.metaDescription, images: [c.poster?.src ?? "/images/og-default.png"] },
};

export default function Page() {
  return <SydneyClinicPage c={c} />;
}
