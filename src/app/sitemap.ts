import type { MetadataRoute } from "next";
<<<<<<< HEAD
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.citaespana.com";
  const now = new Date();
  const staticRoutes = [
    "",
    "/cita-previa-extranjeria",
    "/cita-previa-espana",
    "/cita-urgente",
    "/disponibilidad-citas",
    "/cita-previa-policia",
    "/cita-previa-oficina-extranjeria",
    "/buscador",
    "/cita-previa-nie",
    "/cita-previa-tie",
    "/cita-huellas",
    "/cita-previa-asilo",
    "/cita-arraigo",
    "/cita-previa-residencia",
    "/cita-renovacion-tie",
    "/cita-reagrupacion-familiar",
    "/cita-autorizacion-regreso",
    "/cita-carta-invitacion",
    "/cita-certificado-ue",
    "/cita-permiso-trabajo",
    "/cita-estudios",
    "/cita-renovacion-residencia",
    "/services",
    "/prices",
    "/faq",
    "/guides",
    "/contact",
    "/about",
    "/eligibility-checker",
    "/regularization",
    "/provinces",
    "/privacy-policy",
    "/privacy",
    "/terms",
    "/cookies",
    "/legal",
  ];

  const serviceRoutes = Object.keys(services).map((slug) => `/services/${slug}`);
  const guideSlugs = [
    "arraigo-social", "arraigo-laboral", "arraigo-familiar", "renovar-nie", "renovar-tie",
    "nacionalidad-espanola", "asilo", "reagrupacion-familiar", "residencia-no-lucrativa",
    "permiso-de-trabajo", "visado-estudiante", "proteccion-internacional",
  ];

  const provinceRoutes = provinces.map((province) => `/cita-previa-extranjeria/${province.slug}`);
  const procedureRoutes = provinces.flatMap((province) =>
    seoProcedures.map((procedure) => `/cita-previa-extranjeria/${province.slug}/${procedure.slug}`),
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...guideSlugs.map((slug) => `/guides/${slug}`),
    ...provinceRoutes,
    ...procedureRoutes,
  ].map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "" ? "daily" : "weekly";
    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority: route === "" ? 1 : route.split("/").length >= 4 ? 0.7 : 0.85,
    };
  });
}
=======

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
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
