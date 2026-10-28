import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fletcher Physiotherapy",
    short_name: "Fletcher Physio",
    description:
      "Home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2e5a4c",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
