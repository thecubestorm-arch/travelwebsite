import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";
export const runtime = "edge";
export const alt = "China Basics — Trail of China";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export default function Image() {
  return buildOgImage("China Basics", "Everything you need before you land");
}
