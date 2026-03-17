type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h1 className="mt-5 font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
        {description}
      </p>
    </section>
  );
}
