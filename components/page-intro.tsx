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
      <h1 className="mt-5 font-serif text-4xl text-[var(--foreground)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{description}</p>
    </section>
  );
}
