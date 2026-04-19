import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Where to Stay in Shanghai",
  description:
    "Neighbourhood breakdowns so you can pick a Shanghai base that matches your pace, priorities, and budget.",
  path: "/destinations/shanghai/where-to-stay",
  keywords: ["Shanghai hotel areas", "best area to stay Shanghai", "Shanghai accommodation guide"],
});

const sections = [
  {
    title: "The French Concession — best all-around choice",
    body: "The French Concession (Frenchie) is the most popular area for first-time visitors and for good reason. Tree-lined streets, excellent restaurants, boutique hotels, and strong metro access make it both liveable and practical. It's not the cheapest area but offers the best balance of character and convenience.",
  },
  {
    title: "Jing'an — central and well-connected",
    body: "Jing'an is slightly more business-oriented but has excellent transport links and a growing food and nightlife scene around Jing'an Temple. Good midrange and international hotel options. Slightly less atmospheric than the French Concession but more central for reaching other parts of the city quickly.",
  },
  {
    title: "The Bund area — views but premium price",
    body: "Staying near The Bund gives you the iconic riverfront on your doorstep but comes at a premium. Suited to travelers who want the classic Shanghai skyline experience and are willing to pay for it. Many of Shanghai's best luxury hotels are here.",
  },
  {
    title: "Practical advice for booking",
    body: "Book accommodation that confirms it accepts foreign guests — legally, all hotels in China must register foreign visitors with authorities, but not all are set up for it. Stick to international hotel chains or reputable local hotels with English-language support for your first trip. Check metro proximity using Amap before booking.",
  },
];

export default function ShanghaiStayPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Shanghai"
        title="Where to Stay in Shanghai"
        description="Shanghai's neighbourhoods each offer a different experience. The French Concession suits most first-time visitors — but the right choice depends on your priorities."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Explore the City"
        title="What to see once you've got your base"
        description="Shanghai's key sights are spread across the city — here's how to approach them as a first-timer."
        primaryCta={{ label: "What to See in Shanghai", href: "/destinations/shanghai/what-to-see" }}
      />
    </LayoutWrapper>
  );
}
