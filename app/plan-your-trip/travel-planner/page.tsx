import { TravelPlannerForm } from "@/components/travel-planner-form";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PageIntro } from "@/components/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Travel Planner",
  description:
    "Choose your cities, group size, and travel style — get a personalised China route suggestion.",
  path: "/plan-your-trip/travel-planner",
  keywords: ["China travel planner", "custom China itinerary", "plan China trip online"],
});

export default function TravelPlannerPage() {
  return (
    <LayoutWrapper className="space-y-12 py-12 sm:space-y-16 sm:py-16">
      <PageIntro
        eyebrow="Plan Your Trip"
        title="Build your personalised China route"
        description="Tell us which cities you want to visit, how many people are travelling, and what kind of experience you're after — and we'll suggest a route to get you started."
      />
      <TravelPlannerForm />
    </LayoutWrapper>
  );
}
