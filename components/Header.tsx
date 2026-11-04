"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import {
  primaryNav,
  headerNav,
  servicesNav,
  locationsNav,
  clinicNav,
  homeVisitNav,
  aboutNav,
  site,
} from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

const tel = (phone: string) => `tel:+61${phone.replace(/\D/g, "").replace(/^0/, "")}`;

// Numbers offered by the header "Call" button.
const callOptions = [
  { label: "Main line", note: "Home visits, Jesmond & onsite", phone: site.phone },
  ...sydneyClinics.map((c) => ({ label: `${c.suburb} clinic`, note: "Clinic reception", phone: c.phone })),
];

function CallMenu({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Call us"
        className={
          compact
            ? "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#87f9d3] text-[#0f1714]"
            : "btn-primary px-5 py-2.5 text-sm"
        }
      >
        <Icon name="phone" className={compact ? "h-5 w-5" : "h-4 w-4"} />
        {!compact && <>Call <Icon name="chevron" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} /></>}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 w-[19rem] pt-3">
          <div className="rounded-3xl border border-beige-200 bg-white p-2 shadow-card-hover">
            <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-euc-600">Who would you like to call?</p>
            {callOptions.map((o) => (
              <a key={o.phone} href={tel(o.phone)} className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-euc-50">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-euc-700 text-white"><Icon name="phone" className="h-4 w-4" /></span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-euc-600">{o.label}</span>
                  <span className="block whitespace-nowrap text-base font-semibold text-navy-900">{o.phone}</span>
                  <span className="block text-xs text-navy-500">{o.note}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const dropdowns: Record<string, { label: string; href: string }[]> = {
  "Clinic Physiotherapy": clinicNav,
  "Home Visits": homeVisitNav,
  Services: servicesNav,
  Locations: locationsNav,
  About: aboutNav,
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-[rgba(237,244,242,0.12)] bg-[rgba(15,23,20,0.92)] backdrop-blur" : "border-transparent bg-[rgba(15,23,20,0.6)] backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav className="container-px flex h-20 items-center justify-between gap-6" aria-label="Primary">
        <Logo />

        <div className="hidden items-center xl:flex">
          {headerNav.map((link) => {
            const dd = dropdowns[link.label];
            const active = isActive(link.href);
            return dd ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openMenu === link.label}
                  onClick={() => setOpenMenu((m) => (m === link.label ? null : link.label))}
                  className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.8rem] 2xl:px-3 font-medium transition-colors ${
                    active ? "text-euc-700" : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron" className={`h-3.5 w-3.5 transition-transform ${openMenu === link.label ? "rotate-180" : ""}`} />
                </button>
                {openMenu === link.label && (
                  <div className="absolute left-0 top-full w-80 pt-3">
                    <div className="rounded-3xl border border-beige-200 bg-white p-2 shadow-card-hover">
                      {dd.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-euc-50 hover:text-euc-700"
                        >
                          {s.label}
                          <Icon name="arrow" className="h-3.5 w-3.5 opacity-40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.8rem] 2xl:px-3 font-medium transition-colors ${
                  active ? "text-euc-700" : "text-navy-700 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <CallMenu />
          <a href={site.emailHref} className="btn-outline px-5 py-2.5 text-sm" aria-label={`Email ${site.email}`}>
            <Icon name="mail" className="h-4 w-4" /> Email
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <CallMenu compact />
          <a
            href={site.emailHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-900"
            aria-label={`Email ${site.email}`}
          >
            <Icon name="mail" className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-900"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-beige-200 bg-cream xl:hidden">
          <div className="container-px space-y-4 py-5">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/find-a-clinic" className="btn-primary w-full px-4 text-sm">
                Find a Clinic
              </Link>
              <Link href="/home-visits" className="btn-outline w-full px-4 text-sm">
                Book a Home Visit
              </Link>
            </div>
            {[
              { title: "Clinics", items: clinicNav },
              { title: "Home visits", items: homeVisitNav },
              { title: "Services", items: servicesNav },
            ].map((g) => (
              <div key={g.title} className="rounded-3xl bg-white p-2">
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-euc-600">{g.title}</p>
                {g.items.map((s) => (
                  <Link key={s.href} href={s.href} className="block rounded-2xl px-3 py-2.5 text-[0.95rem] font-medium text-navy-800 hover:bg-euc-50">
                    {s.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="rounded-3xl bg-white p-2">
              {primaryNav
                .filter((l) => !["Clinic Physiotherapy", "Home Visits", "Services"].includes(l.label))
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-2xl px-3 py-2.5 text-[0.95rem] font-medium ${
                      isActive(link.href) ? "bg-euc-50 text-euc-700" : "text-navy-800 hover:bg-euc-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
            <a href={site.phoneHref} className="btn-secondary w-full">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
