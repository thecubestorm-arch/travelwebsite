import Link from "next/link";
import Image from "next/image";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryText?: string;
  imageSrc?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryText,
  imageSrc,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1f2933,#243847)] px-6 py-12 text-white shadow-[var(--shadow-soft)] sm:px-8 lg:px-12 lg:py-14">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover opacity-[0.12] select-none pointer-events-none"
        />
      )}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_56%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b08a]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.78)]">
            {description}
          </p>
          {secondaryText ? (
            <p className="mt-3 text-sm text-[rgba(255,255,255,0.55)]">
              {secondaryText}
            </p>
          ) : null}
        </div>
        <div className="shrink-0">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 hover:bg-[#f7efe4] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            style={{ color: '#111827' }}
          >
            {primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
