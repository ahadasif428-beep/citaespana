import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.citaespana.com";

  const routes = [
    "",
    "/about",
    "/appointment",
    "/prices",
    "/services",
    "/faq",
    "/contact",
    "/eligibility-checker",
    "/privacy-policy",
    "/terms",
    "/regularization",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}