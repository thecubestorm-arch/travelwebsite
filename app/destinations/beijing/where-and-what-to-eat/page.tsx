import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Where and What to Eat in Beijing",
  description:
    "Peking duck, jianbing, and hutong street food — Beijing's food culture is deep and unmissable.",
  path: "/destinations/beijing/where-and-what-to-eat",
  keywords: ["Beijing food guide", "Peking duck Beijing", "what to eat Beijing", "Beijing street food"],
});

const sections = [
  {
    title: "The essential: Peking duck (北京烤鸭)",
    body: "Peking duck is Beijing's most famous dish — whole duck roasted in a closed oven until the skin is lacquered and crisp. It is served with thin pancakes, spring onion, cucumber, and hoisin sauce. Quanjude and Dadong are the famous chains; Da Dong is generally preferred for quality. Book ahead for dinner, or go for lunch to avoid the longest queues.",
  },
  {
    title: "Street food and markets",
    body: "Wangfujing Snack Street is the famous (and tourist-oriented) street food strip near Tiananmen — worth a walk for the spectacle. For more authentic street food, explore the hutongs in the Drum Tower and Gulou areas. Look for jianbing (savoury crepes), baozi (steamed buns), zhajiangmian (noodles with fermented bean paste), and lu zhu huo shao (offal and sesame bread).",
  },
  {
    title: "Neighbourhoods for dining",
    body: "Sanlitun is Beijing's most international dining district — dozens of cuisines, reliable English menus, and a buzzy atmosphere. Gulou (Drum Tower area) has the best local restaurant scene with more character and authenticity. Houhai lakeside has a scenic setting for a meal or drink in the evening, though quality can be inconsistent.",
  },
  {
    title: "Ordering and navigating menus",
    body: "Beijing's restaurants are well-suited to visitors using Google Translate's camera function for menus. Many restaurants near major tourist sites have picture menus or English menus available. The most efficient approach: search 'restaurants near me' in Amap, filter by rating, and look for places with photo reviews — these tell you exactly what each dish looks like.",
  },
];

export default function BeijingEatPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Beijing", href: "/destinations/beijing" }, { label: "Where & What to Eat" }]} />
      <PageIntro
        eyebrow="Beijing"
        title="Where and What to Eat in Beijing"
        description="Beijing's food culture is one of China's richest. From Peking duck at a famous roastery to jianbing from a street cart — eating in Beijing is one of the trip's highlights."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Explore Beijing"
        title="Choose your base for the best food access"
        description="Where you stay in Beijing determines how easily you can reach the best eating areas each day."
        primaryCta={{ label: "Where to Stay in Beijing", href: "/destinations/beijing/where-to-stay" }}
      />
    </LayoutWrapper>
  );
}
