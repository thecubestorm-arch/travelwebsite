import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chongqing",
  description:
    "Discover what makes Chongqing an exciting and memorable stop for a first trip to China.",
  path: "/destinations/chongqing",
});

const chongqingSections = [
  {
    title: "Why Chongqing stands out",
    body: "Chongqing feels dramatic in a way few cities do. Its hills, bridges, layered transport, river views, and dense urban energy make it unforgettable for travelers who want a more cinematic sense of China beyond the usual first-city choices.",
  },
  {
    title: "What to expect on the ground",
    body: "This is not the calmest city on a first trip, but it is one of the most memorable. Elevation, weather, dense neighborhoods, and the sheer visual complexity of the city can make it feel intense, especially compared with flatter and more orderly destinations.",
  },
  {
    title: "How to use it well",
    body: "Chongqing works best when you allow enough time to settle in and avoid overscheduling. Give yourself room for evening views, hotpot meals, riverfront wandering, and some navigation mistakes, because the city becomes more rewarding once you stop trying to rush through it.",
  },
  {
    title: "Who will love it most",
    body: "Travelers who enjoy atmosphere, striking cityscapes, bold food, and destinations with a stronger sense of surprise will likely connect with Chongqing quickly. If you want China to feel vivid, vertical, and slightly disorienting in the best way, it is a strong pick.",
  },
];

export default function ChongqingPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Chongqing" }]} />
      <PageIntro
        eyebrow="City Guide"
        title="Chongqing"
        description="For travelers who want a more intense and visually unforgettable city, Chongqing can become the highlight that makes a first China trip feel truly distinct."
      />
      <InfoColumns items={chongqingSections} />
      <CTASection
        eyebrow="Keep Planning"
        title="Now shape a route around your strongest destination picks"
        description="Once you know which cities deserve space on the itinerary, use a route that keeps the experience practical and exciting."
        primaryCta={{
          label: "See Itinerary",
          href: "/plan-your-trip/preplanned-trips/2-weeks-in-china",
        }}
      />
    </LayoutWrapper>
  );
}
