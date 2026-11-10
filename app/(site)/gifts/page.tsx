import type { Metadata } from "next";
import { PageHero, CheckList } from "@/components/ui";
import { GiftForm } from "@/components/GiftForm";
import { Reveal } from "@/components/Reveal";
import { DOCS, PRO_PLUS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gift SadServers: Professional Development and Training",
  description:
    "Pay once for a SadServers Pro+ account for an individual or multiple users. The gift is sent to the recipient(s) via email.",
};


export default function GiftPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift"
        title={
          <>
            Gift <span className="serif ember-text">SadServers</span>.
          </>
        }
        lead="Professional development and training for your team or friends. Pay once for a Pro+ account for an individual or multiple users. The gift will be sent to the recipient(s) via email."
      />
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="card p-8">
              <h2 className="text-lg font-semibold tracking-tight">What&rsquo;s included in a Pro+ account</h2>
              <CheckList className="mt-6" items={PRO_PLUS} />
              <p className="mt-7 border-t border-line pt-5 text-[0.85rem] text-dim">
                See details at the{" "}
                <a href={`${DOCS}/gift/`} target="_blank" rel="noreferrer" className="text-muted underline underline-offset-4 hover:text-fg">
                  Gift SadServers documentation
                </a>
                .
              </p>
            </div>
          </Reveal>
        </aside>
        <Reveal>
          <GiftForm />
        </Reveal>
      </div>
    </>
  );
}
