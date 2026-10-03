import { permanentRedirect } from "next/navigation";

// Consolidated into the single Sydney hub page (SEO cleanup, Oct 2026).
// This stub replaces the old suburb page so the build stays safe; next.config.mjs also 301s this URL.
export default function Page() {
  permanentRedirect("/physiotherapy-sydney");
}
