import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { primaryNav, servicesNav, conditionsNav, clinics, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-px section-py">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              Professional home visit physiotherapy in the comfort of your home.
              Supporting independence for NDIS, Support at Home and private
              clients across Newcastle, Lake Macquarie and the Central Coast.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2.5 hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-beige-300" /> {site.phone}
              </a>
              <a href={site.emailHref} className="inline-flex items-center gap-2.5 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-beige-300" /> {site.email}
              </a>
              <p className="inline-flex items-center gap-2.5">
                <Icon name="clock" className="h-4 w-4 text-beige-300" /> {site.hours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {servicesNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white">
              Conditions
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {conditionsNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Our Clinics
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {clinics.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="inline-flex items-start gap-2.5 text-navy-200 hover:text-white">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-beige-300" />
                    <span>{c.hostCentre}<span className="block text-xs text-navy-400">Consulting {c.dayShort}</span></span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/home-visit-physiotherapy-newcastle" className="inline-flex items-center gap-2.5 text-navy-200 hover:text-white">
                  <Icon name="home" className="h-4 w-4 text-beige-300" /> Home Visit Physiotherapy
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-navy-400">Also serving</p>
            <ul className="mt-3 space-y-2 text-sm">
              {site.areasServed.map((a) => (
                <li key={a} className="inline-flex items-center gap-2.5 text-navy-200">
                  <Icon name="pin" className="h-4 w-4 text-beige-300" /> {a}, {site.region}
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-beige-200 hover:text-white"
            >
              View all locations <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">
              Book Online <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-navy-700 pt-8 text-xs text-navy-300 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl text-navy-400">
            This website provides general information only and is not a substitute
            for individual physiotherapy or medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
