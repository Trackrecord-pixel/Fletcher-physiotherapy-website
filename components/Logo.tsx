import Link from "next/link";

// Fletcher Physiotherapy wordmark (dark theme, Oct 2026):
// wide geometric "FLETCHER" over spaced "PHYSIOTHERAPY".
export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Fletcher Physiotherapy — home" className="group inline-flex flex-col leading-none">
      <span
        className={`font-display text-[1.15rem] font-bold uppercase tracking-[0.12em] sm:text-[1.3rem] ${
          light ? "text-[#edf4f2]" : "text-[#0f1714]"
        }`}
      >
        Fletcher
      </span>
      <span className="mt-1.5 text-[0.56rem] font-medium uppercase tracking-[0.42em] text-[#87f9d3] transition-colors group-hover:text-[#b8fde6]">
        Physiotherapy
      </span>
    </Link>
  );
}
