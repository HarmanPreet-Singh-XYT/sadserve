import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BLOG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on SRE, DevOps, hiring and running a bootstrapped infrastructure product. Newest first.",
};

const POST_URL = "https://docs.sadservers.com/blog/";

const byYear = BLOG.slice(1).reduce<Record<string, typeof BLOG>>((acc, p) => {
  const y = p.date.slice(-4);
  (acc[y] ||= []).push(p);
  return acc;
}, {});

export default function BlogPage() {
  const hero = BLOG[0];
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes from the <span className="serif ember-text">trenches</span>.
          </>
        }
        lead="On-call lessons, hiring, infrastructure and honest takes on AI in SRE. Many posts are proudly human-written."
      />

      <div className="wrap">
        <Reveal>
          <a
            href={POST_URL}
            target="_blank"
            rel="noreferrer"
            className="card group block p-8 md:p-12"
          >
            <div className="flex items-center justify-between">
              <span className="chip chip-accent">Latest · {hero.tag}</span>
              <span className="mono text-[0.78rem] text-dim">{hero.date}</span>
            </div>
            <h2 className="mt-12 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-5xl">
              {hero.title}
            </h2>
            <p className="lead mt-6 max-w-2xl">{hero.excerpt}</p>
            <span className="mt-9 inline-flex items-center gap-2 text-accent-hi">
              Read the post
              <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>

        <div className="mt-20 space-y-16">
          {Object.entries(byYear)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map(([year, posts]) => (
              <section key={year} className="grid gap-6 md:grid-cols-[8rem_1fr]">
                <Reveal>
                  <h2
                    className="text-6xl font-semibold tracking-[-0.06em] text-transparent md:sticky md:top-28"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
                  >
                    {year}
                  </h2>
                </Reveal>
                <ul className="border-t border-line-2">
                  {posts.map((p, i) => (
                    <Reveal as="li" key={p.title} delay={Math.min(i, 4) * 40} className="border-b border-line-2">
                      <a href={POST_URL} target="_blank" rel="noreferrer" className="group grid gap-3 py-7 md:grid-cols-[1fr_auto] md:gap-10">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="chip">{p.tag}</span>
                            <span className="mono text-[0.75rem] text-dim">{p.date}</span>
                          </div>
                          <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent-hi md:text-2xl">
                            {p.title}
                          </h3>
                          <p className="mt-2 max-w-2xl text-[0.93rem] leading-relaxed text-muted">{p.excerpt}</p>
                        </div>
                        <span className="hidden size-11 place-items-center self-center rounded-full ring-1 ring-line-2 text-muted transition-[background-color,color,transform] duration-300 group-hover:bg-accent group-hover:text-accent-ink md:grid">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    </Reveal>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
