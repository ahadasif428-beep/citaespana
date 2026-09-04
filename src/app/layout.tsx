import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.citaespana.com"),
verification: {
  google: "GkYEU7xgWOj6Pa46XjiwoAcPcgm45oHN7n_MahUohwE",
},
  title: {
    default: "CitaEspaña | Cita previa extranjería en España",
    template: "%s | CitaEspaña",
  },

  description:
    "Cita previa de extranjería en España: NIE, TIE, toma de huellas, asilo, arraigo, residencia, trabajo y reagrupación familiar por provincia.",

  keywords: [
    "Cita España",
    "cita previa extranjería",
    "cita previa extranjeria",
    "cita extranjería España",
    "cita previa España",
    "cita previa NIE",
    "cita previa TIE",
    "cita huellas extranjería",
    "cita asilo España",
    "cita arraigo",
    "cita reagrupación familiar",
    "cita residencia España",
    "cita previa policía extranjería",
  ],

  authors: [
    {
      name: "CitaEspaña",
      url: "https://www.citaespana.com",
    },
  ],

  creator: "CitaEspaña",

  publisher: "CitaEspaña",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.citaespana.com",
    title: "CitaEspaña | Cita previa extranjería España",
    description:
      "Cita previa de extranjería en España: NIE, TIE, huellas, residencia, asilo, arraigo y más.",
    siteName: "CitaEspaña",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CitaEspaña",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CitaEspaña",
    description:
      "Cita previa de extranjería en España: NIE, TIE, huellas, asilo y más.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Navbar />

        {children}

        <Footer />
<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xjpv38dg3z");
  `}
</Script>
        <GoogleAnalytics gaId="G-GPE5YL07K6" />
      </body>
    </html>
  );
}