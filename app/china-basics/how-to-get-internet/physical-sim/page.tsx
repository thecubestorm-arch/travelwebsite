import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Physical SIM Card for China",
  description:
    "Buy a Chinese SIM card at the airport or phone shop — good for longer stays or phones without eSIM support.",
  path: "/china-basics/how-to-get-internet/physical-sim",
  keywords: ["China SIM card tourist", "buy SIM China airport", "China Unicom SIM", "China Mobile SIM"],
});

const sections = [
  {
    title: "Where to buy a SIM card in China",
    body: "SIM cards are available at major international airports (Shanghai Pudong, Beijing Capital, Guangzhou Baiyun) from China Mobile, China Unicom, and China Telecom counters. You can also buy them at official carrier stores in city centres. Bring your passport — it's required for SIM registration.",
  },
  {
    title: "Which carrier to choose",
    body: "China Unicom and China Mobile both offer tourist-friendly SIM cards with data packages designed for short stays. China Unicom has historically been more popular with foreign visitors due to its slightly broader international network agreements. Compare the data packages available when you arrive — options change regularly.",
  },
  {
    title: "Typical data packages",
    body: "Tourist SIM packages usually offer 5–30 days of data ranging from 10GB to unlimited, priced between 100–200 CNY (about 14–28 USD). Voice calls are typically included or available as an add-on. For stays under two weeks, the data allowance on most tourist packages is more than sufficient.",
  },
  {
    title: "Swapping your SIM safely",
    body: "Before swapping, note down any important numbers stored on your home SIM, screenshot your current apps and settings, and ensure your phone is unlocked. Keep your home SIM in a safe place — you will want it back when you leave. Use the SIM card tray tool (or a paperclip) rather than anything sharp.",
  },
];

export default function PhysicalSimPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Internet", href: "/china-basics/how-to-get-internet" }, { label: "Physical SIM" }]} />
      <PageIntro
        eyebrow="How to Get Internet"
        title="Physical SIM Card for China"
        description="A Chinese SIM card is the traditional connectivity option — available at airports, requires your passport, and gives you a local number alongside your data plan."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Alternative Option"
        title="Prefer not to swap SIM cards?"
        description="An eSIM lets you keep your home SIM active while adding China data — no physical swap required."
        primaryCta={{ label: "eSIM Guide", href: "/china-basics/how-to-get-internet/esim" }}
      />
    </LayoutWrapper>
  );
}
