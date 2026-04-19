import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { howToGetAroundCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How to Get Around China",
  description:
    "Trains, planes, subways, buses, and taxis — how transport works in China and what to use when.",
  path: "/china-basics/how-to-get-around",
  keywords: [
    "how to get around China",
    "China transport guide",
    "China high speed train",
    "China subway",
    "DiDi China",
  ],
});

export default function HowToGetAroundPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="China Basics"
        title="How to Get Around China"
        description="China has one of the best transport networks in the world. High-speed trains are the backbone for intercity travel, while subways and ride-hailing apps make city navigation easy. Here's what to use and when."
      />
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {howToGetAroundCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Plan Your Route"
        title="Ready to choose your cities and build a route?"
        description="Now that you know how to move between places, start shaping your itinerary with preplanned routes or the travel planner."
        primaryCta={{ label: "Plan Your Trip", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
