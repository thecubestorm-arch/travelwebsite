import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Where and What to Eat in Shanghai",
  description:
    "From soup dumplings to rooftop dining — a practical guide to Shanghai's food scene for first-time visitors.",
  path: "/destinations/shanghai/where-and-what-to-eat",
  keywords: ["Shanghai food guide", "what to eat Shanghai", "xiaolongbao Shanghai", "Shanghai restaurants"],
});

const sections = [
  {
    title: "The essential: soup dumplings (xiaolongbao)",
    body: "Xiaolongbao (小笼包) are Shanghai's most iconic food. These delicate steamed dumplings filled with pork and hot broth are available everywhere — from street stalls to dedicated restaurants. Din Tai Fung and Nanxiang Mantou Dian are the famous names, but smaller local spots often match them for taste. Eat them carefully: bite a small hole first and let the broth cool slightly.",
  },
  {
    title: "Neighborhoods for food exploration",
    body: "The French Concession is the best area for restaurants ranging from casual to upscale, with both Chinese and international options. Xintiandi offers polished dining in a restored heritage complex. Jing'an has a strong local restaurant scene. Yuyuan Bazaar (near the Old Town) is tourist-heavy but worth a visit for traditional snacks like shengjianbao and tangyuan.",
  },
  {
    title: "Street food worth seeking out",
    body: "Shanghai's street food scene rewards wandering. Look for shengjianbao (pan-fried pork dumplings with crispy bottoms), scallion pancakes (congyoubing), stinky tofu for the adventurous, and sesame-coated jian bing for breakfast. Morning wet markets are great for seeing local food culture even if you're not cooking.",
  },
  {
    title: "How to order without reading Chinese",
    body: "Point-and-order works in most local restaurants — many have photos or you can point at what others are eating. Google Translate's camera function translates menus in real time. For a more comfortable experience, search for 'English menu' restaurants in your area via Google Maps or Amap. Most tourist-area restaurants have English menus or English-speaking staff.",
  },
];

export default function ShanghaiEatPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Shanghai"
        title="Where and What to Eat in Shanghai"
        description="Shanghai's food scene is one of the best reasons to visit. From the city's signature soup dumplings to neighbourhood restaurants covering every Chinese regional cuisine — eating well here is easy."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Next Up"
        title="Choosing where to stay shapes your dining access"
        description="The right neighbourhood puts great food within walking distance every day."
        primaryCta={{ label: "Where to Stay in Shanghai", href: "/destinations/shanghai/where-to-stay" }}
      />
    </LayoutWrapper>
  );
}
