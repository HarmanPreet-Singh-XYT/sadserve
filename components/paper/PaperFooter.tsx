import Link from "next/link";
import { MarkInk } from "./SadServer";

const COLS: { t: string; l: [string, string][] }[] = [
  { t: "Product", l: [["Scenarios", "/scenarios"], ["For Individuals", "/solutions/individual"], ["For Businesses", "/solutions/business"], ["Pricing", "/pricing"], ["Ranking", "/ranking"]] },
  { t: "Resources", l: [["Labs", "/labs"], ["Incident guide", "/troubleshooting"], ["FAQ", "/faq"], ["Blog", "/blog"], ["Documentation", "https://docs.sadservers.com/docs/"]] },
  { t: "Company", l: [["About us", "/about"], ["Support", "https://docs.sadservers.com/docs/support"], ["Privacy", "https://docs.sadservers.com/docs/faq/#privacy"], ["Terms", "https://docs.sadservers.com/docs/tc/"], ["Gift Pro+", "/gifts"]] },
];

const SOCIAL: [string, string][] = [
  ["X", "https://twitter.com/sadservers_com"],
  ["Bluesky", "https://bsky.app/profile/sadservers.com"],
  ["Mastodon", "https://mastodon.social/@sadservers"],
  ["GitHub", "https://github.com/sadservers/sadservers"],
  ["LinkedIn", "https://linkedin.com/company/sadservers"],
];

export function PaperFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)] md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="rounded-md bg-paper p-1">
              <MarkInk size={24} />
            </span>
            <span className="font-display text-2xl font-semibold tracking-[-0.02em]">sadservers</span>
          </div>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-paper/60">
            Real-world Linux and DevOps scenarios for hands-on learning and technical assessment.
          </p>
          <a href="mailto:info@sadservers.com" className="mt-5 inline-block font-mono text-sm underline decoration-paper/30 underline-offset-4 hover:decoration-vermilion">
            info@sadservers.com
          </a>
        </div>
        {COLS.map((c) => (
          <div key={c.t}>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper/45">{c.t}</h3>
            <ul className="mt-5 space-y-3">
              {c.l.map(([l, h]) => (
                <li key={l}>
                  {h.startsWith("http") ? (
                    <a href={h} target="_blank" rel="noreferrer" className="text-[0.95rem] text-paper/80 transition-colors hover:text-vermilion">
                      {l} ↗
                    </a>
                  ) : (
                    <Link href={h} className="text-[0.95rem] text-paper/80 transition-colors hover:text-vermilion">
                      {l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 font-mono text-[0.72rem] text-paper/45 md:flex-row md:items-center md:justify-between md:px-10">
          <span>Made in Canada · Waterloo, Ontario</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            {SOCIAL.map(([n, h]) => (
              <a key={n} href={h} target="_blank" rel="noreferrer" className="hover:text-paper">
                {n}
              </a>
            ))}
          </span>
          <span>Build 2f96d6b · 2026-11-04 22:58 UTC</span>
        </div>
      </div>
    </footer>
  );
}
