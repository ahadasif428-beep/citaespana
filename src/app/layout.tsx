import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citaespana.com"),
  verification: {
    google: "GkYEU7xgWOj6Pa46XjiwoAcPcgm45oHN7n_MahUohwE",
  },
  title: {
    default: "CitaEspaña | Cita previa de extranjería en España",
    template: "%s | CitaEspaña",
  },
  description:
    "Información y asistencia para cita previa de extranjería en España: citas NIE, TIE, huellas y otros trámites por provincia.",
  keywords: [
    "Cita España",
    "Cita Espana",
    "Citaespana",
    "cita previa extranjería",
    "cita previa extranjeria",
    "cita NIE",
    "cita TIE",
    "cita huellas",
  ],
  authors: [{ name: "CitaEspaña", url: "https://www.citaespana.com" }],
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.citaespana.com",
    title: "CitaEspaña | Cita previa de extranjería en España",
    description:
      "Información y asistencia para citas NIE, TIE, huellas y otros trámites de extranjería en España.",
    siteName: "CitaEspaña",
    images: [
      {
        url: "/logo.jpeg",
        alt: "CitaEspaña",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitaEspaña | Cita previa de extranjería en España",
    description:
      "Información y asistencia para citas NIE, TIE, huellas y otros trámites de extranjería en España.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
