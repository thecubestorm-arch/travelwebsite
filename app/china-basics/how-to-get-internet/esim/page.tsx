import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "eSIM for China",
  description:
    "Buy a China eSIM before departure — activate on arrival, no SIM swap, instant data from the airport.",
  path: "/china-basics/how-to-get-internet/esim",
  keywords: ["China eSIM", "eSIM China travel", "best eSIM China", "China data eSIM"],
});

const sections = [
  {
    title: "Why an eSIM is the easiest option",
    body: "An eSIM is a digital SIM card loaded onto your phone before departure. You buy it online, receive a QR code, and activate it at the airport or on arrival. No SIM card to lose, no queues at a phone shop, and no worry about being without data while you figure out logistics.",
  },
  {
    title: "How to set up a China eSIM",
    body: "Purchase from a reputable eSIM provider (Airalo, Nomad, and Holafly are commonly used for China). Scan the QR code in your phone's eSIM settings before departure. On arrival, switch your data to the new eSIM profile. Most China eSIMs provide 5–15 days of data with options to extend.",
  },
  {
    title: "Important: eSIM does not bypass the firewall",
    body: "A China eSIM gives you mobile data in China — it does not give you access to blocked services. You still need a VPN installed on your device before arrival to access Google, WhatsApp, and other blocked platforms. The eSIM and VPN work together.",
  },
  {
    title: "Check your phone supports eSIM first",
    body: "Most iPhones from XS onwards and many modern Android flagships support eSIM. Check your phone's specs and confirm your carrier has not carrier-locked eSIM functionality. If your phone does not support eSIM, a physical SIM is your alternative.",
  },
];

export default function EsimPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Internet", href: "/china-basics/how-to-get-internet" }, { label: "eSIM" }]} />
      <PageIntro
        eyebrow="How to Get Internet"
        title="eSIM for China"
        description="An eSIM is the simplest way to arrive in China with data already active. Buy it before your flight, activate it at the airport, and your phone works from the moment you land."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Also Important"
        title="Install your VPN before departure too"
        description="Your eSIM gives you data — but a VPN is what gives you access to Google, WhatsApp, and other blocked services."
        primaryCta={{ label: "VPN Guide", href: "/china-basics/what-apps-to-use/vpn" }}
      />
    </LayoutWrapper>
  );
}
