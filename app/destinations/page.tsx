import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { destinationCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Destinations",
  description:
    "Compare destination options in China and choose cities that make sense for a first-time trip.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />
      <PageIntro
        eyebrow="Destinations"
        title="Choose places that fit your first China trip"
        description="The best route is not always the longest or most ambitious one. Start with cities that balance access, atmosphere, food, and a pace you can actually enjoy."
      />
      <section className="grid gap-6 lg:grid-cols-2">
        {destinationCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Route Planning"
        title="Turn your city shortlist into a realistic itinerary"
        description="Once you know which places fit your first trip, use a route that keeps travel time manageable and energy levels realistic."
        primaryCta={{ label: "Plan Your Trip", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
