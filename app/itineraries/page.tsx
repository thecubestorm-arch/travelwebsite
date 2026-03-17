import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { itineraryCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Itineraries",
  description:
    "Use practical China itinerary ideas built for first-time travelers who need a manageable route.",
  path: "/itineraries",
});

export default function ItinerariesPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Itineraries"
        title="Build a route that feels ambitious but still manageable"
        description="A first China trip should feel exciting, not chaotic. Strong itineraries account for energy, transfer time, and how much complexity you actually want in each week."
      />
      <section className="grid gap-6">
        {itineraryCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Need Help"
        title="Use travel help pages to strengthen the weak spots in your plan"
        description="If your route is starting to make sense, focus next on the practical gaps that could still create friction while traveling."
        primaryCta={{ label: "Go to Travel Help", href: "/travel-help" }}
      />
    </LayoutWrapper>
  );
}
