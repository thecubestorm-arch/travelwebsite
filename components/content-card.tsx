import Link from "next/link";

type ContentCardProps = {
  tag: string;
  title: string;
  description: string;
  href: string;
};

export function ContentCard({
  tag,
  title,
  description,
  href,
}: ContentCardProps) {
  return (
    <article className="section-shell group flex h-full flex-col justify-between rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
          {tag}
        </p>
        <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
      </div>
      <div className="mt-7">
        <Link
          href={href}
          className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
