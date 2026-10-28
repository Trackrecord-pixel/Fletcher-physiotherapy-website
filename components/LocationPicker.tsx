import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { site, clinics } from "@/lib/site";
import { sydneyClinics } from "@/lib/sydneyClinics";

// "Find your location" — lets patients jump straight to the clinic or home-visit
// area they want. Used on the homepage, Locations, Book and Contact pages.

const telHref = (phone: string) => `tel:+61${phone.replace(/\D/g, "").replace(/^0/, "")}`;

type Option = {
  group: "Home visits" | "Clinic";
  icon: IconName;
  title: string;
  where: string;
  href: string;
  phone: string;
  phoneLabel: string;
};

export default function LocationPicker({
  title = "Find your location",
  intro = "Choose where you'd like to see us — at home, or at one of our clinics.",
  tone = "white",
}: {
  title?: string;
  intro?: string;
  tone?: "white" | "sand";
}) {
  const options: Option[] = [
    {
      group: "Home visits",
      icon: "home",
      title: "Home visits — Newcastle, Lake Macquarie & Central Coast",
      where: "We come to your home, retirement village or aged care residence.",
      href: "/home-visit-physiotherapy-newcastle",
      phone: site.phone,
      phoneLabel: "Call us",
    },
    {
      group: "Home visits",
      icon: "home",
      title: "Home visits — Sydney",
      where: "Around Sydney Olympic Park, the Inner West and surrounding suburbs.",
      href: "/physiotherapy-sydney",
      phone: site.phone,
      phoneLabel: "Call us",
    },
    ...clinics.map<Option>((c) => ({
      group: "Clinic",
      icon: "pin",
      title: `${c.suburb} clinic`,
      where: `${c.hostCentre} · ${c.dayShort}`,
      href: `/${c.slug}`,
      phone: site.phone,
      phoneLabel: "Call us",
    })),
    ...sydneyClinics.map<Option>((c) => ({
      group: "Clinic",
      icon: "pin",
      title: `${c.suburb} clinic`,
      where: `${c.hostCentre}, ${c.streetAddress}`,
      href: `/${c.slug}`,
      phone: c.phone,
      phoneLabel: "Call reception",
    })),
  ];

  return (
    <section className={`section-py ${tone === "sand" ? "bg-sand" : "bg-white"}`} aria-labelledby="find-location">
      <div className="container-px">
        <p className="text-sm font-semibold uppercase tracking-widest text-clay-600">Locations</p>
        <h2 id="find-location" className="mt-2 text-3xl text-navy-900 sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-lg text-navy-700">{intro}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o) => (
            <li key={o.href} className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <div className="flex items-start gap-3">
                <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${o.group === "Clinic" ? "bg-navy-800 text-white" : "bg-clay-500 text-white"}`}>
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">{o.group}</p>
                  <h3 className="text-lg font-semibold leading-snug text-navy-900">{o.title}</h3>
                </div>
              </div>
              <p className="mt-3 flex-grow text-sm text-navy-600">{o.where}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href={o.href} className="btn-secondary w-full justify-center px-3 text-sm">
                  View <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href={telHref(o.phone)} className="btn-primary w-full justify-center px-3 text-sm" aria-label={`${o.phoneLabel} ${o.phone}`}>
                  <Icon name="phone" className="h-4 w-4" /> {o.phoneLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
