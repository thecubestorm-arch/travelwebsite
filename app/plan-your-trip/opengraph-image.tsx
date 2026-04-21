import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";
export const runtime = "edge";
export const alt = "Plan Your Trip — Trail of China";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() {
  return buildOgImage("Plan Your Trip", "Itineraries and planning tools for first-time China travelers");
}
