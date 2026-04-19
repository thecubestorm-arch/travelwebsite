export type Thumbnail = {
  gradient?: string;
  icon?: string;
  image?: string;       // Unsplash or other URL
  imageAlt?: string;
};

export type PreviewCard = {
  title: string;
  description: string;
  href: string;
  tag: string;
  thumbnail?: Thumbnail;
  comingSoon?: boolean;
};

// Homepage

export const top5DestinationsCards: PreviewCard[] = [
  {
    title: "Shanghai",
    description:
      "China's most international city - easy arrivals, world-class food, and a skyline that announces what's coming.",
    href: "/destinations/shanghai",
    tag: "Top Destination",
  },
  {
    title: "Beijing",
    description:
      "The capital, the Great Wall, the hutongs. A must for first-timers who want to feel the full weight of Chinese history.",
    href: "/destinations/beijing",
    tag: "Top Destination",
  },
  {
    title: "Chongqing",
    description:
      "A bold, hilly river city known for fiery hotpot, dramatic skyline views, and unique urban terrain.",
    href: "/destinations/chongqing",
    tag: "Top Destination",
  },
  {
    title: "Xi'an",
    description:
      "Home to the Terracotta Army and ancient city walls - the best base for China's ancient history.",
    href: "/destinations",
    tag: "Top Destination",
    comingSoon: true,
  },
  {
    title: "Chengdu",
    description:
      "Pandas, teahouses, and the best Sichuan food in the world. A relaxed city with enormous appeal.",
    href: "/destinations",
    tag: "Top Destination",
    comingSoon: true,
  },
];

export const homepageBeforeYouGoCards: PreviewCard[] = [
  {
    title: "China Basics",
    description:
      "Everything you need to know before landing: apps, internet, how payments work, and how to get around.",
    href: "/china-basics",
    tag: "Before You Go",
  },
  {
    title: "What Apps to Use",
    description:
      "Set up maps, messaging, translation, and ride-hailing before your flight so your phone is ready from day one.",
    href: "/china-basics/what-apps-to-use",
    tag: "Before You Go",
  },
];

// China Basics

export const chinaBasicsCards: PreviewCard[] = [
  {
    title: "What Apps to Use",
    description:
      "The essential apps for payment, maps, travel bookings, communication, and staying connected.",
    href: "/china-basics/what-apps-to-use",
    tag: "China Basics",
    thumbnail: {
      gradient: "from-amber-300 via-orange-300 to-orange-400",
      icon: "📱",
    },
  },
  {
    title: "How to Get Internet",
    description:
      "Your options for mobile data in China - eSIM vs physical SIM, what to buy, and when to buy it.",
    href: "/china-basics/how-to-get-internet",
    tag: "China Basics",
    thumbnail: {
      gradient: "from-sky-300 via-cyan-300 to-teal-400",
      icon: "🌐",
    },
  },
  {
    title: "How China Differs",
    description:
      "Censorship, cultural norms, security standards, and passport rules that every visitor should understand.",
    href: "/china-basics/how-china-differs",
    tag: "China Basics",
    thumbnail: {
      gradient: "from-rose-300 via-red-300 to-red-400",
      icon: "🏮",
    },
  },
  {
    title: "How to Get Around",
    description:
      "Trains, planes, subways, buses, and taxis - how transport works in China and what to use when.",
    href: "/china-basics/how-to-get-around",
    tag: "China Basics",
    thumbnail: {
      gradient: "from-emerald-300 via-green-300 to-teal-400",
      icon: "🚄",
    },
  },
];

export const whatAppsCards: PreviewCard[] = [
  {
    title: "Payment Apps",
    description:
      "Alipay and WeChat Pay dominate. Here's how to set them up as a foreigner before you land.",
    href: "/china-basics/what-apps-to-use/payment",
    tag: "Apps",
  },
  {
    title: "Map Apps",
    description:
      "Google Maps has limited use in China. These are the alternatives that actually work on the ground.",
    href: "/china-basics/what-apps-to-use/map",
    tag: "Apps",
  },
  {
    title: "Travel Apps",
    description:
      "Book trains, flights, and hotels with apps built for China's domestic travel infrastructure.",
    href: "/china-basics/what-apps-to-use/travel",
    tag: "Apps",
  },
  {
    title: "Communication Apps",
    description:
      "WeChat is how China communicates. Set it up before arrival - many services require it.",
    href: "/china-basics/what-apps-to-use/communication",
    tag: "Apps",
  },
  {
    title: "VPN",
    description:
      "Access blocked services like Google, Instagram, and WhatsApp with a VPN set up before entry.",
    href: "/china-basics/what-apps-to-use/vpn",
    tag: "Apps",
  },
];

export const howToGetInternetCards: PreviewCard[] = [
  {
    title: "eSIM",
    description:
      "The easiest option for most travelers - buy before departure, activate on arrival, no SIM swap needed.",
    href: "/china-basics/how-to-get-internet/esim",
    tag: "Internet",
  },
  {
    title: "Physical SIM",
    description:
      "Available at Chinese airports and phone shops. Good for longer stays or when eSIM isn't supported.",
    href: "/china-basics/how-to-get-internet/physical-sim",
    tag: "Internet",
  },
];

export const howChinaDiffersCards: PreviewCard[] = [
  {
    title: "Censorship",
    description:
      "The Great Firewall blocks Google, social media, and many Western apps. Know what to expect and how to prepare.",
    href: "/china-basics/how-china-differs/censorship",
    tag: "China Differs",
  },
  {
    title: "Cultural Differences",
    description:
      "From dining customs to public behaviour, understanding the basics makes travel far smoother.",
    href: "/china-basics/how-china-differs/cultural-differences",
    tag: "China Differs",
  },
  {
    title: "Security Standards",
    description:
      "China has strict border controls and data privacy expectations. Know the rules before you arrive.",
    href: "/china-basics/how-china-differs/security-standards",
    tag: "China Differs",
  },
  {
    title: "Passport Rules",
    description:
      "Visa requirements, registration rules, and what to do with your passport while traveling in China.",
    href: "/china-basics/how-china-differs/passport-rules",
    tag: "China Differs",
  },
];

export const howToGetAroundCards: PreviewCard[] = [
  {
    title: "Train",
    description:
      "China's high-speed rail network is the backbone of intercity travel - fast, affordable, and reliable.",
    href: "/china-basics/how-to-get-around/train",
    tag: "Getting Around",
  },
  {
    title: "Plane",
    description:
      "Domestic flights cover long distances quickly. Budget airlines are common but require Chinese apps to book.",
    href: "/china-basics/how-to-get-around/plane",
    tag: "Getting Around",
  },
  {
    title: "Ferry",
    description:
      "River ferries and coastal routes offer a scenic alternative between select cities and regions.",
    href: "/china-basics/how-to-get-around/ferry",
    tag: "Getting Around",
  },
  {
    title: "Rental",
    description:
      "Car rentals exist but require a Chinese driving licence. Scooter and bike rentals are more practical.",
    href: "/china-basics/how-to-get-around/rental",
    tag: "Getting Around",
  },
  {
    title: "Bus",
    description:
      "Long-distance buses reach places trains don't. Within cities, buses are cheap but harder to navigate.",
    href: "/china-basics/how-to-get-around/bus",
    tag: "Getting Around",
  },
  {
    title: "Subway",
    description:
      "Major cities have excellent metro systems. Payment via transit card or mobile pay - no cash needed.",
    href: "/china-basics/how-to-get-around/subway",
    tag: "Getting Around",
  },
  {
    title: "Car (Taxi & Ride-hail)",
    description:
      "DiDi is China's Uber. Use it for city travel and short trips - much easier than flagging taxis.",
    href: "/china-basics/how-to-get-around/car",
    tag: "Getting Around",
  },
];

// Destinations

export const destinationCards: PreviewCard[] = [
  {
    title: "Shanghai",
    description:
      "China's easiest big-city arrival point for food, neighborhoods, and transport.",
    href: "/destinations/shanghai",
    tag: "City Guide",
  },
  {
    title: "Beijing",
    description:
      "The capital and cultural heart of China - history, architecture, and cuisine at every turn.",
    href: "/destinations/beijing",
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

export const shanghaiSubpageCards: PreviewCard[] = [
  {
    title: "Where and What to Eat",
    description:
      "From soup dumplings to rooftop dining - Shanghai's food scene is one of the best in Asia.",
    href: "/destinations/shanghai/where-and-what-to-eat",
    tag: "Shanghai",
  },
  {
    title: "Where to Stay",
    description:
      "Neighbourhood breakdowns so you can pick a base that matches your pace and budget.",
    href: "/destinations/shanghai/where-to-stay",
    tag: "Shanghai",
  },
  {
    title: "What to See",
    description:
      "The Bund, French Concession, Yu Garden, and beyond - a practical first-timer's guide.",
    href: "/destinations/shanghai/what-to-see",
    tag: "Shanghai",
  },
  {
    title: "Local Tips and Tricks",
    description:
      "Transit hacks, apps that work well in Shanghai, and the small things that make a big difference.",
    href: "/destinations/shanghai/local-tips-and-tricks",
    tag: "Shanghai",
  },
];

export const beijingSubpageCards: PreviewCard[] = [
  {
    title: "Where and What to Eat",
    description:
      "Peking duck, jianbing, and hutong street food - Beijing's food culture is deep and unmissable.",
    href: "/destinations/beijing/where-and-what-to-eat",
    tag: "Beijing",
  },
  {
    title: "Where to Stay",
    description:
      "Stay near the hutongs for character, or near the subway for convenience - here's how to choose.",
    href: "/destinations/beijing/where-to-stay",
    tag: "Beijing",
  },
  {
    title: "What to See",
    description:
      "The Great Wall, Forbidden City, Temple of Heaven - how to approach Beijing's iconic sites without the overwhelm.",
    href: "/destinations/beijing/what-to-see",
    tag: "Beijing",
  },
  {
    title: "Local Tips and Tricks",
    description:
      "Getting around Beijing, beating the crowds, and the insider knowledge that improves every visit.",
    href: "/destinations/beijing/local-tips-and-tricks",
    tag: "Beijing",
  },
];

// Plan Your Trip

export const preplannedTripCards: PreviewCard[] = [
  {
    title: "2 Weeks in China",
    description:
      "A balanced first-trip route mixing major cities, efficient trains, and manageable pacing.",
    href: "/plan-your-trip/preplanned-trips/2-weeks-in-china",
    tag: "Starter Route",
  },
  {
    title: "10 Days: Shanghai to Beijing",
    description:
      "The classic corridor - two iconic cities connected by the world's fastest trains.",
    href: "/plan-your-trip/preplanned-trips",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "1 Week: Southwest China",
    description:
      "Chengdu, Chongqing, and natural landscapes for travelers who want something beyond the big cities.",
    href: "/plan-your-trip/preplanned-trips",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Long Weekend: Shanghai",
    description:
      "Make the most of 3-4 days in China's most international city.",
    href: "/plan-your-trip/preplanned-trips",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Historical China: Xi'an & Beijing",
    description:
      "Two weeks focused on ancient sites, including the Terracotta Army and the Great Wall.",
    href: "/plan-your-trip/preplanned-trips",
    tag: "Coming Soon",
    comingSoon: true,
  },
];

// Legacy arrays (kept for redirect pages)

export const featuredGuides: PreviewCard[] = [
  {
    title: "Apps for China",
    description:
      "Set up maps, messaging, translation, and ride-hailing before your flight.",
    href: "/china-basics/what-apps-to-use",
    tag: "Featured Guide",
  },
  {
    title: "Payments in China",
    description:
      "Understand Alipay, WeChat Pay, backup cards, and when cash still helps.",
    href: "/china-basics/what-apps-to-use/payment",
    tag: "Featured Guide",
  },
  {
    title: "VPN for China",
    description:
      "Plan ahead for blocked services, practical alternatives, and device setup.",
    href: "/china-basics/what-apps-to-use/vpn",
    tag: "Featured Guide",
  },
];

export const itineraryCards: PreviewCard[] = [
  {
    title: "2 Weeks in China",
    description:
      "A balanced first-trip route mixing major cities, efficient trains, and manageable pacing.",
    href: "/plan-your-trip/preplanned-trips/2-weeks-in-china",
    tag: "Starter Route",
  },
];
