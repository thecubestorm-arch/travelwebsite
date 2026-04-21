import { ContentCard } from "@/components/content-card";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { chinaBasicsCards } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "China Basics",
  description:
    "Everything you need to know before traveling to China — apps, internet access, cultural differences, and how to get around.",
  path: "/china-basics",
  keywords: [
    "China travel basics",
    "traveling to China tips",
    "China first time",
    "China travel preparation",
  ],
});

export default function ChinaBasicsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics" }]} />
      <PageIntro
        eyebrow="China Basics"
        title="Everything you need to know before you land"
        description="China is one of the most rewarding countries to travel in — and one of the most surprising. This section covers the practical knowledge that separates a smooth first trip from a stressful one."
      />
      <section className="grid gap-6 sm:grid-cols-2">
        {chinaBasicsCards.map((card) => (
          <ContentCard key={card.href} {...card} />
        ))}
      </section>
      <FAQSection
        eyebrow="Common Questions"
        title="What first-time visitors usually want answered"
        description="Quick answers to the questions that come up most often before a first trip to China."
        items={[
          {
            question: "Do I need a VPN in China?",
            answer:
              "If you want to use Google, Instagram, WhatsApp, or most Western apps, yes. Set it up before you arrive — downloading VPN apps inside China is unreliable.",
          },
          {
            question: "Can I use my credit card in China?",
            answer:
              "Visa and Mastercard work in hotels and some restaurants, but most day-to-day payments in China are cashless via Alipay or WeChat Pay. Set up at least one of these before arrival.",
          },
          {
            question: "Is it safe to travel in China as a foreigner?",
            answer:
              "China is generally very safe for tourists. Crime rates are low and public transport is reliable. The main practical challenges are language, internet restrictions, and mobile payment setup.",
          },
        ]}
      />
      <CTASection
        eyebrow="Ready to Plan"
        title="Once the basics are handled, build your route"
        description="With connectivity, payments, and apps sorted, you're ready to pick cities and shape a realistic itinerary."
        primaryCta={{ label: "Plan Your Trip", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
