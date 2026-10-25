import { SignUp } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth-shell";

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Ku bilow maanta"
      title="Samee akoon bilaash ah"
      description="Ku biir bulshada waxbaranaysa, oo tallaabadaada koowaad qaad."
      prompt="Akoon ma leedahay?"
      linkLabel="Gal halkan"
      linkHref="/login"
    >
      <SignUp
        routing="hash"
        signInUrl="/login"
        forceRedirectUrl="/dashboard"
      />
    </AuthShell>
  );
}
