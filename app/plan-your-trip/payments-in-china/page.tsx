import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payments in China",
  description:
    "Understand how mobile payments, backup cards, and small cash reserves fit into a practical China trip.",
  path: "/plan-your-trip/payments-in-china",
});

const paymentSections = [
  {
    title: "Expect a mobile-first payment culture",
    body: "In many cities, QR-based mobile payments are the default for daily spending. Cafes, taxis, convenience stores, and smaller vendors may expect phone payment first, so arriving with a working payment app reduces friction immediately.",
  },
  {
    title: "Keep a layered backup plan",
    body: "Even if your preferred setup is mobile payment, bring a backup card and a modest amount of local cash. This helps when a foreign card link fails, when a kiosk only accepts a different method, or when you need a simple fallback in transit.",
  },
  {
    title: "Test the important pieces early",
    body: "Before you fly, confirm that your bank allows international transactions, your payment app account is verified, and your phone can receive any final login or security prompts. A setup that works in theory but fails under travel conditions can create avoidable stress.",
  },
  {
    title: "Where foreign travelers get caught out",
    body: "Common pain points include card linking issues, app verification delays, unfamiliar Chinese-language payment prompts, and merchants who assume everyone is paying by QR code. Planning around these friction points is often more important than finding a single perfect solution.",
  },
];

export default function PaymentsInChinaPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Plan Your Trip"
        title="Payments in China"
        description="Most travelers worry about cash first, but the more important question is whether your phone and your backup options are ready for a mobile-payment environment."
      />
      <InfoColumns items={paymentSections} />
      <CTASection
        eyebrow="Related Guide"
        title="Next, make sure your connection plan is realistic"
        description="A payment-ready phone still depends on stable access, so internet preparation should be part of the same setup workflow."
        primaryCta={{
          label: "Read VPN Guide",
          href: "/plan-your-trip/vpn-for-china",
        }}
      />
    </LayoutWrapper>
  );
}
