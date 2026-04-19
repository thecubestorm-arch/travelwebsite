import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/china-basics",
  "/china-basics/what-apps-to-use",
  "/china-basics/what-apps-to-use/payment",
  "/china-basics/what-apps-to-use/map",
  "/china-basics/what-apps-to-use/travel",
  "/china-basics/what-apps-to-use/communication",
  "/china-basics/what-apps-to-use/vpn",
  "/china-basics/how-to-get-internet",
  "/china-basics/how-to-get-internet/esim",
  "/china-basics/how-to-get-internet/physical-sim",
  "/china-basics/how-china-differs",
  "/china-basics/how-china-differs/censorship",
  "/china-basics/how-china-differs/cultural-differences",
  "/china-basics/how-china-differs/security-standards",
  "/china-basics/how-china-differs/passport-rules",
  "/china-basics/how-to-get-around",
  "/china-basics/how-to-get-around/train",
  "/china-basics/how-to-get-around/plane",
  "/china-basics/how-to-get-around/ferry",
  "/china-basics/how-to-get-around/rental",
  "/china-basics/how-to-get-around/bus",
  "/china-basics/how-to-get-around/subway",
  "/china-basics/how-to-get-around/car",
  "/destinations",
  "/destinations/shanghai",
  "/destinations/shanghai/where-and-what-to-eat",
  "/destinations/shanghai/where-to-stay",
  "/destinations/shanghai/what-to-see",
  "/destinations/shanghai/local-tips-and-tricks",
  "/destinations/beijing",
  "/destinations/beijing/where-and-what-to-eat",
  "/destinations/beijing/where-to-stay",
  "/destinations/beijing/what-to-see",
  "/destinations/beijing/local-tips-and-tricks",
  "/destinations/chongqing",
  "/plan-your-trip",
  "/plan-your-trip/preplanned-trips",
  "/plan-your-trip/preplanned-trips/2-weeks-in-china",
  "/plan-your-trip/travel-planner",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
