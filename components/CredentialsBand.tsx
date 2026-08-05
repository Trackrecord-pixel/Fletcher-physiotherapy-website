import Icon from "./Icon";
import type { IconName } from "./Icon";

const credentials: { icon: IconName; title: string; text: string }[] = [
  { icon: "pulse", title: "APA Titled Pain Physiotherapist", text: "A nationally recognised advanced credential held by a small percentage of Australian physiotherapists." },
  { icon: "doc", title: "Master of Pain Management", text: "Postgraduate qualified through the University of Sydney in the assessment and treatment of complex pain." },
  { icon: "shield", title: "AHPRA-registered", text: "Registered with the Australian Health Practitioner Regulation Agency and a member of the APA." },
  { icon: "star", title: "Evidence-based care", text: "Assessment and treatment grounded in current clinical research, tailored to your goals." },
];

export default function CredentialsBand() {
  return (
    <section className="section-py bg-navy-900 text-white">
      <div className="container-px">
        <div className="max-w-3xl">
          <span className="eyebrow bg-navy-700 text-beige-100">
            <Icon name="shield" className="h-4 w-4" /> Experience &amp; Expertise You Can Trust
          </span>
          <h2 className="mt-5 text-3xl text-white sm:text-4xl">Care led by an APA Titled Pain Physiotherapist</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            Fletcher Physiotherapy is led by Daniel Lee, whose advanced qualifications and clinical
            experience in aged care, chronic pain and rehabilitation underpin every treatment plan we deliver.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.title} className="rounded-2xl border border-navy-700 bg-navy-800 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-beige-100 text-navy-900">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
