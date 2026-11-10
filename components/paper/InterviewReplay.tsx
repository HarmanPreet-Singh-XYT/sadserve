"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Tone = "err" | "ok" | "dim";
type Line = { t: number; k: "cmd" | "out"; x: string; tone?: Tone };

const TOTAL = 310;
const SPEED = 12; // session seconds per real second

const LINES: Line[] = [
  { t: 31, k: "cmd", x: "systemctl status nginx --no-pager" },
  { t: 32, k: "out", x: "● nginx.service - A high performance web server", tone: "err" },
  { t: 32, k: "out", x: "     Active: failed (Result: exit-code)", tone: "err" },
  { t: 72, k: "cmd", x: "journalctl -u nginx -n 2 --no-pager" },
  { t: 73, k: "out", x: 'nginx[812]: [emerg] unknown directive "proxy_pas"', tone: "err" },
  { t: 125, k: "cmd", x: "sudo nginx -t" },
  { t: 126, k: "out", x: "…/sites-enabled/app:12  configuration test failed", tone: "dim" },
  { t: 190, k: "cmd", x: "sudo sed -i 's/proxy_pas /proxy_pass /' /etc/nginx/sites-enabled/app" },
  { t: 228, k: "cmd", x: "sudo nginx -t && sudo systemctl restart nginx" },
  { t: 230, k: "out", x: "nginx: configuration file test is successful", tone: "ok" },
  { t: 262, k: "cmd", x: "curl -sI localhost | head -1" },
  { t: 263, k: "out", x: "HTTP/1.1 200 OK", tone: "ok" },
];

const EVENTS: { t: number; label: string }[] = [
  { t: 0, label: "VM provisioned" },
  { t: 12, label: "Candidate joined" },
  { t: 31, label: "Inspected the service" },
  { t: 72, label: "Read the logs" },
  { t: 125, label: "Validated the config" },
  { t: 190, label: "Applied a fix" },
  { t: 262, label: "Verified with curl" },
  { t: 300, label: "Submitted solution" },
];

const CHECKS = ["nginx config is valid", "nginx.service is active", "port 80 answers", "GET / returns 200"];

const TONE: Record<Tone, string> = { err: "text-[#ff8a6b]", ok: "text-phosphor", dim: "text-[#7b849a]" };
const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** A scrubbable replay of a candidate's session: terminal, timeline and auto-graded scorecard in sync. */
export function InterviewReplay() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const raf = useRef(0);
  const last = useRef(0);
  const hold = useRef(0);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf.current = requestAnimationFrame(() => {
        setT(TOTAL);
        setPlaying(false);
      });
      return () => cancelAnimationFrame(raf.current);
    }
    last.current = 0;
    const tick = (now: number) => {
      const dt = last.current ? (now - last.current) / 1000 : 0;
      last.current = now;
      setT((cur) => {
        if (cur >= TOTAL) {
          hold.current += dt;
          return hold.current > 3 ? 0 : cur;
        }
        hold.current = 0;
        return Math.min(TOTAL, cur + dt * SPEED);
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  const visible = LINES.filter((l) => l.t <= t);
  const shown = visible.slice(-9);
  const cmds = visible.filter((l) => l.k === "cmd").length;
  const submitted = t >= 300;
  const passed = CHECKS.filter((_, i) => t >= 300 + i * 2).length;
  const activeEvent = EVENTS.filter((e) => e.t <= t).length - 1;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-[0_1px_2px_rgba(11,16,32,0.06),0_32px_64px_-24px_rgba(11,16,32,0.28)]">
      {/* title bar */}
      <div className="flex items-center justify-between gap-4 border-b border-ink bg-ink px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper">
        <span className="flex items-center gap-2.5">
          <span className={`size-2 rounded-full ${playing ? "animate-pulse bg-vermilion" : "bg-paper/40"}`} />
          Session replay
          <span className="hidden text-paper/50 sm:inline">· “cape-town” · medium</span>
        </span>
        <span className="text-paper/60">{fmt(t)} / {fmt(TOTAL)}</span>
      </div>

      <div className="grid lg:grid-cols-[15rem_1fr_16rem]">
        {/* timeline */}
        <ol className="order-2 hidden border-ink p-5 lg:order-1 lg:block lg:border-r" aria-label="Session timeline">
          {EVENTS.map((e, i) => {
            const done = i <= activeEvent;
            return (
              <li key={e.t} className="relative pl-6 [&:not(:last-child)]:pb-[0.95rem]">
                {i < EVENTS.length - 1 && (
                  <span className={`absolute left-[5px] top-3 h-full w-px ${i < activeEvent ? "bg-ink" : "bg-ink/20"}`} />
                )}
                <span
                  className={`absolute left-0 top-[0.35rem] size-[11px] rounded-full border border-ink/40 transition-colors duration-200 ${
                    i === activeEvent ? "bg-vermilion" : done ? "bg-ink" : "bg-white"
                  }`}
                />
                <button
                  onClick={() => {
                    setPlaying(false);
                    setT(e.t);
                  }}
                  className={`block text-left transition-colors ${done ? "text-ink" : "text-ink-3"} hover:text-vermilion`}
                >
                  <span className="block font-mono text-[0.66rem] tracking-wider text-ink-3">{fmt(e.t)}</span>
                  <span className="block text-[0.9rem] leading-tight">{e.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* terminal */}
        <div className="order-1 bg-[#0b1020] p-5 font-mono text-[0.78rem] leading-[1.75] text-[#e6eaf2] lg:order-2" aria-label="Candidate terminal">
          <div className="min-h-[17.5rem] overflow-hidden">
            {shown.map((l, i) => (
              <div key={`${l.t}-${i}-${l.x}`} className={`line-in whitespace-pre-wrap break-all ${l.k === "out" ? TONE[l.tone ?? "dim"] : ""}`}>
                {l.k === "cmd" && <span className="mr-2 text-phosphor">$</span>}
                {l.x}
              </div>
            ))}
            {!submitted && (
              <div>
                <span className="mr-2 text-phosphor">$</span>
                <span className="caret" />
              </div>
            )}
            {submitted && (
              <div className="line-in mt-2 text-phosphor">✔ Check My Solution — {passed === CHECKS.length ? "PASSED" : "running…"}</div>
            )}
          </div>
        </div>

        {/* scorecard */}
        <div className="order-3 border-t border-ink p-5 lg:border-l lg:border-t-0">
          <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-3">Scorecard</div>
          <dl className="mt-3 grid grid-cols-3 gap-2 text-center lg:grid-cols-1 lg:text-left">
            {[
              ["Elapsed", fmt(t)],
              ["Commands", String(cmds)],
              ["Clues used", "0"],
            ].map(([k, v]) => (
              <div key={k} className="lg:flex lg:items-baseline lg:justify-between">
                <dt className="font-mono text-[0.66rem] uppercase tracking-wider text-ink-3">{k}</dt>
                <dd className="font-display text-[1.7rem] leading-none tracking-[-0.02em]">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 space-y-2 border-t border-ink/25 pt-4">
            {CHECKS.map((c, i) => {
              const ok = t >= 300 + i * 2;
              return (
                <li key={c} className={`flex items-center gap-2.5 text-[0.82rem] transition-colors duration-200 ${ok ? "text-ink" : "text-ink-3"}`}>
                  <span className={`grid size-4 shrink-0 place-items-center rounded-sm border-[1.5px] border-ink/40 text-[0.6rem] leading-none transition-colors duration-200 ${ok ? "bg-ink text-paper" : ""}`}>
                    {ok ? "✓" : ""}
                  </span>
                  {c}
                </li>
              );
            })}
          </ul>
          <div
            className={`mt-5 rounded-lg border border-ink/20 px-3 py-2 text-center font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
              passed === CHECKS.length ? "bg-ink text-phosphor" : "text-ink-3"
            }`}
          >
            {passed === CHECKS.length ? "Passed" : submitted ? "Grading…" : "In progress"}
          </div>
        </div>
      </div>

      {/* scrubber */}
      <div className="flex items-center gap-4 border-t border-ink px-4 py-3">
        <button
          onClick={() => {
            if (t >= TOTAL) setT(0);
            setPlaying((p) => !p);
          }}
          aria-label={playing ? "Pause replay" : "Play replay"}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-150 active:scale-95"
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>
        <input
          type="range"
          min={0}
          max={TOTAL}
          step={1}
          value={Math.round(t)}
          onChange={(e) => {
            setPlaying(false);
            setT(+e.target.value);
          }}
          aria-label="Scrub through the session"
          aria-valuetext={`${fmt(t)} of ${fmt(TOTAL)}`}
          className="h-1.5 flex-1 cursor-ew-resize accent-[#2d5bff]"
        />
        <span className="hidden font-mono text-[0.7rem] uppercase tracking-wider text-ink-3 sm:block">Drag to scrub</span>
      </div>
    </div>
  );
}
