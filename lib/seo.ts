import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical =
    normalizedPath === "/" ? siteConfig.url : `${siteConfig.url}${normalizedPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
