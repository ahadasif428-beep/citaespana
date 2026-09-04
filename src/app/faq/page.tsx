<<<<<<< HEAD
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Preguntas frecuentes", description: "Respuestas sobre citas de extranjería y el servicio de CitaEspaña.", alternates: { canonical: "/faq" } };

export default function FAQPage() {
  return <main className="pt-0"><PageHero title="Preguntas frecuentes" text="Respuestas claras sobre nuestro servicio de citas de extranjería en España." /><FAQ /></main>;
}
=======
import type { Metadata } from "next";
export default function AboutPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
    </main>
  );
}
export const metadata: Metadata = {
  title: "Frequently Asked Questions",

  description:
    "Answers to the most common questions about immigration appointments in Spain.",

  alternates: {
    canonical: "/faq",
  },
};
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
