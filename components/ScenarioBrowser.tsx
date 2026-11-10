"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Info, Lock, Play, Search, Sparkles, X } from "lucide-react";
import {
  DIFFICULTY_LABEL,
  SCENARIOS,
  SCENARIO_CATEGORIES,
  SCENARIO_COUNTS,
  SCENARIO_TAGS,
  type Difficulty,
  type Scenario,
  type ScenarioType,
} from "@/lib/scenarios";

type Tab = "all" | Difficulty;
type Access = "any" | "noReg" | "pro" | "business" | "new";

const TYPE_STYLE: Record<ScenarioType, string> = {
  Fix: "chip-bad",
  Do: "chip-info",
  Hack: "chip-amber",
  Playground: "chip-ok",
};
const DIFF_STYLE: Record<Difficulty, string> = {
  easy: "chip-ok",
  medium: "chip-amber",
  hard: "chip-bad",
  playground: "chip-info",
};
const TYPE_BLURB: Record<ScenarioType, string> = {
  Fix: "Something is broken. Find out why and repair it.",
  Do: "Complete a task using the tools on the box.",
  Hack: "A security / CTF challenge. Find the flag.",
  Playground: "A sandbox to explore freely, no pass/fail.",
};

const TABS: { id: Tab; label: string; n: number }[] = [
  { id: "all", label: "All", n: SCENARIOS.length },
  { id: "easy", label: "Easy", n: SCENARIO_COUNTS.easy },
  { id: "medium", label: "Medium", n: SCENARIO_COUNTS.medium },
  { id: "hard", label: "Hard", n: SCENARIO_COUNTS.hard },
  { id: "playground", label: "K8s Playgrounds", n: SCENARIO_COUNTS.playground },
];

const ACCESS: { id: Access; label: string }[] = [
  { id: "any", label: "Any access" },
  { id: "noReg", label: "No registration" },
  { id: "pro", label: "Pro" },
  { id: "business", label: "Business" },
  { id: "new", label: "New" },
];

function Badges({ s }: { s: Scenario }) {
  return (
    <>
      {s.noReg && <span className="chip chip-ok">No registration</span>}
      {s.pro && (
        <span className="chip chip-accent">
          <Lock size={10} /> Pro
        </span>
      )}
      {s.business && <span className="chip chip-info">Business</span>}
      {s.isNew && (
        <span className="chip chip-amber">
          <Sparkles size={10} /> New
        </span>
      )}
    </>
  );
}

export function ScenarioBrowser() {
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");
  const [types, setTypes] = useState<ScenarioType[]>([]);
  const [access, setAccess] = useState<Access>("any");
  const [selected, setSelected] = useState<Scenario | null>(null);
  const [open, setOpen] = useState(false);
  const carousel = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SCENARIOS.filter((s) => {
      if (tab !== "all" && s.difficulty !== tab) return false;
      if (types.length && !types.includes(s.type)) return false;
      if (access === "noReg" && !s.noReg) return false;
      if (access === "pro" && !s.pro) return false;
      if (access === "business" && !s.business) return false;
      if (access === "new" && !s.isNew) return false;
      if (needle && !`${s.city} ${s.title}`.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [tab, q, types, access]);

  const groups = (["easy", "medium", "hard", "playground"] as Difficulty[])
    .map((d) => ({ d, rows: results.filter((r) => r.difficulty === d) }))
    .filter((g) => g.rows.length);

  const filtered = q || types.length || access !== "any" || tab !== "all";

  function show(s: Scenario) {
    setSelected(s);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    if (!initial) return;
    const id = requestAnimationFrame(() => setQ(initial));
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleType = (t: ScenarioType) =>
    setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const scroll = (dir: 1 | -1) =>
    carousel.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <div>
      {/* category carousel */}
      <div className="mb-14">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="mono text-[0.72rem] uppercase tracking-[0.14em] text-dim">Browse by category</h2>
          <div className="flex gap-2">
            <button aria-label="Previous categories" onClick={() => scroll(-1)} className="grid size-9 place-items-center rounded-lg ring-1 ring-line-2 transition-transform hover:bg-white/5 active:scale-95">
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next categories" onClick={() => scroll(1)} className="grid size-9 place-items-center rounded-lg ring-1 ring-line-2 transition-transform hover:bg-white/5 active:scale-95">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          ref={carousel}
          className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {SCENARIO_CATEGORIES.map((c) => (
            <button
              key={c.name}
              onClick={() => {
                setQ(c.query);
                document.getElementById("scenario-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="card lift group w-[290px] shrink-0 snap-start p-6 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-tight">{c.name}</span>
                <ArrowRight size={16} className="text-dim transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-hi" />
              </div>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">{c.topics}</p>
            </button>
          ))}
        </div>
      </div>

      {/* controls */}
      <div id="scenario-list" className="sticky top-[68px] z-30 -mx-6 border-y border-line bg-bg/85 px-6 py-4 backdrop-blur-xl md:-mx-10 md:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Difficulty" className="flex gap-1 overflow-x-auto rounded-xl bg-white/[0.04] p-1 ring-1 ring-line [scrollbar-width:none]">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2 text-[0.85rem] font-medium transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${
                  tab === t.id ? "bg-white/10 text-fg shadow-[inset_0_0_0_1px_var(--line-2)]" : "text-muted hover:text-fg"
                }`}
              >
                {t.label}
                <span className="mono text-[0.7rem] text-dim">{t.n}</span>
              </button>
            ))}
          </div>

          <label className="relative block lg:w-[340px]">
            <span className="sr-only">Search scenarios</span>
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim" />
            <input
              ref={searchRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search nginx, dns, kubernetes…"
              className="field !h-11 pl-10 pr-10 text-[0.9rem]"
            />
            {q ? (
              <button aria-label="Clear search" onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-dim hover:text-fg">
                <X size={16} />
              </button>
            ) : (
              <kbd className="mono absolute right-3 top-1/2 -translate-y-1/2 rounded border border-line-2 px-1.5 text-[0.68rem] text-dim">/</kbd>
            )}
          </label>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {(["Fix", "Do", "Hack"] as ScenarioType[]).map((t) => (
            <button
              key={t}
              aria-pressed={types.includes(t)}
              onClick={() => toggleType(t)}
              className={`chip h-8 cursor-pointer px-3.5 transition-[transform,color] active:scale-95 ${types.includes(t) ? TYPE_STYLE[t] : "hover:text-fg"}`}
            >
              {t}
            </button>
          ))}
          <span className="mx-1 hidden h-4 w-px bg-line-2 sm:block" />
          {ACCESS.map((a) => (
            <button
              key={a.id}
              aria-pressed={access === a.id}
              onClick={() => setAccess(a.id)}
              className={`chip h-8 cursor-pointer px-3.5 transition-[transform,color] active:scale-95 ${access === a.id && a.id !== "any" ? "chip-accent" : "hover:text-fg"}`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* tags */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {SCENARIO_TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setQ(q === t ? "" : t)}
            className={`mono rounded-md px-2 py-1 text-[0.72rem] ring-1 transition-colors ${
              q === t ? "bg-accent/15 text-accent-hi ring-accent/40" : "text-dim ring-line hover:text-fg hover:ring-line-2"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="mt-10" aria-live="polite">
        <div className="mb-6 flex items-center justify-between text-[0.85rem] text-dim">
          <span>
            <span className="text-fg">{results.length}</span> of {SCENARIOS.length} entries
          </span>
          {filtered && (
            <button
              onClick={() => {
                setQ("");
                setTab("all");
                setTypes([]);
                setAccess("any");
              }}
              className="text-accent-hi hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {groups.length === 0 && (
          <div className="card p-14 text-center">
            <p className="text-lg font-medium">No scenarios match.</p>
            <p className="mt-2 text-muted">Try a broader search, like “docker” or “dns”.</p>
          </div>
        )}

        <div className="space-y-12">
          {groups.map(({ d, rows }) => (
            <section key={d} aria-labelledby={`h-${d}`}>
              <div className="mb-3 flex items-center gap-3">
                <span className={`chip ${DIFF_STYLE[d]}`}>{DIFFICULTY_LABEL[d]}</span>
                <h3 id={`h-${d}`} className="mono text-[0.78rem] text-dim">
                  {rows.length} {rows.length === 1 ? "entry" : "entries"}
                </h3>
                <span className="hr flex-1" />
              </div>
              <ul className="divide-y divide-line overflow-hidden rounded-2xl bg-white/[0.015] ring-1 ring-line">
                {rows.map((s) => (
                  <li key={s.id} className="row grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 px-4 py-3.5 sm:px-5 md:grid-cols-[2.5rem_1fr_5rem_9rem_auto]">
                    <span className="mono text-[0.78rem] text-dim">{String(s.n).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <div className="truncate text-[0.95rem]">
                        <span className="font-medium">&ldquo;{s.city}&rdquo;</span>
                        {s.title && <span className="text-muted">: {s.title}</span>}
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5 md:hidden">
                        <span className={`chip ${TYPE_STYLE[s.type]}`}>{s.type}</span>
                        <span className="chip"><Clock size={10} /> {s.minutes} m</span>
                        <Badges s={s} />
                      </div>
                    </div>
                    <span className="mono hidden items-center gap-1.5 text-[0.82rem] text-muted md:flex">
                      <Clock size={12} className="text-dim" /> {s.minutes} m
                    </span>
                    <div className="hidden flex-wrap gap-1.5 md:flex">
                      <span className={`chip ${TYPE_STYLE[s.type]}`}>{s.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden gap-1.5 xl:flex">
                        <Badges s={s} />
                      </span>
                      <button onClick={() => show(s)} aria-label={`Info: ${s.city}`} className="btn btn-ghost btn-sm !px-3">
                        <Info size={14} /> <span className="hidden sm:inline">Info</span>
                      </button>
                      <Link href="/accounts/signup" aria-label={`Run: ${s.city}`} className="btn btn-primary btn-sm !px-3">
                        <Play size={13} fill="currentColor" /> <span className="hidden sm:inline">Run</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-[visibility] duration-300 ${open ? "visible" : "invisible"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Scenario details"
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper p-7 ring-1 ring-line-2 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {selected && (
            <>
              <div className="flex items-start justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className={`chip ${DIFF_STYLE[selected.difficulty]}`}>{DIFFICULTY_LABEL[selected.difficulty]}</span>
                  <span className={`chip ${TYPE_STYLE[selected.type]}`}>{selected.type}</span>
                  <Badges s={selected} />
                </div>
                <button aria-label="Close" onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-lg ring-1 ring-line-2 hover:bg-white/5">
                  <X size={17} />
                </button>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em]">&ldquo;{selected.city}&rdquo;</h3>
              {selected.title && <p className="mt-2 text-lg text-muted">{selected.title}</p>}

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line">
                {[
                  ["Time limit", `${selected.minutes} minutes`],
                  ["With Pro", `${selected.minutes * 2} minutes`],
                  ["Type", selected.type],
                  ["Environment", "Real cloud VM"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-paper p-4">
                    <dt className="mono text-[0.68rem] uppercase tracking-wider text-dim">{k}</dt>
                    <dd className="mt-1 text-[0.95rem]">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[0.92rem] leading-relaxed text-muted">{TYPE_BLURB[selected.type]} When you think you&rsquo;re done, hit <span className="text-fg">Check My Solution</span> and automated validation takes it from there. Stuck? Clues are available.</p>

              <div className="mt-auto flex gap-3 pt-8">
                <Link href="/accounts/signup" className="btn btn-primary flex-1">
                  <Play size={14} fill="currentColor" /> Run scenario
                </Link>
                <Link href="/pricing" className="btn btn-ghost">
                  Plans
                </Link>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
