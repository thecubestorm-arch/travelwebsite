'use client'

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { LayoutWrapper } from "@/components/layout-wrapper";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(245,241,234,0.78)] backdrop-blur-xl">
      <LayoutWrapper className="flex flex-col gap-4 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <Link href="/" onClick={scrollToTop} className="flex flex-col">
          <span className="font-serif text-2xl leading-none tracking-[0.08em] text-[var(--foreground)]">
            Trail of China
          </span>
          <span className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
            First-trip travel planning
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="-mx-1 flex w-[calc(100%+0.5rem)] gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:w-auto md:flex-wrap md:justify-end md:overflow-visible md:px-0 md:pb-0"
        >
          {siteConfig.navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.href}
                className="shrink-0 flex items-center gap-1.5 rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-[var(--muted)] opacity-50 cursor-not-allowed md:py-2"
              >
                {item.label}
                {item.badge ? (
                  <span className="rounded-full bg-[var(--accent)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white opacity-80">
                    {item.badge}
                  </span>
                ) : null}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollToTop}
                className="shrink-0 rounded-full border border-transparent bg-white/60 px-4 py-2.5 text-sm font-medium text-[var(--muted)] hover:border-[var(--line)] hover:bg-white hover:text-[var(--foreground)] md:bg-transparent md:py-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </LayoutWrapper>
    </header>
  );
}
