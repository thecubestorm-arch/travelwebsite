import Image from "next/image";
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

const quickStartSteps = [
  { icon: "📱", label: "Get your apps" },
  { icon: "💳", label: "Set up payments" },
  { icon: "🗺️", label: "Plan your route" },
];

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-end">
      {/* Full background photo */}
      <Image
        src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600&q=80"
        alt=""
        fill
        className="object-cover select-none pointer-events-none"
        priority
      />
      {/* Dark gradient overlay — strong at bottom, fades to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,10,4,0.82)] via-[rgba(18,10,4,0.40)] to-[rgba(18,10,4,0.12)]" />
      {/* Warm accent glow top-right */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgba(175,93,50,0.18)] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative px-6 pb-8 pt-16 sm:px-10 sm:pb-10 sm:pt-20 lg:px-14 lg:pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[rgba(255,185,120,0.9)]">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.02] text-white sm:mt-5 sm:text-6xl lg:text-7xl xl:text-8xl max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] shadow-[0_4px_24px_rgba(175,93,50,0.45)]"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/20"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>

        {/* Quick-start strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6">
          {quickStartSteps.map((step, i) => (
            <span key={step.label} className="flex items-center gap-2 text-sm text-white/60">
              <span className="text-base">{step.icon}</span>
              <span>{step.label}</span>
              {i < quickStartSteps.length - 1 && (
                <span className="ml-2 text-white/25 hidden sm:inline">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
