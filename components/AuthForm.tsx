"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Eye, EyeOff, Info, Mail } from "lucide-react";

function Password({ id, label, value, onChange, autoComplete }: { id: string; label: string; value: string; onChange: (v: string) => void; autoComplete: string }) {
  const [show, setShow] = useState(false);
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-medium">
        {label} <span className="text-accent-hi">*</span>
      </span>
      <span className="relative block">
        <input id={id} required type={show ? "text" : "password"} autoComplete={autoComplete} value={value} onChange={(e) => onChange(e.target.value)} className="field pr-12" placeholder="••••••••••" />
        <button type="button" aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-dim transition-colors hover:text-fg">
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </span>
    </label>
  );
}

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [sent, setSent] = useState(false);
  const signup = mode === "signup";
  const match = pw2.length > 0 && pw === pw2;

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <label className="block">
        <span className="mb-2 block text-sm font-medium">
          Email <span className="text-accent-hi">*</span>
        </span>
        <span className="relative block">
          <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim" />
          <input required type="email" autoComplete="email" className="field pl-10" placeholder="you@company.com" />
        </span>
      </label>

      <Password id="pw" label="Password" value={pw} onChange={setPw} autoComplete={signup ? "new-password" : "current-password"} />

      {signup && (
        <>
          <Password id="pw2" label="Password again" value={pw2} onChange={setPw2} autoComplete="new-password" />
          <p
            aria-live="polite"
            className={`flex h-5 items-center gap-2 text-[0.82rem] transition-colors ${pw2 ? (match ? "text-ok" : "text-bad") : "text-transparent"}`}
          >
            {pw2 && (match ? <Check size={14} strokeWidth={3} /> : <Info size={14} />)}
            {pw2 ? (match ? "Passwords match" : "Passwords don't match yet") : "."}
          </p>
          <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/[0.03] p-4 ring-1 ring-line transition-colors hover:bg-white/[0.05]">
            <input type="checkbox" className="mt-0.5 size-4 accent-[var(--accent)]" />
            <span className="text-[0.9rem] leading-snug text-muted">Sign up for new scenarios announcements.</span>
          </label>
        </>
      )}

      <button type="submit" disabled={signup && !!pw2 && !match} className="btn btn-primary h-[52px] w-full text-base disabled:cursor-not-allowed disabled:opacity-50">
        {signup ? "Sign up" : "Login"} <ArrowRight size={17} className="arrow" />
      </button>

      {sent && (
        <p role="status" className="pop-in flex gap-3 rounded-xl bg-info/[0.07] p-4 text-[0.85rem] leading-relaxed text-muted ring-1 ring-info/25">
          <Info size={16} className="mt-0.5 shrink-0 text-info" />
          Authentication isn&rsquo;t connected in this preview build.
        </p>
      )}

      {signup ? (
        <p className="text-center text-[0.9rem] text-muted">
          If you already have an email account,{" "}
          <Link href="/accounts/login" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-accent">
            login instead
          </Link>
          .
        </p>
      ) : (
        <p className="text-center text-[0.9rem] text-muted">
          Forgot your password?{" "}
          <a href="mailto:info@sadservers.com?subject=Password%20reset" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-accent">
            Reset by email
          </a>
        </p>
      )}
    </form>
  );
}
