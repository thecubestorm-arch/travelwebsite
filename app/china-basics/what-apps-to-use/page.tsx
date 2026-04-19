import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { whatAppsCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What Apps to Use in China",
  description:
    "The essential apps for payment, maps, travel bookings, communication, and staying connected in China.",
  path: "/china-basics/what-apps-to-use",
  keywords: [
    "best apps for China travel",
    "China travel apps",
    "apps to download before China trip",
  ],
});

export default function WhatAppsToUsePage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="China Basics"
        title="What Apps to Use in China"
        description="Think of your phone as your wallet, map, translator, and transport pass. Set these up before departure — some require foreign phone numbers or identity verification that's much easier to complete at home."
      />
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whatAppsCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Next Step"
        title="Get your internet connection sorted before anything else"
        description="Apps are only useful if your phone has data. Set up an eSIM or physical SIM before your flight."
        primaryCta={{ label: "How to Get Internet", href: "/china-basics/how-to-get-internet" }}
      />
    </LayoutWrapper>
  );
}
