import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { howToGetInternetCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How to Get Internet in China",
  description:
    "Your options for mobile data in China — eSIM vs physical SIM, what to buy, and when to buy it.",
  path: "/china-basics/how-to-get-internet",
  keywords: [
    "China internet for tourists",
    "China SIM card",
    "China eSIM",
    "mobile data China",
  ],
});

export default function HowToGetInternetPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Internet" }]} />
      <PageIntro
        eyebrow="China Basics"
        title="How to Get Internet in China"
        description="You have two main options: an eSIM you activate before departure, or a physical SIM you buy at the airport. Both work well — the right choice depends on your phone and how long you're staying."
      />
      <section className="grid gap-6 sm:grid-cols-2">
        {howToGetInternetCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <CTASection
        eyebrow="Also Important"
        title="Apps only work if you have data — and a VPN"
        description="Once you have connectivity, the next step is making sure your VPN and essential apps are set up before you land."
        primaryCta={{ label: "What Apps to Use", href: "/china-basics/what-apps-to-use" }}
      />
    </LayoutWrapper>
  );
}
