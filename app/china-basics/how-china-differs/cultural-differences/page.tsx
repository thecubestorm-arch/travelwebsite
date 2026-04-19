import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cultural Differences in China",
  description:
    "From dining customs to public behaviour — understanding the basics makes travel in China smoother and more respectful.",
  path: "/china-basics/how-china-differs/cultural-differences",
  keywords: ["China cultural norms tourists", "etiquette China travel", "Chinese customs guide"],
});

const sections = [
  {
    title: "Dining culture and table customs",
    body: "Chinese meals are typically shared — dishes are placed in the centre of the table and everyone takes from them. It's polite to pour tea or drinks for others before yourself. Loud eating is not impolite. Tipping is not customary and can sometimes cause confusion. Always accept food or drink offered to you as a guest, even if you just take a small amount.",
  },
  {
    title: "Noise, crowds, and personal space",
    body: "China's cities are densely populated and social behaviour reflects this. Queues can be informal, volume in public spaces is often higher than Western visitors expect, and personal space norms differ. Spitting in public, once common, is now less socially acceptable in major cities. Adapt your expectations and you'll find the energy invigorating rather than overwhelming.",
  },
  {
    title: "Face and social harmony",
    body: "The concept of 'face' (面子, miànzi) is important in Chinese social culture. Avoid publicly embarrassing or criticising someone, especially in a work or hospitality context. Disputes are better handled quietly and indirectly. This also means a 'yes' or a nod does not always mean agreement — it can indicate acknowledgement or a desire to avoid conflict.",
  },
  {
    title: "Photography and sensitive locations",
    body: "Photography is welcomed in most tourist areas and locals are often happy to pose for photos. However, avoid photographing military installations, government buildings, police, or protests. At major sites like the Forbidden City, always check posted rules. In rural areas, ask permission before photographing individuals.",
  },
];

export default function CulturalDifferencesPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="How China Differs"
        title="Cultural Differences in China"
        description="China has a rich, distinct culture that rewards curiosity and basic awareness. Most customs are intuitive once you experience them — these are just the things worth knowing before you arrive."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Explore Further"
        title="Ready to choose where to experience Chinese culture first-hand?"
        description="Shanghai, Beijing, and Chongqing each offer a different window into China — history, modernity, and local life."
        primaryCta={{ label: "Explore Destinations", href: "/destinations" }}
      />
    </LayoutWrapper>
  );
}
