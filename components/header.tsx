'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { LayoutWrapper } from "@/components/layout-wrapper";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <header className={`sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(245,241,234,0.88)] backdrop-blur-xl transition-all duration-200 ${scrolled ? 'py-0' : ''}`}>
      <LayoutWrapper className={`flex items-center justify-between transition-all duration-200 ${scrolled ? 'py-2' : 'py-3 md:py-4'}`}>
        {/* Logo */}
        <Link href="/" onClick={scrollToTop} className="flex flex-col shrink-0">
          <span className="font-serif text-2xl sm:text-3xl leading-none tracking-[0.06em] text-[var(--foreground)]">
            Trail of China
          </span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)] mt-0.5">
            First-trip travel planning
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1"
        >
          {siteConfig.navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[var(--muted)] opacity-40 cursor-not-allowed"
              >
                {item.label}
                {item.badge ? (
                  <span className="rounded-full bg-[var(--accent)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white opacity-80">
                    Soon
                  </span>
                ) : null}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollToTop}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg
                  ${isActive(item.href)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-black/5'
                  }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-[var(--accent)]" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl hover:bg-black/5 transition-colors"
        >
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] rounded-full transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] rounded-full transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </LayoutWrapper>

      {/* Mobile menu drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 border-t border-[var(--line)]' : 'max-h-0'}`}>
        <LayoutWrapper className="py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) =>
              item.disabled ? (
                <span
                  key={item.href}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[var(--muted)] opacity-40 rounded-xl cursor-not-allowed"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-[var(--accent)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white opacity-80">
                      Soon
                    </span>
                  )}
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={scrollToTop}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActive(item.href)
                      ? 'bg-[var(--accent-soft)] text-[var(--accent)] font-semibold'
                      : 'text-[var(--foreground)] hover:bg-black/5'
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </LayoutWrapper>
      </div>
    </header>
  );
}
