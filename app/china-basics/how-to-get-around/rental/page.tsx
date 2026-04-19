import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rentals in China",
  description:
    "Car rentals require a Chinese driving licence. Scooter, e-bike, and bicycle rentals are more practical for most visitors.",
  path: "/china-basics/how-to-get-around/rental",
  keywords: ["rent bicycle China", "e-bike rental China", "car rental China tourist", "scooter China"],
});

const sections = [
  {
    title: "Car rental is not practical for most tourists",
    body: "Renting a car in mainland China requires a Chinese driving licence — international driving permits are not accepted. Obtaining a temporary Chinese licence as a tourist is technically possible but complex. For city travel and most tourist itineraries, public transport and ride-hailing are simpler, cheaper, and faster.",
  },
  {
    title: "Bicycle rentals are excellent in many cities",
    body: "Bike-sharing through apps like Meituan Bike and Hello Bike is widely available in major cities. You unlock a bike with the app, ride it, and park at any designated area. Rates are very low (typically a few yuan per hour). This is one of the best ways to explore flat cities like Shanghai or Beijing's hutong districts.",
  },
  {
    title: "E-bikes and scooters",
    body: "In smaller cities and tourist areas, electric scooter and e-bike rentals are available. These are useful for exploring areas that are spread out or lack good public transport. Helmets are legally required for e-bikes but enforcement varies. Check local rules and road conditions before riding.",
  },
  {
    title: "Hiring a driver or private car",
    body: "For day trips outside cities — to the Great Wall, rural areas, or natural sites — hiring a private driver through your hotel or a platform like Trip.com is common and affordable. This avoids the driving licence issue entirely and often includes a driver who knows the area.",
  },
];

export default function RentalPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="How to Get Around"
        title="Rentals in China"
        description="Self-drive car rental isn't available to most foreign visitors, but bike-sharing, e-bikes, and private car hire fill the gap effectively for both city exploration and day trips."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="City Navigation"
        title="Subway and ride-hailing cover most of what you need"
        description="For day-to-day movement within Chinese cities, DiDi and the metro are the most reliable combination."
        primaryCta={{ label: "Subway Guide", href: "/china-basics/how-to-get-around/subway" }}
      />
    </LayoutWrapper>
  );
}
