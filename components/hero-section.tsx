import Link from "next/link";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,243,0.96),rgba(235,228,216,0.94))] px-6 py-14 shadow-[var(--shadow-soft)] sm:px-10 lg:px-14 lg:py-20">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgba(175,93,50,0.11)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/70 blur-3xl" />
      <div className="relative max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          {description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="accent-ring inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/65 px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:bg-white"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
