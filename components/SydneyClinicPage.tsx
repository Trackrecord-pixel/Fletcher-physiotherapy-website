import Link from "next/link";
import Image from "next/image";
import PageHero from "./PageHero";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import { BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site } from "@/lib/site";
import type { SydneyClinic } from "@/lib/sydneyClinics";

const conditions = [
  { label: "Persistent (chronic) pain", href: "/chronic-pain-management" },
  { label: "Lower back pain and sciatica", href: "/lower-back-pain-physiotherapy" },
  { label: "Neck pain and neck-related headaches", href: "/neck-pain-physiotherapy" },
  { label: "Shoulder pain", href: "/shoulder-pain-physiotherapy" },
  { label: "Knee pain", href: "/knee-pain-physiotherapy" },
  { label: "Hip pain and hip arthritis", href: "/hip-pain-physiotherapy" },
  { label: "Arthritis and joint pain", href: "/arthritis-physiotherapy-newcastle" },
  { label: "Sports injuries", href: "/sports-injury-physiotherapy" },
  { label: "Recovery after surgery or hospital", href: "/post-surgical-rehabilitation" },
  { label: "Balance problems and falls risk", href: "/falls-prevention-physiotherapy-newcastle" },
  { label: "Weakness and deconditioning", href: "/exercise-rehabilitation" },
  { label: "Work and car accident injuries", href: "/workers-compensation-physiotherapy" },
];

const telHref = (phone: string) => `tel:+61${phone.replace(/\D/g, "").replace(/^0/, "")}`;

export default function SydneyClinicPage({ c }: { c: SydneyClinic }) {
  const fullAddress = `${c.streetAddress}, ${c.suburb} NSW ${c.postcode}`;
  const mapQuery = encodeURIComponent(`${c.hostCentre}, ${fullAddress}`);
  const tel = telHref(c.phone);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${c.hostCentre}, ${fullAddress}`)}`;
  const photos = c.photos ?? [];
  const daysText = c.days ? `on ${c.days}` : "on set days each week";

  const faqs = [
    {
      q: `How do I book physio in ${c.suburb}?`,
      a: `Call ${c.hostCentre} reception on ${c.phone}. Reception books physiotherapy appointments for ${c.brandName}.`,
    },
    {
      q: `Where is ${c.brandName}?`,
      a: `We consult inside ${c.hostCentre}, ${fullAddress}, ${daysText}. Reception can confirm the next available physio appointment.`,
    },
    {
      q: `Do I need a referral to see a physio in ${c.suburb}?`,
      a: `No — you can book privately without a referral. A GP referral is needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP). If your GP is at ${c.hostCentre}, ask them about a referral at your next appointment.`,
    },
    ...(c.bulkBilling
      ? [
          {
            q: `Is physio bulk billed in ${c.suburb}?`,
            a: `Yes, for eligible Medicare patients referred by their GP under a GP Chronic Condition Management Plan (GPCCMP). Eligible Medicare-funded appointments have no out-of-pocket gap fee. Private appointments are also available.`,
          },
        ]
      : []),
    {
      q: `Can I use Medicare for physio in ${c.suburb}?`,
      a: `Eligible patients with a chronic condition can generally access up to 5 Medicare-funded allied health services per calendar year when referred by their GP under a GPCCMP. These are shared across all allied health services. Your GP will tell you if you're eligible.`,
    },
    {
      q: `Do you see DVA patients in ${c.suburb}?`,
      a: `Yes. Veterans with a DVA Gold Card, or a White Card for an accepted condition, can see us with a referral from their GP. Bring your DVA card and referral to your first appointment.`,
    },
    {
      q: `Do you see NDIS and Support at Home clients at the ${c.suburb} clinic?`,
      a: `Yes. We're a registered NDIS provider (agency-, plan- and self-managed) and see Support at Home clients. Let reception know your funding type when you book.`,
    },
    {
      q: `I can't get to the clinic. Can a physio come to me?`,
      a: `We provide home visit physiotherapy in Sydney. Availability depends on your suburb — call us on ${site.phone} to check.`,
    },
  ];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Sydney", href: "/physiotherapy-sydney" },
    { name: c.brandName, href: `/${c.slug}` },
  ];

  const CallButton = ({ className = "btn-primary" }: { className?: string }) => (
    <a href={tel} className={className}>
      <Icon name="phone" className="h-5 w-5" /> Call {c.phone} to book
    </a>
  );

  return (
    <>
      <PageHero eyebrow={c.h1 ? c.brandName : `Physiotherapy ${c.suburb}`} title={c.h1 ?? c.brandName} intro={c.intro} breadcrumb={crumbs} />

      {/* Quick contact — first thing visitors from Google see */}
      <section className="border-b border-navy-100 bg-white">
        <div className={c.poster ? "container-px grid gap-6 py-8 lg:grid-cols-12 lg:items-center" : "container-px py-6"}>
          {c.poster && (
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-navy-100 shadow-card lg:col-span-7">
              <Image src={c.poster.src} alt={c.poster.alt} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" priority />
            </div>
          )}
          <div className={c.poster ? "grid gap-4 lg:col-span-5" : "grid gap-4 sm:grid-cols-3"}>
          <a href={tel} className="flex items-center gap-3 rounded-2xl bg-navy-900 p-4 text-white hover:bg-navy-800">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-clay-500"><Icon name="phone" className="h-5 w-5" /></span>
            <span><span className="block text-xs uppercase tracking-widest text-beige-200">Call reception to book</span><span className="text-lg font-semibold">{c.phone}</span></span>
          </a>
          <a href={directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-navy-100 p-4 hover:border-navy-800">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-beige-100 text-navy-800"><Icon name="pin" className="h-5 w-5" /></span>
            <span><span className="block text-xs uppercase tracking-widest text-navy-500">Get directions</span><span className="font-semibold text-navy-900">{c.streetAddress}, {c.suburb}</span></span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-navy-100 p-4">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-beige-100 text-navy-800"><Icon name="clock" className="h-5 w-5" /></span>
            <span><span className="block text-xs uppercase tracking-widest text-navy-500">Physio days</span><span className="font-semibold text-navy-900">{c.days ?? "Ask reception"}</span></span>
          </div>
          </div>
        </div>
      </section>

      {c.bulkBilling && (
        <section className="bg-white pt-12" aria-labelledby="bulk-billing-h">
          <div className="container-px">
            <div className="grid gap-6 rounded-3xl border border-beige-200 bg-sand p-7 sm:p-9 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">Medicare · GPCCMP</p>
                <h2 id="bulk-billing-h" className="mt-2 text-2xl text-navy-900 sm:text-3xl">Bulk Billing Physiotherapy in {c.suburb}</h2>
                <p className="mt-3 text-navy-700">
                  Fletcher Physiotherapy provides bulk billed physiotherapy for eligible Medicare patients referred under a GP
                  Chronic Condition Management Plan (GPCCMP). Eligible Medicare-funded appointments have no out-of-pocket gap
                  fee. Private physiotherapy appointments are also available.
                </p>
                <Link href="/bulk-billing-physiotherapy-yagoona" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-euc-700 hover:text-euc-800">
                  Eligibility, GPCCMP referrals and what to bring <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-4">
                <a href={tel} className="btn-primary w-full"><Icon name="phone" className="h-5 w-5" /> Call {c.phone}</a>
                <p className="mt-2 text-center text-sm text-navy-600">Call {c.phone} to book at our {c.suburb} clinic.</p>
              </div>
            </div>
          </div>
        </section>
      )}


      {photos.length > 0 && (
        <section className="bg-sand py-10" aria-label={`Photos of ${c.brandName}`}>
          <div className="container-px">
            <h2 className="text-2xl text-navy-900">Inside our {c.suburb} clinic</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((p, i) => (
                <div key={p.src} className={`relative overflow-hidden rounded-2xl border border-navy-100 shadow-card ${i === 0 ? "aspect-[4/3] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto" : "aspect-[4/3]"}`}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" priority={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-clay-200 bg-clay-50 p-6">
              <h2 className="text-xl text-navy-900">How to book</h2>
              <p className="mt-2 text-navy-700">
                Appointments are booked through <strong>{c.hostCentre} reception</strong>. Call{" "}
                <a href={tel} className="font-semibold text-navy-900 underline">{c.phone}</a> and ask for a physiotherapy
                appointment with Fletcher Physiotherapy.
              </p>
              <div className="mt-4"><CallButton /></div>
            </div>

            <div className="prose-navy mt-10 space-y-4">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Physiotherapy at {c.hostCentre}</h2>
              {c.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">What we help with</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {conditions.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={item.href} className="flex items-start gap-3 text-navy-700 hover:text-euc-700">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800"><Icon name="check" className="h-4 w-4" /></span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Payment and funding</h2>
              <ul className="mt-4 space-y-3 text-navy-700">
                <li>
                  <strong className="text-navy-900">Medicare (GPCCMP):</strong>{" "}
                  {c.bulkBilling ? (
                    <>
                      bulk billed for eligible patients referred under a GP Chronic Condition Management Plan —{" "}
                      <Link href="/bulk-billing-physiotherapy-yagoona" className="font-semibold text-euc-700 underline underline-offset-4">how it works</Link>.
                    </>
                  ) : (
                    "with a GP Chronic Condition Management Plan referral, eligible patients may claim a Medicare rebate."
                  )}
                </li>
                <li><strong className="text-navy-900">DVA:</strong> Gold Card holders, and White Card holders for accepted conditions, with a GP referral.</li>
                <li><strong className="text-navy-900">NDIS:</strong> registered NDIS provider ({site.ndisRegistrationNumber}) — agency-, plan- and self-managed participants.</li>
                <li><strong className="text-navy-900">Support at Home:</strong> physiotherapy through your provider.</li>
                <li><strong className="text-navy-900">WorkCover:</strong> work injuries with an accepted workers compensation claim.</li>
                <li><strong className="text-navy-900">CTP:</strong> motor vehicle accident injuries with an eligible NSW CTP claim.</li>
                <li><strong className="text-navy-900">Private:</strong> no referral needed. Receipts provided for private health fund claims.</li>
              </ul>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="card">
                <h3 className="flex items-center gap-2 text-xl text-navy-900"><Icon name="pin" className="h-5 w-5 text-navy-700" /> Getting there</h3>
                <p className="prose-navy mt-3">{c.transport}</p>
              </div>
              <div className="card">
                <h3 className="flex items-center gap-2 text-xl text-navy-900"><Icon name="users" className="h-5 w-5 text-navy-700" /> Patients from nearby</h3>
                <p className="prose-navy mt-3">We see patients from {c.suburb} and nearby suburbs including {c.nearby.join(", ")}.</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-navy-900 sm:text-3xl">Find us</h2>
              <p className="mt-2 text-navy-700">Inside {c.hostCentre}, {fullAddress}. Check in at reception and let them know you&rsquo;re seeing the physio.</p>
              <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-4"><Icon name="pin" className="h-4 w-4" /> Get directions</a>
              <div className="mt-5 overflow-hidden rounded-2xl border border-navy-100 shadow-card">
                <iframe title={`Map of ${c.brandName} — ${c.hostCentre}`} src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0" />
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
                <p className="text-sm font-semibold uppercase tracking-widest text-beige-200">Clinic appointments</p>
                <h2 className="mt-1 text-xl text-white">{c.brandName}</h2>
                <p className="mt-1 text-sm text-navy-100">Inside {c.hostCentre}</p>
                <p className="mt-4 flex items-start gap-2 text-sm text-navy-100"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-beige-200" /> {fullAddress}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-navy-100"><Icon name="clock" className="h-4 w-4 text-beige-200" /> {c.days ? `Physio: ${c.days}` : "Call reception for physio days"}</p>
                <CallButton className="btn-accent mt-5 w-full" />
                <p className="mt-3 text-center text-xs text-navy-200">Bookings through clinic reception</p>
              </div>
              <div className="card">
                <h2 className="text-lg text-navy-900">Can&rsquo;t get to the clinic?</h2>
                <p className="prose-navy mt-2 text-sm">We also provide home visit physiotherapy in Sydney, for older adults, NDIS participants and Support at Home clients.</p>
                <Link href="/physiotherapy-sydney" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-navy-800 hover:text-navy-900">Sydney home visits <Icon name="arrow" className="h-4 w-4" /></Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="container-px flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-white">Book physio at {c.hostCentre}</h2>
            <p className="mt-3 text-navy-100">Call reception on {c.phone} and ask for Fletcher Physiotherapy.</p>
          </div>
          <CallButton className="btn-accent" />
        </div>
      </section>

      {/* Mobile bar: calls clinic reception (sits over the site-wide call bar on this page) */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-navy-100 bg-white p-3 shadow-[0_-4px_16px_rgba(12,24,41,0.08)] md:hidden">
        <a href={tel} className="btn-primary w-full justify-center text-sm"><Icon name="phone" className="h-4 w-4" /> Call to book</a>
        <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-accent w-full justify-center text-sm"><Icon name="pin" className="h-4 w-4" /> Directions</a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "Physiotherapy"],
            "@id": `${site.url}/${c.slug}#clinic`,
            name: c.brandName,
            url: `${site.url}/${c.slug}`,
            telephone: c.phone,
            medicalSpecialty: "Physiotherapy",
            image: photos.length ? photos.map((p) => `${site.url}${p.src}`) : `${site.url}${c.poster?.src ?? "/images/og-default.png"}`,
            parentOrganization: { "@id": `${site.url}/#organization` },
            containedInPlace: { "@type": "MedicalClinic", name: c.hostCentre },
            address: {
              "@type": "PostalAddress",
              streetAddress: c.streetAddress,
              addressLocality: c.suburb,
              addressRegion: "NSW",
              postalCode: c.postcode,
              addressCountry: "AU",
            },
            areaServed: [c.suburb, ...c.nearby].map((name) => ({ "@type": "Place", name })),
            ...(c.hours?.length
              ? { openingHoursSpecification: c.hours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.dayOfWeek, opens: h.opens, closes: h.closes })) }
              : {}),
          }),
        }}
      />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
