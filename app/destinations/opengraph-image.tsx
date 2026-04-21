import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";
export const runtime = "edge";
export const alt = "Destinations — Trail of China";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() {
  return buildOgImage("Destinations", "City guides for Shanghai, Beijing, Chongqing, and more");
}
