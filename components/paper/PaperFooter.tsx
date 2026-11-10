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
    <footer className="relative mt-24 overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <p className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em]">
            Break one server. See what you can fix.
          </p>
          <Link href="/scenarios" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 font-semibold text-ink transition-[transform,background-color] duration-200 hover:bg-[#e6ebff] active:scale-[0.97]">
            Start free <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="h-px bg-paper/15" />

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-white p-1">
                <MarkInk size={22} />
              </span>
              <span className="text-2xl font-bold tracking-[-0.03em]">sadserve</span>
            </div>
            <p className="mt-5 max-w-[17rem] text-[0.95rem] leading-relaxed text-paper/65">
              Real-world Linux and DevOps scenarios for hands-on learning and technical assessment.
            </p>
            <a href="mailto:info@sadservers.com" className="mt-5 inline-block text-[0.95rem] text-paper/80 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white">
              info@sadservers.com
            </a>
          </div>
          {COLS.map((c) => (
            <div key={c.t}>
              <h3 className="font-semibold">{c.t}</h3>
              <ul className="mt-5 space-y-3.5">
                {c.l.map(([l, h]) => (
                  <li key={l}>
                    {h.startsWith("http") ? (
                      <a href={h} target="_blank" rel="noreferrer" className="text-[0.95rem] text-paper/65 transition-colors hover:text-white">
                        {l} ↗
                      </a>
                    ) : (
                      <Link href={h} className="text-[0.95rem] text-paper/65 transition-colors hover:text-white">
                        {l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 text-[0.88rem] text-paper/60 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© 2026 SadServe Inc. Made in Waterloo, Ontario.</span>
          <span className="flex flex-wrap gap-x-5 gap-y-1">
            {SOCIAL.map(([n, h]) => (
              <a key={n} href={h} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                {n}
              </a>
            ))}
          </span>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden px-5 pt-6 text-center leading-none">
        <div
          className="-mb-[0.22em] font-bold tracking-[-0.06em] text-paper/[0.06]"
          style={{ fontSize: "clamp(4rem, 19.5vw, 19rem)" }}
        >
          sadserve
        </div>
      </div>
    </footer>
  );
}
