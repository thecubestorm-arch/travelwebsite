import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { ChecklistSection } from "@/components/checklist-section";
import { FAQSection } from "@/components/faq-section";
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
    "Start planning your first China trip with mobile-friendly prep guides, destination overviews, and practical itinerary ideas for international travelers.",
  path: "/",
  keywords: [
    "China travel guide",
    "first trip to China",
    "China itinerary",
    "China travel planning",
    "travel China first time",
  ],
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

        <ChecklistSection
          eyebrow="Quick Start"
          title="Start with the three decisions that shape the whole trip"
          description="If you are planning on your phone, this is the fastest way to make meaningful progress. Handle the basics first, narrow the cities second, and only then build the route."
          items={[
            {
              title: "Fix your setup",
              body: "Get apps, payments, and connectivity sorted before departure so your arrival day feels controlled rather than reactive.",
            },
            {
              title: "Choose the right cities",
              body: "Pick destinations based on pace, travel energy, and what kind of first China experience you actually want.",
            },
            {
              title: "Use a realistic route",
              body: "Build an itinerary around manageable transfer times so the trip stays exciting without becoming exhausting.",
            },
          ]}
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

        <FAQSection
          eyebrow="Common Questions"
          title="What first-time travelers usually need answered early"
          description="These are the practical questions that often decide whether a first China trip feels smooth or stressful."
          items={[
            {
              question: "What should I prepare first before traveling to China?",
              answer:
                "Start with the basics that affect your first 48 hours: payments, essential apps, connectivity, saved hotel details, and a realistic arrival plan.",
            },
            {
              question: "How many cities should I include on a first China trip?",
              answer:
                "Most first-time travelers are better served by two to four core stops, because that keeps transfer time under control and leaves enough energy to actually enjoy each destination.",
            },
            {
              question: "Is Trail of China meant to be a blog or a planning tool?",
              answer:
                "The site is built as a practical planning tool first, with destination guidance, prep checklists, and route advice that help travelers make decisions rather than just read inspiration.",
            },
          ]}
        />

        <CTASection
          eyebrow="Lead Magnet"
          title="Offer something genuinely useful, not just another signup"
          description="The best lead magnet for this audience is a compact planning asset they can actually use on mobile, such as a first-week checklist, payment setup guide, or arrival-day cheat sheet."
          primaryCta={{ label: "See Travel Help", href: "/travel-help" }}
          secondaryText="This keeps the page customer-first now while still leaving room for lead capture later."
        />
      </LayoutWrapper>
    </div>
  );
}
