type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
};

export function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <article
            key={item.question}
            className="section-shell rounded-[1.5rem] px-5 py-5 sm:px-6"
          >
            <h3 className="font-serif text-2xl text-[var(--foreground)]">
              {item.question}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
