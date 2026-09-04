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
<<<<<<< HEAD
          "/api/",
=======
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
        ],
      },
    ],

    sitemap: "https://www.citaespana.com/sitemap.xml",

    host: "https://www.citaespana.com",
  };
}