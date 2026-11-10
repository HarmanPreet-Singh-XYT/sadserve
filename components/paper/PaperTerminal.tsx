"use client";

import { useEffect, useRef, useState } from "react";

type Tone = "err" | "ok" | "dim";
type Step = { k: "cmd"; t: string } | { k: "out"; t: string; tone?: Tone };
type Line = { id: number; k: "cmd" | "out"; t: string; tone?: Tone };

const SCRIPT: Step[] = [
  { k: "cmd", t: "systemctl status nginx --no-pager" },
  { k: "out", t: "● nginx.service - A high performance web server", tone: "err" },
  { k: "out", t: "     Active: failed (Result: exit-code)", tone: "err" },
  { k: "cmd", t: "sudo nginx -t" },
  { k: "out", t: 'nginx: [emerg] unknown directive "proxy_pas" in /etc/nginx/sites-enabled/app:12', tone: "err" },
  { k: "out", t: "nginx: configuration file /etc/nginx/nginx.conf test failed", tone: "dim" },
  { k: "cmd", t: "sudo sed -i 's/proxy_pas /proxy_pass /' /etc/nginx/sites-enabled/app" },
  { k: "cmd", t: "sudo systemctl restart nginx && curl -sI localhost | head -1" },
  { k: "out", t: "HTTP/1.1 200 OK", tone: "ok" },
];

const TOTAL = 15 * 60;
const tone: Record<Tone, string> = { err: "text-[#ff8a6b]", ok: "text-phosphor", dim: "text-[#7b849a]" };
const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export function PaperTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [left, setLeft] = useState(TOTAL - 8);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setLeft((l) => (l > 0 ? l - 1 : l)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let dead = false;
    let uid = 0;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    async function run() {
      if (reduce) {
        setLines(SCRIPT.map((s) => ({ id: uid++, k: s.k, t: s.t, tone: s.k === "out" ? s.tone : undefined })));
        setSolved(true);
        return;
      }
      while (!dead) {
        setLines([]);
        setSolved(false);
        setLeft(TOTAL - 8);
        await sleep(1000);
        for (const step of SCRIPT) {
          if (dead) return;
          if (step.k === "cmd") {
            for (let i = 1; i <= step.t.length; i++) {
              if (dead) return;
              setTyping(step.t.slice(0, i));
              await sleep(16 + Math.random() * 28);
            }
            await sleep(280);
            setTyping(null);
            setLines((l) => [...l, { id: uid++, k: "cmd", t: step.t }]);
            await sleep(160);
          } else {
            setLines((l) => [...l, { id: uid++, k: "out", t: step.t, tone: step.tone }]);
            await sleep(230);
          }
        }
        await sleep(600);
        if (dead) return;
        setSolved(true);
        await sleep(5000);
      }
    }
    run();
    return () => {
      dead = true;
    };
  }, []);

  useEffect(() => {
    const el = body.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const prompt = (
    <span className="select-none">
      <span className="text-phosphor">admin@cape-town</span>
      <span className="text-[#7b849a]">:</span>
      <span className="text-[#8db4e8]">~</span>
      <span className="text-[#7b849a]">$ </span>
    </span>
  );

  return (
    <div className="overflow-hidden rounded-xl bg-[#0b1020] font-mono text-[0.78rem] leading-[1.75] text-[#e6eaf2] shadow-[0_1px_2px_rgba(11,16,32,0.06),0_24px_48px_-16px_rgba(11,16,32,0.22)] ring-1 ring-ink sm:text-[0.82rem]" role="img" aria-label="Terminal session: diagnosing and fixing a broken Nginx config, then passing the check">
      <div ref={body} className="h-[330px] overflow-hidden whitespace-pre-wrap break-words px-5 pb-3 pt-5">
        {lines.map((l) =>
          l.k === "cmd" ? (
            <div key={l.id}>
              {prompt}
              {l.t}
            </div>
          ) : (
            <div key={l.id} className={tone[l.tone ?? "dim"]}>
              {l.t}
            </div>
          ),
        )}
        {typing !== null && (
          <div>
            {prompt}
            {typing}
            <span className="caret !bg-phosphor" />
          </div>
        )}
        {typing === null && !solved && lines.length < SCRIPT.length && (
          <div>
            {prompt}
            <span className="caret !bg-phosphor" />
          </div>
        )}
        {solved && (
          <div className="mt-2 text-phosphor">
            ✔ Check My Solution: PASSED <span className="text-[#7b849a]">· 03:41 · 0 clues used</span>
          </div>
        )}
      </div>
      {/* tmux status line */}
      <div className="flex items-center justify-between gap-4 bg-phosphor px-3 py-1 text-[0.72rem] font-medium text-[#0b1020]">
        <span className="truncate">[sad] 0:bash*</span>
        <span className="shrink-0">
          &quot;cape-town&quot; · medium · <span className={left < 120 ? "text-[#a3200a]" : ""}>{fmt(left)}</span>
        </span>
      </div>
    </div>
  );
}
