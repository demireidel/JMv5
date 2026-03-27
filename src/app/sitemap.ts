import type { MetadataRoute } from "next";

const BASE_URL = "https://javiermilei.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2025-03-26" },
    { path: "/vision", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2025-03-26" },
    { path: "/logros", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2025-03-26" },
    { path: "/reformas", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2025-03-26" },
    { path: "/futuro", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2025-03-26" },
    { path: "/mundo", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2025-03-26" },
    { path: "/archivo", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2025-03-26" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
