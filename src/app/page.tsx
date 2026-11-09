
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Procedures from "@/components/Procedures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Compare from "@/components/Compare";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Guidelines from "@/components/Guidelines";
import PracticalGuides from "@/components/PracticalGuides";
import Provinces from "@/components/Provinces";
import EligibilityCTA from "@/components/EligibilityCTA";
import AppointmentAlert from "@/components/AppointmentAlert";
import LegalNotice from "@/components/LegalNotice";
import FAQSchema from "@/components/FAQSchema";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AppointmentSearch from "@/components/AppointmentSearch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "GkYEU7xgWOj6Pa46XjiwoAcPcgm45oHN7n_MahUohwE",
  },

  title: "Cita Previa Extranjería en España | NIE, TIE y Huellas",

  description:
    "Cita previa de extranjería en España. Información y asistencia para NIE, TIE, toma de huellas, asilo, arraigo, residencia, reagrupación familiar y otros trámites.",

  keywords: [
    "cita previa extranjería",
    "cita previa extranjeria",
    "cita previa extranjería España",
    "cita previa extranjeria España",
    "cita extranjería",
    "cita extranjería España",
    "cita previa NIE",
    "cita NIE",
    "cita previa TIE",
    "cita TIE",
    "cita huellas extranjería",
    "cita toma de huellas",
    "cita previa huellas",
    "cita asilo España",
    "cita protección internacional",
    "cita arraigo",
    "cita residencia España",
    "cita reagrupación familiar",
    "cita autorización de regreso",
    "cita carta de invitación",
    "cita Policía Nacional extranjería",
    "cita Oficina de Extranjería",
    "cita urgente extranjería",
    "citas extranjería por provincia",
  ],

  alternates: {
    canonical: "https://www.citaespana.com/",
  },

  openGraph: {
    title: "Cita Previa Extranjería en España | CitaEspaña",
    description:
      "Encuentra información y asistencia para tu cita previa de extranjería en España: NIE, TIE, huellas, asilo, residencia y otros trámites.",
    url: "https://www.citaespana.com/",
    siteName: "CitaEspaña",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cita Previa Extranjería en España | CitaEspaña",
    description:
      "Información y asistencia para citas de extranjería, NIE, TIE, huellas y otros trámites en España.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full">
        <FAQSchema />
        <FloatingWhatsApp />

        <Hero />

        <AppointmentSearch />

        <Stats />
        <HowItWorks />
        <Procedures />
        <Pricing />
        <Compare />
        <Testimonials />
        <Guarantee />
        <WhyChoose />
        <Guidelines />
        <PracticalGuides />
        <Provinces />
        <FAQ />
        <EligibilityCTA />
        <AppointmentAlert />
        <LegalNotice />
        <CTA />
      </div>
    </main>
  );
}
