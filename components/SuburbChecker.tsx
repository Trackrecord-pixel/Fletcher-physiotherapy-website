"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

export type CheckerEntry = {
  name: string;
  region: string;
  kind: "clinic" | "home" | "sydney";
  href?: string;
  note?: string;
};

const norm = (v: string) => v.toLowerCase().replace(/\s+/g, " ").trim();

export default function SuburbChecker({
  entries,
  phone,
  phoneHref,
}: {
  entries: CheckerEntry[];
  phone: string;
  phoneHref: string;
}) {
  const [q, setQ] = useState("");
  const query = norm(q);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const seen = new Set<string>();
    return entries
      .filter((e) => norm(e.name).startsWith(query) || (query.length >= 3 && norm(e.name).includes(query)))
      .filter((e) => {
        const key = `${e.name}|${e.kind}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => Number(!norm(a.name).startsWith(query)) - Number(!norm(b.name).startsWith(query)))
      .slice(0, 6);
  }, [entries, query]);

  return (
    <div className="card">
      <label htmlFor="suburb-check" className="text-lg font-semibold text-navy-900">
        Check your suburb
      </label>
      <p className="mt-1 text-sm text-navy-600">Type your suburb to see how we can see you.</p>
      <div className="relative mt-4">
        <Icon name="pin" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
        <input
          id="suburb-check"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g. Charlestown, Concord, Gosford"
          autoComplete="address-level2"
          className="w-full rounded-xl border border-navy-200 bg-white py-3.5 pl-12 pr-4 text-base text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
        />
      </div>

      <div aria-live="polite" className="mt-4 space-y-3">
        {results.map((r) => (
          <div key={`${r.name}-${r.kind}`} className="flex flex-col gap-3 rounded-xl bg-sand p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-navy-900">
                {r.name} <span className="font-normal text-navy-500">· {r.region}</span>
              </p>
              <p className="mt-0.5 text-sm text-navy-700">
                {r.kind === "clinic" && (r.note ?? "Clinic appointments available")}
                {r.kind === "home" && "Yes — we do home visits here"}
                {r.kind === "sydney" && "Yes — Sydney home visits from 9 November 2026"}
              </p>
            </div>
            {r.href && (
              <Link href={r.href} className="btn-secondary flex-shrink-0 text-sm">
                View details <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </div>
        ))}
        {query.length >= 2 && results.length === 0 && (
          <div className="rounded-xl bg-clay-50 p-4 text-sm text-navy-700">
            We couldn&rsquo;t find &ldquo;{q}&rdquo; in our list, but we may still be able to visit you. Call{" "}
            <a href={phoneHref} className="font-semibold underline">{phone}</a> and we&rsquo;ll let you know.
          </div>
        )}
      </div>
    </div>
  );
}
