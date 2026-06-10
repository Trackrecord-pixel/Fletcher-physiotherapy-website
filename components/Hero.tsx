import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-white">
      <h1 className="sr-only">
        Home visit physiotherapy in Newcastle, Lake Macquarie and the Central
        Coast — helping you stay strong and independent at home.
      </h1>
      <Image
        src="/images/hero-banner.jpg"
        alt="Helping you stay strong and independent — personalised home visit physiotherapy"
        width={1500}
        height={1000}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="container-px py-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>
    </section>
  );
}
