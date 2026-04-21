import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Buses in China",
  description:
    "Long-distance buses reach places trains don't. Within cities, buses are cheap but harder for non-Chinese readers.",
  path: "/china-basics/how-to-get-around/bus",
  keywords: ["China long distance bus", "intercity bus China", "China city bus tourist"],
});

const sections = [
  {
    title: "Long-distance buses: useful for off-the-beaten-path routes",
    body: "For destinations not served by high-speed rail — rural areas, smaller towns, scenic routes — long-distance coaches are often the only ground transport option. Services depart from dedicated long-distance bus stations (长途客运站), which are separate from train stations. Book at the station or through Trip.com.",
  },
  {
    title: "City buses: cheap but navigating is harder",
    body: "Urban buses are everywhere and cost almost nothing (typically 1–2 CNY). The challenge is that routes and stop names are usually only in Chinese. For casual tourism, the metro and DiDi are more practical. If you enjoy slow travel and figuring things out, city buses offer a very local experience.",
  },
  {
    title: "Payment on city buses",
    body: "Most city buses accept transit card payment, WeChat Pay, or Alipay — cash is increasingly rare. The transit card (交通卡) can be loaded at metro stations and works across buses and subways in most cities.",
  },
  {
    title: "Tourist shuttle buses",
    body: "Many popular scenic areas and tourist sites have dedicated shuttle buses that connect car parks, town centres, and major attractions. These are well-signposted for tourists and typically operate on a set schedule. Entrance fees to some sites include the shuttle bus.",
  },
];

export default function BusPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Around", href: "/china-basics/how-to-get-around" }, { label: "Bus" }]} />
      <PageIntro
        eyebrow="How to Get Around"
        title="Buses in China"
        description="Buses fill the gaps in China's transport network — reaching destinations that trains don't, and connecting cities at lower cost. Within cities, they work best once you know the routes."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Main City Transport"
        title="Subway is the better option for most city travel"
        description="China's urban metro systems are fast, affordable, and easy to navigate — even without reading Chinese."
        primaryCta={{ label: "Subway Guide", href: "/china-basics/how-to-get-around/subway" }}
      />
    </LayoutWrapper>
  );
}
