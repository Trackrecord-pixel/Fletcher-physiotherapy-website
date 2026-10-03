"use client";

import Image from "next/image";
import { useState } from "react";

// Optional Sydney promo photo. Drop a file at /public/images/sydney-promo.jpg to
// show it; until then the navy panel shows on its own (no broken image).
export default function SydneyPromoImage() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <Image
      src="/images/sydney-promo.jpg"
      alt="Sydney Mobile Physiotherapy — mobile physiotherapy home visits"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover opacity-70"
      onError={() => setOk(false)}
    />
  );
}
