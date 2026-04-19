import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Local Tips and Tricks for Shanghai",
  description:
    "Transit hacks, apps that work well in Shanghai, and the small things that make a big difference for first-time visitors.",
  path: "/destinations/shanghai/local-tips-and-tricks",
  keywords: ["Shanghai travel tips", "Shanghai locals guide", "Shanghai insider tips"],
});

const sections = [
  {
    title: "Metro is almost always the right choice",
    body: "Shanghai's metro is fast, cheap, and very easy to navigate with English signage everywhere. The Maglev from Pudong Airport reaches the city in 8 minutes — buy a ticket before leaving the arrivals hall. For short distances the metro beats DiDi on speed during rush hour. Download the Shanghai Metro app or use Amap for real-time routing.",
  },
  {
    title: "The best times to visit popular spots",
    body: "Yu Garden and The Bund are significantly more pleasant before 9am or after 8pm. The French Concession is at its best on weekday mornings when locals are going about their day. Pudong attractions like the observation decks are best on clear days (check air quality in advance) and on weekday afternoons to avoid school groups.",
  },
  {
    title: "Food ordering shortcuts",
    body: "Use Google Translate's camera mode to translate menus in real time — it works well for food. Meituan (美团) is the dominant food delivery app if you want to order to your room. At breakfast stalls, pointing and showing fingers for quantity is universally understood. Always carry small change (coins or 5–10 CNY notes) for street stalls that haven't adopted mobile payment.",
  },
  {
    title: "Getting the most from a short stay",
    body: "If you have three days, concentrate on the French Concession and Old City for two days, then use day three for Pudong skyline views and the Bund at night. Don't try to cover everything — Shanghai rewards slowing down and going deeper into one neighbourhood rather than ticking off a list of major sites. The city reveals itself through walking, not sightseeing.",
  },
];

export default function ShanghaiTipsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Shanghai"
        title="Local Tips and Tricks for Shanghai"
        description="The things that experienced Shanghai visitors know — and first-timers wish they had known before they arrived."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Compare Cities"
        title="Shanghai done well — what's next?"
        description="Beijing is a natural second city — its history, scale, and character contrast sharply with Shanghai's modernity."
        primaryCta={{ label: "Explore Beijing", href: "/destinations/beijing" }}
      />
    </LayoutWrapper>
  );
}
