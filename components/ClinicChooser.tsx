import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { site, clinics } from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

// Visual "pick your clinic" cards — the first thing on /find-a-clinic.
const telHref = (phone: string) => `tel:+61${phone.replace(/\D/g, "").replace(/^0/, "")}`;

type Card = {
  slug: string;
  suburb: string;
  region: string;
  host: string;
  day: string;
  address: string;
  photo?: { src: string; alt: string };
  contain?: boolean; // landscape banner — show whole image instead of cropping
  action: { label: string; href: string; external?: boolean; icon: "phone" | "calendar" };
  note: string;
};

export default function ClinicChooser() {
  const cards: Card[] = [
    ...clinics.map<Card>((c) => ({
      slug: c.slug,
      suburb: c.suburb,
      region: c.region,
      host: c.hostCentre,
      day: c.dayShort,
      address: c.address,
      photo: c.photo,
      contain: true,
      action: { label: "Book online", href: site.bookingUrl, external: true, icon: "calendar" },
      note: `Or call ${site.phone}`,
    })),
    ...sydneyClinics.map<Card>((c) => ({
      slug: c.slug,
      suburb: c.suburb,
      region: "Sydney",
      host: c.hostCentre,
      day: c.days ?? "Call reception",
      address: `${c.streetAddress}, ${c.suburb} NSW ${c.postcode}`,
      photo: c.poster,
      action: { label: `Call ${c.phone}`, href: telHref(c.phone), icon: "phone" },
      note: "Bookings through clinic reception",
    })),
  ];

  return (
    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
      {cards.map((c) => (
        <li
          key={c.slug}
          className="grid grid-cols-[7rem_1fr] overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card sm:grid-cols-[10rem_1fr] md:flex md:flex-col"
        >
          <div className="col-start-2 row-start-1 px-4 pt-4 sm:px-5 sm:pt-5 md:order-1 md:px-6 md:pb-4 md:pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-euc-600">{c.region} · {c.day.split(",")[0]}</p>
            <h2 className="mt-1.5 text-2xl text-navy-900 md:text-3xl">
              <Link href={`/${c.slug}`} className="hover:text-euc-700">{c.suburb}</Link>
            </h2>
            <p className="mt-1 text-sm text-navy-600">{c.host}</p>
          </div>
          <Link
            href={`/${c.slug}`}
            className="relative col-start-1 row-span-2 row-start-1 block overflow-hidden bg-navy-800 md:order-2 md:aspect-[4/3] md:w-full"
            aria-label={`${c.suburb} clinic details`}
            style={c.contain ? { backgroundColor: "#ffffff" } : undefined}
          >
            {c.photo ? (
              <Image src={c.photo.src} alt={c.photo.alt} fill sizes="(max-width: 768px) 160px, 420px" className={`${c.contain ? "object-contain" : "object-cover object-top"} transition duration-500 hover:scale-[1.03]`} />
            ) : (
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-euc-700 to-navy-900 text-white">
                <Icon name="pin" className="h-10 w-10 md:h-14 md:w-14" />
                <span className="hidden font-display text-2xl tracking-[0.2em] md:block">{c.suburb.toUpperCase()}</span>
              </span>
            )}
          </Link>
          <div className="col-start-2 row-start-2 flex flex-1 flex-col px-4 pb-4 sm:px-5 sm:pb-5 md:order-3 md:p-6">
            <p className="mt-2 hidden items-start gap-2 text-sm text-navy-600 sm:flex md:mt-0">
              <Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {c.address}
            </p>
            <p className="mt-1 hidden items-start gap-2 text-sm text-navy-600 sm:flex">
              <Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" /> {c.day}
            </p>
            <div className="mt-auto grid gap-2 pt-4">
              <a
                href={c.action.href}
                {...(c.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn-primary w-full px-4 text-sm"
              >
                <Icon name={c.action.icon} className="h-4 w-4" /> {c.action.label}
              </a>
              <Link href={`/${c.slug}`} className="inline-flex items-center justify-center gap-1.5 py-1 text-sm font-semibold text-euc-700 hover:text-euc-800">
                Clinic details & directions <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <p className="hidden text-center text-xs text-navy-500 md:block">{c.note}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
