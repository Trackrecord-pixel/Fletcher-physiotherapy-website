import Link from "next/link";

// Fletcher Physiotherapy wordmark (Option C, approved Oct 2026):
// serif "Fletcher", clay rule, spaced "PHYSIOTHERAPY".
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Fletcher Physiotherapy — home" className="group inline-flex flex-col leading-none">
      <span className={`font-serif text-[1.7rem] font-medium tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        Fletcher
      </span>
      <span className="mt-1.5 flex items-center gap-2">
        <span aria-hidden="true" className="h-[2px] w-6 bg-clay-500 transition-all duration-300 group-hover:w-8" />
        <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.3em] ${light ? "text-euc-200" : "text-euc-600"}`}>
          Physiotherapy
        </span>
      </span>
    </Link>
  );
}
