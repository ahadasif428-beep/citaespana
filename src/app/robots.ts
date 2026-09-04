import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/login",
          "/api/",
        ],
      },
    ],

    sitemap: "https://www.citaespana.com/sitemap.xml",

    host: "https://www.citaespana.com",
  };
}