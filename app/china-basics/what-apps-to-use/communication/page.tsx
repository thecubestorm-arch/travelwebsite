import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Communication Apps for China",
  description:
    "WeChat is how China communicates. Set it up before arrival — many services and contacts require it.",
  path: "/china-basics/what-apps-to-use/communication",
  keywords: ["WeChat for tourists", "China messaging app", "WhatsApp China", "communication China travel"],
});

const sections = [
  {
    title: "WeChat is essential — not optional",
    body: "WeChat (微信) is China's dominant messaging app and much more. Local contacts, hotels, tour guides, and many services communicate exclusively via WeChat. Set it up before arrival using your foreign phone number. You will almost certainly need it within the first few days.",
  },
  {
    title: "WhatsApp and iMessage work with a VPN",
    body: "WhatsApp and iMessage are blocked in China without a VPN. If you rely on these for family or work communication, make sure your VPN is installed and tested before departure. Calls and messages will route through your VPN normally once connected.",
  },
  {
    title: "Translation apps make a real difference",
    body: "Google Translate works in China via VPN and has an excellent camera mode for translating menus and signs. Baidu Translate also works without a VPN and handles Chinese-English particularly well. Download offline language packs before departure so translation works even when your connection is slow.",
  },
  {
    title: "Keep your home number accessible",
    body: "You will need your home phone number to receive verification SMS for WeChat, payment apps, and booking platforms. If your SIM is staying at home or going into airplane mode, forward these verifications to a second device or use email-based verification where possible.",
  },
];

export default function CommunicationAppsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="What Apps to Use"
        title="Communication Apps for China"
        description="Staying connected in China means adapting to a different app ecosystem. WeChat is the foundation — everything else builds around it."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Related Guide"
        title="Understand what's blocked and how to work around it"
        description="Knowing China's internet restrictions in advance helps you prepare rather than react on arrival day."
        primaryCta={{ label: "Censorship Guide", href: "/china-basics/how-china-differs/censorship" }}
      />
    </LayoutWrapper>
  );
}
