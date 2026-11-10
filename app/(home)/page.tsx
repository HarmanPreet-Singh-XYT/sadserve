import Link from "next/link";
import { SadServer } from "@/components/paper/SadServer";
import { ScenarioTabs } from "@/components/paper/ScenarioTabs";
import { PaperTerminal } from "@/components/paper/PaperTerminal";
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

export default function Home() {
  return (
    <>
      {/* ═════════ HERO ═════════ */}
      <section className="relative">
        <div className={`${WRAP} pt-6`}>
          <div className="flex items-center justify-between border-b border-ink/20 pb-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-3">
            <span>SADSERVERS(1)</span>
            <span className="hidden sm:inline">Linux &amp; DevOps Practice Manual</span>
            <span>SADSERVERS(1)</span>
          </div>
        </div>

        <div className={`${WRAP} grid items-center gap-10 pb-20 pt-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-6 lg:pt-14`}>
          <div>
            <p className="hero-in font-mono text-[0.78rem] uppercase tracking-[0.16em] text-ink-2">
              <span className="text-vermilion">NAME</span> — Hands-On Linux &amp; DevOps
            </p>

            <h1
              className="font-display mt-6 font-medium leading-[0.92] tracking-[-0.035em]"
              style={{ fontSize: "clamp(3rem, 7.4vw, 6.6rem)" }}
            >
              <span className="mask-line"><span style={{ "--d": "100ms" } as never}>Real Challenges.</span></span>
              <span className="mask-line">
                <span style={{ "--d": "220ms" } as never}>
                  Real{" "}
                  <span className="relative inline-block italic">
                    Infra.
                    <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-[0.02em] left-0 h-[0.2em] w-full overflow-visible">
                      <path className="scribble" pathLength={1} d="M2 15 C 40 4, 70 22, 110 11 S 190 4, 230 14 S 285 8, 298 12" fill="none" stroke="#e8401c" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="mask-line"><span style={{ "--d": "340ms" } as never}>Real Skills.</span></span>
            </h1>

            <p className="hero-in mt-9 max-w-[34rem] text-[1.2rem] leading-[1.55] text-ink-2" style={{ "--d": "600ms" } as never}>
              Master Linux &amp; DevOps troubleshooting on live servers. Fun, real-world challenges for engineers and
              powerful assessments for hiring teams.
            </p>

            <p className="hero-in font-hand mt-4 inline-block -rotate-1 text-[1.9rem] leading-none text-vermilion" style={{ "--d": "700ms" } as never}>
              “Like LeetCode for Linux and DevOps”
            </p>

            <div className="hero-in mt-10 flex flex-col gap-5 sm:flex-row sm:items-center" style={{ "--d": "800ms" } as never}>
              <Link href="/scenarios" className="btn-ink w-fit text-[1.02rem]">
                Show Me Sad Servers <span aria-hidden>→</span>
              </Link>
              <p className="text-[0.92rem] leading-snug">
                <span className="font-medium">Try SadServers instantly for free.</span>
                <br />
                <span className="text-ink-2">No sign-up required.</span>
              </p>
            </div>

            <p className="hero-in mt-14 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-3" style={{ "--d": "900ms" } as never}>
              ★ Trusted &amp; loved by thousands of engineers like you!
            </p>
          </div>

          {/* figure */}
          <figure className="hero-in relative" style={{ "--d": "400ms" } as never}>
            <div className="dots relative border border-ink bg-paper-3/60 px-4 pb-2 pt-6 sm:px-10">
              {[["-left-1", "-top-1"], ["-right-1", "-top-1"], ["-left-1", "-bottom-1"], ["-right-1", "-bottom-1"]].map(([x, y]) => (
                <span key={x + y} aria-hidden className={`absolute ${x} ${y} size-2 border border-ink bg-paper`} />
              ))}
              <SadServer interactive className="mx-auto w-full max-w-[400px]" />

              <span className="font-hand absolute right-3 top-6 hidden -rotate-6 text-[1.7rem] leading-none text-ink-2 sm:block">
                503 (again)
                <svg aria-hidden width="70" height="34" viewBox="0 0 70 34" className="-ml-8 mt-1 rotate-[8deg]">
                  <path d="M60 4 C 40 2, 14 8, 8 28" fill="none" stroke="#4b473b" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M3 21 L8 29 L16 23" fill="none" stroke="#4b473b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-hand absolute left-3 top-5 hidden -rotate-3 text-[1.4rem] leading-none text-ink-2 sm:block">
                it&rsquo;s always DNS
                <svg aria-hidden width="60" height="40" viewBox="0 0 60 40" className="ml-14 -mt-1 rotate-[-12deg]">
                  <path d="M6 34 C 22 36, 44 24, 50 6" fill="none" stroke="#4b473b" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M42 8 L50 5 L53 14" fill="none" stroke="#4b473b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-3">
              Fig. 1 — SAD-01, shortly before the page went out.
            </figcaption>
          </figure>
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

      {/* ═════════ EXAMPLE ═════════ */}
      <section className={`${WRAP} py-28`}>
        <Label n="§1">Example</Label>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <PaperTerminal />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[0.98] tracking-[-0.03em]">
              A real box. A real fire. <em>Fifteen minutes.</em>
            </h2>
            <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-ink-2">
              Every scenario boots a live, disposable cloud VM with something genuinely broken on it. Fix it in the
              browser, or over SSH with Pro+. Hit <span className="font-mono text-[0.95em] text-ink">Check My Solution</span> and
              automated validation does the grading.
            </p>
            <ol className="mt-9 divide-y divide-ink/20 border-y border-ink/20">
              {[
                ["01", "Pick a scenario"],
                ["02", "Get a disposable VM"],
                ["03", "Fix it. Break things freely."],
                ["04", "Check My Solution"],
              ].map(([n, t]) => (
                <li key={n} className="flex items-baseline gap-5 py-3.5">
                  <span className="font-mono text-[0.75rem] text-vermilion">{n}</span>
                  <span className="text-[1.05rem]">{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ═════════ SCENARIOS LEDGER ═════════ */}
      <section className="border-t border-ink bg-paper-2">
        <div className={`${WRAP} py-28`}>
          <Label n="§2">Scenarios</Label>
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
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#ff6a45]">For businesses</p>
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
                  <li key={t} className="flex gap-4"><span className="font-mono text-[#ff6a45]">—</span>{t}</li>
                ))}
              </ul>
              <Link href="/solutions/business" className="mt-10 inline-flex h-[52px] items-center gap-2 rounded-full bg-paper px-6 font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-vermilion hover:text-paper active:scale-[0.97]">
                Explore for businesses <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ INDEX ═════════ */}
      <section className={`${WRAP} py-28`}>
        <Label n="§3">Index</Label>
        <Reveal className="mt-14 max-w-3xl">
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
            From <em>systemd</em> to Kubernetes.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
            Guides, troubleshooting tips, cheatsheets and hands-on scenarios across {LABS.length} categories and 43 technologies.
          </p>
        </Reveal>
        <dl className="mt-16 border-t-2 border-ink">
          {LABS.map((l) => (
            <Reveal key={l.slug} className="grid gap-3 border-b border-ink/25 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
              <dt className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-2">{l.category}</dt>
              <dd className="font-display text-[1.6rem] leading-[1.35] tracking-[-0.015em]">
                {l.items.map((t, i) => (
                  <span key={t.name}>
                    <Link href={`/scenarios?q=${encodeURIComponent(t.name.toLowerCase().split(" ")[0])}`} title={t.desc} className="decoration-vermilion decoration-2 underline-offset-[6px] transition-colors hover:text-vermilion hover:underline">
                      {t.name}
                    </Link>
                    {i < l.items.length - 1 && <span className="mx-2.5 text-ink/30">/</span>}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ═════════ AGENTS ═════════ */}
      <section className="border-y border-ink bg-vermilion text-ink">
        <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <Reveal>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em]">§4 — Agents</p>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,5.6vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.035em]">
              Your agent says it fixed the server. <em>Did it?</em>
            </h2>
            <p className="mt-7 max-w-xl text-[1.1rem] leading-relaxed text-ink/80">
              Benchmark and train AI agents on real Linux and DevOps tasks: live VMs, SSH and API access, automated
              validation. Organizations such as Metr and the AI Security Institute trust SadServers for AI evaluations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/solutions/business#ai" className="btn-ink">Evaluate your agents <span aria-hidden>→</span></Link>
              <a href="https://srebattle.com" target="_blank" rel="noreferrer" className="btn-line !shadow-[inset_0_0_0_1.5px_#16140f]">SREBattle.com ↗</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="-rotate-1 rounded-lg bg-[#14120e] p-5 font-mono text-[0.8rem] leading-[1.8] text-[#e9e4d6] shadow-[8px_8px_0_#16140f]">
              <div className="text-[#7d7766]"># example agent run</div>
              <div><span className="text-phosphor">agent$</span> ssh admin@vm-7f3a</div>
              <div><span className="text-phosphor">agent$</span> sudo systemctl restart nginx</div>
              <div><span className="text-phosphor">agent$</span> echo &quot;fixed it&quot;</div>
              <div className="mt-1 text-[#ff8a6b]">validator: FAIL — expected 200, got 502</div>
              <div className="text-[#7d7766]">1 of 6 checks passed · 0 clues used</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ PRICING ═════════ */}
      <section className={`${WRAP} py-28`}>
        <Label n="§5">Pricing</Label>
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.035em]">
              Start free. Pay when it <em>clicks.</em>
            </h2>
            <p className="mt-6 text-ink-2">Cancel subscriptions at any time.</p>
            <Link href="/pricing" className="btn-line mt-9">Compare all plans <span aria-hidden>→</span></Link>
          </Reveal>
          <Reveal>
            <ul className="border-t-2 border-ink">
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
            <Label n="§6">Field notes</Label>
          </div>
          <ul className="mt-12 grid gap-x-12 md:grid-cols-3">
            {BLOG.slice(0, 3).map((p) => (
              <Reveal as="li" key={p.title} className="border-t-2 border-ink pt-5">
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
              <p className="font-hand text-[1.6rem] text-ink-2">no sign-up required</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
