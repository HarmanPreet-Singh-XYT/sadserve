import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BrainCircuit, CalendarClock, Lightbulb, LifeBuoy, RefreshCw, Rocket, ShieldHalf, TrendingUp } from "lucide-react";
import { PageHero, CtaBand, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Master Linux & DevOps Through Hands-On Practice",
  description:
    "Build practical skills through hands-on troubleshooting scenarios that mirror real production challenges. SadServers for individuals.",
};

const WHY = [
  { i: BrainCircuit, t: "Learn by doing, not by reading", d: "Theory fades, but muscle memory sticks. When you troubleshoot a real Nginx configuration error or debug a failing Docker container, you build intuition that no video or tutorial can provide.", wide: true },
  { i: TrendingUp, t: "Accelerate your career growth", d: "Hiring managers can spot the difference between someone who read about Kubernetes and someone who's actually debugged failing pods at 2 AM. Every scenario you solve is proof you can handle production systems." },
  { i: RefreshCw, t: "Stay current with technology", d: "The DevOps landscape evolves rapidly. Regular practice keeps your skills sharp and your knowledge current." },
  { i: Award, t: "Showcase your skills", d: "A certificate of achievement page you can add to your resume or LinkedIn profile, and a certificate PDF file." },
  { i: ShieldHalf, t: "A safe environment to fail and learn", d: "Break things without consequences. Every SadServer is disposable: crash it, corrupt it, experiment wildly. Make your mistakes here, not in production where they cost money and reputation.", wide: true },
  { i: CalendarClock, t: "Practice at your own pace", d: "No classes to attend, no deadlines to stress over. Train during your lunch break, late at night, or whenever you have 20 minutes." },
];

const PATH: { t: string; lv: ("EASY" | "MEDIUM" | "HARD")[]; d: string; note?: string; tag: string }[] = [
  { t: "Start with Linux & Bash fundamentals", lv: ["EASY", "MEDIUM", "HARD"], tag: "bash", d: "Master the command line, file systems, permissions, processes, Systemd and shell scripting. Linux, networks and automation are the building blocks of everything in DevOps. Learn to navigate the terminal blindfolded and automate repetitive tasks.", note: "If Easy scenarios feel too simple, perfect! Use them to build speed. Can you solve them in under 2 minutes? That's the goal. Easy scenarios should become reflexive." },
  { t: "Web servers", lv: ["EASY", "MEDIUM", "HARD"], tag: "nginx", d: "Web servers are the backbone of the internet. Learn to configure and troubleshoot Nginx, Apache, HAProxy, Caddy, Gunicorn, Traefik, uWSGI, HTTPS/TLS and SSL certificates." },
  { t: "Database servers", lv: ["EASY", "MEDIUM", "HARD"], tag: "postgres", d: "Database servers are fundamental to modern applications. Learn to configure and troubleshoot PostgreSQL, MySQL, Redis, SQLite3, ClickHouse and MongoDB." },
  { t: "Data processing", lv: ["EASY", "MEDIUM"], tag: "csv", d: "Manipulate and transform data from one format to another. A key skill for DevOps automation and data analysis. Get familiar with CSV, JSON and SQL queries." },
  { t: "Level up with Docker", lv: ["MEDIUM", "HARD"], tag: "docker", d: "Once you're comfortable with Linux fundamentals, dive into containerization. Build images, manage containers, debug networking issues, and get familiar with Docker Compose and Podman." },
  { t: "Master Kubernetes troubleshooting", lv: ["MEDIUM", "HARD"], tag: "kubernetes", d: "Ready for the big leagues? Kubernetes scenarios test your understanding of pods, services, deployments, and cluster management. This is where it all comes together: Linux knowledge, container expertise, and distributed systems thinking. Get familiar with kubectl and Helm." },
  { t: "Tooling & applications", lv: ["EASY", "MEDIUM", "HARD"], tag: "vault", d: "Learn to configure and troubleshoot popular tools like Git, RabbitMQ, Envoy, Vault, Harbor, Prometheus, Jenkins and more.", note: "Even if you are not using these tools in your day to day work, it's good to get familiar with them. It's also a good way to practice your troubleshooting skills on unfamiliar systems." },
  { t: "Hacking & security", lv: ["EASY", "MEDIUM", "HARD"], tag: "hack", d: "Use these “Capture the Flag” (CTF) scenarios to practice your hacking and security skills. Find code vulnerabilities, privilege escalations and more.", note: "You can treat these scenarios as fun challenges, but they may not necessarily be realistic or relate to your day to day work. Still you'll learn security concepts from them." },
];

const LV_CHIP = { EASY: "chip-ok", MEDIUM: "chip-amber", HARD: "chip-bad" } as const;

const TAGS = "apache bash c caddy clickhouse csv data-processing disk-volumes dns docker envoy etcd git golang gunicorn haproxy harbor hashicorp-vault helm java jenkins json kubernetes linux-other mongodb mysql nginx node.js php podman postgres prometheus python rabbitmq redis sql sqlite ssh ssl supervisord systemd traefik".split(" ");

export default function IndividualPage() {
  return (
    <>
      <PageHero
        eyebrow="SadServers for Individuals"
        title={
          <>
            Master Linux &amp; DevOps through <span className="serif ember-text">real-world</span> practice.
          </>
        }
        lead="Build practical skills through hands-on troubleshooting scenarios that mirror real production challenges."
      >
        <Link href="/scenarios" className="btn btn-primary h-[52px] px-7">
          Start your first scenario <ArrowRight size={17} className="arrow" />
        </Link>
        <Link href="/pricing" className="btn btn-ghost h-[52px]">
          See plans
        </Link>
      </PageHero>

      {/* WHY */}
      <section className="wrap py-16">
        <SectionHead
          eyebrow="Why it works"
          title={
            <>
              Why hands-on practice changes <span className="serif">everything</span>.
            </>
          }
          lead="Reading documentation, watching videos, or copy-pasting commands from tutorials and courses can only take you so far because you are learning passively. Real expertise comes from learning actively: getting your hands dirty, thinking critically, making mistakes, and solving actual problems."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={(i % 3) * 70} className={w.wide ? "md:col-span-4" : "md:col-span-2"}>
              <Card lift className="h-full p-7 md:p-8">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent-hi ring-1 ring-accent/25">
                  <w.i size={20} />
                </span>
                <h3 className="h3 mt-6">{w.t}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{w.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PATH */}
      <section className="wrap py-24">
        <SectionHead
          eyebrow="Your path to mastery"
          title={
            <>
              Start anywhere. <span className="serif text-muted">Progress at your pace.</span>
            </>
          }
          lead={
            <>
              There are many Linux, DevOps and SRE roadmaps (heck, we have our own DevOps Upskill Challenge!), but the
              truth is, DevOps is very vast. Other than a few dependencies (like learning Linux and basic networking
              first, or that you need Docker knowledge to understand Kubernetes and a lot of CI/CD), you can start
              anywhere.
            </>
          }
        />
        <ol className="mt-16 border-t border-line">
          {PATH.map((p, i) => (
            <Reveal as="li" key={p.t} className="group grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(7rem,0.28fr)_1fr] md:py-12">
              <div
                aria-hidden
                className="select-none text-[5.5rem] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent transition-[-webkit-text-stroke-color] duration-300 md:text-[8rem]"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.16)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{p.t}</h3>
                  <span className="flex gap-1.5">
                    {p.lv.map((l) => (
                      <span key={l} className={`chip ${LV_CHIP[l]} mono !text-[0.66rem] tracking-wider`}>
                        {l}
                      </span>
                    ))}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{p.d}</p>
                {p.note && (
                  <p className="mt-4 flex max-w-2xl gap-3 rounded-xl bg-white/[0.03] p-4 text-[0.9rem] leading-relaxed text-muted ring-1 ring-line">
                    <Lightbulb size={17} className="mt-0.5 shrink-0 text-amber" />
                    {p.note}
                  </p>
                )}
                <Link href={`/scenarios?q=${p.tag}`} className="mt-5 inline-flex items-center gap-1.5 text-[0.88rem] text-accent-hi hover:underline">
                  Try these scenarios <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <Rocket size={20} className="text-accent-hi" />
              <p className="mt-5 text-lg font-medium tracking-tight">You don&rsquo;t need to follow a perfectly linear path.</p>
              <p className="mt-3 leading-relaxed text-muted">
                Feeling confident in Linux? Jump into Docker. Want to challenge yourself? Try a Hard scenario. The best
                learning happens just outside your comfort zone.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full p-8">
              <LifeBuoy size={20} className="text-info" />
              <p className="mt-5 text-lg font-medium tracking-tight">Using clues</p>
              <p className="mt-3 leading-relaxed text-muted">
                If you get stuck you can use a scenario&rsquo;s clues. It&rsquo;s best for learning if you don&rsquo;t give up easily
                and try to make progress yourself first. The clues include a solution (but there may be multiple ways
                to solve it).
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* TAGS */}
      <section className="wrap py-12">
        <SectionHead
          eyebrow="Explore by technology"
          title="Dive deep into one tool."
          lead="Each tag contains curated scenarios focused on that particular technology."
        />
        <Reveal className="mt-10 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <Link
              key={t}
              href={`/scenarios?q=${t.replace(/-/g, " ")}`}
              className="mono rounded-lg bg-white/[0.03] px-3.5 py-2 text-[0.8rem] text-muted ring-1 ring-line transition-[color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:text-accent-hi hover:ring-accent/40"
            >
              {t.replace(/-/g, " ")}
            </Link>
          ))}
        </Reveal>
      </section>

      {/* motivation */}
      <section className="wrap py-24">
        <Reveal>
          <h2 className="h2 max-w-3xl">
            You&rsquo;ve got <span className="serif ember-text">this</span>.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {[
            "Every expert was once a beginner who didn't give up. Every “simple” problem you solve today is building the intuition you'll rely on for complex production incidents tomorrow.",
            "Stuck on a scenario? Good. That means you're learning. The frustration you feel right before the breakthrough is where real growth happens. Push through it.",
            "Fast developers aren't smarter; they've just seen more error messages. Every scenario you complete adds another pattern to your mental library. Every failure teaches you what doesn't work. Both are equally valuable.",
            "Don't compare your progress to others. Some people have been doing this for many years. Some started yesterday. The only person you need to be better than is the person you were last week. Keep showing up.",
          ].map((t, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <p className="border-l-2 border-accent/40 pl-5 text-[1.1rem] leading-[1.7] text-muted">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your first scenario is <span className="serif ember-text">20 minutes</span> away.
          </>
        }
        primary={{ label: "Start your first scenario", href: "/scenarios" }}
        secondary={{ label: "Create a free account", href: "/accounts/signup" }}
      />
    </>
  );
}
