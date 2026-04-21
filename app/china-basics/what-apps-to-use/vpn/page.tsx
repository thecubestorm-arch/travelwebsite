import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "VPN for China",
  description:
    "Plan ahead for blocked services, practical VPN alternatives, and device setup before entering China.",
  path: "/china-basics/what-apps-to-use/vpn",
  keywords: ["VPN for China travel", "best VPN China", "China internet restrictions VPN"],
});

const sections = [
  {
    title: "Why you need a VPN in China",
    body: "China's Great Firewall blocks Google, Gmail, YouTube, Instagram, Facebook, WhatsApp, and most Western news and streaming services. A VPN routes your traffic through a server outside China, restoring access to these services. Without one, your digital experience in China is significantly limited.",
  },
  {
    title: "Install your VPN before you enter China",
    body: "This is the most critical step. VPN app stores and most VPN provider websites are blocked inside China. Once you land, it's too late to download a new one. Install your chosen VPN, test it, and confirm it connects reliably before your departure date.",
  },
  {
    title: "Which VPNs work well in China",
    body: "VPN reliability in China changes over time as the firewall updates. As of recent reports, ExpressVPN, NordVPN, and Astrill are among the most consistently recommended for China travel. Look for providers that offer obfuscation (stealth) protocols — these are harder for the firewall to detect and block.",
  },
  {
    title: "Keep a local fallback ready",
    body: "VPNs sometimes disconnect during peak periods or after firewall updates. Keep local apps (WeChat, Alipay, Amap) fully set up so you can still function without your VPN when it drops. Most day-to-day travel tasks do not require it — only access to Western internet services does.",
  },
];

export default function VpnPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "What Apps to Use", href: "/china-basics/what-apps-to-use" }, { label: "VPN" }]} />
      <PageIntro
        eyebrow="What Apps to Use"
        title="VPN for China"
        description="A VPN is the single most impactful preparation step for travelers who rely on Google, social media, or Western messaging apps. Set it up before departure — it cannot be done from inside China."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Related Guide"
        title="Understand why the firewall exists and what it affects"
        description="China's censorship system is broader than most visitors expect. Knowing what is blocked helps you plan what to set up."
        primaryCta={{ label: "Censorship Guide", href: "/china-basics/how-china-differs/censorship" }}
      />
    </LayoutWrapper>
  );
}
