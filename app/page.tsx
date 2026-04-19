import { ContentCard } from "@/components/content-card";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { SectionHeading } from "@/components/section-heading";
import {
  homepageBeforeYouGoCards,
  top5DestinationsCards,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel China Without Confusion",
  description:
    "Start planning your first China trip with practical prep guides, destination overviews, and realistic itinerary ideas for international travelers.",
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
          primaryCta={{ label: "China Basics", href: "/china-basics" }}
          secondaryCta={{
            label: "Explore Destinations",
            href: "/destinations",
          }}
        />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Top 5 Destinations"
            title="The cities that define a first China trip"
            description="These are the destinations that come up most often for first-time visitors - each offering a different side of China's scale and character."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {top5DestinationsCards.map((card) => (
              <ContentCard key={card.href + card.title} {...card} />
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
                "Start with the basics that affect your first 48 hours: a working eSIM or SIM card, Alipay or WeChat Pay set up, a VPN installed on your device, and your hotel address saved offline. Handle these before departure - they're much harder to fix on arrival day.",
            },
            {
              question: "How many cities should I include on a first China trip?",
              answer:
                "Most first-time travelers are better served by two to four core stops. That keeps transfer time under control and leaves enough energy to actually enjoy each destination. Two weeks with three cities done well beats two weeks with six cities done rushed.",
            },
            {
              question: "Do I need a VPN in China?",
              answer:
                "If you use Google, Instagram, WhatsApp, or most Western apps, yes - and it must be installed before you enter China. VPN providers' websites are blocked inside China, making last-minute downloads impossible.",
            },
          ]}
        />

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Before You Go"
            title="The practical prep that makes the biggest difference"
            description="Sorting out apps, internet access, and payment options before departure turns a potentially stressful arrival day into a confident one."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {homepageBeforeYouGoCards.map((card) => (
              <ContentCard key={card.href} {...card} />
            ))}
          </div>
        </section>
      </LayoutWrapper>
    </div>
  );
}
