import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Crown, Lock } from "lucide-react";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { RANKING } from "@/lib/site";

export const metadata: Metadata = {
  title: "SadServers Ranking: Top Engineers",
  description: "The Top 20 Linux, DevOps & SRE engineers on SadServers. Easy = 1 point, Medium = 2 points, Hard = 5 points.",
};

const MAX = RANKING[0][1];

function hue(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}

function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const h = hue(name);
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full font-semibold text-white/90"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        background: `linear-gradient(140deg, hsl(${h} 70% 55%), hsl(${(h + 50) % 360} 70% 35%))`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.2)",
      }}
    >
      {name.trim()[0]?.toUpperCase()}
    </span>
  );
}

const PODIUM = [
  { i: 1, h: "h-40", ring: "ring-[#c9ced8]/50", glow: "rgba(201,206,216,.25)", medal: "text-[#c9ced8]", delay: 120 },
  { i: 0, h: "h-56", ring: "ring-amber/60", glow: "rgba(255,184,77,.35)", medal: "text-amber", delay: 0 },
  { i: 2, h: "h-32", ring: "ring-[#d58a54]/50", glow: "rgba(213,138,84,.25)", medal: "text-[#d58a54]", delay: 220 },
];

export default function RankingPage() {
  const rest = RANKING.slice(3);
  return (
    <>
      <PageHero
        eyebrow="Leaderboard"
        title={
          <>
            SadServers <span className="serif ember-text">Ranking</span>.
          </>
        }
        lead="The Top 20 users, by points. Easy = 1 point, Medium = 2 points, Hard = 5 points."
      >
        <span className="chip chip-accent">
          <Lock size={11} /> This is a Pro Account feature
        </span>
      </PageHero>

      <div className="wrap">
        {/* podium */}
        <div className="mx-auto grid max-w-3xl grid-cols-3 items-end gap-3 md:gap-6">
          {PODIUM.map((p) => {
            const [name, pts] = RANKING[p.i];
            return (
              <Reveal key={name} delay={p.delay} className="flex flex-col items-center">
                <div className="relative mb-4 flex flex-col items-center text-center">
                  {p.i === 0 && <Crown size={22} className="float mb-2 text-amber" />}
                  <div className={`rounded-full ring-2 ${p.ring}`} style={{ boxShadow: `0 0 40px -6px ${p.glow}` }}>
                    <Avatar name={name} size={p.i === 0 ? 72 : 56} />
                  </div>
                  <div className="mt-3 max-w-full truncate text-[0.95rem] font-semibold">{name}</div>
                  <div className="mono text-[0.8rem] text-muted">
                    <Counter to={pts} /> pts
                  </div>
                </div>
                <div
                  className={`${p.h} relative grid w-full place-items-start rounded-t-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.01] pt-4 ring-1 ring-line-2`}
                >
                  <span className={`mono mx-auto text-4xl font-semibold ${p.medal}`}>{p.i + 1}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* list */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="mono grid grid-cols-[2.5rem_1fr_4rem] gap-4 px-5 pb-3 text-[0.7rem] uppercase tracking-[0.14em] text-dim md:grid-cols-[2.5rem_1fr_9rem_4rem]">
            <span>#</span>
            <span>User alias</span>
            <span className="hidden md:block" />
            <span className="text-right">Points</span>
          </div>
          <ol className="divide-y divide-line overflow-hidden rounded-2xl bg-white/[0.02] ring-1 ring-line">
            {rest.map(([name, pts], i) => (
              <Reveal as="li" key={name} delay={Math.min(i, 6) * 30} className="group row grid grid-cols-[2.5rem_1fr_4rem] items-center gap-4 px-5 py-3.5 md:grid-cols-[2.5rem_1fr_9rem_4rem]">
                <span className="mono text-[0.85rem] text-dim">{i + 4}</span>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar name={name} size={34} />
                  <span className="truncate font-medium">{name}</span>
                </span>
                <span className="hidden h-1.5 overflow-hidden rounded-full bg-white/[0.06] md:block">
                  <span
                    className="block h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent to-amber transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-data-[in=true]:scale-x-100"
                    style={{ width: `${(pts / MAX) * 100}%` }}
                  />
                </span>
                <span className="mono text-right text-[0.9rem]">{pts}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-4 text-center text-[0.8rem] text-dim">
            Public user aliases as shown on the live leaderboard at capture time. Scores change.
          </p>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-accent/[0.06] p-7 ring-1 ring-accent/25 md:flex-row md:items-center">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Want your name on the board?</h2>
              <p className="mt-1 text-[0.92rem] text-muted">Ranking is a Pro feature. Solve scenarios, earn points, climb.</p>
            </div>
            <Link href="/pricing" className="btn btn-primary shrink-0">
              See Pro plans <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
