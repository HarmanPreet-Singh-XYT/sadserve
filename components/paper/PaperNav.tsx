"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MarkInk } from "./SadServer";

const LINKS: [string, string][] = [
  ["Scenarios", "/scenarios"],
  ["Labs", "/labs"],
  ["For Individuals", "/solutions/individual"],
  ["For Businesses", "/solutions/business"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
];

export function PaperNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="https://stats.uptimerobot.com/ZRGoBu7Kp9"
        target="_blank"
        rel="noreferrer"
        className="flex h-8 items-center justify-center gap-2 bg-ink px-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper"
      >
        <span className="size-1.5 rounded-full bg-phosphor" />
        All systems operational
        <span className="hidden text-paper/50 sm:inline">· status page →</span>
      </a>
      <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center gap-2.5" aria-label="SadServers home">
            <MarkInk />
            <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">sadservers</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 text-[0.9rem] lg:flex">
            {LINKS.map(([l, h]) => (
              <Link key={h} href={h} className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100">
                {l}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <Link href="/accounts/login" className="text-[0.9rem] underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Log in
            </Link>
            <Link href="/accounts/signup" className="btn-ink !h-10 !px-5 text-[0.88rem]">
              Start free
            </Link>
          </div>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)} className="grid size-11 place-items-center rounded-full ring-1 ring-ink/30 lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <div className={`fixed inset-x-0 bottom-0 top-24 z-40 overflow-y-auto bg-paper px-5 pb-16 pt-4 transition-[opacity,visibility] duration-200 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        {LINKS.map(([l, h]) => (
          <Link key={h} href={h} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-ink/15 py-4 font-display text-3xl tracking-[-0.02em]">
            {l}
            <span className="font-mono text-xs text-ink-3">→</span>
          </Link>
        ))}
        <div className="mt-8 flex gap-3">
          <Link href="/accounts/login" className="btn-line flex-1 justify-center">
            Log in
          </Link>
          <Link href="/accounts/signup" className="btn-ink flex-1 justify-center">
            Start free
          </Link>
        </div>
      </div>
    </>
  );
}
