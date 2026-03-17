import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apps for China",
  description:
    "Set up the essential China travel apps for maps, translation, messaging, ride-hailing, and bookings before you fly.",
  path: "/plan-your-trip/apps-for-china",
});

const appSections = [
  {
    title: "Core apps to install before departure",
    body: "Prioritize a translation app, a map app that works well in China, a messaging platform for travel contacts, and at least one ride-hailing or mobility option. If a train or airline booking app looks useful for your route, set it up while you still have full access to your usual services and email verification.",
  },
  {
    title: "Why setup matters before arrival",
    body: "Airport Wi-Fi, SMS delivery, app store access, and payment verification can all feel slower or less reliable when you are tired after a long-haul flight. Completing account creation, password resets, and identity checks before departure gives you more room for mistakes and far less pressure on day one.",
  },
  {
    title: "Useful categories for first-time travelers",
    body: "Most travelers need apps for translation, navigation, mobile payments, taxis, train tickets, accommodation booking, and offline document storage. You do not need to over-install, but you should avoid landing with no translation backup, no transit plan, and no payment-ready phone.",
  },
  {
    title: "Simple backup strategy",
    body: "Save hotel addresses in English and Chinese, take screenshots of booking confirmations, and keep one offline document with passport details, emergency contacts, and your first destination. If one app fails, your trip should still move forward with screenshots and a second option.",
  },
];

export default function AppsForChinaPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Plan Your Trip"
        title="Apps for China"
        description="Think of your phone as part map, part phrasebook, part wallet, and part transport pass. The better it is prepared before takeoff, the smoother your first days in China will feel."
      />
      <InfoColumns items={appSections} />
      <CTASection
        eyebrow="Related Guide"
        title="Payments are the next setup task to handle"
        description="Once your essential apps are ready, make sure your phone is also prepared for the payment habits you'll face on the ground."
        primaryCta={{
          label: "Read Payments Guide",
          href: "/plan-your-trip/payments-in-china",
        }}
      />
    </LayoutWrapper>
  );
}
