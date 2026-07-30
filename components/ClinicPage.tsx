import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import { BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site, type Clinic } from "@/lib/site";

const conditions = [
  "Chronic and persistent pain",
  "Musculoskeletal injuries",
  "Sports injuries",
  "Back and neck pain",
  "Arthritis and joint pain",
  "Balance problems and falls risk",
  "Post-operative recovery",
  "Muscle weakness and deconditioning",
];

const serviceLinks = [
  { label: "Chronic Pain Management", href: "/chronic-pain-management", icon: "pulse" },
  { label: "Falls Prevention", href: "/falls-prevention-physiotherapy-newcastle", icon: "balance" },
  { label: "Aged Care Physiotherapy", href: "/aged-care-physiotherapy-newcastle", icon: "user" },
  { label: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy-newcastle", icon: "home" },
  { label: "NDIS Physiotherapy", href: "/ndis-physiotherapy-newcastle", icon: "shield" },
  { label: "All Services", href: "/services", icon: "heart" },
] as const;

export default function ClinicPage({ c }: { c: Clinic }) {
  const mapQuery = encodeURIComponent(`${c.hostCentre}, ${c.address}`);
  const faqs = [
    { q: `Where is your ${c.suburb} physiotherapy clinic?`, a: `Fletcher Physiotherapy consults at ${c.hostCentre}, ${c.address}. Appointments are available on ${c.dayShort}. Call ${site.phone} or book online.` },
    { q: `What day can I see a physiotherapist in ${c.suburb}?`, a: `Our physiotherapist consults at the ${c.suburb} clinic every ${c.consultingDay}. If that doesn't suit, we also offer home visits and a second Newcastle clinic on another day.` },
    { q: `Do I need a referral to see a physiotherapist in ${c.suburb}?`, a: `No — you can book a private physiotherapy appointment directly. A GP referral is only needed for certain funding, such as a Medicare Chronic Condition Management (EPC) plan or DVA.` },
    { q: `Can I claim a Medicare rebate at the ${c.suburb} clinic?`, a: `Eligible patients with a valid Medicare Chronic Condition Management (EPC) referral from their GP may be able to claim a Medicare rebate. Please contact us to discuss your eligibility.` },
    { q: `Do you treat DVA patients in ${c.suburb}?`, a: `Yes, we welcome DVA patients. Veterans with a valid referral from their GP may be eligible for physiotherapy under DVA arrangements. Contact us to confirm the details.` },
  ];
  const crumbs = [{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: `${c.suburb} Clinic`, href: `/${c.slug}` }];

  return (
    <>
      <PageHero
        eyebrow={`Physiotherapy ${c.suburb}`}
        title={`Physiotherapy ${c.suburb}`}
        intro={c.intro}
        breadcrumb={crumbs}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-navy space-y-4">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">About our {c.suburb} clinic</h2>
              {c.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Conditions we treat in {c.suburb}</h2>
              <p className="prose-navy mt-4">Our {c.suburb} physiotherapy appointments support a wide range of conditions and goals, including:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {conditions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800"><Icon name="check" className="h-4 w-4" /></span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Services offered at {c.suburb}</h2>
              <p className="prose-navy mt-4">We provide physiotherapy, chronic pain management, musculoskeletal and sports injury treatment, falls prevention, balance assessment and post-operative rehabilitation at our {c.suburb} clinic.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="card card-hover flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-beige-100 text-navy-800"><Icon name={sl.icon} className="h-5 w-5" /></span>
                    <span className="font-semibold text-navy-900">{sl.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Medicare EPC / CDM physiotherapy</h2>
              <p className="prose-navy mt-4">Eligible patients with a valid Medicare Chronic Condition Management (EPC) referral from their GP may be able to claim a Medicare rebate for physiotherapy. Please contact us to discuss your eligibility and how the process works.</p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">DVA patients</h2>
              <p className="prose-navy mt-4">We welcome Department of Veterans' Affairs (DVA) patients at our {c.suburb} clinic. Veterans with a valid referral from their GP may be eligible for physiotherapy under DVA arrangements. Contact us and we'll help confirm your eligibility.</p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Private physiotherapy</h2>
              <p className="prose-navy mt-4">Private patients are welcome and no referral is required. You can book a private physiotherapy appointment directly, and we're happy to provide receipts for private health fund claims where applicable.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="card">
                <h3 className="flex items-center gap-2 text-xl text-navy-900"><Icon name="pin" className="h-5 w-5 text-navy-700" /> Parking</h3>
                <p className="prose-navy mt-3">{c.parking}</p>
              </div>
              <div className="card">
                <h3 className="flex items-center gap-2 text-xl text-navy-900"><Icon name="check" className="h-5 w-5 text-navy-700" /> Accessibility</h3>
                <p className="prose-navy mt-3">{c.accessibility}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Find our {c.suburb} clinic</h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-navy-100 shadow-card">
                <iframe title={`Map of Fletcher Physiotherapy ${c.suburb} — ${c.hostCentre}`} src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0" />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-5"><FAQAccordion items={faqs} /></div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="card bg-navy-900 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-beige-200">{c.dayShort}</p>
                <h2 className="mt-1 text-xl text-white">Fletcher Physiotherapy {c.suburb}</h2>
                <p className="mt-1 text-sm text-navy-100">{c.hostCentre}</p>
                <p className="mt-4 flex items-start gap-2 text-sm text-navy-100"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-beige-200" /> {c.address}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-navy-100"><Icon name="clock" className="h-4 w-4 text-beige-200" /> Consulting {c.dayShort}</p>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent mt-5 w-full">Book Appointment <Icon name="arrow" className="h-4 w-4" /></a>
                <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-beige-200 hover:text-white"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
              </div>
              <div className="card">
                <h2 className="text-lg text-navy-900">Prefer to stay home?</h2>
                <p className="prose-navy mt-2 text-sm">We also provide home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast.</p>
                <Link href="/home-visit-physiotherapy-newcastle" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-navy-800 hover:text-navy-900">Home visit physiotherapy <Icon name="arrow" className="h-4 w-4" /></Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Book physiotherapy at our ${c.suburb} clinic`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "Physiotherapy"],
            "@id": `${site.url}/${c.slug}#clinic`,
            name: `Fletcher Physiotherapy — ${c.suburb}`,
            url: `${site.url}/${c.slug}`,
            telephone: site.phone,
            email: site.email,
            medicalSpecialty: "Physiotherapy",
            image: `${site.url}/images/og-default.png`,
            parentOrganization: { "@id": `${site.url}/#organization` },
            address: {
              "@type": "PostalAddress",
              streetAddress: c.address.split(", ").slice(0, -1).join(", "),
              addressLocality: c.suburb,
              addressRegion: "NSW",
              postalCode: c.postcode,
              addressCountry: "AU",
            },
            geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: c.consultingDay,
              opens: "08:00",
              closes: "17:00",
            },
            areaServed: { "@type": "City", name: "Newcastle", address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
          }),
        }}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
