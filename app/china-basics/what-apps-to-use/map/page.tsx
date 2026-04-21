import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Map Apps for China",
  description:
    "Google Maps has limited use in China. These are the map apps that actually work on the ground.",
  path: "/china-basics/what-apps-to-use/map",
  keywords: ["China map app", "Google Maps China alternative", "Baidu Maps", "Amap China"],
});

const sections = [
  {
    title: "Why Google Maps falls short in China",
    body: "Google Maps is accessible via VPN, but its map data for China is often inaccurate, misaligned, or missing transit routing. For walking directions, restaurant searches, and real-time transit, you need apps built on Chinese map data.",
  },
  {
    title: "Amap (高德地图) — the most reliable option",
    body: "Amap (Gaode) is the most accurate map for mainland China and is used by many DiDi drivers. It supports English-language search, walking, driving, and transit directions. Download it before arrival — it works without a VPN and performs well in most cities.",
  },
  {
    title: "Baidu Maps as an alternative",
    body: "Baidu Maps has similar accuracy but a Chinese-first interface that can be harder to navigate for non-readers. It's worth having as a secondary option if Amap fails in a specific area.",
  },
  {
    title: "Offline maps as a backup",
    body: "Download offline maps for your key cities before departure. When you arrive tired and your data connection is spotty, an offline map means you can still find your hotel from the airport without stress.",
  },
];

export default function MapAppsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "What Apps to Use", href: "/china-basics/what-apps-to-use" }, { label: "Map Apps" }]} />
      <PageIntro
        eyebrow="What Apps to Use"
        title="Map Apps for China"
        description="Navigation in China requires apps built on Chinese map data. The good news is that the best options are free, accurate, and have English-language support."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Also Useful"
        title="Ride-hailing works best when you know where you're going"
        description="Pair your map app with a good transport setup — DiDi is the easiest way to get around Chinese cities."
        primaryCta={{ label: "How to Get Around", href: "/china-basics/how-to-get-around" }}
      />
    </LayoutWrapper>
  );
}
