"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="border-t border-line-2">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-line-2">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[1.05rem] font-medium tracking-tight transition-colors hover:text-accent-hi"
              >
                {it.q}
                <span className={`grid size-8 shrink-0 place-items-center rounded-full ring-1 transition-[transform,background-color,box-shadow] duration-300 ${isOpen ? "rotate-45 bg-accent/15 ring-accent/50 text-accent-hi" : "ring-line-2 text-muted"}`}>
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div id={`${base}-${i}`} role="region" data-open={isOpen} className="acc-panel" inert={!isOpen}>
              <div>
                <div className="max-w-2xl pb-6 leading-relaxed text-muted">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
