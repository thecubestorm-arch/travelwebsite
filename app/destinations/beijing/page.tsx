import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { beijingSubpageCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Beijing",
  description:
    "The capital and cultural heart of China — history, architecture, and cuisine at every turn.",
  path: "/destinations/beijing",
  keywords: ["Beijing travel guide", "Beijing first time", "Beijing tourist", "visit Beijing China"],
});

const beijingSections = [
  {
    title: "Why Beijing belongs on every first China trip",
    body: "Beijing is where China's history is most visible and most concentrated. The Forbidden City, the Great Wall, the Temple of Heaven — these are not just sights, they are the physical expression of a civilisation that spans millennia. No other city gives first-time visitors a comparable sense of scale and historical depth.",
  },
  {
    title: "What the city feels like",
    body: "Beijing is slower and more spread out than Shanghai, with wider boulevards, quieter hutong alleyways, and a more traditional Chinese atmosphere in its residential areas. It is a city of contrasts — ancient stone structures alongside gleaming modern infrastructure, imperial formality alongside casual street culture.",
  },
  {
    title: "Best use in an itinerary",
    body: "Beijing works well as a destination in its own right for 3–5 days. It pairs naturally with Shanghai on the classic corridor route (4.5 hours by high-speed train). If your trip is focused on history and culture, Beijing can anchor the entire itinerary without feeling like you're compromising on anything.",
  },
  {
    title: "Who should prioritize it",
    body: "History enthusiasts, first-time China visitors who want the most culturally immersive experience, and anyone who has the Forbidden City or Great Wall on their bucket list. Beijing is also excellent for food — its culinary tradition is deep and distinct from Shanghai's, with roast duck, street food culture, and Sichuan imports all represented at a high level.",
  },
];

export default function BeijingPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="City Guide"
        title="Beijing"
        description="China's capital is the country's most historically rich city. The Forbidden City, the Great Wall, and centuries of imperial culture — Beijing delivers a depth of experience that no other destination matches."
      />
      <InfoColumns items={beijingSections} />
      <section className="grid gap-6 sm:grid-cols-2">
        {beijingSubpageCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Compare Cities"
        title="Looking for something more modern and international?"
        description="Shanghai offers a very different energy — polished, cosmopolitan, and with some of Asia's best food."
        primaryCta={{ label: "See Shanghai", href: "/destinations/shanghai" }}
      />
    </LayoutWrapper>
  );
}
