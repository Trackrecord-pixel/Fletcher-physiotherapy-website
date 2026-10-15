import { permanentRedirect } from "next/navigation";

// Elermore Vale clinic closed (Oct 2026). Old URL sends visitors to the Jesmond clinic page.
export default function Page() {
  permanentRedirect("/physiotherapy-jesmond");
}
