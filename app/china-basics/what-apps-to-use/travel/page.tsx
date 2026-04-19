import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel Booking Apps for China",
  description:
    "Book trains, flights, and hotels in China with apps built for its domestic travel infrastructure.",
  path: "/china-basics/what-apps-to-use/travel",
  keywords: ["China train booking app", "Trip.com", "12306 app", "book hotels China"],
});

const sections = [
  {
    title: "Trip.com — the easiest option for foreigners",
    body: "Trip.com (formerly Ctrip) supports English, accepts international credit cards, and covers trains, flights, hotels, and airport transfers. It is the most practical booking platform for first-time visitors who do not read Chinese.",
  },
  {
    title: "12306 — the official train booking app",
    body: "12306 is China's national train booking system. It now has an English option and accepts foreign passports for registration. Tickets are cheaper here than on third-party platforms, but the interface is less polished. Worth setting up if you plan to book multiple train journeys.",
  },
  {
    title: "Booking hotels in China",
    body: "International platforms like Booking.com and Agoda work in China (with a VPN if needed). For local guesthouses and smaller accommodation, Chinese platforms like Meituan offer more options. Always confirm your hotel has foreign guest registration — not all accommodation in China is legally permitted to host foreign visitors.",
  },
  {
    title: "Set up accounts before departure",
    body: "Register on Trip.com or 12306 before you leave home. Phone number verification and payment setup is easier with a reliable connection and your cards within reach. Last-minute booking is possible in China but harder without pre-registered accounts.",
  },
];

export default function TravelAppsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="What Apps to Use"
        title="Travel Booking Apps for China"
        description="China's domestic travel infrastructure is extensive — high-speed trains, budget airlines, and a huge range of accommodation. The key is knowing which platforms work for foreign visitors."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Plan Your Route"
        title="See preplanned trips built around China's transport network"
        description="Our itineraries are designed around realistic train times and manageable city-to-city connections."
        primaryCta={{ label: "Preplanned Trips", href: "/plan-your-trip/preplanned-trips" }}
      />
    </LayoutWrapper>
  );
}
