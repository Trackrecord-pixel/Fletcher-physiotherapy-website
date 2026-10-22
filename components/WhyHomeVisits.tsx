import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { site } from "@/lib/site";

// "Why home visits" section — what a physio can only see in your home.
// Content from Daniel's own home-visit experience (5 years of home visits).
// COMPLIANCE (AHPRA): describes what we assess and how we work — no outcome claims.

type Region = "newcastle" | "sydney";

const seenAtHome: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "user",
    title: "The chair and bed you actually use",
    text: "A favourite lounge chair or bed that sits too low is one of the most common reasons standing up becomes hard. We practise on your own furniture and suggest simple changes.",
  },
  {
    icon: "home",
    title: "The shower and bathroom",
    text: "A step into the shower, a slippery floor or nothing to hold onto. We look at how you really get in and out, and whether a rail, shower chair or OT review would help.",
  },
  {
    icon: "balance",
    title: "Rugs, cords and clutter",
    text: "Loose mats, trailing cords and tight spaces are easy to miss until you walk the route with someone. We walk it with you.",
  },
  {
    icon: "clock",
    title: "The trip to the toilet at night",
    text: "Getting up in the dark, half-awake, is a high-risk moment for many older people. We check lighting, the path and how you get up from bed.",
  },
  {
    icon: "check",
    title: "Your walking aid",
    text: "Frames and sticks are often set at the wrong height — or left in the corner. We check the fit and practise using it where you need it.",
  },
  {
    icon: "pin",
    title: "Steps, the car and getting out",
    text: "Front steps, the driveway and getting in and out of the car decide whether you can get to the shops, the doctor or family.",
  },
];

const regionNote: Record<Region, { title: string; text: string }> = {
  newcastle: {
    title: "Steps, the car and getting out",
    text: "Front steps, sloping driveways and getting in and out of the car decide whether you can get to the shops, the doctor or family — so we practise them too.",
  },
  sydney: {
    title: "Lifts, corridors and the car park",
    text: "In apartments the hard part is often the walk from your door to the lift, the car park or the street. We practise the real route so you can keep getting out.",
  },
};

export default function WhyHomeVisits({ region = "newcastle" }: { region?: Region }) {
  const items = seenAtHome.map((it, i) => (i === seenAtHome.length - 1 ? { ...it, ...regionNote[region] } : it));

  return (
    <section className="section-py bg-sand" aria-labelledby="why-home-visits">
      <div className="container-px">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-clay-600">Why home visits</p>
          <h2 id="why-home-visits" className="mt-2 text-3xl text-navy-900 sm:text-4xl">
            What we can see in your home that a clinic can&rsquo;t
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-700">
            In a clinic, a physio sees how you move on a treatment bed. At home we see how you get out of your own bed,
            onto your own toilet and up your own front step — the places where everyday life, and most falls, actually
            happen. After five years of home visits, these are the things we check most often.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                <Icon name={it.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">{it.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy-900 p-7 text-white">
            <h3 className="text-xl text-white">Persistent pain? Home is where we work on it</h3>
            <p className="mt-3 leading-relaxed text-navy-100">
              Our director, Daniel Lee, is an APA Titled Pain Physiotherapist with a Master of Medicine (Pain
              Management). With long-term pain the goal isn&rsquo;t only less pain — it&rsquo;s doing more with less
              worry. At home we can work on the exact task you&rsquo;ve been avoiding, like hanging out the washing or
              getting into the car, and build it up step by step.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-7">
            <h3 className="text-xl text-navy-900">What to expect</h3>
            <ul className="mt-4 space-y-3 text-navy-700">
              <li className="flex gap-3"><Icon name="phone" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" /> We call you back within 24 hours of your enquiry.</li>
              <li className="flex gap-3"><Icon name="calendar" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" /> Your first visit is usually within a week.</li>
              <li className="flex gap-3"><Icon name="clock" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" /> The first visit takes about 60 minutes — assessment, goals and a home program.</li>
              <li className="flex gap-3"><Icon name="doc" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" /> Reports go to your GP, coordinator or case manager as agreed with you.</li>
              <li className="flex gap-3"><Icon name="users" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" /> Family and carers are welcome to join.</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-primary"><Icon name="phone" className="h-5 w-5" /> Call {site.phone}</a>
              <Link href="/contact" className="btn-secondary">Enquire online</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
