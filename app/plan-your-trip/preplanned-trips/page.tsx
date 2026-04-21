import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { preplannedTripCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Preplanned Trips",
  description:
    "Ready-made China itineraries for different travel lengths and styles — built around realistic pacing and high-speed rail.",
  path: "/plan-your-trip/preplanned-trips",
  keywords: ["China itinerary", "China trip plan", "China 2 weeks itinerary", "China travel route"],
});

export default function PreplannedTripsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plan Your Trip", href: "/plan-your-trip" }, { label: "Preplanned Trips" }]} />
      <PageIntro
        eyebrow="Plan Your Trip"
        title="Preplanned routes for a first China trip"
        description="These routes are built around realistic travel times, manageable city counts, and the best of what each region offers. Use them as a starting framework — then adjust for your priorities."
      />
      <section className="grid gap-6 lg:grid-cols-2">
        {preplannedTripCards.map((card) => (
          <ContentCard key={`${card.title}-${card.tag}`} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Not Ready to Commit?"
        title="Build your own route instead"
        description="The travel planner lets you choose cities, travel pace, and route style — so you can build something that fits exactly what you want."
        primaryCta={{ label: "Open Travel Planner", href: "/plan-your-trip/travel-planner" }}
      />
    </LayoutWrapper>
  );
}
