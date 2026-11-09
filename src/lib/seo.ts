import type { Metadata } from "next";
import { provinces } from "@/data/provinces";
import { seoProcedureMap } from "@/data/seo";

export const SITE_URL = "https://www.citaespana.com";

export function cleanTitle(title: string) {
  return title.length <= 60 ? title : `${title.slice(0, 57)}...`;
}

export function provinceBySlug(slug: string) {
  return provinces.find((item) => item.slug === decodeURIComponent(slug).toLowerCase());
}

export function procedureBySlug(slug: string) {
  return seoProcedureMap[decodeURIComponent(slug).toLowerCase()];
}

export function provinceMetadata(province: { name: string; slug: string }): Metadata {
  const title = `Cita previa extranjería en ${province.name} 2026`;
  const description = `Cita previa extranjería en ${province.name}: NIE, TIE, toma de huellas, asilo, arraigo, residencia y otros trámites. Guía local, procedimientos y acceso a la información oficial.`;
  return {
    title: cleanTitle(title),
    description,
    keywords: [
      `cita previa extranjería ${province.name}`,
      `cita extranjería ${province.name}`,
      `cita previa ${province.name}`,
      `NIE ${province.name}`,
      `TIE ${province.name}`,
      `cita huellas ${province.name}`,
      `cita previa policía ${province.name}`,
      `cita previa extranjería ${province.name} 2026`,
      `cita NIE ${province.name}`,
      `cita TIE ${province.name}`,
    ],
    alternates: { canonical: `/cita-previa-extranjeria/${province.slug}` },
    openGraph: {
      title: cleanTitle(title),
      description,
      url: `${SITE_URL}/cita-previa-extranjeria/${province.slug}`,
      type: "website",
    },
  };
}

export function procedureMetadata(province: { name: string; slug: string }, procedure: ReturnType<typeof procedureBySlug>): Metadata {
  if (!procedure) return { title: "Cita previa extranjería" };
  const title = `${procedure.name} en ${province.name} 2026`;
  const description = `${procedure.name} en ${province.name}: cómo localizar la cita previa, qué organismo interviene, qué revisar antes de acudir y dónde consultar la información oficial.`;
  return {
    title: cleanTitle(title),
    description,
    keywords: [
      `${procedure.name} ${province.name}`,
      `${procedure.shortName} ${province.name}`,
      `cita previa ${procedure.shortName.toLowerCase()} ${province.name}`,
      `cita ${procedure.shortName.toLowerCase()} ${province.name}`,
      `cita ${procedure.shortName.toLowerCase()} ${province.name} 2026`,
      ...procedure.keywords,
    ],
    alternates: { canonical: `/cita-previa-extranjeria/${province.slug}/${procedure.slug}` },
    openGraph: {
      title: cleanTitle(title),
      description,
      url: `${SITE_URL}/cita-previa-extranjeria/${province.slug}/${procedure.slug}`,
      type: "website",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "CitaEspaña",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    serviceType: "Immigration appointment assistance",
  };
}
