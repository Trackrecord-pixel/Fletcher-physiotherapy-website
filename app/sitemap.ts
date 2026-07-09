import type { MetadataRoute } from "next";
import { site, suburbs } from "@/lib/site";
import { landingPages } from "@/lib/landing";
import { posts } from "@/lib/blog";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/our-team",
  "/locations",
  "/refer-a-patient",
  "/contact",
  "/faqs",
  "/blog",
  "/chronic-pain-management",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: string[] = [
    ...staticRoutes,
    ...Object.keys(landingPages).map((s) => `/${s}`),
    ...suburbs.map((s) => `/${s.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return urls.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.includes("newcastle") || path.startsWith("/physiotherapy-")
        ? 0.9
        : 0.7,
  }));
}
