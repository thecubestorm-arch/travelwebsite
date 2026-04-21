import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Passport and Visa Rules for China",
  description:
    "Visa requirements, hotel registration rules, and what to do with your passport while traveling in China.",
  path: "/china-basics/how-china-differs/passport-rules",
  keywords: ["China visa requirements", "China tourist visa", "China hotel passport registration", "China visa free"],
});

const sections = [
  {
    title: "Visa requirements by nationality",
    body: "China has introduced visa-free entry for citizens of many countries for stays of up to 15 or 30 days. Countries included in these agreements include most EU nations, the UK, Australia, New Zealand, and others. Requirements change, so always verify with the Chinese embassy or consulate for your nationality before booking flights. Having at least six months' validity on your passport is standard practice.",
  },
  {
    title: "Hotel registration is mandatory",
    body: "All accommodation in China is legally required to register foreign guests with the local police within 24 hours of check-in. Hotels automatically do this for you. If you stay with friends, in a private apartment, or in accommodation not licensed for foreign guests, you are technically required to register yourself at the local police station. Most travelers staying in hotels never encounter this as an issue.",
  },
  {
    title: "Keep your passport accessible",
    body: "You will need your physical passport frequently in China — for hotel check-in, SIM card purchase, train ticket collection, and sometimes restaurant check-ins in certain venues. Carry it or a certified copy at all times. A photo on your phone is useful but not always accepted as a legal substitute.",
  },
  {
    title: "Restricted regions require additional permits",
    body: "Visiting Tibet requires a Tibet Travel Permit in addition to a Chinese visa, which must be arranged through an officially licensed Tibetan tour operator. Parts of Xinjiang and areas near national borders may have their own access restrictions. Research the specific regions you plan to visit well in advance.",
  },
];

export default function PassportRulesPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How China Differs", href: "/china-basics/how-china-differs" }, { label: "Passport Rules" }]} />
      <PageIntro
        eyebrow="How China Differs"
        title="Passport and Visa Rules for China"
        description="Visa-free entry has made China more accessible than ever for many nationalities. Knowing the registration rules and documentation requirements keeps your trip smooth and legally sound."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="All Basics Covered"
        title="Ready to start planning your route?"
        description="With the essential knowledge in place, head to Plan Your Trip to build a realistic itinerary."
        primaryCta={{ label: "Plan Your Trip", href: "/plan-your-trip" }}
      />
    </LayoutWrapper>
  );
}
