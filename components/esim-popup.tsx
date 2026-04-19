"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "esim-popup-dismissed";

export function EsimPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="section-shell w-full max-w-sm rounded-[1.75rem] p-6 space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Before You Go
        </p>
        <h2 className="font-serif text-2xl text-[var(--foreground)]">
          Have you already bought an eSIM?
        </h2>
        <p className="text-sm leading-7 text-[var(--muted)]">
          A China eSIM is one of the easiest ways to have data the moment you
          land - no SIM swap, no airport queue.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={dismiss}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 px-5 py-2 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5"
          >
            Yes, I&apos;m all set
          </button>
          <Link
            href="/china-basics/how-to-get-internet/esim"
            onClick={dismiss}
            className="accent-ring inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            No, show me how
          </Link>
        </div>
      </div>
    </div>
  );
}
