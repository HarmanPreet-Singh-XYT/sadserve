import type { Metadata } from "next";
import { Eye, Flame, MessageSquare, NotebookPen, ShieldAlert, Wrench } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { TechGrid } from "@/components/TechGrid";
import { LABS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Incident Response and Troubleshooting Tips",
  description:
    "Work through incident steps in order: verify, triage, communicate, mitigate, troubleshoot, postmortem. Plus general debugging techniques and guides by technology.",
};

const STEPS = [
  { t: "Verify the issue", icon: Eye, tone: "text-info" },
  { t: "Triage", icon: ShieldAlert, tone: "text-amber" },
  { t: "Communicate and escalate if needed", icon: MessageSquare, tone: "text-amber" },
  { t: "Mitigate", icon: Flame, tone: "text-accent-hi" },
  { t: "Troubleshoot", icon: Wrench, tone: "text-ok" },
  { t: "Postmortem", icon: NotebookPen, tone: "text-info" },
];

const TIPS = [
  ["Do not make things worse", "Don't randomly change things you are not familiar with; follow existing runbooks and procedures whenever possible."],
  ["Communicate with the team", "Take notes as you go, including what you observe and what you change. A chat medium like Slack is good since it also keeps a timeline. Acknowledge other people's messages."],
  ["Coordinate so people don't step on each other", "Communicate intent and be specific (“going to restart the x database in y host”). Ideally one person leads the troubleshooting and makes changes, while others support."],
  ["Divide the problem space", "Ideally in half. But you don't need to start strictly in a systematic way if you have strong historical indicators pointing to likely causes."],
  ["Change one thing at a time", "Be mindful of what changes are easy to roll back and which are not. Make a backup copy of a file before modifying it."],
  ["Test first what has worked before", "However, if you find yourself fixing the exact same issue repeatedly, the underlying problem has probably not been properly addressed."],
  ["Run the quickest useful tests first", "Cheap, informative checks before expensive, deep ones."],
  ["Step back and restart", "If the initial quick tests fail, pause and restart debugging more systematically. Revisit basic assumptions and validate your mental model with other people."],
];

// This page differs from /labs: no separate Observability group, no ELK card; Prometheus sits under Tooling.
const GUIDES = LABS.filter((l) => l.slug !== "obs").map((l) =>
  l.slug === "tools"
    ? { ...l, items: [...l.items, ...LABS.find((x) => x.slug === "obs")!.items.filter((i) => i.name === "Prometheus")] }
    : l,
);

export default function TroubleshootingPage() {
  return (
    <>
      <PageHero
        eyebrow="SadServe Troubleshooting"
        title={
          <>
            Incident response and <span className="serif ember-text">troubleshooting</span> tips.
          </>
        }
        lead="When you're on call and an alert fires, work through these steps in order. Debugging comes late: after verification, triage, communication, and mitigation, and just before the postmortem."
      />

      {/* timeline */}
      <section className="wrap">
        <ol className="relative grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 70}>
              <Card lift className="h-full p-5">
                <div className="flex items-center justify-between">
                  <span className={`grid size-10 place-items-center rounded-xl bg-white/5 ring-1 ring-line-2 ${s.tone}`}>
                    <s.icon size={19} />
                  </span>
                  <span className="mono text-[0.72rem] text-dim">0{i + 1}</span>
                </div>
                <h2 className="mt-6 text-[1rem] font-semibold leading-snug tracking-tight">{s.t}</h2>
              </Card>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-6">
          <div className="relative h-px overflow-hidden bg-line">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent [animation:slide_4s_var(--ease-in-out)_infinite]" />
          </div>
        </Reveal>
      </section>

      {/* tips */}
      <section className="wrap py-28">
        <SectionHead
          eyebrow="Debugging techniques"
          title={
            <>
              Eight habits of calm <span className="serif">operators</span>.
            </>
          }
          lead="General incident response and debugging techniques you can use anywhere."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line md:grid-cols-2">
          {TIPS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 70} className="bg-bg-2 p-8">
              <span className="mono text-[0.72rem] text-accent-hi">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h3 mt-4">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* guides */}
      <section className="wrap">
        <SectionHead
          eyebrow="By technology"
          title="Troubleshooting guides by technology"
          lead="Production troubleshooting tips, common failure modes, and diagnostic commands for Linux, DevOps and SRE technologies."
          className="mb-14"
        />
        <TechGrid groups={GUIDES} labels={["Failure modes", "Diagnostics"]} />
      </section>

      <style>{`@keyframes slide{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}`}</style>
    </>
  );
}
