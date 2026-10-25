import Link from "next/link";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  prompt: string;
  linkLabel: string;
  linkHref: string;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  prompt,
  linkLabel,
  linkHref,
}: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[1fr_0.9fr]">
      <section className="flex flex-col px-6 py-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex w-fit items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-[#176b52] text-lg font-bold text-white">
            d
          </span>
          <span className="text-xl font-bold tracking-tight">dhamac</span>
        </Link>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-14">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#3b8c6d]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-7 text-[#718078]">{description}</p>
          <div className="mt-8">{children}</div>
          <p className="mt-7 text-center text-sm text-[#718078]">
            {prompt}{" "}
            <Link
              href={linkHref}
              className="font-semibold text-[#176b52] hover:underline"
            >
              {linkLabel}
            </Link>
          </p>
          <Link
            href="/"
            className="mt-10 text-center text-xs text-[#829087] hover:text-[#176b52]"
          >
            ← Ku noqo bogga hore
          </Link>
        </div>
        <p className="text-xs text-[#a0aaa3]">© dhamac</p>
      </section>

      <aside className="relative hidden overflow-hidden bg-[#176b52] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-32 -top-24 size-[30rem] rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-8 size-[24rem] rounded-full border border-white/10" />
        <div className="absolute -bottom-36 -left-20 size-[34rem] rounded-full bg-[#ffffff0a]" />
        <div className="relative z-10 flex justify-end">
          <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80">
            Aqoontu waa furaha
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-md py-12">
          <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-white/15 text-2xl">
            ✳
          </div>
          <p className="font-serif text-4xl leading-tight">
            “Maalin kasta wax yar baro, berrina wax weyn ayaad gaadhi.”
          </p>
          <p className="mt-7 text-sm text-white/65">Safarkaaga maanta bilow.</p>
        </div>
        <p className="relative z-10 text-xs text-white/60">
          Waxbarasho kuu dhow. Mustaqbal kuu furan.
        </p>
      </aside>
    </main>
  );
}
