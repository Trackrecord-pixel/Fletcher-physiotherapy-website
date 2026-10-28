import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: { name: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-beige-200 bg-cream">
      <div className="container-px relative pb-14 pt-10 lg:pb-20 lg:pt-14">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-navy-500">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-navy-300">/</span>}
                  {i < breadcrumb.length - 1 ? (
                    <Link href={b.href} className="hover:text-euc-700">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-navy-700">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-8 bg-clay-500" /> {eyebrow}
            </p>
            <h1 className="mt-5 text-[2.4rem] leading-[1.08] text-navy-900 sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          </div>
          {intro && (
            <p className="text-lg leading-relaxed text-navy-600 lg:col-span-4 lg:pb-2">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}
