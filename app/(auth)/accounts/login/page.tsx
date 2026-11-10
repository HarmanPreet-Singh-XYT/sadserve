import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <AuthShell
      title={
        <>
          Welcome <span className="serif ember-text">back</span>.
        </>
      }
      lead={
        <>
          Don&rsquo;t have an account?{" "}
          <Link href="/accounts/signup" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-accent">
            Create one with just an email address
          </Link>
          . With a SadServe account you can keep track of your progress.
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
