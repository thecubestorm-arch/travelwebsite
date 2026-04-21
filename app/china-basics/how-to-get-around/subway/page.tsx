import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Subway in China",
  description:
    "China's urban metro systems are fast, affordable, and easy to navigate — even without reading Chinese.",
  path: "/china-basics/how-to-get-around/subway",
  keywords: ["China subway guide", "Shanghai metro", "Beijing subway", "China metro tourist"],
});

const sections = [
  {
    title: "Well-designed for visitors",
    body: "China's major city metros are among the best in the world. Station names are shown in both Chinese characters and pinyin (romanised) on platform signs, maps, and digital displays. English announcements play at each stop in most major cities. Navigation is genuinely straightforward even if you don't read Chinese.",
  },
  {
    title: "How to pay",
    body: "The easiest payment method is scanning a QR code from Alipay or WeChat Pay at the fare gate — no ticket needed. Alternatively, buy a reloadable transit card at any station or use single-journey tokens from ticket machines. Fares are very affordable — typically 3–8 CNY per journey depending on distance.",
  },
  {
    title: "Security checks are standard",
    body: "All metro stations in China have security screening with luggage X-ray and sometimes ID checks. Allow a few extra minutes when using the metro at peak times. The screening is routine and fast — usually under two minutes.",
  },
  {
    title: "Maps and planning",
    body: "Use Amap or the built-in metro map in your city's transit app for route planning. Most metro apps also show real-time train arrivals and line crowding. Google Maps can be used with a VPN for transit routing, but Amap's Chinese map data is more accurate for connections and walking directions.",
  },
];

export default function SubwayPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Around", href: "/china-basics/how-to-get-around" }, { label: "Subway" }]} />
      <PageIntro
        eyebrow="How to Get Around"
        title="Subway in China"
        description="China's metro systems are a first-time visitor's best friend. Fast, cheap, bilingual signage, and almost always the quickest way to move across a Chinese city."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="City Transport"
        title="DiDi covers the trips the metro can't"
        description="For door-to-door travel, late nights, or luggage-heavy journeys — DiDi is the ride-hailing app to have ready."
        primaryCta={{ label: "Car & Ride-hailing", href: "/china-basics/how-to-get-around/car" }}
      />
    </LayoutWrapper>
  );
}
