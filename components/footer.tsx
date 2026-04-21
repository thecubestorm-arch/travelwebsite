'use client'

import Link from "next/link";
import { useState } from "react";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      {/* Top tagline bar */}
      <div className="border-b border-[var(--line)] bg-[rgba(255,252,247,0.6)]">
        <LayoutWrapper className="py-8 sm:py-10">
          <p className="font-serif text-2xl sm:text-3xl text-[var(--foreground)] max-w-2xl leading-snug">
            Your first trip to China, planned with clarity.
          </p>
        </LayoutWrapper>
      </div>

      {/* Main footer grid */}
      <div className="bg-[rgba(255,252,247,0.75)]">
        <LayoutWrapper className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          {/* Branding */}
          <div className="space-y-4">
            <p className="font-serif text-2xl text-[var(--foreground)]">
              Trail of China
            </p>
            <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
              Practical trip planning for international travelers visiting China
              for the first time, with clearer choices, calmer preparation, and
              smarter routes.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Explore
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--foreground)]">
              {siteConfig.footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal/About links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Info
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--foreground)]">
              <Link href="/plan-your-trip" className="hover:text-[var(--accent)] transition-colors">
                Plan Your Trip
              </Link>
              <span className="text-[var(--muted)] opacity-50 cursor-not-allowed">About</span>
              <span className="text-[var(--muted)] opacity-50 cursor-not-allowed">Privacy Policy</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="section-shell rounded-[1.5rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Travel Tips
            </p>
            <h2 className="mt-2 font-serif text-xl text-[var(--foreground)] leading-snug">
              Get tips for your first China trip
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Practical advice, packing notes, and prep reminders.
            </p>
            {submitted ? (
              <div className="mt-4 rounded-xl bg-[var(--accent-soft)] px-4 py-3 text-sm font-medium text-[var(--accent)]">
                Thanks! We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-[var(--line)] bg-white/70 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] transition-all"
                >
                  Get Tips
                </button>
              </form>
            )}
          </div>
        </LayoutWrapper>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[var(--line)] bg-[rgba(245,241,234,0.9)]">
        <LayoutWrapper className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4">
          <p className="text-xs text-[var(--muted)]">
            © 2025 Trail of China. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Made for first-time travelers to China.
          </p>
        </LayoutWrapper>
      </div>
    </footer>
  );
}
