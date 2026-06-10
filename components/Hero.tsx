import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-sand">
      <div className="container-px grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Text */}
        <div>
          <span className="eyebrow">
            <Icon name="home" className="h-5 w-5" /> We come to you
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl">
            Physiotherapy in the comfort of your own home
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-navy-700">
            Helping you stay strong, steady and independent — with friendly,
            expert physiotherapy across Newcastle, Lake Macquarie and the Central
            Coast. No travel. No waiting rooms.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Online <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              <Icon name="phone" className="h-5 w-5" /> Call {site.phone}
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-base text-navy-600">
            <Icon name="check" className="h-5 w-5 text-navy-700" />
            NDIS, Home Care Package &amp; private clients welcome
          </p>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card-hover">
            <div className="relative aspect-[5/6] w-full">
              <Image
                src="/images/hero.jpg"
                alt="A friendly physiotherapist helping an older adult stay active and confident at home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
