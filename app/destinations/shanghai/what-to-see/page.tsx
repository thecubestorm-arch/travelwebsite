import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What to See in Shanghai",
  description:
    "The Bund, French Concession, Yu Garden, and beyond — a practical first-timer's guide to Shanghai's sights.",
  path: "/destinations/shanghai/what-to-see",
  keywords: ["Shanghai tourist attractions", "what to do Shanghai", "The Bund Shanghai", "Shanghai sightseeing"],
});

const sections = [
  {
    title: "The Bund and Pudong skyline",
    body: "The Bund is Shanghai's most iconic view — a riverfront promenade lined with 1920s colonial architecture facing the futuristic Pudong skyline across the Huangpu River. Walk it in the morning for fewer crowds, return at night for the light show. The best elevated view of both sides is from the Pearl Tower or Shanghai Tower observation decks.",
  },
  {
    title: "The French Concession",
    body: "The former French colonial area is now Shanghai's most characterful neighbourhood — a mix of art deco architecture, independent cafes, boutiques, and restaurants. Walk Wukang Road for its famous tree canopy and heritage buildings. Tianzifang is a tourist-friendly maze of alleyways worth a wander, especially for shopping and snacks.",
  },
  {
    title: "Yu Garden and the Old Town",
    body: "Yu Garden (Yuyuan Garden) is a classical Ming Dynasty garden surrounded by a bazaar of souvenir shops and traditional food stalls. It gets crowded — visit early or on a weekday. The nearby City God Temple and Old Town lanes give a sense of pre-modern Shanghai that contrasts sharply with the rest of the city.",
  },
  {
    title: "Day trips and beyond",
    body: "Zhujiajiao Water Town is a well-preserved canal town about an hour from central Shanghai — a half-day trip worth making if you're in the city for three or more days. Suzhou and Hangzhou are both under two hours by high-speed train and offer classical gardens, temples, and a very different pace from Shanghai's intensity.",
  },
];

export default function ShanghaiSeePage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Shanghai"
        title="What to See in Shanghai"
        description="Shanghai rewards both structured sightseeing and aimless wandering. The key sights are unmissable — but the city's best moments are often found between them."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Go Deeper"
        title="Local tips make Shanghai's details click into place"
        description="Transit shortcuts, apps that work especially well in Shanghai, and small things that improve every visit."
        primaryCta={{ label: "Local Tips for Shanghai", href: "/destinations/shanghai/local-tips-and-tricks" }}
      />
    </LayoutWrapper>
  );
}
