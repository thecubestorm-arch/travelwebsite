import Link from "next/link";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryText?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryText,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1f2933,#243847)] px-6 py-10 text-white shadow-[var(--shadow-soft)] sm:px-8 lg:px-12">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_56%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b08a]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.82)]">
            {description}
          </p>
          {secondaryText ? (
            <p className="mt-4 text-sm text-[rgba(255,255,255,0.65)]">
              {secondaryText}
            </p>
          ) : null}
        </div>
        <div>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#243847] hover:-translate-y-0.5 hover:bg-[#f7efe4]"
          >
            {primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
