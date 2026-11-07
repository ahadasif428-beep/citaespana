import type { MetadataRoute } from "next";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.citaespana.com";
  const now = new Date();
  const staticRoutes = [
    "",
    "/appointment",
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
    "arraigo-social",
    "arraigo-laboral",
    "arraigo-familiar",
    "renovar-nie",
    "renovar-tie",
    "nacionalidad-espanola",
    "asilo",
    "reagrupacion-familiar",
    "residencia-no-lucrativa",
    "permiso-de-trabajo",
    "visado-estudiante",
    "proteccion-internacional",
  ];
  const provinceRoutes = provinces.map(
    (province) => `/cita-previa-extranjeria/${province.slug}`,
  );
  const procedureRoutes = provinces.flatMap((province) =>
    seoProcedures.map(
      (procedure) =>
        `/cita-previa-extranjeria/${province.slug}/${procedure.slug}`,
    ),
  );
  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...guideSlugs.map((slug) => `/guides/${slug}`),
    ...provinceRoutes,
    ...procedureRoutes,
  ];

  return [...new Set(routes)].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.split("/").length >= 4 ? 0.7 : 0.85,
  }));
}
