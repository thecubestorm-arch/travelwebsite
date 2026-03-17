import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shanghai",
  description:
    "Explore why Shanghai is a strong starting point for first-time travelers visiting China.",
  path: "/destinations/shanghai",
});

const shanghaiSections = [
  {
    title: "Why Shanghai works for a first trip",
    body: "Shanghai is often one of the easiest entry points for international travelers because it combines major-city efficiency with a relatively smooth learning curve. Public transport is strong, neighborhoods are distinct, and the city makes it easy to mix food, culture, and practical travel comfort.",
  },
  {
    title: "What the city feels like",
    body: "Expect a polished, global-facing city with riverfront landmarks, historic lanes, ambitious architecture, and a fast but readable urban rhythm. It can feel intense in scale, yet still approachable for travelers who want a confident first stop in China.",
  },
  {
    title: "Best use in an itinerary",
    body: "Shanghai works well as a landing city, a soft-entry destination, or the final urban stop before departure. It is especially useful if you want one city that blends convenience with enough variety to justify several nights without overwhelming your route.",
  },
  {
    title: "Who should prioritize it",
    body: "Travelers who value smooth logistics, strong food variety, day-by-day flexibility, and a city that is easy to navigate should place Shanghai high on the shortlist. It is also a solid choice if this is your first ever trip to East Asia and you want a gentler start.",
  },
];

export default function ShanghaiPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="City Guide"
        title="Shanghai"
        description="If you want a first China city that feels efficient, stylish, and relatively easy to navigate, Shanghai is one of the strongest places to begin."
      />
      <InfoColumns items={shanghaiSections} />
      <CTASection
        eyebrow="Compare Cities"
        title="Want something bolder and more dramatic?"
        description="Chongqing offers a very different urban experience, with layered geography, richer visual intensity, and a stronger sense of raw scale."
        primaryCta={{ label: "See Chongqing", href: "/destinations/chongqing" }}
      />
    </LayoutWrapper>
  );
}
