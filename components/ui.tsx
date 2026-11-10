import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead mt-5 max-w-2xl" style={align === "center" ? { marginInline: "auto" } : undefined}>{lead}</p>}
    </Reveal>
  );
}

/** Hero used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <section className="relative pb-14 pt-6 md:pb-20">
      <div className="wrap">
        <div className="flex justify-between border-b border-ink/25 pb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-3">
          <span>SADSERVERS(1)</span>
          <span className="hidden sm:inline">Linux &amp; DevOps practice manual</span>
          <span>SADSERVERS(1)</span>
        </div>
      </div>
      <div className={`wrap relative pt-12 md:pt-16 ${center ? "text-center" : ""}`}>
        <div className="hero-in eyebrow mb-6" style={{ "--d": "0ms" } as never}>
          {eyebrow}
        </div>
        <h1
          className={`hero-in display max-w-5xl ${center ? "mx-auto" : ""}`}
          style={{ "--d": "80ms", fontSize: "clamp(2.8rem, 7vw, 6rem)" } as never}
        >
          {title}
        </h1>
        {lead && (
          <p
            className={`hero-in lead mt-7 max-w-2xl ${center ? "mx-auto" : ""}`}
            style={{ "--d": "180ms" } as never}
          >
            {lead}
          </p>
        )}
        {children && (
          <div
            className={`hero-in mt-9 flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}
            style={{ "--d": "280ms" } as never}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  lead,
  primary,
  secondary,
  note,
}: {
  title: ReactNode;
  lead?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: ReactNode;
}) {
  return (
    <section className="wrap mt-28">
      <Reveal>
        <div className="ink-scope relative overflow-hidden rounded-md px-6 py-16 text-center md:px-16 md:py-24" style={{ boxShadow: "10px 10px 0 #e8401c" }}>
          <h2 className="h2 relative mx-auto max-w-3xl">{title}</h2>
          {lead && <p className="lead relative mx-auto mt-5 max-w-xl">{lead}</p>}
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Link href={primary.href} className="btn btn-primary">
              {primary.label} <ArrowRight size={17} className="arrow" />
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
          {note && <p className="relative mt-6 text-sm text-dim">{note}</p>}
        </div>
      </Reveal>
    </section>
  );
}

export function CheckList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
          <span className="mt-[3px] grid size-[18px] shrink-0 place-items-center rounded-full bg-ok/10 text-ok ring-1 ring-ok/50">
            <Check size={11} strokeWidth={3} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-5xl font-medium tracking-[-0.03em] md:text-6xl">{value}</div>
      <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">{label}</div>
    </div>
  );
}
