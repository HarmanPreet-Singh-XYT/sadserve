"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Clock } from "lucide-react";

type Tone = "bad" | "ok" | "dim";
type Step = { k: "cmd"; t: string } | { k: "out"; t: string; tone?: Tone };
type Line = { id: number; k: "cmd" | "out"; t: string; tone?: Tone };

const SCRIPT: Step[] = [
  { k: "cmd", t: "systemctl status nginx --no-pager" },
  { k: "out", t: "● nginx.service - A high performance web server", tone: "bad" },
  { k: "out", t: "     Active: failed (Result: exit-code)", tone: "bad" },
  { k: "cmd", t: "sudo nginx -t" },
  { k: "out", t: 'nginx: [emerg] unknown directive "proxy_pas" in /etc/nginx/sites-enabled/app:12', tone: "bad" },
  { k: "out", t: "nginx: configuration file /etc/nginx/nginx.conf test failed", tone: "dim" },
  { k: "cmd", t: "sudo sed -i 's/proxy_pas /proxy_pass /' /etc/nginx/sites-enabled/app" },
  { k: "cmd", t: "sudo systemctl restart nginx && curl -sI localhost | head -1" },
  { k: "out", t: "HTTP/1.1 200 OK", tone: "ok" },
];

const TOTAL = 15 * 60;
const toneClass: Record<Tone, string> = { bad: "text-bad", ok: "text-ok", dim: "text-dim" };

function fmt(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [left, setLeft] = useState(TOTAL - 8);
  const bodyRef = useRef<HTMLDivElement>(null);

  // countdown, resets with each loop
  useEffect(() => {
    const id = setInterval(() => setLeft((l) => (l > 0 ? l - 1 : l)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dead = false;
    let uid = 0;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function run() {
      if (reduce) {
        setLines(SCRIPT.map((s) => ({ id: uid++, k: s.k, t: s.t, tone: s.k === "out" ? s.tone : undefined })));
        setSolved(true);
        setLeft(TOTAL - 221);
        return;
      }
      while (!dead) {
        setLines([]);
        setSolved(false);
        setLeft(TOTAL - 8);
        await sleep(900);
        for (const step of SCRIPT) {
          if (dead) return;
          if (step.k === "cmd") {
            for (let i = 1; i <= step.t.length; i++) {
              if (dead) return;
              setTyping(step.t.slice(0, i));
              await sleep(18 + Math.random() * 26);
            }
            await sleep(260);
            setTyping(null);
            setLines((l) => [...l, { id: uid++, k: "cmd", t: step.t }]);
            await sleep(180);
          } else {
            setLines((l) => [...l, { id: uid++, k: "out", t: step.t, tone: step.tone }]);
            await sleep(240);
          }
        }
        await sleep(700);
        if (dead) return;
        setSolved(true);
        await sleep(4200);
      }
    }
    run();
    return () => {
      dead = true;
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const prompt = (
    <span className="select-none">
      <span className="text-ok">admin@cape-town</span>
      <span className="text-dim">:</span>
      <span className="text-info">~</span>
      <span className="text-dim">$ </span>
    </span>
  );

  return (
    <div className="term" role="img" aria-label="Animated terminal fixing a broken Nginx server and passing the check">
      <div className="term-bar">
        <span className="term-dot bg-[#ff5f57]" />
        <span className="term-dot bg-[#febc2e]" />
        <span className="term-dot bg-[#28c840]" />
        <span className="mono ml-3 flex items-center gap-2 text-[0.72rem] text-dim">
          <span className="live-dot" /> cape-town · vm-ready
        </span>
        <span
          className={`mono ml-auto flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.72rem] ring-1 ring-line ${left < 120 ? "text-bad" : "text-muted"}`}
        >
          <Clock size={12} /> {fmt(left)}
        </span>
      </div>

      <div ref={bodyRef} className="term-body h-[340px] overflow-hidden whitespace-pre-wrap break-words text-[0.78rem] sm:text-[0.8rem]">
        {lines.map((l) =>
          l.k === "cmd" ? (
            <div key={l.id} className="line-in">
              {prompt}
              <span className="text-fg">{l.t}</span>
            </div>
          ) : (
            <div key={l.id} className={`line-in ${toneClass[l.tone ?? "dim"]}`}>
              {l.t}
            </div>
          ),
        )}
        {typing !== null && (
          <div>
            {prompt}
            <span className="text-fg">{typing}</span>
            <span className="caret" />
          </div>
        )}
        {typing === null && !solved && lines.length < SCRIPT.length && (
          <div>
            {prompt}
            <span className="caret" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line bg-white/[0.02] px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="chip chip-amber">Medium</span>
          <span className="chip hidden sm:inline-flex">Fix</span>
          <span className="truncate text-[0.8rem] text-muted">“Cape Town”: Borked Nginx</span>
        </div>
        <span
          className={`inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-3 text-[0.8rem] font-medium transition-all duration-500 ${
            solved
              ? "bg-ok/15 text-ok ring-1 ring-ok/40 shadow-[0_0_30px_-4px_rgba(61,220,151,0.55)]"
              : "bg-white/5 text-muted ring-1 ring-line"
          }`}
        >
          {solved ? (
            <>
              <Check size={14} strokeWidth={3} className="pop-in" /> Solved · 03:41 · 0 clues
            </>
          ) : (
            "Check My Solution"
          )}
        </span>
      </div>
    </div>
  );
}
