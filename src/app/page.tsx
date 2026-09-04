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
import type { Metadata } from "next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AppointmentSearch from "@/components/AppointmentSearch";
export const metadata: Metadata = {
  verification: {
  google: "GkYEU7xgWOj6Pa46XjiwoAcPcgm45oHN7n_MahUohwE",
},
  title: "Cita previa extranjería en España 2026 | NIE, TIE, huellas y asilo",
  description:
    "Cita previa de extranjería en España: NIE, TIE, toma de huellas, asilo, arraigo, residencia, reagrupación y otros trámites. Consulta tu provincia y solicita asistencia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cita previa extranjería en España | CitaEspaña",
    description: "Encuentra información sobre NIE, TIE, huellas y otros trámites de extranjería por provincia.",
    url: "https://www.citaespana.com",
    type: "website",
    locale: "es_ES",
  },
  keywords: [
    "cita previa extranjería", "cita previa extranjeria España", "cita extranjería España",
    "cita previa NIE", "cita NIE", "cita previa TIE", "cita TIE",
    "cita huellas extranjería", "cita toma de huellas", "cita asilo España",
    "cita protección internacional", "cita arraigo", "cita residencia España",
    "cita reagrupación familiar", "cita autorización de regreso", "cita carta de invitación",
    "cita Policía Nacional extranjería", "cita Oficina de Extranjería", "cita urgente extranjería",
    "citas extranjería por provincia"
  ],
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