import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "2 Weeks in China",
  description:
    "A realistic two-week China itinerary for first-time international travelers who want a balanced route.",
  path: "/itineraries/2-weeks-in-china",
});

const itinerarySections = [
  {
    title: "Week 1: start with a smoother landing",
    body: "Open with a city that lets you adjust to payments, navigation, language differences, and transport systems without immediately adding too much friction. A route that begins with a relatively easy base often makes the second week feel more enjoyable and more confident.",
  },
  {
    title: "Week 2: add contrast, not chaos",
    body: "The second half of a strong two-week trip should bring a clear change in atmosphere, food, geography, or city rhythm. The key is contrast that feels rewarding, not a route that becomes exhausting because every few days involve a major transfer and total reset.",
  },
  {
    title: "How many stops is realistic",
    body: "For most first-time travelers, two to four core stops is enough for two weeks. That usually creates better memories than trying to collect too many cities, stations, flights, and hotel check-ins in a short window.",
  },
  {
    title: "What makes this route work",
    body: "The best itinerary is not the one with the most landmarks. It is the one that gives you enough time to eat well, navigate confidently, recover from travel fatigue, and leave China wanting to come back instead of feeling that the trip outran you.",
  },
];

export default function TwoWeeksInChinaPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Starter Route"
        title="2 Weeks in China"
        description="Two weeks is enough time for a memorable first trip if the route has clear priorities, sensible pacing, and enough flexibility for real travel conditions."
      />
      <InfoColumns items={itinerarySections} />
      <CTASection
        eyebrow="Preparation"
        title="Before booking, make sure your essentials are ready"
        description="A workable route matters, but your trip will feel much smoother if apps, payments, and connectivity are handled before departure."
        primaryCta={{ label: "Back to Planning", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
