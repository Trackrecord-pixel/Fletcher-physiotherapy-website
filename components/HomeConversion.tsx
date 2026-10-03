import Image from "next/image";
import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { reviewQuotes, type ReviewQuote } from "@/lib/reviews";

const googleReviewsUrl = site.reviewsUrl.replace("/review", "");

/* ------------------------------------------------------------------ */
/* Social proof — service-only review excerpts (AHPRA compliant)       */
/* ------------------------------------------------------------------ */
export function ReviewStrip({
  quotes = reviewQuotes.slice(0, 3),
  title = "What clients and families say about our service",
  tone = "white",
}: {
  quotes?: ReviewQuote[];
  title?: string;
  tone?: "white" | "sand";
}) {
  return (
    <section className={`section-py ${tone === "sand" ? "bg-sand" : "bg-white"}`}>
      <div className="container-px">
        <SectionHeading center eyebrow="From our Google reviews" title={title} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {quotes.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card h-full">
                <blockquote className=" font-serif text-lg leading-relaxed text-navy-900">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-navy-500">
                  — {r.who}, Google review
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Read all our Google reviews <Icon name="arrow" className="h-4 w-4" />
          </a>
          <p className="max-w-xl text-xs text-navy-400">
            Excerpts from public Google reviews about our service (not about treatment results), shortened
            (&hellip;) but not reworded. Reviewers are not named. Individual experiences vary.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why call us                                                        */
/* ------------------------------------------------------------------ */
const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "home", title: "We come to you — in Sydney too", text: "No driving, parking, stairs or waiting rooms. We visit homes, retirement villages and aged care across the Hunter and Central Coast, and around Sydney Olympic Park and the Inner West from 9 November 2026." },
  { icon: "star", title: "Senior-led, experienced care", text: "Led by Daniel Lee, an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management) from the University of Sydney." },
  { icon: "users", title: "Time to listen and explain", text: "We don't rush. We explain what we find in plain language, answer your questions and make sure you know what to do between visits." },
  { icon: "heart", title: "Families are welcome", text: "Family members and carers can join sessions and, with your permission, we keep them updated — especially helpful when you live far away." },
  { icon: "shield", title: "We help with the funding", text: "Registered NDIS provider. We also work with Support at Home providers, GPCCMP (Medicare), DVA and private clients — and explain your options upfront." },
  { icon: "doc", title: "We keep your team in the loop", text: "With your consent we update your GP, support coordinator, case manager or provider, and write reports when they're needed." },
];

export function WhyCall() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="Why call Fletcher Physiotherapy"
          title="Six reasons people pick up the phone"
          intro="A quick call is the easiest way to find out whether we're the right fit — there's no obligation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className="card card-hover h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-navy-900">{r.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-navy-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-primary"><Icon name="phone" className="h-5 w-5" /> Call {site.phone}</a>
          <a href="#callback" className="btn-secondary">Request a call back</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works — step by step                                         */
/* ------------------------------------------------------------------ */
const steps = [
  { title: "Call or send the form", text: `Call ${site.phone} or request a call back at the top of this page. It takes about two minutes. Calling for a parent or client? That's fine too.` },
  { title: "Have a quick chat", text: "We ask about what's going on, your goals, your suburb and how your care is funded, and answer your questions. No obligation." },
  { title: "Choose a time that suits", text: "We book a home visit — in Sydney or the Newcastle region — or a Monday clinic appointment in Jesmond or Elermore Vale, and confirm the details with you." },
  { title: "We come to you", text: "Your first visit includes a thorough assessment in your own home. We explain what we find, start treatment and leave you with a simple plan." },
  { title: "We keep everyone in the loop", text: "We review your progress each visit and, with your consent, update family, your GP, support coordinator or provider." },
];

export function HowItWorks() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="How it works"
          title="Getting started is simple"
          intro="Here's exactly what happens after you get in touch."
        />
        <ol className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="card h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-500 font-serif text-lg font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a href={site.phoneHref} className="btn-accent"><Icon name="phone" className="h-5 w-5" /> Start with step 1 — call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Real-life scenarios                                                 */
/* ------------------------------------------------------------------ */
const scenarios: { icon: IconName; who: string; title: string; text: string; href: string; link: string }[] = [
  { icon: "balance", who: "Families", title: "“Mum had a fall and now she's scared to walk.”", text: "We check her strength, balance and walking, look at hazards around the house, and build a program to help her feel steadier — with you involved if you'd like to be.", href: "/falls-prevention-physiotherapy-newcastle", link: "Falls prevention" },
  { icon: "recovery", who: "After hospital", title: "“Dad's coming home from hospital next week.”", text: "We continue his rehabilitation at home, practise the transfers and walking he needs day to day, and liaise with the discharge team or GP with consent.", href: "/blog/physiotherapy-after-hospital-discharge", link: "Rehab after hospital" },
  { icon: "joint", who: "After surgery", title: "“I've had a knee or hip replacement and can't drive.”", text: "Your rehab comes to you while you can't get to a clinic — exercises, walking practice and stairs, progressed safely in line with your surgeon's advice.", href: "/knee-replacement-rehabilitation-newcastle", link: "Joint replacement rehab" },
  { icon: "shield", who: "NDIS", title: "“My participant needs therapy and a report for their plan review.”", text: "As a registered NDIS provider we do home-based functional assessments, goal-focused therapy and clear reports for planners.", href: "/ndis-physiotherapy-newcastle", link: "NDIS physiotherapy" },
  { icon: "heart", who: "Support at Home", title: "“My parent has Support at Home funding — can it cover physio?”", text: "Physiotherapy is a clinical support under Support at Home. We work with the provider to arrange it and invoice them directly.", href: "/support-at-home-physiotherapy-newcastle", link: "Support at Home physio" },
  { icon: "pin", who: "Sydney", title: "“Mum lives in Strathfield and I'm in Newcastle.”", text: "From 9 November 2026 we visit homes around Sydney Olympic Park, Homebush, Strathfield, Concord, Rhodes and Lidcombe. We'll keep you updated from wherever you are, with your mum's permission.", href: "/physiotherapy-sydney", link: "Sydney home visits" },
  { icon: "pulse", who: "Persistent pain", title: "“My pain just isn't settling and I'm worried about moving.”", text: "Daniel is an APA Titled Pain Physiotherapist. We take time to understand your pain and build a practical plan to help you move with more confidence.", href: "/chronic-pain-management", link: "Pain management" },
];

export function Scenarios() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="Does this sound familiar?"
          title="Situations we help with — in Sydney and Newcastle"
          intro="If any of these sound like you or someone you care for, give us a call."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="card card-hover flex h-full flex-col">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                  <Icon name={s.icon} className="h-3.5 w-3.5" /> {s.who}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-navy-900">{s.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-navy-600">{s.text}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a href={site.phoneHref} className="btn-primary text-sm"><Icon name="phone" className="h-4 w-4" /> Call us</a>
                  <Link href={s.href} className="text-sm font-semibold text-navy-700 underline hover:text-navy-900">{s.link}</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Who's coming to your door                                           */
/* ------------------------------------------------------------------ */
export function MeetDaniel() {
  return (
    <section className="section-py bg-white" id="meet-daniel">
      <div className="container-px grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-navy-100 shadow-card">
            <Image src="/team/daniel-lee.jpg" alt="Daniel Lee, physiotherapist and founder of Fletcher Physiotherapy" fill sizes="(max-width: 1024px) 90vw, 400px" className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow"><Icon name="user" className="h-4 w-4" /> Who&rsquo;s coming to your door</span>
          <h2 className="mt-4 text-3xl text-navy-900 sm:text-4xl">Hi, I&rsquo;m Daniel Lee</h2>
          <p className="mt-1 text-sm font-medium text-navy-500">Physiotherapist &amp; founder, Fletcher Physiotherapy</p>
          <div className="prose-navy mt-5 space-y-4">
            <p>
              I enjoy home visits because they let me see how people move and function in their everyday
              environment — and provide practical, personalised physiotherapy without the stress of travelling
              to a clinic.
            </p>
            <p>
              I have a particular interest in pain management, rehabilitation, mobility and balance, and in
              helping older adults stay active and independent. I&rsquo;ve completed a Master of Medicine (Pain
              Management) at the University of Sydney and I&rsquo;m an APA Titled Pain Physiotherapist.
            </p>
            <p>
              I speak <strong>English and Korean</strong>, and I aim to be friendly, approachable and easy to talk
              to. Outside of physiotherapy you&rsquo;ll find me playing tennis or soccer, spending time with my
              family, and growing Fletcher Physiotherapy.
            </p>
            <p>
              I lead a team of experienced physiotherapists who share the same approach, so whoever visits you is a
              qualified, AHPRA-registered physio who takes the time to listen.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "APA Titled Pain Physiotherapist",
              "Master of Medicine (Pain Management), USyd",
              "Speaks English & Korean",
              "Registered NDIS provider",
            ].map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm font-medium text-navy-800">
                <Icon name="check" className="h-4 w-4 flex-shrink-0 text-clay-600" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-sand p-5">
            <p className="text-sm font-semibold text-navy-900">What a home visit feels like</p>
            <ul className="mt-3 space-y-2 text-sm text-navy-700">
              {[
                "We introduce ourselves, explain what we'll do and why, and check you're comfortable",
                "Family or carers are welcome to stay and ask questions",
                "We bring what's needed and work with your own furniture, steps and spaces",
                "You finish with a clear, simple plan — and know how to reach us",
              ].map((x) => (
                <li key={x} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-primary"><Icon name="phone" className="h-5 w-5" /> Talk to Daniel&rsquo;s team</a>
            <Link href="/daniel-lee-physiotherapist-newcastle" className="btn-secondary">More about Daniel</Link>
            <Link href="/our-team" className="btn-secondary">Meet the team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Who we work with + trust (second social-proof block)                */
/* ------------------------------------------------------------------ */
export function TrustedBy() {
  const groups = ["GPs & medical centres", "NDIS support coordinators", "Support at Home providers", "Aged care & retirement living", "Hospital discharge teams", "Families & carers"];
  return (
    <section className="bg-navy-900">
      <div className="container-px py-14">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-beige-300">We work with</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {groups.map((g) => (
            <li key={g} className="rounded-full border border-navy-600 px-4 py-2 text-sm text-navy-50">{g}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-accent"><Icon name="phone" className="h-5 w-5" /> Call {site.phone}</a>
          <Link href="/refer-a-patient" className="btn-secondary bg-white">Refer a patient</Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile sticky call bar                                              */
/* ------------------------------------------------------------------ */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-navy-100 bg-white/95 p-3 shadow-[0_-4px_16px_rgba(12,24,41,0.08)] backdrop-blur md:hidden">
      <a href={site.phoneHref} className="btn-primary w-full justify-center text-sm"><Icon name="phone" className="h-4 w-4" /> Call now</a>
      <a href="/#callback" className="btn-accent w-full justify-center text-sm">Call me back</a>
    </div>
  );
}
