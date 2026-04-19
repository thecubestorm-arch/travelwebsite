import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security Standards in China",
  description:
    "China has strict border controls and data privacy expectations that every visitor should understand before arrival.",
  path: "/china-basics/how-china-differs/security-standards",
  keywords: ["China border security tourists", "China surveillance travel", "entering China rules"],
});

const sections = [
  {
    title: "Border entry and device inspection",
    body: "At some border crossings and in certain regions, Chinese authorities may inspect electronic devices. This is uncommon for typical tourist entry at major airports, but it has been reported. Travelers visiting sensitive regions (Tibet, Xinjiang) may face more thorough checks. If you're concerned, consider traveling with a clean device or backing up and wiping data before entry.",
  },
  {
    title: "Surveillance and public cameras",
    body: "China has one of the most extensive public CCTV networks in the world. Facial recognition is deployed at many transport hubs, hotels, and public spaces. This is a fact of travel in China rather than a risk for ordinary tourists, but it's worth being aware of if you are privacy-sensitive.",
  },
  {
    title: "Data on your devices",
    body: "Some travelers choose to use a dedicated travel phone or a freshly reset device for China trips. This is particularly relevant if you carry sensitive professional data, legal materials, or communications that you'd prefer remain private. For most leisure travelers, standard device security (strong passcode, encrypted storage) is sufficient.",
  },
  {
    title: "Behaviour and political sensitivity",
    body: "China has laws against behaviour deemed threatening to national security, which are interpreted broadly. Avoid public displays that could be construed as politically provocative, particularly near government buildings or around public events. For typical tourist activities, these concerns are largely theoretical — millions of foreigners visit China every year without incident.",
  },
];

export default function SecurityStandardsPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="How China Differs"
        title="Security Standards in China"
        description="China's security environment is more visible than most countries its visitors come from. Being informed means you can make sensible decisions rather than being caught off guard."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Related Guide"
        title="Understand passport and visa requirements"
        description="Entry requirements, registration rules, and documentation you'll need for a smooth border crossing."
        primaryCta={{ label: "Passport Rules", href: "/china-basics/how-china-differs/passport-rules" }}
      />
    </LayoutWrapper>
  );
}
