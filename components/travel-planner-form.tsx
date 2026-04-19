"use client";

import { useState } from "react";
import Link from "next/link";

const CITIES = [
  "Shanghai",
  "Beijing",
  "Chongqing",
  "Xi'an",
  "Chengdu",
  "Guilin",
  "Hangzhou",
  "Harbin",
];

type Preference = "Nature" | "City" | null;

export function TravelPlannerForm() {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [travellers, setTravellers] = useState(2);
  const [preference, setPreference] = useState<Preference>(null);
  const [submitted, setSubmitted] = useState(false);

  function toggleCity(city: string) {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  }

  function decrementTravellers() {
    setTravellers((n) => Math.max(1, n - 1));
  }

  function incrementTravellers() {
    setTravellers((n) => Math.min(10, n + 1));
  }

  return (
    <div className="section-shell rounded-[1.75rem] p-6 sm:p-8 space-y-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
          Cities
        </p>
        <p className="text-sm text-[var(--muted)]">
          Select the cities you want to visit
        </p>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((city) => {
            const active = selectedCities.includes(city);
            return (
              <button
                key={city}
                onClick={() => toggleCity(city)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                  active
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "border-[var(--line)] bg-white/80 text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
          Travellers
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={decrementTravellers}
            disabled={travellers <= 1}
            className="h-10 w-10 rounded-full border border-[var(--line)] bg-white/80 text-lg font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="min-w-[2rem] text-center font-serif text-2xl text-[var(--foreground)]">
            {travellers}
          </span>
          <button
            onClick={incrementTravellers}
            disabled={travellers >= 10}
            className="h-10 w-10 rounded-full border border-[var(--line)] bg-white/80 text-lg font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            +
          </button>
          <span className="text-sm text-[var(--muted)]">
            {travellers === 1 ? "traveller" : "travellers"}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
          Preference
        </p>
        <div className="grid grid-cols-2 gap-4">
          {(["Nature", "City"] as const).map((pref) => {
            const active = preference === pref;
            return (
              <button
                key={pref}
                onClick={() => setPreference(active ? null : pref)}
                className={`rounded-[1.25rem] border p-5 text-left transition-colors ${
                  active
                    ? "border-[var(--accent)] bg-[rgba(175,93,50,0.08)]"
                    : "border-[var(--line)] bg-white/60 hover:border-[var(--accent)]"
                }`}
              >
                <p className="font-serif text-lg text-[var(--foreground)]">
                  {pref}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {pref === "Nature"
                    ? "Mountains, parks, rural China"
                    : "Skylines, food scenes, urban culture"}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="accent-ring w-full min-h-12 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] sm:w-auto sm:px-8"
        >
          Build My Route
        </button>
      ) : (
        <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/60 p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
            Coming Soon
          </p>
          <p className="font-serif text-xl text-[var(--foreground)]">
            Your personalised route is on its way
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            We&apos;re building out the full route generator. In the meantime, explore
            our preplanned trips - they&apos;re built around the same logic and are a
            great starting point.
          </p>
          <Link
            href="/plan-your-trip/preplanned-trips"
            className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            See Preplanned Trips
          </Link>
        </div>
      )}
    </div>
  );
}
