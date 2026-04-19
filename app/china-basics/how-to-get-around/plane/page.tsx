import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Domestic Flights in China",
  description:
    "Domestic flights cover long distances quickly. Budget airlines are common but often require Chinese apps to book.",
  path: "/china-basics/how-to-get-around/plane",
  keywords: ["China domestic flights", "fly within China", "Chinese budget airlines", "China airline booking"],
});

const sections = [
  {
    title: "When to fly instead of taking the train",
    body: "Domestic flights make sense for routes with no direct high-speed train connection, or for distances above 1,500 km where a flight saves significant time over even a fast train. Routes like Beijing to Chengdu, or Shanghai to Kunming, are often better served by air than by a 10+ hour train journey.",
  },
  {
    title: "Main domestic carriers",
    body: "Air China, China Eastern, and China Southern are the major carriers. Budget options include Shenzhen Airlines, Hainan Airlines, and Xiamen Air. Booking directly through Trip.com or the carrier's website in English is straightforward for foreigners. Prices are competitive, especially when booked a few weeks in advance.",
  },
  {
    title: "Airport logistics in China",
    body: "China's major airports are large and modern. Allow 2.5–3 hours for check-in and security on domestic flights. Most major city airports are connected to the city by metro or express rail — check this before your trip as taxis from big airports can be expensive and slow during rush hour.",
  },
  {
    title: "Delays are more common than trains",
    body: "Chinese domestic flights have a higher delay rate than the train network, partly due to military airspace usage. If a connecting journey is time-sensitive, the train is the more reliable option. Build flexibility into your schedule when flying domestically.",
  },
];

export default function PlanePage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="How to Get Around"
        title="Domestic Flights in China"
        description="Domestic aviation in China is extensive and affordable. For long-haul routes or destinations poorly served by rail, flying is a practical option — though trains often win on reliability and city-centre access."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Compare Options"
        title="Trains are usually the better choice for intercity travel"
        description="China's high-speed rail is faster city-to-city on most popular routes — and without airport hassle."
        primaryCta={{ label: "Train Guide", href: "/china-basics/how-to-get-around/train" }}
      />
    </LayoutWrapper>
  );
}
