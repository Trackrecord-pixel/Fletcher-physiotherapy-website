import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { serviceDirectory, allDirectoryServices } from "@/lib/serviceDirectory";
import { site } from "@/lib/site";

const title = "Physiotherapy Services | Clinic & Home Visits | Fletcher";
const description =
  "29 physiotherapy services in clinic and at home: back, neck and shoulder pain, chronic pain, post-op rehab, falls prevention, bulk billing in Yagoona and NDIS.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/services",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy services" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

export default function ServicesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fletcher Physiotherapy services",
    itemListElement: allDirectoryServices.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${site.url}${s.href.split("#")[0]}`,
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Physiotherapy Services in Sydney, Newcastle & the Central Coast"
        intro="Fletcher Physiotherapy provides personalised, evidence-based physiotherapy in our clinics and through home visits. Our services include musculoskeletal physiotherapy, chronic pain management, post-operative rehabilitation, balance and mobility training, and physiotherapy for eligible Medicare, DVA, NDIS and Support at Home patients."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      {/* Quick paths + bulk billing note */}
      <section className="border-b border-beige-200 bg-white">
        <div className="container-px grid gap-4 py-8 md:grid-cols-3">
          <Link href="/clinic-physiotherapy" className="card card-hover flex items-center gap-4">
            <Icon name="pin" className="h-6 w-6 flex-shrink-0 text-euc-600" />
            <span>
              <span className="block font-semibold text-navy-900">Clinic physiotherapy</span>
              <span className="text-sm text-navy-600">Jesmond · Yagoona · Parramatta</span>
            </span>
          </Link>
          <Link href="/home-visits" className="card card-hover flex items-center gap-4">
            <Icon name="home" className="h-6 w-6 flex-shrink-0 text-euc-600" />
            <span>
              <span className="block font-semibold text-navy-900">Home visit physiotherapy</span>
              <span className="text-sm text-navy-600">Sydney · Newcastle · Central Coast</span>
            </span>
          </Link>
          <Link href="/bulk-billing-physiotherapy-yagoona" className="card card-hover flex items-center gap-4">
            <Icon name="check" className="h-6 w-6 flex-shrink-0 text-euc-600" />
            <span>
              <span className="block font-semibold text-navy-900">Bulk billing at Yagoona</span>
              <span className="text-sm text-navy-600">For eligible Medicare GPCCMP patients</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Category jump links */}
      <nav aria-label="Service categories" className="bg-white">
        <div className="container-px flex flex-wrap gap-2 pt-10">
          {serviceDirectory.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-beige-300 px-4 py-2 text-sm text-navy-700 hover:border-euc-600 hover:text-euc-700">
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      {serviceDirectory.map((cat, ci) => (
        <section key={cat.id} id={cat.id} className={`scroll-mt-28 py-14 lg:py-16 ${ci % 2 ? "bg-sand" : "bg-white"}`} aria-labelledby={`${cat.id}-h`}>
          <div className="container-px">
            <h2 id={`${cat.id}-h`} className="text-2xl text-navy-900 sm:text-3xl">{cat.title}</h2>
            <p className="mt-2 max-w-2xl text-navy-600">{cat.intro}</p>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((s) => (
                <li key={s.id} id={s.id} className="card flex scroll-mt-28 flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-beige-100 text-euc-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-navy-900">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <Link href={s.href} className="inline-flex items-center gap-1.5 font-semibold text-euc-700 hover:text-euc-800">
                      More about {s.name} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                    <Link href="/book" className="text-navy-600 hover:text-navy-900">Book or enquire</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </>
  );
}
