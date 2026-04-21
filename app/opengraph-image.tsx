import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";
export const runtime = "edge";
export const alt = "Trail of China — Travel China Without Confusion";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() {
  return buildOgImage("Travel China Without Confusion", "Practical guides and itineraries for first-time travelers");
}
