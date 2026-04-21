import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What to See in Beijing",
  description:
    "The Great Wall, Forbidden City, Temple of Heaven — how to approach Beijing's iconic sites without the overwhelm.",
  path: "/destinations/beijing/what-to-see",
  keywords: ["Beijing tourist attractions", "Great Wall Beijing", "Forbidden City guide", "Beijing sightseeing"],
});

const sections = [
  {
    title: "The Forbidden City (Palace Museum)",
    body: "The largest imperial palace complex in the world is a must. Buy tickets online in advance (mandatory — walk-up tickets are no longer sold). Allow at least half a day. The palace is laid out on a straight north-south axis — follow it from Meridian Gate to Shenwu Gate for the core experience, then explore the side buildings. Arrive early; it gets very crowded by mid-morning.",
  },
  {
    title: "The Great Wall",
    body: "The Great Wall is an hour or more outside the city. The most visited section for tourists is Badaling — well-preserved but crowded. Mutianyu is a slightly further but significantly less crowded alternative with excellent views and a cable car. Jinshanling suits hikers. Book transport through your hotel or Trip.com for convenience. A half-day trip is possible; a full day is more comfortable.",
  },
  {
    title: "Temple of Heaven and summer palaces",
    body: "The Temple of Heaven is a masterpiece of Ming architecture and one of Beijing's most beautiful spaces — particularly in the early morning when locals practice tai chi in the surrounding park. The Summer Palace (Yiheyuan) is a stunning lakeside complex of imperial gardens and pavilions, about an hour from the city centre — worth the half-day trip.",
  },
  {
    title: "The hutongs and Tiananmen Square",
    body: "Walk or take a rickshaw through the hutong alleyways around the Drum Tower and Bell Tower for Beijing's most authentic residential atmosphere. Tiananmen Square is the largest public square in the world — worth seeing for its scale even if the political context is complex. The portrait of Mao at the north gate is an iconic image.",
  },
];

export default function BeijingSeePage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Beijing", href: "/destinations/beijing" }, { label: "What to See" }]} />
      <PageIntro
        eyebrow="Beijing"
        title="What to See in Beijing"
        description="Beijing's sights are among the most significant in the world. This guide focuses on making the most of them — without the overwhelm that comes from trying to tick off every attraction in three days."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Go Deeper"
        title="Local tips make Beijing's logistics much smoother"
        description="Transport between sights, ticket booking, and the small things that experienced visitors know."
        primaryCta={{ label: "Local Tips for Beijing", href: "/destinations/beijing/local-tips-and-tricks" }}
      />
    </LayoutWrapper>
  );
}
