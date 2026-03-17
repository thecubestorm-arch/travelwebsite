import { CTASection } from "@/components/cta-section";
import { ChecklistSection } from "@/components/checklist-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel Help",
  description:
    "Get practical China travel help for arrival-day setup, transport confidence, and backup planning.",
  path: "/travel-help",
  keywords: [
    "China travel help",
    "China arrival tips",
    "China travel backup plan",
    "China transport guide",
    "first time China travel advice",
  ],
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
      <ChecklistSection
        eyebrow="High Value Support"
        title="If something feels uncertain, secure these basics first"
        description="This is the kind of customer value the site should keep prioritizing: immediate actions that reduce risk and make travel feel more manageable."
        items={[
          {
            title: "Save your first stop details",
            body: "Keep your hotel name, address, and booking screenshot available in both your phone gallery and one offline note.",
          },
          {
            title: "Carry one payment backup",
            body: "Even if mobile payments are your main plan, you should still have one secondary card or small backup cash option ready.",
          },
          {
            title: "Protect the day from one failure",
            body: "If your main app, card, or connection stops working, your trip should still continue with screenshots, offline notes, and one alternative route.",
          },
        ]}
      />
      <InfoColumns items={helpSections} />
      <CTASection
        eyebrow="Placeholder CTA"
        title="Turn your best practical advice into a customer asset later"
        description="This section is intentionally ready for a future downloadable checklist, planning pack, or support offer without changing the page structure."
        primaryCta={{ label: "Explore Homepage", href: "/" }}
      />
    </LayoutWrapper>
  );
}
