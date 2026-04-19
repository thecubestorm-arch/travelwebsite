import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Local Tips and Tricks for Beijing",
  description:
    "Getting around Beijing, beating the crowds, and the insider knowledge that improves every visit.",
  path: "/destinations/beijing/local-tips-and-tricks",
  keywords: ["Beijing travel tips", "Beijing locals guide", "Beijing insider tips"],
});

const sections = [
  {
    title: "Book everything in advance",
    body: "The Forbidden City, the Summer Palace, and popular Great Wall sections all require advance ticket booking. Walk-up access is no longer available at the Forbidden City at all. Use Trip.com or the official sites for booking. Check capacity restrictions — major holidays (Golden Week in October and Chinese New Year) bring enormous crowds and many sites hit capacity early.",
  },
  {
    title: "The metro is your best friend",
    body: "Beijing's metro covers the city well and is easy to navigate with English signage. Lines 1 and 2 form the central loop — most tourist attractions connect to these. The Airport Express (Line A) from Terminal 3 reaches Dongzhimen in 25 minutes. DiDi is the right choice for late nights, luggage-heavy trips, or destinations not on the metro.",
  },
  {
    title: "Air quality affects the experience",
    body: "Beijing can have periods of significant air pollution, particularly in winter. Check the Air Quality Index (AQI) app before your trip. On high-pollution days, outdoor sightseeing like the Great Wall or parks is less pleasant. The Forbidden City and indoor activities are fine regardless. Scheduling the Great Wall on a clear day makes a substantial difference to both the experience and the photos.",
  },
  {
    title: "Language and navigation",
    body: "Beijing is less English-friendly than Shanghai at street level, though major tourist sites have English signage. Save hotel and restaurant addresses in Chinese characters before you go out — showing a driver the Chinese text is more reliable than attempting to pronounce pinyin. Most Forbidden City audio guides are available in English through the Palace Museum's official app.",
  },
];

export default function BeijingTipsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Beijing"
        title="Local Tips and Tricks for Beijing"
        description="Beijing rewards preparation. These are the things first-time visitors wish they had known before arriving — from booking logistics to air quality to the best way to see the Great Wall."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Plan Your Route"
        title="Ready to build your full itinerary?"
        description="Use our preplanned trips or the travel planner to shape a route that includes Beijing alongside other key destinations."
        primaryCta={{ label: "Plan Your Trip", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
