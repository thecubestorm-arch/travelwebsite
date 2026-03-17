import { ContentCard } from "@/components/content-card";
import { ChecklistSection } from "@/components/checklist-section";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { featuredGuides } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plan Your Trip",
  description:
    "Prepare for your China trip with practical help on apps, payments, and connectivity before departure.",
  path: "/plan-your-trip",
  keywords: [
    "plan China trip",
    "China travel checklist",
    "apps for China travel",
    "China payments guide",
    "China VPN travel",
  ],
});

export default function PlanYourTripPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Preparation"
        title="Prepare the essentials before your flight"
        description="The easiest way to reduce stress in China is to sort out the practical basics before arrival. Start with the tools, payment methods, and internet setup that affect your first few days the most."
      />
      <ChecklistSection
        eyebrow="Preparation Order"
        title="A better planning sequence for first-time travelers"
        description="This page should help users do the next important thing, not just read. Follow this order to get the highest practical value from your trip prep."
        items={[
          {
            title: "Install core apps",
            body: "Set up translation, maps, messaging, and ride-hailing first so your phone is useful from the moment you land.",
          },
          {
            title: "Test payments",
            body: "Confirm your payment apps, backup cards, and bank approvals before departure instead of troubleshooting while tired on arrival day.",
          },
          {
            title: "Create backups",
            body: "Save addresses, booking screenshots, and offline notes so one weak connection or app issue does not derail the day.",
          },
        ]}
      />
      <section className="grid gap-6 lg:grid-cols-3">
        {featuredGuides.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Next Step"
        title="Once your setup is handled, move on to destinations"
        description="After the practical groundwork is in place, compare cities and decide what kind of first China route fits your pace."
        primaryCta={{ label: "Explore Destinations", href: "/destinations" }}
      />
    </LayoutWrapper>
  );
}
