import Link from "next/link";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[rgba(255,252,247,0.75)]">
      <LayoutWrapper className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-3xl text-[var(--foreground)]">
            Trail of China
          </p>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Practical trip planning for international travelers visiting China
            for the first time, with clearer choices, calmer preparation, and
            smarter routes.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Explore
          </p>
          <div className="flex flex-col gap-3 text-sm text-[var(--foreground)]">
            {siteConfig.footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--accent)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="section-shell rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Start Planning
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
            Ready to plan your trip?
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Use the travel planner to build your own route, city by city.
          </p>
          <Link
            href="/plan-your-trip"
            className="mt-5 inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            Plan Your Trip
          </Link>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
