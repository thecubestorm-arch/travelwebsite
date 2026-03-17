import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/plan-your-trip",
  "/plan-your-trip/apps-for-china",
  "/plan-your-trip/payments-in-china",
  "/plan-your-trip/vpn-for-china",
  "/destinations",
  "/destinations/shanghai",
  "/destinations/chongqing",
  "/itineraries",
  "/itineraries/2-weeks-in-china",
  "/travel-help",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
