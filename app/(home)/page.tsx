import Link from "next/link";
import { ScenarioTabs } from "@/components/paper/ScenarioTabs";
import { InterviewReplay } from "@/components/paper/InterviewReplay";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { BLOG, LABS } from "@/lib/site";

const WRAP = "mx-auto w-full max-w-[1280px] px-5 md:px-10";

function Label({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-2">
      <span className="text-vermilion">{n}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-ink/20" />
    </div>
  );
}

const STEPS = [
  ["01", "Pick a scenario", "138 real incidents across Linux, containers, databases and cloud. Start with no sign-up."],
  ["02", "Get a disposable VM", "A live cloud machine with something genuinely broken on it. Browser terminal, or SSH on Pro+."],
  ["03", "Fix it", "Break things freely. Use clues if you're stuck, and the clock if you want the pressure."],
  ["04", "Check my solution", "Automated validation grades the outcome. Teams also get time-to-solve and the full command replay."],
];

export default function Home() {
  return (
    <>
      {/* ═════════ HERO ═════════ */}
      <section>
        <div className={`${WRAP} pb-12 pt-16 lg:pt-24`}>
          <p className="hero-in font-mono text-[0.78rem] uppercase tracking-[0.16em] text-ink-2">
            <span className="text-vermilion">Hands-on Linux &amp; DevOps</span> — for engineers and the teams that hire them
          </p>
          <h1 className="font-display mt-6 font-medium leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(2.9rem, 7vw, 6.4rem)" }}>
            <span className="mask-line"><span style={{ "--d": "100ms" } as never}>Real Challenges.</span></span>
            <span className="mask-line"><span style={{ "--d": "200ms" } as never}>Real Infra.</span></span>
            <span className="mask-line"><span style={{ "--d": "300ms" } as never}><span className="text-vermilion">Real Skills.</span></span></span>
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="hero-in max-w-xl text-[1.2rem] leading-relaxed text-ink-2" style={{ "--d": "500ms" } as never}>
              Master Linux &amp; DevOps troubleshooting on live servers. Fun, real-world challenges for engineers, and
              powerful assessments for hiring teams.
            </p>
            <div className="hero-in flex flex-wrap items-center gap-4" style={{ "--d": "600ms" } as never}>
              <Link href="/scenarios" className="btn-ink">Show Me Sad Servers <span aria-hidden>→</span></Link>
              <Link href="/solutions/business" className="btn-line">For hiring teams</Link>
            </div>
          </div>
        </div>

        <div className={`${WRAP} hero-in pb-24`} style={{ "--d": "700ms" } as never}>
          <InterviewReplay />
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-3">
            Fig. 1 — A real session, replayed. Press play, or drag the scrubber. Same machine whether you practise or interview.
          </p>
        </div>
      </section>

      {/* ═════════ NUMBERS ═════════ */}
      <section className="border-y border-ink bg-paper-3">
        <div className={`${WRAP} grid grid-cols-2 divide-ink/20 md:grid-cols-4 md:divide-x`}>
          {[
            [<Counter key="a" to={138} />, "scenarios"],
            [<Counter key="b" to={43} />, "technologies"],
            [<Counter key="c" to={750000} suffix="+" />, "challenges run"],
            [<span key="d">2022</span>, "bootstrapped & profitable"],
          ].map(([v, l], i) => (
            <div key={i} className="min-w-0 px-0 py-7 md:px-8 md:first:pl-0">
              <div className="font-display text-[2.3rem] font-medium tracking-[-0.03em] min-[420px]:text-5xl md:text-[3.4rem] lg:text-6xl">{v}</div>
              <div className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════ HOW IT RUNS ═════════ */}
      <section className="border-y border-ink bg-ink text-paper">
        <div className={`${WRAP} py-28`}>
          <div className="flex items-center gap-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper/60">
            <span className="text-[#7a9bff]">01</span>
            <span>How it works</span>
            <span className="h-px flex-1 bg-paper/20" />
          </div>
          <Reveal className="mt-14 max-w-3xl">
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
              From broken box to <em>fixed.</em>
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 70} className="relative border-t border-paper/30 pr-8 pt-6">
                <span className="absolute -top-[5px] left-0 size-[9px] rounded-full bg-[#7a9bff]" />
                <div className="font-mono text-[0.75rem] text-[#7a9bff]">{n}</div>
                <h3 className="font-display mt-4 text-[1.7rem] font-medium leading-[1.05] tracking-[-0.02em]">{t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/70">{d}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link href="/scenarios" className="inline-flex h-[52px] items-center gap-2 rounded-full bg-paper px-6 font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-vermilion hover:text-paper active:scale-[0.97]">
              Start a scenario <span aria-hidden>→</span>
            </Link>
            <span className="font-mono text-[0.8rem] text-paper/60">teams: invite candidates with a magic link</span>
          </div>
        </div>
      </section>

      {/* ═════════ SEATS / SCENARIOS ═════════ */}
      <section className="bg-paper-2">
        <div className={`${WRAP} py-28`}>
          <Label n="02">Scenarios</Label>
          <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
                138 ways for a server to be <em>sad.</em>
              </h2>
              <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-2">
                Named after cities, built from real incidents. Fix what&rsquo;s broken, finish a task, or capture the flag.
              </p>
              <Link href="/scenarios" className="btn-line mt-9">
                Browse all 138 <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal>
              <ScenarioTabs />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════ AUDIENCES ═════════ */}
      <section className="border-y border-ink">
        <div className="grid lg:grid-cols-2">
          <Reveal className="border-ink bg-paper px-5 py-24 md:px-14 lg:border-r">
            <div className="mx-auto max-w-lg lg:ml-auto lg:mr-0">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-vermilion">For individuals</p>
              <h2 className="font-display mt-5 text-[clamp(2.2rem,3.8vw,3.4rem)] font-medium leading-[1] tracking-[-0.03em]">
                For people who&rsquo;d rather fix it than read about it.
              </h2>
              <ul className="mt-9 space-y-4 text-[1.05rem] leading-snug">
                {[
                  "Learn by doing. Muscle memory sticks; tutorials don't.",
                  "Prove it with an achievements page and a PDF certificate.",
                  "Fail safely. Every server is disposable, so break it.",
                  "Practice in 20-minute bursts, at your own pace.",
                ].map((t) => (
                  <li key={t} className="flex gap-4"><span className="font-mono text-vermilion">—</span>{t}</li>
                ))}
              </ul>
              <Link href="/solutions/individual" className="btn-line mt-10">Explore for individuals <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="bg-ink px-5 py-24 text-paper md:px-14">
            <div className="mx-auto max-w-lg lg:mx-0">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7a9bff]">For businesses</p>
              <h2 className="font-display mt-5 text-[clamp(2.2rem,3.8vw,3.4rem)] font-medium leading-[1] tracking-[-0.03em]">
                For teams who&rsquo;d rather watch it than ask about it.
              </h2>
              <ul className="mt-9 space-y-4 text-[1.05rem] leading-snug text-paper/85">
                {[
                  "Interview with a one-click magic link. No candidate account needed.",
                  "Command history and results land in a shared dashboard.",
                  "Custom private scenarios built around your stack.",
                  "Fairness: fewer covert AI helpers, more actual engineering.",
                ].map((t) => (
                  <li key={t} className="flex gap-4"><span className="font-mono text-[#7a9bff]">—</span>{t}</li>
                ))}
              </ul>
              <Link href="/solutions/business" className="mt-10 inline-flex h-[52px] items-center gap-2 rounded-full bg-paper px-6 font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-vermilion hover:text-paper active:scale-[0.97]">
                Explore for businesses <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ RACK / STACK ═════════ */}
      <section className={`${WRAP} py-28`}>
        <Label n="03">The stack</Label>
        <Reveal className="mt-14 max-w-3xl">
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
            The stack you actually <em>run.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
            Scenarios across {LABS.length} categories and 43 technologies, from systemd to Kubernetes, Terraform and
            observability. Each one is a unit in the rack.
          </p>
        </Reveal>
        <div className="mt-14 border border-ink bg-paper-3 shadow-[0_1px_2px_rgba(11,16,32,0.06),0_24px_48px_-16px_rgba(11,16,32,0.22)]">
          {LABS.map((l, i) => (
            <Reveal key={l.slug} className="group/u grid gap-3 border-b border-ink/30 px-5 py-5 last:border-b-0 md:grid-cols-[3.5rem_13rem_1fr_auto] md:items-baseline md:gap-6">
              <span className="font-mono text-[0.7rem] tracking-wider text-ink-3">U{String(i + 1).padStart(2, "0")}</span>
              <span className="flex items-center gap-3 font-mono text-[0.74rem] uppercase tracking-[0.12em]">
                <span className="size-2 rounded-full border border-ink bg-phosphor transition-colors duration-200 group-hover/u:bg-vermilion" />
                {l.category}
              </span>
              <span className="font-display text-[1.35rem] leading-[1.4] tracking-[-0.01em]">
                {l.items.map((t, k) => (
                  <span key={t.name}>
                    <Link href={`/scenarios?q=${encodeURIComponent(t.name.toLowerCase().split(" ")[0])}`} title={t.desc} className="decoration-vermilion decoration-2 underline-offset-[6px] transition-colors hover:text-vermilion hover:underline">
                      {t.name}
                    </Link>
                    {k < l.items.length - 1 && <span className="mx-2 text-ink/25">/</span>}
                  </span>
                ))}
              </span>
              <span className="hidden font-mono text-[0.7rem] text-ink-3 md:block">{l.items.length}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════ AGENTS ═════════ */}
      <section className="border-y border-ink bg-vermilion text-white">
        <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <Reveal>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em]">04 — Agents</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.6vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.035em]">
              Your agent says it fixed the server. <em>Did it?</em>
            </h2>
            <p className="mt-7 max-w-xl text-[1.1rem] leading-relaxed text-white/85">
              Benchmark and train AI agents on real Linux and DevOps tasks: live VMs, SSH and API access, automated
              validation. Organizations such as Metr and the AI Security Institute trust SadServe for AI evaluations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/solutions/business#ai" className="btn-ink !bg-white !text-ink">Evaluate your agents <span aria-hidden>→</span></Link>
              <a href="https://srebattle.com" target="_blank" rel="noreferrer" className="btn-line !shadow-[inset_0_0_0_1px_#0b1020]">SREBattle.com ↗</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg bg-[#0b1020] p-5 font-mono text-[0.8rem] leading-[1.8] text-[#e6eaf2] shadow-[0_1px_2px_rgba(11,16,32,0.06),0_24px_48px_-16px_rgba(11,16,32,0.22)]">
              <div className="text-[#7b849a]"># example agent run</div>
              <div><span className="text-phosphor">agent$</span> ssh admin@vm-7f3a</div>
              <div><span className="text-phosphor">agent$</span> sudo systemctl restart nginx</div>
              <div><span className="text-phosphor">agent$</span> echo &quot;fixed it&quot;</div>
              <div className="mt-1 text-[#ff8a6b]">validator: FAIL — expected 200, got 502</div>
              <div className="text-[#7b849a]">1 of 6 checks passed · 0 clues used</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ PRICING ═════════ */}
      <section className={`${WRAP} py-28`}>
        <Label n="05">Pricing</Label>
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
              Start free. Pay when it <em>clicks.</em>
            </h2>
            <p className="mt-6 text-ink-2">Cancel subscriptions at any time.</p>
            <Link href="/pricing" className="btn-line mt-9">Compare all plans <span aria-hidden>→</span></Link>
          </Reveal>
          <Reveal>
            <ul className="border-t border-ink">
              {[
                ["Hobbyist", "Free", "", "Practice on a selection of scenarios, with a dashboard to track progress."],
                ["Pro", "$9", "/month · or $72/year", "Unlimited practice across 125+ scenarios, double the time, VMs with Internet, achievements page."],
                ["Pro+", "$11", "/month · $88/year · $249 lifetime", "Everything in Pro, plus direct SSH, command history logging and the CLI/TUI."],
                ["Business", "$245", "/month · or $1,470/year", "Interview candidates, results dashboard, API access. Pay-per-use from $400."],
              ].map(([n, p, u, d]) => (
                <li key={n} className="border-b border-ink/25">
                  <Link href="/pricing" className="ledger-row grid items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[9rem_1fr_1.5rem]">
                    <span className="font-display text-[1.7rem] font-medium tracking-[-0.02em]">{n}</span>
                    <span>
                      <span className="font-display text-[2.4rem] font-medium leading-none tracking-[-0.03em]">{p}</span>
                      <span className="ledger-dim ml-2 font-mono text-[0.72rem] text-ink-2">{u}</span>
                      <span className="ledger-dim mt-2 block max-w-md text-[0.92rem] leading-snug text-ink-2">{d}</span>
                    </span>
                    <span className="ledger-go hidden text-lg md:block" aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ═════════ FIELD NOTES ═════════ */}
      <section className="border-t border-ink bg-paper-3">
        <div className={`${WRAP} py-24`}>
          <div className="flex items-end justify-between gap-6">
            <Label n="06">Field notes</Label>
          </div>
          <ul className="mt-12 grid gap-x-12 md:grid-cols-3">
            {BLOG.slice(0, 3).map((p) => (
              <Reveal as="li" key={p.title} className="border-t border-ink pt-5">
                <a href="https://docs.sadservers.com/blog/" target="_blank" rel="noreferrer" className="group block pb-10">
                  <div className="flex justify-between font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-3">
                    <span>{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="font-display mt-5 text-[1.65rem] font-medium leading-[1.08] tracking-[-0.02em] decoration-vermilion decoration-2 underline-offset-[6px] group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[0.93rem] leading-relaxed text-ink-2">{p.excerpt}</p>
                </a>
              </Reveal>
            ))}
          </ul>
          <Link href="/blog" className="btn-line">All posts <span aria-hidden>→</span></Link>
        </div>
      </section>

      {/* ═════════ CLOSER ═════════ */}
      <section className="overflow-hidden border-t border-ink">
        <div className={`${WRAP} py-32 text-center`}>
          <Reveal>
            <h2 className="font-display font-medium leading-[0.88] tracking-[-0.045em]" style={{ fontSize: "clamp(3.6rem, 13vw, 12rem)" }}>
              Go break <em>something.</em>
            </h2>
            <div className="mt-12 flex flex-col items-center gap-4">
              <Link href="/scenarios" className="btn-ink text-[1.05rem]">Show Me Sad Servers <span aria-hidden>→</span></Link>
              <p className="font-mono text-[0.85rem] text-ink-2">no sign-up required</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
