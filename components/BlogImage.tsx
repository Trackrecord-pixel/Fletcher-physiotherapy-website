"use client";

import Image from "next/image";
import { useState } from "react";

// Blog cover image that falls back to a default image if the per-post cover
// is missing — so a missing /images/blog/[slug].jpg never renders as a broken icon.
export default function BlogImage({
  slug,
  alt,
  sizes,
  priority = false,
}: {
  slug: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [src, setSrc] = useState(`/images/blog/${slug}.jpg`);
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
      onError={() => setSrc("/images/og-default.png")}
    />
  );
}
