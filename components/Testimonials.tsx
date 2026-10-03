import Icon from "./Icon";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

// Note: to comply with Australian health-advertising rules (AHPRA/TGA), we do NOT
// republish patient testimonials about clinical treatment or outcomes on this site.
// Clients are instead invited to read and leave reviews on the independent Google platform.
export default function Testimonials() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="Reviews"
            title="Trusted by families, carers and referrers"
            intro="We're proud to support older adults, families, support coordinators and care providers across the Hunter and Sydney. You can read genuine reviews from our clients on Google."
          />
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon name="star" className="h-5 w-5" /> Read &amp; leave a Google review
            </a>
            <p className="text-xs text-navy-500">Independent reviews on Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
