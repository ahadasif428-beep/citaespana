export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CitaEspaña",
  url: "https://www.citaespana.com",
  logo: "https://www.citaespana.com/logo.jpeg",
  email: "info@citaespana.com",
  telephone: "+34672399181",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CitaEspaña",
  url: "https://www.citaespana.com",
  inLanguage: "es-ES",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.citaespana.com/buscador?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
