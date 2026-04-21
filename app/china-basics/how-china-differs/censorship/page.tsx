import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Internet Censorship in China",
  description:
    "The Great Firewall blocks Google, social media, and many Western apps. Know what to expect and how to prepare.",
  path: "/china-basics/how-china-differs/censorship",
  keywords: ["Great Firewall China", "China internet censorship", "blocked websites China travel"],
});

const sections = [
  {
    title: "What the Great Firewall blocks",
    body: "China's internet censorship system — known informally as the Great Firewall — blocks Google (Search, Maps, Gmail, Drive, YouTube), Meta (Facebook, Instagram, WhatsApp), Twitter/X, most Western news sites, Wikipedia in some languages, and many other Western platforms. Chinese alternatives exist for most of these services.",
  },
  {
    title: "How it affects your day-to-day travel",
    body: "For most tourists, the practical impact is: your usual messaging apps may not work (WhatsApp, Telegram), Google Maps is unreliable, and your normal search habits need adjusting. None of this prevents a great trip — it simply requires preparation. Set up WeChat, Amap, and a VPN before you leave.",
  },
  {
    title: "VPN: the standard workaround",
    body: "A VPN routes your internet traffic through a server outside China, bypassing the firewall. Many foreign visitors use VPNs throughout their trip without issue. The key rule: download and test your VPN before entering China, because VPN provider websites are themselves blocked once you're inside.",
  },
  {
    title: "Censorship is not targeting tourists",
    body: "China's internet restrictions are a domestic policy, not something designed to inconvenience foreign visitors specifically. Most locals use Chinese alternatives (Baidu, WeChat, Weibo) instead of Western platforms. As a tourist, you are not in any legal jeopardy for using a VPN — it is a routine part of travel preparation.",
  },
];

export default function CensorshipPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How China Differs", href: "/china-basics/how-china-differs" }, { label: "Censorship" }]} />
      <PageIntro
        eyebrow="How China Differs"
        title="Internet Censorship in China"
        description="China's Great Firewall is one of the most significant practical differences foreign visitors encounter. Understanding it before you arrive turns a potential frustration into a simple checklist item."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Practical Fix"
        title="Set up your VPN before departure"
        description="A good VPN, installed before you land, restores access to almost everything you're used to using."
        primaryCta={{ label: "VPN Guide", href: "/china-basics/what-apps-to-use/vpn" }}
      />
    </LayoutWrapper>
  );
}
