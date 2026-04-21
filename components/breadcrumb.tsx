import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string; // omitted for the current page (last item)
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://trailofchina.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted)]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">›</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--foreground)]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
