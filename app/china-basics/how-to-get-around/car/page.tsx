import { CTASection } from "@/components/cta-section";
import { InfoColumns } from "@/components/info-columns";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Taxis and Ride-hailing in China",
  description:
    "DiDi is China's dominant ride-hailing app. Use it for city travel and short trips — easier than flagging taxis.",
  path: "/china-basics/how-to-get-around/car",
  keywords: ["DiDi China", "ride hailing China", "taxi China tourist", "DiDi app setup"],
});

const sections = [
  {
    title: "DiDi: China's ride-hailing standard",
    body: "DiDi (滴滴出行) is China's dominant ride-hailing platform, similar to Uber. Download the app, register with your foreign phone number, and link a payment method before arrival. The app shows driver details, estimated fares, and real-time tracking. DiDi supports English and is used by locals and tourists alike.",
  },
  {
    title: "Why DiDi beats traditional taxis",
    body: "Traditional taxis exist but communication can be difficult if you don't speak Chinese. With DiDi, you enter your destination in the app (in English or by dropping a pin) and the driver already knows where to go. Fare disputes are rare, routes are tracked, and payment is cashless through the app.",
  },
  {
    title: "Setting up DiDi before arrival",
    body: "Download DiDi from the App Store or Google Play. Register with your phone number, verify your identity, and add a payment method (WeChat Pay, Alipay, or an international card in some regions). Test the app with a short journey early in your trip to confirm everything works before you need it urgently.",
  },
  {
    title: "Airport pickups and luggage",
    body: "DiDi is often the best option for airport arrivals — especially when you have luggage and are tired. Select the right vehicle size in the app (Express for standard, Plus for more space). At busy airports, follow the DiDi pickup signs or check the app for the designated pickup area — it's usually separate from the taxi rank.",
  },
];

export default function CarPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "China Basics", href: "/china-basics" }, { label: "How to Get Around", href: "/china-basics/how-to-get-around" }, { label: "Car & Ride-hail" }]} />
      <PageIntro
        eyebrow="How to Get Around"
        title="Taxis and Ride-hailing in China"
        description="DiDi makes getting around Chinese cities simple and cashless. Set it up before you arrive, and it will be one of the most-used apps on your phone."
      />
      <InfoColumns items={sections} />
      <CTASection
        eyebrow="Related Guide"
        title="Payment apps power DiDi and most of city life"
        description="Make sure Alipay or WeChat Pay is set up — DiDi and countless other services depend on them."
        primaryCta={{ label: "Payment Apps", href: "/china-basics/what-apps-to-use/payment" }}
      />
    </LayoutWrapper>
  );
}
