import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { campaigns } from "@/data/campaigns";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseRoutes = [
    "",
    "/about",
    "/locations",
    "/faq",
    "/contact",
    "/terms",
    "/privacy-policy",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const campaignRoutes = campaigns.map((c) => ({
    url: `${site.url}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...campaignRoutes];
}
