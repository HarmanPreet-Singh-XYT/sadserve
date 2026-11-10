"use client";

import Link from "next/link";
import { useState } from "react";
import { SCENARIOS, SCENARIO_COUNTS, type Difficulty } from "@/lib/scenarios";

type Level = Exclude<Difficulty, "playground">;

const PICKS: Record<Level, string[]> = {
  easy: ["Saint John", "Geneva", "Bucharest", "Bilbao", "Cairo", "Porto"],
  medium: ["Cape Town", "Tokyo", "Salta", "Warsaw", "Paris", "Marrakech"],
  hard: ["Jakarta", "Dublin", "London", "Pokhara", "Cadiz", "Anatolia"],
};

const TABS: { id: Level; label: string }[] = [
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

const DOTS = { easy: 1, medium: 2, hard: 3 } as const;

function Dots({ n }: { n: number }) {
  return (
    <span className="flex gap-1" aria-label={`Difficulty ${n} of 3`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={`size-2.5 rounded-full ring-1 ring-current ${i <= n ? "bg-current" : ""}`} />
      ))}
    </span>
  );
}

export function ScenarioTabs() {
  const [level, setLevel] = useState<Level>("medium");
  const rows = PICKS[level].map((c) => SCENARIOS.find((s) => s.city === c && s.difficulty === level)!).filter(Boolean);

  return (
    <div>
      <div role="tablist" aria-label="Difficulty" className="flex gap-6 border-b border-ink/25">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={level === t.id}
            onClick={() => setLevel(t.id)}
            className={`relative -mb-px flex items-baseline gap-2 pb-3 font-display text-[1.6rem] tracking-[-0.02em] transition-colors active:scale-[0.98] ${level === t.id ? "text-ink" : "text-ink-3 hover:text-ink-2"}`}
          >
            {t.label}
            <span className="font-mono text-[0.7rem] tracking-normal">{SCENARIO_COUNTS[t.id]}</span>
            <span className={`absolute inset-x-0 -bottom-px h-[3px] origin-left bg-vermilion transition-transform duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${level === t.id ? "scale-x-100" : "scale-x-0"}`} />
          </button>
        ))}
      </div>

      <ul key={level} role="tabpanel" className="border-b border-ink/25">
        {rows.map((s, i) => (
          <li key={s.id} className="line-in border-b border-ink/15 last:border-b-0" style={{ animationDelay: `${i * 45}ms` }}>
            <Link
              href="/scenarios"
              className="ledger-row grid grid-cols-[1.8rem_1fr_auto] items-center gap-x-4 gap-y-1 py-4 md:grid-cols-[2rem_1fr_6rem_4rem_3rem_1.5rem]"
            >
              <span className="ledger-dim font-mono text-[0.72rem] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <span className="font-display text-[1.45rem] font-medium leading-tight tracking-[-0.02em]">{s.city}</span>
                {s.title && <span className="ledger-dim block truncate text-[0.88rem] text-ink-2">{s.title}</span>}
              </span>
              <span className="ledger-dim hidden whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-wider text-ink-2 md:block">
                {s.isNew ? <b className="font-semibold text-vermilion">New</b> : s.noReg ? "No sign-up" : s.type}
              </span>
              <span className="ledger-dim hidden whitespace-nowrap font-mono text-[0.78rem] text-ink-2 md:block">{s.minutes} min</span>
              <span className="ledger-dim hidden text-ink-2 md:block">
                <Dots n={DOTS[s.difficulty as Level]} />
              </span>
              <span className="ledger-go text-lg" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
