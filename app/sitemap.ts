import type { MetadataRoute } from "next";
import { memorial } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nancydavisexecutivetraining.com";

  // The marketing site is a single page; nav entries are in-page anchors, so
  // only two real routes exist.
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}${memorial.href}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
