export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "CitaEspaña",

  url: "https://www.citaespana.com",

  logo: "https://www.citaespana.com/logo.png",

  email: "info@citaespana.com",

  telephone: "+34672399181",

  sameAs: [
    "https://wa.me/34672399181"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "CitaEspaña",

  url: "https://www.citaespana.com",

  potentialAction: {
    "@type": "SearchAction",

    target:
      "https://www.citaespana.com/search?q={search_term_string}",

    "query-input": "required name=search_term_string"
  }
};