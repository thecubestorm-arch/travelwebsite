import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ferries in China",
  description:
    "River ferries and coastal routes offer a scenic alternative between select cities and regions in China.",
  path: "/china-basics/how-to-get-around/ferry",
  keywords: ["Yangtze River cruise", "China ferry travel", "China river cruise"],
});

const sections = [
  {
    title: "The Yangtze River — China's most iconic ferry route",
    body: "A cruise along the Yangtze River, particularly through the Three Gorges, is one of China's great travel experiences. Boats run between Chongqing and Yichang (or Wuhan), passing through dramatic gorges and Three Gorges Dam. Journey times range from 3 to 5 days depending on the vessel and itinerary.",
  },
  {
    title: "Coastal and island ferries",
    body: "Ferry services connect mainland China to nearby islands and some coastal cities. Routes include connections to Hainan Island, Zhoushan Archipelago near Shanghai, and international routes to Japan and South Korea. These are slower than flying but often more scenic and a different experience.",
  },
  {
    title: "River ferries in cities",
    body: "Several Chinese cities have short river ferry crossings as part of their public transport. Chongqing and Wuhan both have popular river ferries across the Yangtze. These are cheap, quick, and give a great perspective on the city from the water.",
  },
  {
    title: "Booking and practical tips",
    body: "Long-distance river cruises are best booked through a travel agent or Trip.com. Confirm cabin class before booking — basic cabins are dormitory-style, while deluxe cabins have private facilities. Bring seasickness medication if you're sensitive to motion, particularly on open coastal routes.",
  },
];

export default function FerryPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Around", href: "/china-basics/how-to-get-around" }, { label: "Ferry" }]} />
      <PageIntro
        eyebrow="How to Get Around"
        title="Ferries in China"
        description="Water travel in China ranges from scenic three-day Yangtze cruises to quick river crossings within cities. Not the fastest option — but often one of the most memorable."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Starting Point"
        title="Chongqing is the gateway to Yangtze River travel"
        description="A bold river city and one of China's most distinctive destinations — ideal for those interested in the Yangtze."
        primaryCta={{ label: "Chongqing Guide", href: "/destinations/chongqing" }}
      />
    </LayoutWrapper>
  );
}
