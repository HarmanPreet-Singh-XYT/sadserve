"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Info } from "lucide-react";

const PLANS = [
  { id: "3m", price: 33, label: "Three months", per: "$11 / mo" },
  { id: "6m", price: 66, label: "Six months", per: "$11 / mo" },
  { id: "1y", price: 110, label: "One year", per: "$9.17 / mo", tag: "Popular" },
  { id: "2y", price: 199, label: "Two years", per: "$8.29 / mo", tag: "Best value" },
];

export function GiftForm() {
  const [plan, setPlan] = useState("1y");
  const [anon, setAnon] = useState(false);
  const [sent, setSent] = useState(false);
  const current = PLANS.find((p) => p.id === plan)!;

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="space-y-9">
      <fieldset>
        <legend className="mb-1 text-lg font-semibold tracking-tight">Choose a plan</legend>
        <p className="mb-4 text-sm text-dim">One-time payment, does not renew.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PLANS.map((p) => (
            <label
              key={p.id}
              className={`relative cursor-pointer rounded-2xl p-5 ring-1 transition-[box-shadow,background-color,transform] duration-200 active:scale-[0.985] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                plan === p.id ? "bg-accent/[0.08] ring-2 ring-accent" : "bg-white/[0.025] ring-line-2 hover:bg-white/[0.045]"
              }`}
            >
              <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} className="sr-only" />
              <div className="flex items-start justify-between">
                <span className="text-sm text-muted">{p.label}</span>
                {p.tag && <span className="chip chip-accent h-5 px-2 text-[0.65rem]">{p.tag}</span>}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-[-0.04em]">${p.price}</div>
              <div className="mono mt-1 text-[0.72rem] text-dim">≈ {p.per}</div>
              {plan === p.id && (
                <span className="pop-in absolute bottom-4 right-4 grid size-6 place-items-center rounded-full bg-accent text-accent-ink">
                  <Check size={14} strokeWidth={3} />
                </span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Recipient emails</span>
          <textarea required rows={2} className="field" placeholder="friend@example.com, teammate@example.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">
            Message <span className="text-dim">(optional)</span>
          </span>
          <textarea rows={3} className="field" placeholder="Happy debugging!" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">How should the gift be sent?</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { v: false, t: "Send with my info", d: "Let the recipient know it's from you: include your name and contact email." },
            { v: true, t: "Send anonymously", d: "Your gift will be sent anonymously." },
          ].map((o) => (
            <label
              key={o.t}
              className={`cursor-pointer rounded-2xl p-4 ring-1 transition-[box-shadow,background-color] duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                anon === o.v ? "bg-accent/[0.08] ring-2 ring-accent" : "bg-white/[0.025] ring-line-2 hover:bg-white/[0.045]"
              }`}
            >
              <input type="radio" name="anon" checked={anon === o.v} onChange={() => setAnon(o.v)} className="sr-only" />
              <div className="font-medium">{o.t}</div>
              <div className="mt-1 text-[0.82rem] leading-snug text-muted">{o.d}</div>
            </label>
          ))}
        </div>
      </fieldset>

      {!anon && (
        <div className="pop-in grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">
              Signature <span className="text-dim">(optional)</span>
            </span>
            <input className="field" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">
              Contact email <span className="text-dim">(optional)</span>
            </span>
            <input type="email" className="field" placeholder="you@company.com" />
          </label>
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm text-muted">Total today</div>
          <div key={plan} className="pop-in text-3xl font-semibold tracking-[-0.04em]">${current.price}</div>
        </div>
        <button type="submit" className="btn btn-primary h-[52px] px-8">
          Continue to checkout <ArrowRight size={17} className="arrow" />
        </button>
      </div>

      {sent && (
        <p role="status" className="pop-in flex gap-3 rounded-xl bg-info/[0.07] p-4 text-[0.88rem] leading-relaxed text-muted ring-1 ring-info/25">
          <Info size={17} className="mt-0.5 shrink-0 text-info" />
          Checkout is processed by Stripe on sadservers.com. Payment isn&rsquo;t connected in this preview build.
        </p>
      )}
    </form>
  );
}
