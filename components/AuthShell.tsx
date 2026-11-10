import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { MarkInk } from "./paper/SadServer";

const SAMPLE = [
  ["Cape Town", "Borked Nginx", "03:41", "Medium"],
  ["Geneva", "Renew an SSL Certificate", "02:12", "Easy"],
  ["Jakarta", "it's always DNS.", "11:05", "Hard"],
];

export function AuthShell({ title, lead, children, footer }: { title: ReactNode; lead: ReactNode; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <div className="relative flex flex-col px-6 py-8 md:px-14">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="SadServe home">
            <span className="flex items-center gap-2.5">
              <MarkInk />
              <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">sadserve</span>
            </span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft size={15} /> Home
          </Link>
        </div>
        <div className="mx-auto my-auto w-full max-w-md py-14">
          <h1 className="hero-in font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-6xl">{title}</h1>
          <p className="hero-in mt-4 leading-relaxed text-muted" style={{ "--d": "80ms" } as never}>{lead}</p>
          <div className="hero-in mt-9" style={{ "--d": "160ms" } as never}>{children}</div>
          <p className="mt-8 flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-dim">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-ok" />
            We won&rsquo;t share your email address; we are very serious about your privacy.
          </p>
          {footer}
        </div>
      </div>

      {/* showcase panel */}
      <aside className="ink-scope relative hidden overflow-hidden lg:block">
                <div className="relative flex h-full flex-col justify-center px-14 xl:px-20">
          <div className="eyebrow">Your dashboard</div>
          <h2 className="font-display mt-5 max-w-md text-5xl font-medium leading-[1] tracking-[-0.035em]">
            Keep track of what you&rsquo;ve <span className="serif ember-text">fixed</span>.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Scenarios you&rsquo;ve completed and in what time. Manage your running or saved servers.
          </p>

          <div className="float mt-12 max-w-lg rounded-md bg-[#141a2e] p-2 ring-1 ring-line-2">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-medium">Completed scenarios</span>
              <span className="chip">Sample</span>
            </div>
            <ul className="space-y-1">
              {SAMPLE.map(([c, t, time, lv], i) => (
                <li key={c} className="line-in flex items-center gap-3 rounded bg-white/[0.05] px-4 py-3" style={{ animationDelay: `${400 + i * 160}ms` }}>
                  <span className="grid size-6 place-items-center rounded-full bg-ok/15 text-ok ring-1 ring-ok/30">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[0.9rem]">
                    <span className="font-medium">&ldquo;{c}&rdquo;</span> <span className="text-dim">{t}</span>
                  </span>
                  <span className={`chip ${lv === "Easy" ? "chip-ok" : lv === "Medium" ? "chip-amber" : "chip-bad"}`}>{lv}</span>
                  <span className="mono text-[0.8rem] text-muted">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
