import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "2 Weeks in China",
  description:
    "A realistic two-week China itinerary for first-time international travelers who want a balanced route.",
  path: "/plan-your-trip/preplanned-trips/2-weeks-in-china",
  keywords: ["2 weeks China itinerary", "China two week trip", "China first time route", "China 14 days"],
});

const itinerarySections = [
  {
    title: "Week 1: start with a smoother landing",
    body: "Open with a city that lets you adjust to payments, navigation, language differences, and transport systems without immediately adding too much friction. Shanghai is a strong choice — international airports, English-friendly metro, excellent food, and a relatively gentle introduction to Chinese urban life. Allow 3 nights here before moving on.",
  },
  {
    title: "Week 2: add contrast, not chaos",
    body: "The second half of a strong two-week trip should bring a clear change in atmosphere. Beijing provides exactly that — history, scale, and a more traditional Chinese character that contrasts sharply with Shanghai's modernity. Take the high-speed train (4.5 hours) and allow 3–4 nights. The Great Wall, Forbidden City, and hutong walks justify at least three full days.",
  },
  {
    title: "How many stops is realistic",
    body: "For most first-time travelers, two to four core stops is enough for two weeks. Adding a third city — Xi'an or Chengdu — is possible if you keep each stop at least two nights and use high-speed trains efficiently. More than four stops typically means you spend more time on trains and in hotel queues than actually experiencing each place.",
  },
  {
    title: "What makes this route work",
    body: "The best itinerary is not the one with the most landmarks. It is the one that gives you enough time to eat well, navigate confidently, recover from travel fatigue, and leave China wanting to come back. Two weeks done well — with 2–4 cities, clear transport, and realistic expectations — beats two weeks of frantic ticking.",
  },
];

export default function TwoWeeksInChinaPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plan Your Trip", href: "/plan-your-trip" }, { label: "Preplanned Trips", href: "/plan-your-trip/preplanned-trips" }, { label: "2 Weeks in China" }]} />
      <PageIntro
        eyebrow="Preplanned Trip"
        title="2 Weeks in China"
        description="Two weeks is enough time for a memorable first trip if the route has clear priorities, sensible pacing, and enough flexibility for real travel conditions."
      />
      <InfoColumns items={itinerarySections} />
      <CTASection
        eyebrow="Get Ready"
        title="Before booking, make sure your essentials are ready"
        description="A good route matters — but apps, payments, and connectivity handled before departure make the whole trip smoother."
        primaryCta={{ label: "China Basics", href: "/china-basics" }}
      />
    </LayoutWrapper>
  );
}
