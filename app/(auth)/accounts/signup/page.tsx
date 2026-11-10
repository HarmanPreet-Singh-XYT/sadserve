import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Create an Account",
};

export default function SignupPage() {
  return (
    <AuthShell
      title={
        <>
          Create an <span className="serif ember-text">account</span>.
        </>
      }
      lead="With a SadServe account you'll be able to easily keep track of your progress: what scenarios you've completed and in what time. You can also manage your running or saved servers. Create an account with just an email address."
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
