import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { LayoutWrapper } from "@/components/layout-wrapper";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(245,241,234,0.78)] backdrop-blur-xl">
      <LayoutWrapper className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl leading-none tracking-[0.08em] text-[var(--foreground)]">
            Trail of China
          </span>
          <span className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
            First-trip travel planning
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap gap-2 md:w-auto md:justify-end"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] hover:bg-white/70 hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </LayoutWrapper>
    </header>
  );
}
