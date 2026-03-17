export const siteConfig = {
  name: "Trail of China",
  domain: "trailofchina.com",
  url: "https://trailofchina.com",
  description:
    "Practical China travel guides, destination primers, and first-trip itineraries for international travelers.",
  navItems: [
    { label: "Plan Your Trip", href: "/plan-your-trip" },
    { label: "Destinations", href: "/destinations" },
    { label: "Itineraries", href: "/itineraries" },
    { label: "Travel Help", href: "/travel-help" },
  ],
  footerLinks: [
    { label: "Plan Your Trip", href: "/plan-your-trip" },
    { label: "Destinations", href: "/destinations" },
    { label: "Itineraries", href: "/itineraries" },
    { label: "Travel Help", href: "/travel-help" },
  ],
};

export type NavItem = (typeof siteConfig.navItems)[number];
