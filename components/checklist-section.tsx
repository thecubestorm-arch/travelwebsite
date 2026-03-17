type ChecklistSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    body: string;
  }>;
};

export function ChecklistSection({
  eyebrow,
  title,
  description,
  items,
}: ChecklistSectionProps) {
  return (
    <section className="section-shell rounded-[1.75rem] p-5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.4rem] border border-[var(--line)] bg-white/75 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent)]">
                {index + 1}
              </div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
