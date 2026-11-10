import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { TechGrid } from "@/components/TechGrid";
import { LABS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology Labs: Learn by Technology",
  description:
    "Guides, troubleshooting tips, cheatsheets, and hands-on scenarios to level-up or start your DevOps / SRE career.",
};

const TOTAL = LABS.reduce((n, l) => n + l.items.length, 0);

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="SadServers Labs"
        title={
          <>
            Learn by <span className="serif ember-text">technology</span>.
          </>
        }
        lead="Guides, troubleshooting tips, cheatsheets, and hands-on scenarios to level-up or start your DevOps / SRE career."
      >
        <span className="chip chip-accent">{LABS.length} categories</span>
        <span className="chip">{TOTAL} technologies</span>
      </PageHero>

      <div className="wrap grid gap-12 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Lab categories" className="hidden lg:block">
          <ul className="sticky top-28 space-y-0.5 border-l border-line">
            {LABS.map((l) => (
              <li key={l.slug}>
                <a
                  href={`#${l.slug}`}
                  className="-ml-px flex items-center justify-between border-l border-transparent py-2 pl-4 pr-2 text-[0.88rem] text-muted transition-[color,border-color] hover:border-accent hover:text-fg"
                >
                  {l.category}
                  <span className="mono text-[0.7rem] text-dim">{l.items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <TechGrid groups={LABS} labels={["Guide", "Cheatsheet", "Scenarios"]} />
      </div>
    </>
  );
}
