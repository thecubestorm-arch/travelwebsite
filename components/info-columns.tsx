type InfoColumnsProps = {
  items: Array<{
    title: string;
    body: string;
  }>;
};

export function InfoColumns({ items }: InfoColumnsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="section-shell rounded-[1.5rem] p-6">
          <h2 className="font-serif text-2xl text-[var(--foreground)]">
            {item.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
