import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema } from "@/lib/schema";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.citaespana.com"),

  title: {
    default: "CitaEspaña | Immigration Appointments in Spain",
    template: "%s | CitaEspaña",
  },

  description:
    "Book immigration appointments across Spain including NIE, TIE, Fingerprints, Asylum, Family Reunification, Residence Permits and more.",

  keywords: [
    "Cita España",
    "Immigration Spain",
    "NIE Appointment",
    "TIE Appointment",
    "Cita Previa Extranjería",
    "Residence Permit Spain",
    "Asylum Spain",
    "Fingerprint Appointment",
    "Foreign Office Spain",
    "Spanish Immigration",
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
    locale: "en_US",
    url: "https://www.citaespana.com",
    title: "CitaEspaña | Immigration Appointments",
    description:
      "Fast immigration appointments across Spain. NIE, TIE, Residence, Asylum, Fingerprints and more.",
    siteName: "CitaEspaña",
    images: [
      {
        url: "/og-image.jpg",
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
      "Immigration appointments across Spain.",
    images: ["/og-image.jpg"],
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
    <html lang="en">
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
      </body>
    </html>
  );
}