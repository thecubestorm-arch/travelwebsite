import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel Help",
  description:
    "Get practical China travel help for arrival-day setup, transport confidence, and backup planning.",
  path: "/travel-help",
});

const helpSections = [
  {
    title: "Arrival day confidence",
    body: "The first hours matter more than most travelers expect. Clear transport instructions, address screenshots, a payment fallback, and at least one working translation option can turn arrival day from stressful to manageable.",
  },
  {
    title: "Transport and navigation",
    body: "China's transport systems are efficient, but the volume of stations, exits, and signage can feel intense when you are jet-lagged. Build confidence by keeping hotel names saved, route screenshots ready, and enough time between major transfers.",
  },
  {
    title: "What to do when something breaks",
    body: "A smart traveler does not assume every app, card, and booking detail will work perfectly. Keep digital and offline backups for your trip essentials so a single failure does not derail the day.",
  },
  {
    title: "Future conversion space",
    body: "This page is also the right home for future downloadable checklists, consultation offers, or email-based support products once you decide how you want the business side of Trail of China to evolve.",
  },
];

export default function TravelHelpPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Travel Help"
        title="Practical support for the parts of China travel that feel uncertain"
        description="Use this section when you need to strengthen the practical side of your trip, especially around arrival-day logistics, transport confidence, and backup planning."
      />
      <InfoColumns items={helpSections} />
      <CTASection
        eyebrow="Placeholder CTA"
        title="Add your first lead magnet or support offer here later"
        description="This section is intentionally ready for a future checklist, downloadable guide, or simple service offer without changing the page structure."
        primaryCta={{ label: "Explore Homepage", href: "/" }}
      />
    </LayoutWrapper>
  );
}
