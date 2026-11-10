import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { PricingTabs } from "@/components/PricingTabs";

export const metadata: Metadata = {
  title: "Pricing: Choose a plan that works for you",
  description:
    "Hobbyist is free. Pro is $9/month, Pro+ is $11/month or $249 lifetime. Business plans for hiring and training. Cancel subscriptions at any time.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Pricing"
        title={
          <>
            Choose a plan that <span className="serif ember-text">works</span> for you.
          </>
        }
        lead="Cancel subscriptions at any time."
      />
      <div className="wrap">
        <PricingTabs />
        <p className="mt-12 text-center text-sm text-dim">
          Join thousands of engineers like you sharpening their hands-on skills and accelerating their careers. Please
          read our{" "}
          <a className="underline underline-offset-4 hover:text-fg" href="https://docs.sadservers.com/docs/tc/" target="_blank" rel="noreferrer">
            Terms and Conditions
          </a>{" "}
          and our{" "}
          <a className="underline underline-offset-4 hover:text-fg" href="https://docs.sadservers.com/docs/faq/#privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
