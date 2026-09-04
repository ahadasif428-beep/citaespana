import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Preguntas frecuentes", description: "Respuestas sobre citas de extranjería y el servicio de CitaEspaña.", alternates: { canonical: "/faq" } };

export default function FAQPage() {
  return <main className="pt-0"><PageHero title="Preguntas frecuentes" text="Respuestas claras sobre nuestro servicio de citas de extranjería en España." /><FAQ /></main>;
}
