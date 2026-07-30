import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import FeatureList from "@/components/FeatureList";
import { FaqSchema } from "@/components/StructuredData";
import { services, whyChoose, homeFaqs, team, locations, clinics, site } from "@/lib/site";
import type { IconName } from "@/components/Icon";


export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Full-width banner */}
      <section className="bg-white">
        <Image
          src="/images/hero-banner.jpg"
          alt="Helping older Australians stay strong and independent with home visit physiotherapy in Newcastle"
          width={1500}
          height={1000}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* Full-width banner */}
      <section className="bg-white">
        <Image
          src="/images/services-banner.jpg"
          alt="Personalised home visit physiotherapy helping older Australians stay strong and independent across Newcastle, Lake Macquarie and the Central Coast"
          width={1500}
          height={1000}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* Visit Our Newcastle Physiotherapy Clinics */}
      <section className="section-py bg-sand" id="clinics">
        <div className="container-px">
          <SectionHeading
            eyebrow="Clinics & Home Visits"
            title="Visit Our Newcastle Physiotherapy Clinics"
            intro="Fletcher Physiotherapy now offers appointments at two convenient Newcastle clinic locations, in addition to our established mobile physiotherapy service. Patients can choose between home visits or attending one of our clinics depending on what best suits their needs."
          />
          <Link href="/book" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-navy-900">
            Compare all booking options <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {clinics.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <div className="card card-hover flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-beige-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                    <Icon name="clock" className="h-3.5 w-3.5" /> {c.dayShort}
                  </span>
                  <h3 className="mt-3 text-xl text-navy-900">{c.hostCentre}</h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-navy-600">
                    Physiotherapy for pain, injuries, rehabilitation, balance and falls prevention at {c.address.split(", ").slice(-2).join(", ")}.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                      Book Appointment <Icon name="arrow" className="h-4 w-4" />
                    </a>
                    <Link href={`/${c.slug}`} className="btn-secondary w-full">Learn More</Link>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <div className="card card-hover flex h-full flex-col md:col-span-3 md:flex-row md:items-center md:gap-8">
                <div className="md:flex-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon name="home" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl text-navy-900">Home Visit Physiotherapy</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    Prefer to stay home? Our mobile physiotherapists come to you across Newcastle, Lake Macquarie and the Central Coast — ideal for older adults, NDIS, Support at Home and post-hospital clients.
                  </p>
                </div>
                <div className="mt-5 flex flex-col gap-2.5 md:mt-0 md:w-64">
                  <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                    Book Appointment <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <Link href="/home-visit-physiotherapy-newcastle" className="btn-secondary w-full">Learn More</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Why Choose Fletcher Physiotherapy"
            title="Expert care that comes to your front door"
            intro="We focus on what matters most — keeping you independent, mobile and confident in your own home."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon name={item.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-py bg-sand">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="Physiotherapy tailored to your goals"
              intro="From home visits to falls prevention, every program is built around your needs and delivered where you live."
            />
            <Link href="/services" className="btn-secondary flex-shrink-0">
              View all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS + Support at Home */}
      <section className="section-py bg-white">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full bg-navy-900 text-white">
              <span className="eyebrow bg-navy-700 text-beige-100">
                <Icon name="shield" className="h-4 w-4" /> NDIS Physiotherapy
              </span>
              <h3 className="mt-5 text-2xl text-white">
                Supporting NDIS participants to reach their goals
              </h3>
              <p className="mt-3 text-navy-100">
                We work with self-managed, plan-managed and agency-managed
                participants, delivering functional assessments, mobility training,
                exercise programs, falls prevention and pain management.
              </p>
              <Link href="/ndis-physiotherapy-newcastle" className="btn-accent mt-6">
                Explore NDIS <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full border-beige-200 bg-beige-50">
              <span className="eyebrow">
                <Icon name="heart" className="h-4 w-4" /> Support at Home
              </span>
              <h3 className="mt-5 text-2xl text-navy-900">
                Helping older adults stay safely at home
              </h3>
              <p className="mt-3 text-navy-600">
                For Home Care Package and Support at Home clients, we focus on
                maintaining independence, mobility, strength, balance and falls
                prevention — so you can remain safely in your own home.
              </p>
              <Link href="/support-at-home-physiotherapy-newcastle" className="btn-primary mt-6">
                Explore Support at Home <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-py bg-sand">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Our Team"
            title="Meet your physiotherapists"
            intro="Experienced, caring clinicians dedicated to your long-term outcomes."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 100}>
                <div className="card card-hover h-full text-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy-800 font-serif text-2xl font-semibold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <h3 className="mt-4 text-xl text-navy-900">{m.name}</h3>
                  <p className="text-sm font-medium text-navy-500">{m.role}</p>
                  <p className="mt-3 text-sm text-navy-600">{m.credentials}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/our-team" className="btn-secondary">
              Meet the full team <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Service Locations"
            title="Home visit physiotherapy across the region"
            intro="We bring physiotherapy to you in Newcastle, Lake Macquarie and the Central Coast."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl text-navy-900">{loc.name}</h3>
                  <p className="mt-2 text-sm text-navy-600">{loc.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/locations" className="btn-secondary">
              View all locations <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Referral band */}
      <section className="bg-navy-800">
        <div className="container-px grid items-center gap-8 py-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow bg-navy-700 text-beige-100">
              <Icon name="users" className="h-4 w-4" /> For Referrers
            </span>
            <h2 className="mt-4 text-3xl text-white">
              GPs, support coordinators & case managers
            </h2>
            <p className="mt-3 max-w-xl text-navy-100">
              Refer a participant in minutes. We provide thorough functional
              assessments, clear reporting and reliable communication.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <FeatureList
              columns={1}
              items={[
                "Fast, simple online referrals",
                "Detailed functional assessments & reports",
                "NDIS, Home Care Package & private clients",
              ]}
            />
            <Link href="/refer-a-patient" className="btn-accent mt-6">
              Make a Referral <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQs"
              title="Your questions, answered"
              intro="Everything you need to know about home visits, NDIS, Home Care Packages and our service areas."
            />
            <Link href="/faqs" className="btn-secondary mt-6">
              View all FAQs <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={homeFaqs} />
    </>
  );
}
