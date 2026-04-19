import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { howChinaDiffersCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How China Differs",
  description:
    "Censorship, cultural norms, security standards, and passport rules that every visitor to China should understand.",
  path: "/china-basics/how-china-differs",
  keywords: [
    "China cultural differences",
    "China travel rules",
    "China censorship travelers",
    "China passport rules",
  ],
});

export default function HowChinaDiffersPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="China Basics"
        title="How China Differs"
        description="China operates differently from most countries first-time visitors have traveled to. Understanding the key differences — from internet censorship to cultural norms — makes your trip smoother and more respectful."
      />
      <section className="grid gap-6 sm:grid-cols-2">
        {howChinaDiffersCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Practical Next Step"
        title="Learn how to get around once you're there"
        description="With the key differences understood, the next practical question is how to move between and within Chinese cities."
        primaryCta={{ label: "How to Get Around", href: "/china-basics/how-to-get-around" }}
      />
    </LayoutWrapper>
  );
}
