import type { Metadata } from "next";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui";
import { ScenarioBrowser } from "@/components/ScenarioBrowser";

export const metadata: Metadata = {
  title: "Linux & DevOps Troubleshooting Scenarios",
  description:
    "138 hands-on Linux, DevOps and SRE troubleshooting scenarios on live cloud VMs. Easy, Medium, Hard and Kubernetes playgrounds.",
};

export default function ScenariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Scenario catalogue"
        title={
          <>
            Pick your <span className="serif ember-text">poison</span>.
          </>
        }
        lead="Linux & DevOps troubleshooting scenarios. Fix what's broken, complete the task, or capture the flag, each on its own live, disposable server."
      >
        <a href="mailto:info@sadservers.com?subject=Scenarios%20feedback" className="btn btn-ghost">
          <MessageSquare size={16} /> Feedback
        </a>
        <a href="https://list.sadservers.com/subscription/form" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <Mail size={16} /> New scenario notification
        </a>
      </PageHero>

      <div className="wrap">
        <div className="mb-10 flex items-center gap-3 rounded-2xl bg-accent/[0.07] px-5 py-3.5 text-[0.9rem] ring-1 ring-accent/25">
          <Sparkles size={16} className="shrink-0 text-accent-hi" />
          <p className="text-muted">
            <span className="font-medium text-fg">Check out our new interface!</span> Beta for registered users; some
            features still in progress.
          </p>
        </div>
        <ScenarioBrowser />
      </div>
    </>
  );
}
