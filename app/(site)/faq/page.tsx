import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { FaqBrowser } from "@/components/FaqBrowser";

export const metadata: Metadata = {
  title: "FAQ: Frequently Asked Questions",
  description:
    "Answers to frequently asked questions about SadServe scenarios, Linux troubleshooting labs, subscriptions, organizations, interviews, accounts, and platform features.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title={
          <>
            Frequently asked <span className="serif ember-text">questions</span>.
          </>
        }
        lead="Answers about SadServe scenarios, Linux troubleshooting labs, subscriptions, organizations, interviews, accounts, and platform features."
      />
      <div className="wrap">
        <FaqBrowser />
      </div>
    </>
  );
}
