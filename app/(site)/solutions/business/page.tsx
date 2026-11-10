import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  KeyRound,
  Layers,
  Lock,
  Quote,
  Server,
  Timer,
  Wallet,
} from "lucide-react";
import { PageHero, CtaBand, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Linux & DevOps Assessment Platform for Technical Hiring & Training",
  description:
    "Evaluate engineers with real-world Linux & DevOps scenarios. Technical interviews, internal training and AI agent evaluation on live servers.",
};

const FEATURES = [
  { i: Server, t: "Real-world scenarios", d: "Production-grade troubleshooting challenges across Linux, Docker, Kubernetes, databases, and more. Each mirrors actual incidents your team will face." },
  { i: BarChart3, t: "Results dashboard", d: "Track performance across your entire organization: completion rates, time-to-solve and number of clues used." },
  { i: Timer, t: "Instant assessment", d: "No waiting for environment setup. Send a link and get results within minutes. Automated validation means no manual grading for filter interviews." },
  { i: Lock, t: "Business-exclusive content", d: "Scenarios available only to business subscribers. Unpublished challenges that test expertise in production environments." },
  { i: Layers, t: "Custom private scenarios", d: "We'll create scenarios tailored to your exact infrastructure, tools and challenges. Completely private to your organization." },
  { i: Wallet, t: "Flexible pricing", d: "Monthly subscriptions, annual plans for savings, or pay-per-use for seasonal hiring or training." },
];

const FLOW = [
  { phase: "Set up", steps: ["Create interviews for candidates or team members with specific scenarios and difficulty levels", "Optionally set a custom max time, or disable showing the clues and solution"] },
  { phase: "Run", steps: ["Users receive instant access to live Linux servers", "They troubleshoot and solve real production issues", "Optionally, you can join the candidate's session to help or review their work", "Their command log history is saved for review"] },
  { phase: "Decide", steps: ["Automated validation checks their solutions", "Results appear in your dashboard immediately", "Review performance and completion details", "Make informed decisions based on actual capability"] },
];

const BENEFITS = [
  ["Objective evaluation", "Clear pass/fail criteria. The clues are the same for all candidates. Command history from the session is saved for review."],
  ["Real-world relevance", "See how candidates actually troubleshoot under time pressure, not how they perform on whiteboards."],
  ["Time efficient", "30 minutes of hands-on work tells you more than hours of theoretical questioning."],
  ["Stress-test skills", "Identify candidates who can think systematically when facing unfamiliar problems."],
  ["Level calibration", "Use Easy, Medium, and Hard scenarios to accurately gauge experience level."],
  ["Fairness", "Save time by avoiding candidates trying to use covert AI helpers to pass job interviews."],
];

const TRAINING = [
  ["Onboarding", "Bring new hires up to speed on your infrastructure patterns with custom scenarios."],
  ["Skill assessment", "Identify which team members need additional training in specific technologies."],
  ["Learning events", "Host internal hackathons, lunch-and-learns, or friendly competitions."],
  ["Knowledge retention", "Regular practice keeps skills sharp between incidents."],
  ["Team building", "Collaborative solving sessions strengthen team dynamics."],
  ["Team certifications", "Help teams get professional certifications by doing practical exercises."],
];

const AI = [
  ["Agent benchmarking", "Measure your AI's ability to solve real sysadmin tasks, not toy problems."],
  ["Training data", "Use scenarios as structured environments for reinforcement learning."],
  ["Capability testing", "Systematically evaluate what your agents can and cannot handle."],
  ["Regression testing", "Ensure new versions maintain or improve troubleshooting performance."],
  ["Competitive analysis", "Compare your agent's performance against industry benchmarks."],
  ["Research platform", "A controlled environment for studying AI behavior in systems administration."],
];

const FAQS = [
  { q: "Can I try the Business plan?", a: "Yes. Pro+ users can try the Business subscription free for 7 days." },
  { q: "How do I see my candidates' or team members' results?", a: "Interview results (time to solve if solved, and number of clues used) appear in a dashboard shared across your organization. Anyone in the organization can also view or download the shell command history for a session, kept for scenarios created in the last 30 days." },
  { q: "What makes business-exclusive scenarios different?", a: "They are available only to business subscribers: unpublished challenges that test expertise in production-like environments." },
  { q: "Can you create custom scenarios for our specific technology stack?", a: "Yes. We'll build scenarios tailored to your infrastructure, tools and challenges, completely private to your organization. Contact us for custom packages." },
  { q: "How does pay-per-use pricing work?", a: "Buy a package of interviews (25 for $400 or 50 for $600) and use them when you need them. It includes all Business Subscription features, ideal for seasonal hiring or short-term training." },
  { q: "Is there an API for programmatic access?", a: "Yes. Business accounts include API access to run scenario VMs, handy for CI, training pipelines and AI agent benchmarks." },
  { q: "Can candidates or users try the scenarios on their own time?", a: "Yes. Each candidate gets a one-time magic link they can open at interview time or asynchronously. No SadServe account is needed." },
];

function Pairs({ items }: { items: string[][] }) {
  return (
    <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {items.map(([t, d]) => (
        <div key={t} className="border-t border-line pt-4">
          <dt className="font-medium tracking-tight">{t}</dt>
          <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">{d}</dd>
        </div>
      ))}
    </dl>
  );
}

function Numeral({ n }: { n: string }) {
  return (
    <div
      aria-hidden
      className="select-none text-[7rem] font-semibold leading-[0.8] tracking-[-0.07em] text-transparent md:text-[11rem]"
      style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.15)" }}
    >
      {n}
    </div>
  );
}

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="SadServe for Businesses"
        title={
          <>
            Evaluate engineers with <span className="serif ember-text">real-world</span> Linux &amp; DevOps scenarios.
          </>
        }
        lead="Stop relying on whiteboard coding and theoretical questions. Assess technical skills with hands-on troubleshooting challenges that reveal how candidates and team members actually work under pressure."
      >
        <a href="#use-cases" className="btn btn-primary h-[52px] px-7">
          Explore use cases <ArrowRight size={17} className="arrow" />
        </a>
        <Link href="/pricing" className="btn btn-ghost h-[52px]">
          View pricing
        </Link>
      </PageHero>

      {/* features */}
      <section className="wrap py-16">
        <SectionHead
          eyebrow="The platform"
          title={
            <>
              The assessment platform built for <span className="serif">technical teams</span>.
            </>
          }
          lead="Ready-to-use Linux and DevOps scenarios that give you immediate insight into real technical capabilities. No setup, no infrastructure headaches."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 70}>
              <Card lift className="h-full p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-info/10 text-info ring-1 ring-info/25">
                  <f.i size={20} />
                </span>
                <h3 className="h3 mt-6">{f.t}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">{f.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* how it works */}
      <section className="wrap py-24">
        <SectionHead eyebrow="How it works" title={<>Ten steps from invite to <span className="serif">insight</span>.</>} />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {FLOW.map((p, pi) => {
            const start = FLOW.slice(0, pi).reduce((n, x) => n + x.steps.length, 0);
            return (
              <Reveal key={p.phase} delay={pi * 90}>
                <Card className="h-full p-7">
                  <span className="chip chip-accent">{p.phase}</span>
                  <ol className="mt-7 space-y-6">
                    {p.steps.map((s, i) => (
                      <li key={s} className="flex gap-4">
                        <span className="mono mt-0.5 w-6 shrink-0 text-[0.78rem] text-dim">{String(start + i + 1).padStart(2, "0")}</span>
                        <span className="text-[0.93rem] leading-relaxed text-muted">{s}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* use cases */}
      <section id="use-cases" className="wrap scroll-mt-24 py-16">
        <SectionHead
          eyebrow="Three ways organizations use SadServe"
          title={<>Interviews. Training. <span className="serif ember-text">Agents.</span></>}
          lead="From technical interviews to internal training to AI agent development, discover how teams across industries use practical assessment to build stronger technical capabilities."
        />

        {/* 01 */}
        <article id="interview" className="mt-20 grid gap-8 border-t border-line pt-14 lg:grid-cols-[0.34fr_1fr]">
          <Reveal><Numeral n="01" /></Reveal>
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">Technical interview assessment</h3>
              <p className="lead mt-4 max-w-2xl">Evaluate Linux SysAdmin, DevOps, and SRE candidates with scenarios that reveal real problem-solving ability, not memorized answers.</p>
            </Reveal>
            <Reveal className="mt-10"><Pairs items={BENEFITS} /></Reveal>
            <Reveal className="mt-10">
              <div className="flex gap-4 rounded-2xl bg-accent/[0.06] p-6 ring-1 ring-accent/20">
                <Quote size={20} className="mt-0.5 shrink-0 text-accent-hi" />
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-medium text-fg">Hiring impact:</span> hands-on work sample tests are highly effective predictors of job performance
                  <span className="mono text-dim"> [1998 meta-analysis by Frank L. Schmidt and John E. Hunter]</span>.
                </p>
              </div>
            </Reveal>
            <Reveal className="mt-10">
              <p className="mono mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-dim">Typical interview flow</p>
              <ol className="flex flex-wrap items-center gap-2">
                {["Screen resume", "Send scenario link", "Candidate solves (30 min)", "Review dashboard results", "Technical deep-dive", "Hire with confidence"].map((s, i, a) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="chip h-9 px-4 text-[0.82rem]"><span className="mono text-dim">{i + 1}</span> {s}</span>
                    {i < a.length - 1 && <ArrowRight size={14} className="text-dim" />}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </article>

        {/* 02 */}
        <article id="training" className="mt-24 grid gap-8 border-t border-line pt-14 lg:grid-cols-[0.34fr_1fr]">
          <Reveal><Numeral n="02" /></Reveal>
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">Internal training &amp; team evaluation</h3>
              <p className="lead mt-4 max-w-2xl">Upskill your engineering team, identify knowledge gaps, and run engaging technical workshops or competitions.</p>
            </Reveal>
            <Reveal className="mt-10"><Pairs items={TRAINING} /></Reveal>
            <Reveal className="mt-10">
              <div className="flex gap-4 rounded-2xl bg-accent/[0.06] p-6 ring-1 ring-accent/20">
                <Quote size={20} className="mt-0.5 shrink-0 text-accent-hi" />
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-medium text-fg">Training ROI:</span> teams practicing chaos engineering observe a significant reduction in MTTR. In one study, 23% of teams achieved an MTTR of under one hour, and 60% reduced their MTTR to under 12 hours
                  <span className="mono text-dim"> [2021 State of Chaos Engineering Report, Gremlin]</span>.
                </p>
              </div>
            </Reveal>
            <Reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[["Competitions", "Fastest solve wins prizes"], ["Workshops", "Group learning sessions"], ["Challenges", "Weekly skill-building"], ["Assessments", "Quarterly skill reviews"]].map(([t, d]) => (
                <div key={t} className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-line">
                  <div className="font-medium">{t}</div>
                  <div className="mt-1 text-[0.82rem] text-dim">{d}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </article>

        {/* 03 */}
        <article id="ai" className="mt-24 grid scroll-mt-24 gap-8 border-t border-line pt-14 lg:grid-cols-[0.34fr_1fr]">
          <Reveal><Numeral n="03" /></Reveal>
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-info"><Bot size={18} /><span className="mono text-[0.72rem] uppercase tracking-[0.14em]">AI</span></div>
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">AI agent evaluation &amp; training</h3>
              <p className="lead mt-4 max-w-2xl">Test and train AI agents on real Linux and DevOps tasks. Benchmark autonomous systems against production-grade challenges.</p>
            </Reveal>
            <Reveal className="mt-10"><Pairs items={AI} /></Reveal>
            <Reveal className="mt-10">
              <a href="https://srebattle.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl bg-info/[0.06] p-6 ring-1 ring-info/20 transition-colors hover:bg-info/10">
                <p className="text-[0.95rem] text-muted"><span className="font-medium text-fg">See it in action:</span> we benchmark AI models on SadServe scenarios at SREBattle.com.</p>
                <ArrowUpRight size={20} className="shrink-0 text-info transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
            <Reveal className="mt-10">
              <p className="mono mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-dim">AI integration checklist</p>
              <div className="flex flex-wrap gap-2">
                {["API access available", "Automated evaluation", "SSH access for agents", "Custom scenarios", "Performance metrics", "Batch testing"].map((c) => (
                  <span key={c} className="chip chip-info h-9 px-4 text-[0.82rem]"><KeyRound size={12} /> {c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>
      </section>

      {/* pricing */}
      <section className="wrap py-24">
        <SectionHead eyebrow="Pricing" title={<>Flexible pricing for <span className="serif">every</span> organization.</>} lead="Whether you're hiring once a quarter or training teams year-round, we have a pricing model that works for you." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Monthly subscription", "Best for consistent hiring needs or ongoing team training. Cancel anytime."],
            ["Annual plan", "Committed to long-term team development? Save big with annual billing."],
            ["Pay-per-use", "Seasonal hiring? Short-term training needs? Only pay for what you use, when you use it."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <Card lift className="h-full p-7">
                <h3 className="h3">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link href="/pricing" className="btn btn-ghost">See pricing details <ArrowRight size={16} className="arrow" /></Link>
        </Reveal>
      </section>

      {/* faq */}
      <section className="wrap grid gap-12 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead title={<>Questions, <span className="serif">answered</span>.</>} lead={<>Something else? <a className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-accent" href="mailto:info@sadservers.com">Email us</a>.</>} />
        <Reveal><Accordion items={FAQS} /></Reveal>
      </section>

      <CtaBand
        title={<>Ready to assess <span className="serif ember-text">real</span> technical skills?</>}
        lead="Stop guessing about technical competence. Start measuring it with scenarios that mirror the work your team actually does. Whether you're hiring your next SRE, training your DevOps team, or building autonomous agents."
        primary={{ label: "Contact sales", href: "mailto:info@sadservers.com" }}
        secondary={{ label: "See pricing details", href: "/pricing" }}
        note={<>Questions? Email us at <a href="mailto:info@sadservers.com" className="text-muted underline underline-offset-4">info@sadservers.com</a></>}
      />
    </>
  );
}
