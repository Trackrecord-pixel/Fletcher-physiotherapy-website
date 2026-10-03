import type { Metadata } from "next";
import Image from "next/image";
import BlogImage from "@/components/BlogImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorReview from "@/components/AuthorReview";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      siteName: "Fletcher Physiotherapy",
      locale: "en_AU",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: `/images/blog/${post.slug}.jpg`, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/images/blog/${post.slug}.jpg`],
    },
  };
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: "Daniel Lee",
      jobTitle: "APA Titled Pain Physiotherapist",
      url: `${site.url}/our-team`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        intro={post.description}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <section className="section-py bg-white">
        <div className="container-px max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 border-b border-navy-100 pb-6">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-navy-100">
              <Image src="/team/daniel-lee.jpg" alt="Daniel Lee" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">By Daniel Lee</p>
              <p className="text-xs text-navy-500">APA Titled Pain Physiotherapist</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-navy-500 sm:ml-auto">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="calendar" className="h-4 w-4" /> {post.updated ? `Updated ${fmt(post.updated)}` : fmt(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="clock" className="h-4 w-4" /> {post.readMins} min read
              </span>
            </div>
          </div>
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <BlogImage slug={post.slug} alt={post.title} priority sizes="(max-width: 768px) 100vw, 768px" />
          </div>
          <article className="mt-8">
            {post.sections.map((sec) => (
              <div key={sec.h2} className="mb-8">
                <h2 className="text-2xl text-navy-900 sm:text-3xl">{sec.h2}</h2>
                <div className="prose-navy mt-4 space-y-4">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {sec.list && (
                  <ul className="mt-4 space-y-3">
                    {sec.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        <span className="text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Common questions</h2>
              <div className="mt-5">
                <FAQAccordion items={post.faqs} />
              </div>
            </div>
          )}

          {post.sources && post.sources.length > 0 && (
            <div className="mt-10 border-t border-navy-100 pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-navy-500">References &amp; further reading</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {post.sources.map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-navy-700 underline decoration-beige-300 underline-offset-2 hover:text-navy-900">
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-8 text-xs leading-relaxed text-navy-500">
            This article is general information only and isn&rsquo;t a substitute for individual advice
            from your doctor or physiotherapist. In an emergency, call 000.
          </p>

          <AuthorReview
            pageUrl={`/blog/${post.slug}`}
            reviewed={fmt(post.updated ?? post.date).replace(/^\d+ /, "")}
          />

          <div className="mt-10 rounded-2xl bg-sand p-7 text-center">
            <p className="font-serif text-xl text-navy-900">
              Need home visit physiotherapy?
            </p>
            <p className="mt-2 text-navy-600">
              We come to you across Newcastle, Lake Macquarie and the Central Coast — and selected
              Sydney areas from 9 November 2026. Clinic appointments in Jesmond and Elermore Vale.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Book a Home Visit</Link>
              <a href={site.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl text-navy-900">Explore our services</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { label: "Home Visit Physiotherapy Newcastle", href: "/home-visit-physiotherapy-newcastle" },
                { label: "Aged Care Physiotherapy Newcastle", href: "/aged-care-physiotherapy-newcastle" },
                { label: "Falls Prevention Physiotherapy Newcastle", href: "/falls-prevention-physiotherapy-newcastle" },
                { label: "NDIS Physiotherapy Newcastle", href: "/ndis-physiotherapy-newcastle" },
                { label: "Support at Home Physiotherapy Newcastle", href: "/support-at-home-physiotherapy-newcastle" },
                { label: "Senior Exercise Programs Newcastle", href: "/senior-exercise-programs-newcastle" },
              ].map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900">
                    <Icon name="arrow" className="h-4 w-4 text-navy-400" /> {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl text-navy-900">More articles</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/blog/${o.slug}`} className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900">
                    <Icon name="arrow" className="h-4 w-4 text-navy-400" /> {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {post.faqs && post.faqs.length > 0 && <FaqSchema items={post.faqs} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
    </>
  );
}
