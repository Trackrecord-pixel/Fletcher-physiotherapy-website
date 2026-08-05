import Icon from "./Icon";
import { testimonials, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="Trusted by families & coordinators"
          title="What our clients and referrers say"
          intro="Real, verified reviews from clients and families across Newcastle, Lake Macquarie and the Central Coast."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="card h-full">
                <div className="flex gap-1 text-beige-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-navy-100 pt-4">
                  <p className="text-sm font-semibold text-navy-900">{t.author}</p>
                  <p className="text-xs text-navy-500">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon name="star" className="h-4 w-4" /> Read &amp; leave a Google review
          </a>
          <p className="text-xs text-navy-500">Reviews verified on Google</p>
        </div>
      </div>
    </section>
  );
}
