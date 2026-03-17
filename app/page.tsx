import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { SectionHeading } from "@/components/section-heading";
import {
  destinationCards,
  featuredGuides,
  homepageEntryCards,
  itineraryCards,
  travelHelpCards,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel China Without Confusion",
  description:
    "Start planning your first China trip with practical prep guides, destination overviews, and itinerary ideas built for international travelers.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="py-8 sm:py-10">
      <LayoutWrapper className="space-y-16 sm:space-y-20">
        <HeroSection
          eyebrow="Trail of China"
          title="Travel China Without Confusion"
          description="Practical guides and itineraries for first-time travelers who want clearer decisions, smoother arrival days, and a smarter first route through China."
          primaryCta={{ label: "Start Planning", href: "/plan-your-trip" }}
          secondaryCta={{
            label: "Explore Destinations",
            href: "/destinations",
          }}
        />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Start Here"
            title="Three clear ways to move your trip forward"
            description="Use the site like a preparation tool. Decide what to set up first, where to go, and how to shape a realistic route."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {homepageEntryCards.map((card) => (
              <ContentCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Featured Guides"
            title="Solve the questions first-time travelers get stuck on"
            description="Start with the practical pieces that affect almost every trip to China: essential apps, mobile payments, and staying connected."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredGuides.map((card) => (
              <ContentCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Destinations"
            title="Compare cities before you commit your route"
            description="These starter city guides help you understand pace, atmosphere, and what each stop is best for."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {destinationCards.map((card) => (
              <ContentCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Itinerary"
            title="Use a route that feels exciting without becoming exhausting"
            description="A strong first itinerary should keep your logistics manageable while still giving you a sense of China's scale and contrast."
          />
          <div className="grid gap-6">
            {itineraryCards.map((card) => (
              <ContentCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Travel Help"
            title="Build confidence for the parts that usually feel uncertain"
            description="From arrival-day setup to backup plans for payments and connectivity, this section is designed to reduce friction."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {travelHelpCards.map((card) => (
              <ContentCard key={`${card.title}-${card.tag}`} {...card} />
            ))}
          </div>
        </section>

        <CTASection
          eyebrow="Lead Magnet"
          title="Turn this section into your first subscriber offer"
          description="Use this area for a printable arrival checklist, starter itinerary, or practical China prep guide once you're ready to capture leads."
          primaryCta={{ label: "CTA Placeholder", href: "/travel-help" }}
          secondaryText="For now, it works as a visual placeholder without adding any backend complexity."
        />
      </LayoutWrapper>
    </div>
  );
}
