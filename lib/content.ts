export type PreviewCard = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

export const homepageEntryCards: PreviewCard[] = [
  {
    title: "Plan Your Trip",
    description:
      "Sort out payments, essential apps, and internet access before you land.",
    href: "/plan-your-trip",
    tag: "Preparation",
  },
  {
    title: "Destinations",
    description:
      "Compare China's biggest cities and choose the right starting points for your route.",
    href: "/destinations",
    tag: "Places",
  },
  {
    title: "Itineraries",
    description:
      "Use route ideas that balance major highlights with realistic travel time.",
    href: "/itineraries",
    tag: "Routes",
  },
];

export const featuredGuides: PreviewCard[] = [
  {
    title: "Apps for China",
    description:
      "Set up maps, messaging, translation, and ride-hailing before your flight.",
    href: "/plan-your-trip/apps-for-china",
    tag: "Featured Guide",
  },
  {
    title: "Payments in China",
    description:
      "Understand Alipay, WeChat Pay, backup cards, and when cash still helps.",
    href: "/plan-your-trip/payments-in-china",
    tag: "Featured Guide",
  },
  {
    title: "VPN for China",
    description:
      "Plan ahead for blocked services, practical alternatives, and device setup.",
    href: "/plan-your-trip/vpn-for-china",
    tag: "Featured Guide",
  },
];

export const destinationCards: PreviewCard[] = [
  {
    title: "Shanghai",
    description:
      "China's easiest big-city arrival point for food, neighborhoods, and transport.",
    href: "/destinations/shanghai",
    tag: "City Guide",
  },
  {
    title: "Chongqing",
    description:
      "A bold, layered river city known for hotpot, skyline views, and dramatic terrain.",
    href: "/destinations/chongqing",
    tag: "City Guide",
  },
];

export const itineraryCards: PreviewCard[] = [
  {
    title: "2 Weeks in China",
    description:
      "A balanced first-trip route mixing major cities, efficient trains, and manageable pacing.",
    href: "/itineraries/2-weeks-in-china",
    tag: "Starter Route",
  },
];

export const travelHelpCards: PreviewCard[] = [
  {
    title: "Arrival and Setup",
    description:
      "Know what to prepare for your first hours in China, from airport transfer to SIM setup.",
    href: "/travel-help",
    tag: "Travel Help",
  },
  {
    title: "Transport Confidence",
    description:
      "Learn how to handle metro systems, ride-hailing, and high-speed rail without stress.",
    href: "/travel-help",
    tag: "Travel Help",
  },
  {
    title: "Practical Backup Plans",
    description:
      "Reduce risk when your card fails, your app breaks, or your connection is unreliable.",
    href: "/travel-help",
    tag: "Travel Help",
  },
];
