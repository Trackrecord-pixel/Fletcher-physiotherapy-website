import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import OfferWindow from "@/components/OfferWindow";
import SuburbChecker, { type CheckerEntry } from "@/components/SuburbChecker";
import { BreadcrumbSchema, FaqSchema } from "@/components/StructuredData";
import { clinics, locations, suburbs, site } from "@/lib/site";
import { sydneySuburbs } from "@/lib/sydneySuburbs";

const title = "Physio Near Me: Newcastle & Sydney Home Visits";
const description =
  "Find a physio near you: Jesmond & Elermore Vale clinics, plus home visits across Newcastle, Lake Macquarie, Central Coast and Sydney. Check your suburb.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/physio-near-me" },
  openGraph: {
    type: "website",
    siteName: "Fletcher Physiotherapy",
    locale: "en_AU",
    title,
    description,
    url: "/physio-near-me",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Fletcher Physiotherapy — find a physio near you" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-default.png"] },
};

// --- Build the suburb checker list from the site's real data -------------
const regionPage: Record<string, string> = {
  Newcastle: "/physiotherapy-newcastle",
  "Lake Macquarie": "/physiotherapy-lake-macquarie",
  "Central Coast": "/physiotherapy-central-coast",
  Sydney: "/physiotherapy-sydney",
};
const pageFor = (name: string, region: string) =>
  `/${
    sydneySuburbs.find((x) => x.name === name)?.slug ??
    suburbs.find((x) => x.name === name)?.slug ??
    (regionPage[region] ?? "/locations").slice(1)
  }`;

const entries: CheckerEntry[] = [
  ...clinics.map((c) => ({
    name: c.suburb,
    region: c.region,
    kind: "clinic" as const,
    href: `/${c.slug}`,
    note: `Clinic on ${c.dayShort} at ${c.hostCentre} — home visits too`,
  })),
  ...locations.flatMap((loc) =>
    loc.suburbs.map((name) => ({
      name,
      region: loc.name,
      kind: loc.name === "Sydney" ? ("sydney" as const) : ("home" as const),
      href: pageFor(name, loc.name),
    }))
  ),
  ...suburbs
    .filter((s) => s.region !== "Sydney")
    .map((s) => ({ name: s.name, region: s.region, kind: "home" as const, href: `/${s.slug}` })),
  ...sydneySuburbs.map((s) => ({ name: s.name, region: "Sydney", kind: "sydney" as const, href: `/${s.slug}` })),
].filter((e, i, arr) => arr.findIndex((x) => x.name === e.name && x.kind === e.kind) === i);

const faqs = [
  {
    q: "Is there a physio near me that does home visits?",
    a: "If you live in Newcastle, Lake Macquarie or the Central Coast, yes — our physiotherapists come to your home, retirement village or aged care residence. From 9 November 2026 we also visit homes around Sydney Olympic Park and the Inner West. Use the suburb checker above or call us to confirm.",
  },
  {
    q: "Where are your physio clinics?",
    a: "We consult on Mondays at HealthSure Medical Centre Jesmond (Jesmond Central, 28 Blue Gum Road) and at Elermore Vale Medical Centre (137 Croudace Road). We don't have a clinic in Sydney — Sydney appointments are home visits.",
  },
  {
    q: "Do I need a referral to see a physio?",
    a: "No. You can book privately without a referral. A GP referral is needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), and NDIS and Support at Home have their own arrangements.",
  },
  {
    q: "Should I choose a clinic or a home visit?",
    a: "A clinic suits people who can travel easily and want a Monday appointment in Jesmond or Elermore Vale. A home visit suits people who find travel hard, are recovering after hospital, are at risk of falls, or want advice for their own home. If you're unsure, call and we'll help you choose.",
  },
  {
    q: "How quickly can I be seen?",
    a: "It depends on your area and the day. Call us or book online and we'll offer the earliest suitable time. We'll always be clear about availability before you book.",
  },
  {
    q: "What does it cost?",
    a: "It depends on how your care is funded — private, NDIS (we're a registered provider), Support at Home, DVA or Medicare-subsidised sessions under a GPCCMP. We'll explain your options before your first appointment.",
  },
];

export default function PhysioNearMePage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Physio Near Me", href: "/physio-near-me" },
  ];
  const groups = [
    { region: "Newcastle", items: suburbs.filter((s) => s.region === "Newcastle" || s.region === "Hunter Region") },
    { region: "Lake Macquarie", items: suburbs.filter((s) => s.region === "Lake Macquarie") },
    { region: "Central Coast", items: suburbs.filter((s) => s.region === "Central Coast") },
    {
      region: "Sydney (from 9 Nov 2026)",
      items: [{ slug: "physiotherapy-sydney", name: "Sydney (all areas)" }, ...sydneySuburbs.map((s) => ({ slug: s.slug, name: s.name }))],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Physio Near Me"
        title="Find a Physio Near You"
        intro="Visit one of our two Newcastle clinics, or have a physiotherapist come to your home across Newcastle, Lake Macquarie, the Central Coast — and Sydney from 9 November 2026."
        breadcrumb={crumbs}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SuburbChecker entries={entries} phone={site.phone} phoneHref={site.phoneHref} />
          </div>
          <div className="lg:col-span-5">
            <div className="card h-full bg-navy-900 text-white">
              <h2 className="text-xl text-white">Prefer to talk to someone?</h2>
              <p className="mt-2 text-sm text-navy-100">
                Tell us your suburb and what you need help with, and we&rsquo;ll find the closest and most suitable option.
              </p>
              <a href={site.phoneHref} className="btn-accent mt-5 w-full">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phone}
              </a>
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white">
                Book online (Newcastle region) <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px">
          <h2 className="text-center text-3xl text-navy-900">Three ways to see us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {clinics.map((c) => (
              <div key={c.slug} className="card flex h-full flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name="pin" className="h-6 w-6" /></span>
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                  <Icon name="clock" className="h-3.5 w-3.5" /> Clinic · {c.dayShort}
                </span>
                <h3 className="mt-3 text-lg text-navy-900">{c.hostCentre}</h3>
                <p className="mt-2 flex-grow text-sm text-navy-600">{c.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.hostCentre}, ${c.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-navy-700 underline hover:text-navy-900"
                >
                  Get directions
                </a>
                <Link href={`/${c.slug}`} className="btn-secondary mt-4 w-full">Clinic details</Link>
              </div>
            ))}
            <div className="card flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white"><Icon name="home" className="h-6 w-6" /></span>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                <Icon name="home" className="h-3.5 w-3.5" /> We come to you
              </span>
              <h3 className="mt-3 text-lg text-navy-900">Home visits — Hunter &amp; Central Coast</h3>
              <p className="mt-2 flex-grow text-sm text-navy-600">Newcastle, Lake Macquarie and the Central Coast — at home, in retirement villages or aged care.</p>
              <Link href="/home-visit-physiotherapy-newcastle" className="btn-secondary mt-4 w-full">Home visit details</Link>
            </div>
            <div className="card flex h-full flex-col border-clay-200">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-500 text-white"><Icon name="home" className="h-6 w-6" /></span>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-clay-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                <Icon name="clock" className="h-3.5 w-3.5" /> From 9 Nov 2026
              </span>
              <h3 className="mt-3 text-lg text-navy-900">Home visits — Sydney</h3>
              <p className="mt-2 flex-grow text-sm text-navy-600">Around Sydney Olympic Park, the Inner West and surrounding suburbs.</p>
              <OfferWindow>
                <p className="mt-3 rounded-lg bg-clay-50 px-3 py-2 text-xs text-navy-700">FREE phone consultation for new Sydney clients until 31 Dec 2026.</p>
              </OfferWindow>
              <Link href="/physiotherapy-sydney" className="btn-secondary mt-4 w-full">Sydney details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-navy-900 sm:text-3xl">Clinic or home visit — which is right for you?</h2>
            <p className="prose-navy mt-4">
              The &ldquo;nearest&rdquo; physio isn&rsquo;t always the one closest on a map — it&rsquo;s the one you can actually
              get to and keep seeing. Here&rsquo;s a simple guide.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-lg text-navy-900">A clinic may suit you if…</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-700">
                {["You can drive or travel easily", "A Monday appointment works for you", "You'd like to use clinic equipment", "You live near Jesmond or Elermore Vale"].map((x) => (
                  <li key={x} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {x}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg text-navy-900">A home visit may suit you if…</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-700">
                {["Travel, parking or stairs are hard", "You're recovering after hospital or surgery", "You're worried about falls at home", "You'd like family or carers involved"].map((x) => (
                  <li key={x} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px">
          <h2 className="text-center text-3xl text-navy-900">Physio in your area</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {groups.map((g) => (
              <div key={g.region}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-500">{g.region}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="inline-flex items-center gap-2 text-navy-800 hover:text-navy-900 hover:underline">
                        <Icon name="pin" className="h-4 w-4 text-navy-400" /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-navy-900 sm:text-3xl">Questions about finding a physio</h2>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
