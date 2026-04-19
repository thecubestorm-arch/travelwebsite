import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payment Apps for China",
  description:
    "How to set up Alipay and WeChat Pay as a foreign visitor — before you land in China.",
  path: "/china-basics/what-apps-to-use/payment",
  keywords: ["Alipay for foreigners", "WeChat Pay setup", "China cashless payment"],
});

const sections = [
  {
    title: "Why cash is no longer enough",
    body: "China has moved almost entirely to mobile payments. Many small restaurants, street food stalls, and local shops no longer accept cash at all. Without Alipay or WeChat Pay, you will find yourself unable to pay in situations that would be routine for any local traveler.",
  },
  {
    title: "Setting up Alipay as a foreigner",
    body: "Alipay now supports foreign bank card linking for international visitors. Download the app before departure, switch to the international version if prompted, and link your Visa or Mastercard. Verify your identity with your passport when asked. The process is easiest when completed outside China with reliable access to your home bank's SMS verification.",
  },
  {
    title: "WeChat Pay as a backup",
    body: "WeChat Pay also supports foreign cards in the international version of WeChat. While Alipay tends to be more widely accepted for tourists, having both gives you a strong backup. WeChat is also essential for communication, so setting it up kills two birds with one stone.",
  },
  {
    title: "Keep some cash as a final backup",
    body: "ATMs are available in major cities and accept international cards, though fees apply. Carry the equivalent of 500–1000 CNY (about 70–140 USD) for situations where mobile payment fails — some rural areas, older establishments, or transport situations still prefer cash.",
  },
];

export default function PaymentAppsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="What Apps to Use"
        title="Payment Apps for China"
        description="China runs on Alipay and WeChat Pay. Setting these up before departure is one of the highest-value things you can do to prepare for your trip."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Related Guide"
        title="Understand how China's internet works before you arrive"
        description="Payment apps need data — and China's internet restrictions affect which services you can use."
        primaryCta={{ label: "How to Get Internet", href: "/china-basics/how-to-get-internet" }}
      />
    </LayoutWrapper>
  );
}
