import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import CallbackForm from "@/components/CallbackForm";
import HeroVideo from "@/components/HeroVideo";
import AuthorReview from "@/components/AuthorReview";
import { ReviewStrip } from "@/components/HomeConversion";
import { FaqSchema, PersonSchema } from "@/components/StructuredData";
import { homeFaqs, clinics, servicesNav, conditionsNav, site } from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

const telHref = (phone: string) => `tel:+61${phone.replace(/\D/g, "").replace(/^0/, "")}`;

const allClinics = [
  ...clinics.map((c) => ({
    slug: c.slug,
    name: `Fletcher Physiotherapy ${c.suburb}`,
    region: "Newcastle",
    host: c.hostCentre,
    address: c.address,
    days: c.dayShort,
    phone: site.phone,
    phoneNote: "Book online · bulk billing for eligible GPCCMP patients",
    online: true,
  })),
  ...sydneyClinics.map((c) => ({
    slug: c.slug,
    name: c.brandName,
    region: "Sydney",
    host: c.hostCentre,
    address: `${c.streetAddress}, ${c.suburb} NSW ${c.postcode}`,
    days: c.days ?? "Call reception for days",
    phone: c.phone,
    phoneNote: c.bulkBilling ? "Reception bookings · bulk billing for eligible GPCCMP patients" : "Bookings through clinic reception",
    online: false,
  })),
];

const homeAreas = [
  {
    title: "Sydney",
    href: "/home-visit-physiotherapy-sydney",
    text: "Sydney Olympic Park and the Inner West, the Parramatta area, and Bankstown–Yagoona.",
    suburbs: ["Sydney Olympic Park", "Homebush", "Strathfield", "Concord", "Rhodes", "Lidcombe", "Auburn", "Parramatta", "Bankstown"],
  },
  {
    title: "Newcastle & Lake Macquarie",
    href: "/home-visit-physiotherapy-newcastle",
    text: "Our home-visit service across Newcastle, Lake Macquarie and the lower Hunter.",
    suburbs: ["Newcastle", "Charlestown", "Lambton", "Wallsend", "Warners Bay", "Belmont", "Toronto", "Maitland"],
  },
  {
    title: "Central Coast",
    href: "/physiotherapy-central-coast",
    text: "Home visits across the Central Coast, from Gosford to Wyong.",
    suburbs: ["Gosford", "Erina", "Wyong", "Tuggerah"],
  },
];

const whatWeTreat: { label: string; text: string; href: string; icon: IconName }[] = [
  { label: "Back & Neck Pain", text: "Acute and persistent back pain, sciatica, neck pain and neck-related headaches.", href: "/lower-back-pain-physiotherapy", icon: "pulse" },
  { label: "Chronic Pain", text: "Persistent pain care led by an APA Titled Pain Physiotherapist.", href: "/chronic-pain-management", icon: "pulse" },
  { label: "Shoulder & Knee Pain", text: "Rotator cuff, frozen shoulder, knee osteoarthritis and kneecap pain.", href: "/shoulder-pain-physiotherapy", icon: "joint" },
  { label: "Arthritis", text: "Exercise and education for hip, knee and spinal osteoarthritis.", href: "/arthritis-physiotherapy-newcastle", icon: "joint" },
  { label: "Sports Injuries", text: "Sprains, strains and tendon injuries, with return-to-sport planning.", href: "/sports-injury-physiotherapy", icon: "strength" },
  { label: "Post-Surgical Rehabilitation", text: "Before and after joint replacement and orthopaedic surgery.", href: "/post-surgical-rehabilitation", icon: "recovery" },
  { label: "Falls Prevention", text: "Balance, strength and mobility for steadier, more confident movement.", href: "/falls-prevention-physiotherapy-newcastle", icon: "balance" },
  { label: "Bulk Billing Physiotherapy", text: "At our Jesmond, Yagoona and Parramatta clinics — for eligible Medicare GPCCMP patients.", href: "/bulk-billing-physiotherapy-yagoona", icon: "check" },
];

const reasons: { n: string; title: string; text: string }[] = [
  {
    n: "01",
    title: "Led by an APA Titled Pain Physiotherapist",
    text: "Clinical leadership from Daniel Lee — APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management).",
  },
  {
    n: "02",
    title: "Two ways to be seen",
    text: "Clinic appointments inside GP practices, or home visits where you live. You choose what suits you.",
  },
  {
    n: "03",
    title: "Working alongside your GP and care team",
    text: "Clear reports and communication for GPs, support coordinators, case managers and families — with your consent.",
  },
  {
    n: "04",
    title: "Most funding types welcome",
    text: "Medicare GPCCMP, DVA, WorkCover, NDIS, Support at Home and private patients.",
  },
];

const credentials = [
  "APA Titled Pain Physiotherapist",
  "Master of Medicine (Pain Management), University of Sydney",
  "Bachelor of Physiotherapy (Honours), University of Newcastle",
  "AHPRA-registered · Registered NDIS provider",
];

export default function HomePage() {
  return (
    <>
      {/* 1 · HERO — full-bleed background video, centred (dark theme) */}
      <section
        className="relative isolate flex min-h-[82vh] items-center justify-center overflow-hidden bg-cover bg-center text-center lg:min-h-[90vh]"
        style={{ backgroundImage: "url(/videos/fletcher-hero-poster.jpg)", backgroundColor: "#0a0f0d" }}
      >
        <HeroVideo src="/videos/fletcher-hero.mp4" poster="/videos/fletcher-hero-poster.jpg" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(10,15,13,0.62)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0f1714] to-transparent" />

        <div className="container-px w-full py-24">
          <p className="text-sm font-normal uppercase tracking-[0.18em] text-[#edf4f2] sm:text-base">
            Sydney · Newcastle · Central Coast
          </p>
          <p aria-hidden="true" className="mt-4 font-display text-[2.6rem] font-bold uppercase leading-[0.95] tracking-[0.06em] text-[#e6fff6] sm:text-7xl lg:text-[6.2rem]">
            Fletcher
          </p>
          <p aria-hidden="true" className="mt-2 text-lg font-medium uppercase tracking-[0.42em] text-[#e6fff6] sm:text-2xl lg:text-[2.1rem]">
            Physiotherapy
          </p>
          <h1 className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-snug tracking-normal text-[#edf4f2] sm:text-2xl">
            Expert physiotherapy — <span className="text-[#87f9d3]">in clinic or at home.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#c9d6d1] sm:text-lg">
            Led by an APA Titled Pain Physiotherapist. Clinics in Jesmond, Yagoona and Parramatta; home visits across
            Sydney, Newcastle and the Central Coast.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/find-a-clinic" className="btn-outline w-full min-w-[200px] sm:w-auto">
              Find a Clinic
            </Link>
            <Link href="/home-visits" className="btn-outline w-full min-w-[200px] sm:w-auto">
              Book a Home Visit
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#c9d6d1]">
            Or call{" "}
            <a href={site.phoneHref} className="font-medium text-[#87f9d3] underline underline-offset-4">
              {site.phone}
            </a>{" "}
            · Mon–Fri, 8am–6pm
          </p>
        </div>
      </section>

      {/* 2 · TWO PATHWAYS */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="pathways">
        <div className="container-px">
          <h2 id="pathways" className="max-w-2xl text-3xl text-navy-900 sm:text-4xl">
            Two ways to see us. <span className="text-euc-600">The same standard of care.</span>
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-[2rem] bg-euc-600 p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-200">In clinic</p>
                <h3 className="mt-3 text-3xl text-white">Clinic physiotherapy</h3>
                <p className="mt-3 text-euc-50/90">
                  Consultations inside GP practices in Jesmond, Yagoona and Parramatta — hands-on treatment and
                  exercise-based rehabilitation.
                </p>
                <ul className="mt-6 grid gap-2.5 text-[0.95rem] text-white/95 sm:grid-cols-2">
                  {["Persistent pain", "Back, neck & joint pain", "Post-surgical rehab", "Sports & work injuries", "Balance & falls", "GPCCMP, DVA, WorkCover"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-euc-200" /> {x}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  <Link href="/find-a-clinic" className="btn bg-white text-euc-700 hover:bg-euc-50">
                    Find a Clinic <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-[2rem] bg-navy-900 p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige-300">At home</p>
                <h3 className="mt-3 text-3xl text-white">Home visit physiotherapy</h3>
                <p className="mt-3 text-navy-100">
                  We come to your home, retirement village or aged care residence across Sydney, Newcastle, Lake
                  Macquarie and the Central Coast — no travel, parking or waiting rooms.
                </p>
                <ul className="mt-6 grid gap-2.5 text-[0.95rem] text-white/95 sm:grid-cols-2">
                  {["Older adults", "Falls prevention", "NDIS participants", "Support at Home", "After hospital", "Residential aged care"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-beige-300" /> {x}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  <Link href="/home-visits" className="btn bg-white text-navy-900 hover:bg-beige-50">
                    Book a Home Visit <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 · CLINIC LOCATIONS */}
      <section className="bg-cream py-16 lg:py-24" aria-labelledby="clinic-locations">
        <div className="container-px">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> Clinic locations</p>
              <h2 id="clinic-locations" className="mt-4 text-3xl text-navy-900 sm:text-4xl">Our clinics</h2>
            </div>
            <Link href="/clinic-physiotherapy" className="inline-flex items-center gap-2 font-semibold text-euc-700 hover:text-euc-800">
              All clinic information <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <Link
            href="/bulk-billing-physiotherapy-yagoona"
            className="mt-8 flex flex-col gap-2 rounded-2xl border border-euc-200 bg-euc-50 px-6 py-4 transition-colors hover:border-euc-600 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="flex items-center gap-3 font-semibold text-navy-900">
              <Icon name="check" className="h-5 w-5 flex-shrink-0 text-euc-600" />
              Bulk Billing Physiotherapy Available at Our Clinics for Eligible Medicare Patients
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-euc-700">
              How it works <Icon name="arrow" className="h-4 w-4" />
            </span>
          </Link>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {allClinics.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <article className="flex h-full flex-col rounded-3xl border border-beige-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">{c.region}</p>
                  <h3 className="mt-2 text-2xl text-navy-900">{c.name.replace("Fletcher Physiotherapy ", "")}</h3>
                  <p className="mt-1 text-sm text-navy-500">Inside {c.host}</p>
                  <dl className="mt-5 space-y-2 text-sm text-navy-700">
                    <div className="flex gap-2"><Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-euc-600" /><dd>{c.days}</dd></div>
                    <div className="flex gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-euc-600" /><dd>{c.address}</dd></div>
                  </dl>
                  <div className="mt-auto grid gap-2 pt-6">
                    <a href={telHref(c.phone)} className="btn-primary w-full text-sm">
                      <Icon name="phone" className="h-4 w-4" /> {c.phone}
                    </a>
                    <p className="text-center text-xs text-navy-500">{c.phoneNote}</p>
                    <Link href={`/${c.slug}`} className="text-center text-sm font-semibold text-navy-800 hover:text-euc-700">
                      Clinic details →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · HOME VISIT AREAS */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="home-areas">
        <div className="container-px">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> Home visit areas</p>
              <h2 id="home-areas" className="mt-4 text-3xl text-navy-900 sm:text-4xl">We come to you</h2>
            </div>
            <Link href="/home-visits" className="inline-flex items-center gap-2 font-semibold text-euc-700 hover:text-euc-800">
              How home visits work <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <Link href={a.href} className="group flex h-full flex-col rounded-3xl border border-beige-200 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-euc-200 hover:bg-white hover:shadow-card-hover">
                  <Icon name="home" className="h-6 w-6 text-euc-600" />
                  <h3 className="mt-4 text-2xl text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{a.text}</p>
                  <p className="mt-4 text-xs leading-relaxed text-navy-500">{a.suburbs.join(" · ")}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-euc-700">
                    Explore this area <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · WHY FLETCHER */}
      <section className="bg-navy-900 py-16 text-white lg:py-24" aria-labelledby="why">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige-300">Why Fletcher</p>
            <h2 id="why" className="mt-4 text-3xl text-white sm:text-4xl">Physiotherapy built around your life</h2>
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r) => (
              <div key={r.n} className="border-t border-navy-700 pt-5">
                <p className="font-serif text-lg text-clay-300">{r.n}</p>
                <h3 className="mt-2 text-xl text-white">{r.title}</h3>
                <p className="mt-2 text-navy-200">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · MEET DANIEL */}
      <section className="bg-cream py-16 lg:py-24" id="meet-daniel" aria-labelledby="daniel">
        <div className="container-px grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-euc-100">
              <Image src="/team/daniel-lee.jpg" alt="Daniel Lee, APA Titled Pain Physiotherapist and Director of Fletcher Physiotherapy" fill sizes="(max-width: 1024px) 90vw, 440px" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> Clinical lead</p>
            <h2 id="daniel" className="mt-4 text-3xl text-navy-900 sm:text-5xl">Daniel Lee</h2>
            <p className="mt-2 text-navy-500">Director &amp; Principal Physiotherapist</p>
            <div className="prose-navy mt-6">
              <p>
                Daniel is an APA Titled Pain Physiotherapist — a title awarded by the Australian Physiotherapy
                Association to physiotherapists who have completed advanced training in pain. He works with persistent
                pain, complex conditions and older adults, combining hands-on treatment with practical, evidence-based
                exercise and education.
              </p>
              <p>
                Whether you see him in clinic or at home, the focus is the same: understanding what matters to you,
                and building a clear plan to help you move with more confidence. Daniel speaks English and Korean.
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {credentials.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm font-medium text-navy-800">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-euc-600" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/daniel-lee-physiotherapist-newcastle" className="btn-secondary">More about Daniel</Link>
              <Link href="/our-team" className="btn-secondary">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WHAT WE TREAT */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="services">
        <div className="container-px">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> What we treat</p>
              <h2 id="services" className="mt-4 text-3xl text-navy-900 sm:text-4xl">Physiotherapy for common conditions</h2>
              <p className="mt-3 max-w-2xl text-navy-600">Available in clinic, at home, or both — we&rsquo;ll recommend what suits your situation.</p>
            </div>
            <Link href="/services" className="btn-secondary">All 29 services <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeTreat.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="card card-hover group flex h-full flex-col">
                  <Icon name={t.icon} className="h-6 w-6 text-euc-600" />
                  <h3 className="mt-4 text-lg text-navy-900">{t.label}</h3>
                  <p className="mt-1 flex-1 text-sm text-navy-600">{t.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-euc-700">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {[...servicesNav.filter((x) => x.href !== "/services"), ...conditionsNav]
              .filter((x, i, arr) => arr.findIndex((y) => y.href === x.href) === i)
              .map((x) => (
                <Link key={x.href} href={x.href} className="group flex items-center justify-between border-b border-beige-200 py-3 text-navy-800 transition-colors hover:text-euc-700">
                  <span>{x.label}</span>
                  <Icon name="arrow" className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-euc-600" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* 8 · REVIEWS (service comments only — AHPRA) */}
      <ReviewStrip />

      {/* 9 · REFERRERS */}
      <section className="bg-euc-700 py-16 text-white lg:py-20" aria-labelledby="referrers">
        <div className="container-px grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-euc-200">For GPs &amp; care coordinators</p>
            <h2 id="referrers" className="mt-4 text-3xl text-white sm:text-4xl">Refer with confidence — and less admin</h2>
            <p className="mt-4 max-w-2xl text-euc-50/90">
              We accept referrals from GPs, NDIS support coordinators, Support at Home providers, aged care teams,
              case managers and families. We arrange the appointment — in clinic or at home — and keep you updated
              with clear, timely reports.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Link href="/refer-a-patient" className="btn bg-white text-euc-700 hover:bg-euc-50">
              Refer a Patient <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={site.emailHref} className="text-sm font-semibold text-euc-100 underline underline-offset-4">{site.email}</a>
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="faqs">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> FAQs</p>
            <h2 id="faqs" className="mt-4 text-3xl text-navy-900 sm:text-4xl">Questions, answered</h2>
            <Link href="/faqs" className="btn-secondary mt-6">All FAQs <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={homeFaqs} />
            <AuthorReview pageUrl="/" />
          </div>
        </div>
      </section>

      {/* 11 · FINAL BOOKING */}
      <section className="bg-cream py-16 lg:py-24" aria-labelledby="book-now" id="callback">
        <div className="container-px grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow"><span aria-hidden="true" className="h-px w-8 bg-clay-500" /> Get started</p>
            <h2 id="book-now" className="mt-4 text-4xl text-navy-900 sm:text-5xl">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-navy-600">
              Choose a clinic or a home visit — or request a call back and we&rsquo;ll help you decide.
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <Link href="/find-a-clinic" className="btn-primary">Find a Clinic</Link>
              <Link href="/home-visits" className="btn-accent">Book a Home Visit</Link>
            </div>
            <div className="mt-8 space-y-2 text-navy-700">
              <p><a href={site.phoneHref} className="font-semibold text-navy-900 hover:text-euc-700">{site.phone}</a> · Mon–Fri, 8am–6pm</p>
              <p><a href={site.emailHref} className="font-semibold text-navy-900 hover:text-euc-700">{site.email}</a></p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <CallbackForm />
          </div>
        </div>
      </section>

      <FaqSchema items={homeFaqs} />
      <PersonSchema />
    </>
  );
}
