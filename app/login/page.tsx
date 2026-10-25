import { SignIn } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Ku soo dhowow"
      title="Gal akoonkaaga"
      description="Geli xogtaada si aad uga sii wadato halkii aad waxbarashada ka joogtay."
      prompt="Akoon ma lihid?"
      linkLabel="Isdiiwaangeli"
      linkHref="/register"
    >
      <SignIn
        routing="hash"
        signUpUrl="/register"
        forceRedirectUrl="/dashboard"
      />
    </AuthShell>
  );
}
