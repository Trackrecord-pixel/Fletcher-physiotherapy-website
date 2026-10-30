import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Physiotherapy in clinic or at home",
  text = "Clinics in Jesmond, Yagoona and Parramatta. Home visits across Sydney, Newcastle, Lake Macquarie and the Central Coast.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="container-px py-16 lg:py-20">
        <div className="grid gap-10 rounded-[2rem] bg-navy-900 px-7 py-12 text-white sm:px-12 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige-300">Get started</p>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-navy-100">{text}</p>
          </div>
          <div className="grid gap-3 lg:col-span-5">
            <Link href="/find-a-clinic" className="btn-primary w-full">
              <Icon name="pin" className="h-5 w-5" /> Find a Clinic
            </Link>
            <Link href="/home-visits" className="btn w-full bg-white text-navy-900 hover:bg-beige-50">
              <Icon name="home" className="h-5 w-5" /> Book a Home Visit
            </Link>
            <a href={site.phoneHref} className="mt-1 text-center text-sm font-semibold text-beige-200 hover:text-white">
              or call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
