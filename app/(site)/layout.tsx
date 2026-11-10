import { PaperNav } from "@/components/paper/PaperNav";
import { PaperFooter } from "@/components/paper/PaperFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="paper flex min-h-screen flex-col">
      <PaperNav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <PaperFooter />
    </div>
  );
}
