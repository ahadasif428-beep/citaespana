export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
<<<<<<< HEAD
  name: "CitaEspaña",
  url: "https://www.citaespana.com",
  logo: "https://www.citaespana.com/logo.jpeg",
  email: "info@citaespana.com",
  telephone: "+34672399181",
=======

  name: "CitaEspaña",

  url: "https://www.citaespana.com",

  logo: "https://www.citaespana.com/logo.png",

  email: "info@citaespana.com",

  telephone: "+34672399181",

  sameAs: [
    "https://wa.me/34672399181"
  ]
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
};

export const websiteSchema = {
  "@context": "https://schema.org",
<<<<<<< HEAD
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
=======

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
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
