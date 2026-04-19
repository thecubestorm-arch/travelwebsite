import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Trains in China",
  description:
    "China's high-speed rail network is the backbone of intercity travel — fast, affordable, and remarkably reliable.",
  path: "/china-basics/how-to-get-around/train",
  keywords: ["China high speed train", "CRH China rail", "book train China", "China bullet train"],
});

const sections = [
  {
    title: "The world's largest high-speed rail network",
    body: "China operates the world's most extensive high-speed rail network. Trains regularly run at 250–350 km/h, making city pairs like Shanghai–Beijing (1,300 km) a 4.5-hour journey. Trains are punctual, clean, and significantly more pleasant than the equivalent flight once you factor in airport time.",
  },
  {
    title: "Classes of service",
    body: "High-speed trains (G and D trains) have Second Class (comfortable, assigned seats), First Class (wider seats, more space), and Business Class (fully reclining on some routes). For most first-time visitors, Second Class is perfectly comfortable and excellent value. Sleeper trains (K, Z, T prefix) are available for overnight journeys — a good option for saving on accommodation.",
  },
  {
    title: "Booking tickets",
    body: "Book through Trip.com (English, accepts foreign cards) or 12306.cn (China's official platform, now with an English option). Tickets go on sale 30 days in advance. Popular routes on public holidays sell out fast — book early. You will need your passport number when booking as a foreign visitor.",
  },
  {
    title: "Collecting tickets and boarding",
    body: "At the station, collect your ticket from a self-service machine or ticket window using your passport. Chinese train stations are large — allow 30 minutes before departure. Boarding closes 5 minutes before departure. Food and drink are available on board, and the journey quality is generally excellent.",
  },
];

export default function TrainPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="How to Get Around"
        title="Trains in China"
        description="China's high-speed trains are one of the great travel experiences in the world. Fast, affordable, and reliably on time — they should be the backbone of most first-trip itineraries."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Plan Your Route"
        title="See itineraries built around China's rail network"
        description="Our preplanned trips are designed around the best train connections between China's top destinations."
        primaryCta={{ label: "Preplanned Trips", href: "/plan-your-trip/preplanned-trips" }}
      />
    </LayoutWrapper>
  );
}
