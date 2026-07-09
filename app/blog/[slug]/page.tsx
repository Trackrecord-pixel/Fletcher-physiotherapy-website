import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema } from "@/components/StructuredData";
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
      title: post.title,
      description: post.description,
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
    dateModified: post.date,
    author: { "@type": "Person", name: "Daniel Lee" },
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
          <div className="flex items-center gap-2 text-sm text-navy-500">
            <Icon name="calendar" className="h-4 w-4" /> {fmt(post.date)}
            <span aria-hidden="true">·</span>
            <Icon name="clock" className="h-4 w-4" /> {post.readMins} min read
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

          <div className="mt-10 rounded-2xl bg-sand p-7 text-center">
            <p className="font-serif text-xl text-navy-900">
              Need home visit physiotherapy in Newcastle?
            </p>
            <p className="mt-2 text-navy-600">
              We come to you across Newcastle, Lake Macquarie and the Central Coast.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Book a Home Visit</Link>
              <a href={site.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>

          <div className="mt-12">
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
