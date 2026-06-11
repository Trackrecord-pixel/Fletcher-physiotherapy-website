"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const link = el?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        window.fbq?.("track", "Contact");
      } else if (href.includes("cliniko.com/bookings")) {
        window.fbq?.("track", "Lead");
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
