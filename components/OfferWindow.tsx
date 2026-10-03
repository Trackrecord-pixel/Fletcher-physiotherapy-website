"use client";

import { useEffect, useState } from "react";

// Wraps the Sydney free-consultation promo. Renders the offer up to the end of
// 31 December 2026 (Australia/Sydney time), then hides it automatically — so the
// temporary promotion never lingers into 2027 without a code change.
// Expiry: 1 Jan 2027 00:00 AEDT (UTC+11).
const OFFER_END = Date.parse("2027-01-01T00:00:00+11:00");

export default function OfferWindow({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(true);
  useEffect(() => {
    if (Date.now() >= OFFER_END) setActive(false);
  }, []);
  if (!active) return null;
  return <>{children}</>;
}
