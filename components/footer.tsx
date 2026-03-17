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
            CTA Placeholder
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
            Download the China arrival checklist
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Reserve this space for your future lead magnet, service pitch, or
            email sign-up.
          </p>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
