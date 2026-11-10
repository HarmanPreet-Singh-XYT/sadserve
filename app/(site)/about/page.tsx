import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "About SadServers: Linux, DevOps & SRE Labs",
  description:
    "SadServers Inc. is incorporated federally in Canada and based in Waterloo, Ontario. Bootstrapped, profitable and supported by The Accelerator Centre.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Do. Learn. <span className="serif ember-text">Assess.</span>
          </>
        }
        lead="We believe the best way to learn is by doing. We also believe the best way to assess skills is through hands-on realistic tasks."
      />

      <section className="wrap">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line md:grid-cols-3">
          {[
            [<Counter key="a" to={2022} plain />, "Created in Canada"],
            [<span key="b">Tens of thousands</span>, "of users helped"],
            [<Counter key="c" to={750000} suffix="+" />, "challenges across as many servers"],
          ].map(([v, l], i) => (
            <Reveal key={i} delay={i * 70} className="bg-bg-2 p-9">
              <div className="ember-text text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{v}</div>
              <p className="mt-3 text-muted">{l}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="h2">The company</h2>
          <div className="prose-sad space-y-5 text-[1.05rem]">
            <p>SadServers Inc. is a company incorporated federally in Canada and based in Waterloo, Ontario.</p>
            <p>
              The service was created in 2022 and since then it has helped tens of thousands of users and powered more
              than 3/4 million Linux &amp; DevOps challenges across as many servers.
            </p>
            <p>
              Companies rely on SadServers to train their teams and evaluate job candidates. Organizations such as
              Metr, the AI Security Institute and SRE-focused AI companies trust SadServers for AI evaluations.
            </p>
            <p>We are proud to have the support of The Accelerator Centre.</p>
          </div>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <div className="eyebrow mb-5">Mission</div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["01", "Train and learn", "To help professionals and students train and learn technical skills through hands-on, practical scenarios."],
              ["02", "Evaluate for real", "To help companies evaluate job candidates with realistic scenarios that mirror real work tasks."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 80}>
                <Card lift className="h-full p-9">
                  <span className="mono text-sm text-accent-hi">{n}</span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{t}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="h2">Investors</h2>
          <div className="prose-sad space-y-5 text-[1.05rem]">
            <p>
              SadServers operates as a <strong>fully bootstrapped, profitable</strong> business with no outside
              funding. We&rsquo;re not looking for investors currently, though we&rsquo;re always open to exploring partnership
              opportunities.
            </p>
            <p>
              Having previously acquired assets from companies in similar spaces, SadServers is open to further
              expansion through strategic acquisitions or by funding promising companies and personal projects in our
              space.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-24">
          <div className="noise relative overflow-hidden rounded-[28px] p-9 ring-1 ring-line-2 md:p-14">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_0%_0%,rgba(255,107,53,0.16),transparent_70%),linear-gradient(180deg,#12151a,#0a0c0f)]" />
            <h2 className="h2">Contact</h2>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                [Mail, "Email", "info@sadservers.com", "mailto:info@sadservers.com"],
                [Phone, "Phone", "+1 (226) 336-3356", "tel:+12263363356"],
                [ArrowUpRight, "LinkedIn", "SadServers", "https://linkedin.com/company/sadservers"],
              ].map(([I, l, v, h]) => {
                const Icon = I as typeof Mail;
                return (
                  <a key={l as string} href={h as string} className="group rounded-2xl bg-white/[0.04] p-6 ring-1 ring-line transition-[background-color,transform] duration-300 hover:bg-white/[0.07] active:scale-[0.99]">
                    <Icon size={18} className="text-accent-hi" />
                    <div className="mono mt-5 text-[0.7rem] uppercase tracking-wider text-dim">{l as string}</div>
                    <div className="mt-1 font-medium">{v as string}</div>
                  </a>
                );
              })}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-dim">
              <MapPin size={14} /> Waterloo, Ontario, Canada
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
