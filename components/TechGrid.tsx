import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./Card";
import { Reveal } from "./Reveal";

type Group = { category: string; slug: string; items: { name: string; desc: string }[] };

export function TechGrid({ groups, labels }: { groups: Group[]; labels: string[] }) {
  return (
    <div className="space-y-16">
      {groups.map((g) => (
        <section key={g.slug} id={g.slug} className="scroll-mt-28">
          <Reveal className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">{g.category}</h2>
            <span className="chip">{g.items.length}</span>
            <span className="hr flex-1" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {g.items.map((t, i) => (
                <Reveal key={t.name} delay={Math.min(i, 5) * 50}>
                  <Card lift className="h-full">
                    <Link
                      href={`/scenarios?q=${encodeURIComponent(t.name.toLowerCase().split(" ")[0])}`}
                      className="group flex h-full items-start p-5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-[1.3rem] font-medium tracking-[-0.02em]">{t.name}</h3>
                          <ArrowUpRight size={15} className="text-dim transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-hi" />
                        </div>
                        <p className="mt-1 text-[0.85rem] leading-snug text-muted">{t.desc}</p>
                        <div className="mono mt-3 flex gap-2 text-[0.66rem] uppercase tracking-wider text-dim">
                          {labels.map((l) => (
                            <span key={l}>{l}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </Card>
                </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
