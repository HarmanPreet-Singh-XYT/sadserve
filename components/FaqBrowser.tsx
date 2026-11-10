"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { FAQ } from "@/lib/site";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function FaqBrowser() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(FAQ[0].section);

  const sections = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return FAQ;
    return FAQ.map((s) => ({ ...s, qs: s.qs.filter((x) => x.toLowerCase().includes(n)) })).filter((s) => s.qs.length);
  }, [q]);

  const total = sections.reduce((n, s) => n + s.qs.length, 0);

  useEffect(() => {
    const els = FAQ.map((s) => document.getElementById(slug(s.section))).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (vis) setActive(FAQ.find((s) => slug(s.section) === vis.target.id)?.section ?? FAQ[0].section);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [sections]);

  return (
    <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <label className="relative block">
          <span className="sr-only">Search questions</span>
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search 140 questions…" className="field !h-12 pl-10 pr-10" />
          {q && (
            <button aria-label="Clear search" onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-dim hover:text-fg">
              <X size={16} />
            </button>
          )}
        </label>
        <nav aria-label="FAQ sections" className="mt-6 hidden max-h-[60vh] overflow-y-auto lg:block">
          <ul className="space-y-0.5 border-l border-line">
            {sections.map((s) => (
              <li key={s.section}>
                <a
                  href={`#${slug(s.section)}`}
                  aria-current={active === s.section ? "true" : undefined}
                  className={`-ml-px flex items-center justify-between border-l py-2 pl-4 pr-2 text-[0.86rem] transition-[color,border-color] ${
                    active === s.section ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {s.section}
                  <span className="mono text-[0.68rem] text-dim">{s.qs.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div aria-live="polite">
        {total === 0 && (
          <div className="card p-14 text-center">
            <p className="text-lg font-medium">Nothing matches “{q}”.</p>
            <p className="mt-2 text-muted">
              Ask us at{" "}
              <a href="mailto:info@sadservers.com" className="text-fg underline underline-offset-4">
                info@sadservers.com
              </a>
              .
            </p>
          </div>
        )}
        <div className="space-y-20">
          {sections.map((s) => (
            <section key={s.section} id={slug(s.section)} className="scroll-mt-28 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">{s.section}</h2>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{s.intro}</p>
              </div>
              <ul className="border-t border-line-2">
                {s.qs.map((x) => (
                  <li key={x} className="border-b border-line-2">
                    <a
                      href="https://docs.sadservers.com/docs/faq/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-5 py-4 text-[0.97rem] transition-colors hover:text-accent-hi"
                    >
                      {x}
                      <ArrowUpRight size={16} className="shrink-0 text-dim transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-hi" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
