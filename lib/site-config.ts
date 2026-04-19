export type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
  badge?: string;
};

export const siteConfig = {
  name: "Trail of China",
  domain: "trailofchina.com",
  url: "https://trailofchina.com",
  description:
    "Practical China travel guides, destination primers, and first-trip itineraries for international travelers.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "China Basics", href: "/china-basics" },
    { label: "Destinations", href: "/destinations" },
    { label: "Plan Your Trip", href: "/plan-your-trip" },
    { label: "Interactive Map", href: "/interactive-map", disabled: true, badge: "Coming Soon" },
  ] as NavItem[],
  footerLinks: [
    { label: "China Basics", href: "/china-basics" },
    { label: "Destinations", href: "/destinations" },
    { label: "Plan Your Trip", href: "/plan-your-trip" },
  ],
};
