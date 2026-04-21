import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Where to Stay in Beijing",
  description:
    "Stay near the hutongs for character, or near the subway for convenience — how to choose your Beijing base.",
  path: "/destinations/beijing/where-to-stay",
  keywords: ["Beijing hotel areas", "best area stay Beijing", "Beijing accommodation guide"],
});

const sections = [
  {
    title: "Dongcheng — most central, near major sights",
    body: "Dongcheng district covers the area around Tiananmen Square, the Forbidden City, and the Drum Tower. Staying here puts you within walking distance of the most visited sights and gives easy metro access to the rest of the city. Hotels range from budget to luxury. A good choice for first-time visitors who want to minimise transport.",
  },
  {
    title: "Gulou hutong area — most atmospheric",
    body: "The hutong alleyways around Gulou (Drum Tower) are the most characterful part of Beijing. Boutique hotels and guesthouses in converted courtyard homes (siheyuan) give a more intimate experience. This area is excellent for evening dining and exploring on foot, and is well-connected by subway.",
  },
  {
    title: "Chaoyang — international and modern",
    body: "Chaoyang district (including Sanlitun) is Beijing's most international area, with the best selection of international restaurants, shopping malls, and nightlife. Good for visitors who want a more cosmopolitan base or who have business meetings alongside their tourism. Further from the historic core but well-served by metro.",
  },
  {
    title: "Practical booking advice",
    body: "Book through Booking.com, Agoda, or Trip.com — all work in China. Confirm the hotel is licensed to host foreign guests (this is standard at all international brands and most registered hotels). The Airport Express train connects Beijing Capital Airport to the city centre in under 30 minutes — a far better option than a taxi during peak hours.",
  },
];

export default function BeijingStayPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Beijing", href: "/destinations/beijing" }, { label: "Where to Stay" }]} />
      <PageIntro
        eyebrow="Beijing"
        title="Where to Stay in Beijing"
        description="Beijing is a large, spread-out city. Your neighbourhood choice shapes the entire trip — here's how to pick the right base."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Explore the City"
        title="What to see from your chosen base"
        description="Beijing's historic sights are concentrated and walkable from the right area — here's how to approach them."
        primaryCta={{ label: "What to See in Beijing", href: "/destinations/beijing/what-to-see" }}
      />
    </LayoutWrapper>
  );
}
