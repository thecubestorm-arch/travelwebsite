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

const howItWorksSteps = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Get apps, payments, and internet sorted before departure — the three things that matter most on arrival day.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Explore cities that match your pace, interests, and energy — from Shanghai's skyline to Beijing's ancient core.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Build a realistic route with the right number of cities, smart transfer days, and flexibility built in.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="px-5 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="mx-auto w-full max-w-7xl">
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
        </div>
      </div>

      {/* How It Works — full bleed with section-alt background */}
      <div className="section-alt mt-12 sm:mt-16">
        <LayoutWrapper className="py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)] mb-8 sm:mb-10">
            How It Works
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-serif text-5xl text-[var(--accent)] opacity-35 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-[var(--foreground)]">{step.title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </LayoutWrapper>
      </div>

      {/* Destinations */}
      <LayoutWrapper className="mt-14 sm:mt-18 space-y-8">
        <SectionHeading
          eyebrow="Top 5 Destinations"
          title="The cities that define a first China trip"
          description="These are the destinations that come up most often for first-time visitors — each offering a different side of China's scale and character."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {top5DestinationsCards.map((card) => (
            <ContentCard key={card.href + card.title} {...card} variant="photo" />
          ))}
        </div>
      </LayoutWrapper>

      {/* FAQ */}
      <LayoutWrapper className="mt-14 sm:mt-18">
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
      </LayoutWrapper>

      {/* Before You Go */}
      <LayoutWrapper className="mt-14 sm:mt-18 pb-10 space-y-8">
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
      </LayoutWrapper>
    </div>
  );
}
