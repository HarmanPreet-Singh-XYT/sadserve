import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import { CheckList } from "@/components/ui";
import { PRO_PLUS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Redeem Your SadServe Pro Gift",
};

export default function RedeemPage() {
  return (
    <section className="noise relative flex min-h-[88vh] items-center overflow-hidden pb-20 pt-32">
      <div className="aurora" aria-hidden />
      <div className="grid-bg" aria-hidden />
      <div className="wrap relative">
        <div className="glow-edge mx-auto max-w-xl">
          <span className="glow-fill" aria-hidden />
          <div className="p-9 md:p-12">
            <span className="float grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent-hi ring-1 ring-accent/30">
              <Gift size={26} />
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
              Redeem your SadServe <span className="serif ember-text">Pro</span> gift.
            </h1>
            <CheckList className="mt-8" items={PRO_PLUS} />
            <p className="mt-8 rounded-xl bg-white/[0.04] p-4 text-[0.92rem] text-muted ring-1 ring-line">
              Please log in or register to redeem your gift.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href="/accounts/login" className="btn btn-primary">
                Log in <ArrowRight size={16} className="arrow" />
              </Link>
              <Link href="/accounts/signup" className="btn btn-ghost">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
