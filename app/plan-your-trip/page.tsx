import { ContentCard } from "@/components/content-card";
import { ChecklistSection } from "@/components/checklist-section";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata, buildArticleSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Plan Your Trip",
  description:
    "Build your China itinerary with preplanned routes or create a custom trip with the travel planner.",
  path: "/plan-your-trip",
  keywords: [
    "plan China trip",
    "China itinerary",
    "China travel planner",
    "China preplanned routes",
  ],
});

const planCards = [
  {
    title: "Preplanned Trips",
    description:
      "Ready-made routes for different travel lengths and styles - from a classic two-week China circuit to focused shorter trips.",
    href: "/plan-your-trip/preplanned-trips",
    tag: "Routes",
  },
  {
    title: "Travel Planner",
    description:
      "Tell us your cities, travel group, and preferences - get a personalised route suggestion to get you started.",
    href: "/plan-your-trip/travel-planner",
    tag: "Custom",
  },
];

export default function PlanYourTripPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: "Plan Your Trip",
              description:
                "Build your China itinerary with preplanned routes or create a custom trip with the travel planner.",
              url: `${siteConfig.url}/plan-your-trip`,
            })
          ),
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plan Your Trip" }]} />
      <PageIntro
        eyebrow="Plan Your Trip"
        title="Shape your perfect China route"
        description="Use a preplanned route as a starting point, or use the travel planner to build something around your cities, group size, and travel style."
      />
      <ChecklistSection
        eyebrow="How to Plan"
        title="Three steps to a confident China itinerary"
        description="Good China trips are built on clear decisions, not maximum ambition. Follow this order."
        items={[
          {
            title: "Choose your cities",
            body: "Pick two to four core destinations based on what you want to experience - history, food, nature, or modernity.",
          },
          {
            title: "Set your pace",
            body: "Allow at least two full days per city. Factor in travel days between stops - trains take time, even fast ones.",
          },
          {
            title: "Pick a route style",
            body: "Use a preplanned route as a framework, then customise it. Don't build a new itinerary from scratch when a tested one exists.",
          },
        ]}
      />
      <section className="grid gap-6 sm:grid-cols-2">
        {planCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Before You Plan"
        title="Sort out the practical basics first"
        description="Apps, payments, internet access - handle these before building your route so your preparation is complete."
        primaryCta={{ label: "China Basics", href: "/china-basics" }}
      />
    </LayoutWrapper>
  );
}
