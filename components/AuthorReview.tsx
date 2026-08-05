import Link from "next/link";
import { site } from "@/lib/site";

// Reusable E-E-A-T byline: names the clinical author/reviewer and last-reviewed date,
// and emits MedicalWebPage schema (author + reviewedBy Person) for the page it sits on.
export default function AuthorReview({
  reviewed = "August 2026",
  pageUrl,
}: {
  reviewed?: string;
  pageUrl?: string;
}) {
  const url = pageUrl ? `${site.url}${pageUrl}` : site.url;
  return (
    <div className="my-8 flex flex-col gap-3 rounded-2xl border border-navy-100 bg-sand p-5 sm:flex-row sm:items-center sm:gap-4">
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 font-serif text-lg font-semibold text-white">
        DL
      </span>
      <p className="text-sm leading-relaxed text-navy-700">
        Written and clinically reviewed by{" "}
        <Link href="/daniel-lee-physiotherapist-newcastle" className="font-semibold text-navy-900 underline decoration-beige-300 underline-offset-2 hover:text-navy-700">
          Daniel Lee
        </Link>
        , APA Titled Pain Physiotherapist &amp; Master of Pain Management (University of Sydney), AHPRA-registered.{" "}
        <span className="whitespace-nowrap text-navy-500">Last reviewed {reviewed}.</span>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            url,
            lastReviewed: "2026-08-01",
            reviewedBy: {
              "@type": "Person",
              name: "Daniel Lee",
              jobTitle: "APA Titled Pain Physiotherapist",
              url: `${site.url}/daniel-lee-physiotherapist-newcastle`,
            },
            author: {
              "@type": "Person",
              name: "Daniel Lee",
              url: `${site.url}/daniel-lee-physiotherapist-newcastle`,
            },
          }),
        }}
      />
    </div>
  );
}
