"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Gift, Infinity as InfinityIcon } from "lucide-react";
import { CheckList } from "./ui";
import { DOCS } from "@/lib/site";

type Tab = "individual" | "business";
type Billing = "monthly" | "yearly";

function Toggle<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { id: T; label: string; badge?: string }[];
  label: string;
}) {
  const idx = options.findIndex((o) => o.id === value);
  return (
    <div role="tablist" aria-label={label} className="relative inline-grid auto-cols-fr grid-flow-col rounded-xl bg-white/[0.05] p-1 ring-1 ring-line-2">
      <span
        aria-hidden
        className="absolute inset-y-1 left-1 rounded-lg bg-white/10 shadow-[inset_0_0_0_1px_var(--line-2)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]"
        style={{ width: `calc((100% - 8px) / ${options.length})`, transform: `translateX(${idx * 100}%)` }}
      />
      {options.map((o) => (
        <button
          key={o.id}
          role="tab"
          aria-selected={value === o.id}
          onClick={() => onChange(o.id)}
          className={`relative z-10 flex items-center justify-center gap-2 px-5 py-2.5 text-[0.88rem] font-medium transition-colors active:scale-[0.98] ${value === o.id ? "text-fg" : "text-muted hover:text-fg"}`}
        >
          {o.label}
          {o.badge && <span className="chip chip-ok h-5 px-1.5 text-[0.65rem]">{o.badge}</span>}
        </button>
      ))}
    </div>
  );
}

function Plan({
  name,
  tagline,
  price,
  unit,
  note,
  features,
  actions,
  featured,
  badge,
}: {
  name: string;
  tagline?: string;
  price: ReactNode;
  unit?: string;
  note?: ReactNode;
  features: ReactNode[];
  actions: ReactNode;
  featured?: boolean;
  badge?: string;
}) {
  const body = (
    <div className="flex h-full flex-col p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        {badge && <span className="chip chip-accent">{badge}</span>}
      </div>
      {tagline && <p className="mt-2 text-[0.9rem] text-muted">{tagline}</p>}
      <div className="mt-7 flex items-baseline gap-1.5">
        <span key={String(price)} className="pop-in text-[3.2rem] font-semibold leading-none tracking-[-0.05em]">{price}</span>
        {unit && <span className="text-muted">{unit}</span>}
      </div>
      <div className="mt-2 min-h-[1.5rem] text-[0.85rem] text-ok">{note}</div>
      <div className="mt-6 flex flex-col gap-2.5">{actions}</div>
      <div className="hr my-7" />
      <CheckList items={features} />
    </div>
  );
  return featured ? (
    <div className="glow-edge h-full">
      <span className="glow-fill" aria-hidden />
      {body}
    </div>
  ) : (
    <div className="card h-full">{body}</div>
  );
}

const Buy = ({ children, primary = false, href = "/accounts/signup" }: { children: ReactNode; primary?: boolean; href?: string }) => (
  <Link href={href} className={`btn w-full ${primary ? "btn-primary" : "btn-ghost"}`}>
    {children}
  </Link>
);
const Details = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center justify-center gap-1 text-[0.85rem] text-muted hover:text-fg">
    Plan details <ArrowUpRight size={13} />
  </a>
);

export function PricingTabs() {
  const [tab, setTab] = useState<Tab>("individual");
  const [billing, setBilling] = useState<Billing>("yearly");
  const y = billing === "yearly";

  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <Toggle<Tab>
          label="Plan type"
          value={tab}
          onChange={setTab}
          options={[
            { id: "individual", label: "Individual plans" },
            { id: "business", label: "Business plans" },
          ]}
        />
        {tab === "individual" && (
          <div className="flex items-center gap-4">
            <Toggle<Billing>
              label="Billing period"
              value={billing}
              onChange={setBilling}
              options={[
                { id: "monthly", label: "Monthly" },
                { id: "yearly", label: "Yearly", badge: "-33%" },
              ]}
            />
          </div>
        )}
        <p className="text-sm text-dim">
          {tab === "individual" ? "For engineers looking to level up their skills" : "For organizations recruiting or training"}
        </p>
      </div>

      {tab === "individual" ? (
        <div key="ind" className="pop-in mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          <Plan
            name="Hobbyist"
            tagline="Try it out. No card needed."
            price="Free"
            note="Upgrade to Pro or Pro+ for full access"
            features={["Practice on a selection of scenarios", "Dashboard to track your progress"]}
            actions={<Buy>Get started</Buy>}
          />
          <Plan
            name="Pro"
            tagline="Unlimited practice, with solutions."
            price={y ? "$6" : "$9"}
            unit="/ month"
            note={y ? "Billed $72 yearly · 33% off" : "Or $72 yearly, 33% off"}
            features={[
              "Unlimited practice across over 125 scenarios, including complex, realistic and interview-style challenges with solutions",
              "Double the time to complete scenarios",
              "All VMs with Internet access",
              "Achievements page",
              "Email support",
            ]}
            actions={
              <>
                <Buy primary>{y ? "Buy $72 / year" : "Buy $9 / month"}</Buy>
                <Details href={`${DOCS}/pro/`} />
              </>
            }
          />
          <Plan
            featured
            badge="Most complete"
            name="Pro+"
            tagline="Everything in Pro, plus power tools."
            price={y ? "$7.33" : "$11"}
            unit="/ month"
            note={y ? "Billed $88 yearly · 33% off" : "Or $88 yearly, 33% off"}
            features={["All the Pro features, plus:", "Direct SSH access to VMs", "Command history logging", "Invitations to scenarios", "Command Line Interface / Terminal UI"]}
            actions={
              <>
                <Buy primary>{y ? "Buy $88 / year" : "Buy $11 / month"}</Buy>
                <Buy href="/accounts/signup">
                  <InfinityIcon size={16} /> Buy $249 lifetime
                </Buy>
                <Details href={`${DOCS}/proplus/`} />
              </>
            }
          />
        </div>
      ) : (
        <div key="biz" className="pop-in mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          <Plan
            featured
            badge="Most flexible"
            name="Business Subscription"
            tagline="Some months busier than others? Pick a yearly plan and use your interviews anytime. No monthly limits."
            price="$245"
            unit="/ month"
            note="Or $1,470 yearly · 50% off"
            features={[
              "Unlimited users",
              "Up to 500 interview sessions per year",
              "All the Pro+ features, plus:",
              "Automatic onboarding of organization users",
              "Interview job candidates: custom times, hide clues, invite any number of candidates, one-click scenario servers from a shared link, join with web terminal, results dashboard, command history",
              "API access to run scenario VMs",
              "Premium email support",
            ]}
            actions={
              <>
                <Buy primary>Buy $245 / month</Buy>
                <Buy>Buy $1,470 / year (50% off)</Buy>
                <Link href="/accounts/signup" className="btn btn-ghost btn-sm w-full">
                  Try 7 days free · Pro+ users only
                </Link>
                <Details href={`${DOCS}/business/`} />
              </>
            }
          />
          <Plan
            name="Business Pay-Per-Use"
            tagline="Pay as you go. All Business Subscription features."
            price="$400"
            unit="and up"
            note="Packages never need a monthly commitment"
            features={["Unlimited users", "All the Business Subscription features, offered as pay-as-you-go"]}
            actions={
              <>
                <Buy primary>Buy 25 interviews · $400</Buy>
                <Buy>Buy 50 interviews · $600</Buy>
                <Details href={`${DOCS}/business/`} />
              </>
            }
          />
          <Plan
            name="Custom"
            tagline="Packages built to suit your assessment volume."
            price="Let's talk"
            features={["Large number of interview sessions", "Whitelabel branding", "Custom scenarios", "SSO", "ATS integration", "Self-hosted option", "Advertising", "Partnerships"]}
            actions={
              <a href="mailto:info@sadservers.com" className="btn btn-ghost w-full">
                Contact us <ArrowRight size={16} className="arrow" />
              </a>
            }
          />
        </div>
      )}

      {tab === "individual" && (
        <div className="pop-in mt-8 flex flex-col items-start gap-4 rounded-2xl bg-white/[0.03] p-6 ring-1 ring-line md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-hi ring-1 ring-accent/25">
              <Gift size={20} />
            </span>
            <p className="max-w-2xl text-[0.93rem] leading-relaxed text-muted">
              <span className="font-medium text-fg">Prefer a one-time payment?</span> Buy a Pro+ account as a gift for yourself or someone else, or ask your company to cover it as professional development.
            </p>
          </div>
          <Link href="/gifts" className="btn btn-ghost shrink-0">
            Gift Pro+ <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      )}
    </div>
  );
}
