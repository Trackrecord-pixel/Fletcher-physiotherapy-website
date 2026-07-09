import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Home Visit & Aged Care Physiotherapy Insights",
  description:
    "Practical physiotherapy advice for older adults, families and carers — home visits, NDIS, Home Care Packages, falls prevention and recovery, from Fletcher Physiotherapy.",
  alternates: { canonical: "/blog" },
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Physiotherapy insights for older adults & families"
        intro="Practical, evidence-based advice on home visit physiotherapy, aged care, NDIS, Home Care Packages, falls prevention and recovery."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <section className="section-py bg-white">
        <div className="container-px grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <Link href={`/blog/${p.slug}`} className="card card-hover flex h-full flex-col p-0 overflow-hidden">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={`/images/blog/${p.slug}.jpg`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-navy-500">
                  <Icon name="calendar" className="h-4 w-4" /> {fmt(p.date)}
                  <span aria-hidden="true">·</span>
                  <Icon name="clock" className="h-4 w-4" /> {p.readMins} min read
                </div>
                <h2 className="mt-3 text-xl leading-snug text-navy-900">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
                  Read article <Icon name="arrow" className="h-4 w-4" />
                </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
    </>
  );
}
