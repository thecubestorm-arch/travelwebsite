import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "VPN for China",
  description:
    "Plan for connectivity in China with a practical approach to blocked services, backups, and pre-trip setup.",
  path: "/plan-your-trip/vpn-for-china",
});

const vpnSections = [
  {
    title: "Plan before you land",
    body: "If your normal communication, work, or cloud tools matter during the trip, do not wait until arrival to think about them. Setup, testing, and backup planning are much easier before departure than from a hotel room after a long travel day.",
  },
  {
    title: "Think in terms of backups, not perfection",
    body: "Connectivity in China is rarely just one decision. You may need a working VPN, offline documents, backup messaging options, downloaded maps, and screenshots of reservations so your trip still works if one service is slow or unavailable.",
  },
  {
    title: "Prioritize essential use cases",
    body: "Decide what matters most: messaging family, accessing work tools, confirming bookings, using maps, or checking your email. That clarity helps you build a simpler and more resilient setup instead of overcomplicating every device before the trip.",
  },
  {
    title: "Keep expectations practical",
    body: "A good connectivity setup should support the trip, not dominate it. The goal is not perfect parity with home internet habits; it is enough stability to communicate, navigate, pay, and manage your route without unnecessary stress.",
  },
];

export default function VpnForChinaPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Plan Your Trip"
        title="VPN for China"
        description="For most first-time travelers, the real goal is not technical perfection. It is simply staying reachable, informed, and able to use the services that matter most on the road."
      />
      <InfoColumns items={vpnSections} />
      <CTASection
        eyebrow="Next Step"
        title="Now choose the cities that fit your first route"
        description="Once your setup is solid, compare destination options and shape an itinerary around places that match your energy and travel style."
        primaryCta={{ label: "Explore Destinations", href: "/destinations" }}
      />
    </LayoutWrapper>
  );
}
