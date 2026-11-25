import { permanentRedirect } from "next/navigation";

// Covered by the grouped /physiotherapy-concord-west page (Nov 2026).
// This stub replaces the old suburb page so the build stays safe; next.config.mjs also 301s this URL.
export default function Page() {
  permanentRedirect("/physiotherapy-concord-west");
}
