import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nancydavisexecutivetraining.com";

  // The marketing site is a single page; nav entries are in-page anchors.
  // /in-memoriam is disabled for now (see app/_in-memoriam) — not listed.
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
