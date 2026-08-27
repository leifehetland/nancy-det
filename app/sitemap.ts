import type { MetadataRoute } from "next";
import { memorial, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://davisexecutivetraining.com";

  // The memorial lives in the footer rather than the top nav, so it is added
  // here explicitly instead of coming through nav[].
  const routes = [...nav.map((i) => i.href), memorial.href];

  return routes.map((href) => ({
    url: `${base}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === memorial.href ? 0.4 : 0.8,
  }));
}
