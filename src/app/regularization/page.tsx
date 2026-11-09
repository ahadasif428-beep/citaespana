
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EligibilityCTA from "@/components/EligibilityCTA";
import LegalNotice from "@/components/LegalNotice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regularización 2026 en España | CitaEs",
  description:
    "Consulta información sobre Regularización 2026 en España, requisitos, documentación y comprobación de elegibilidad.",
  alternates: {
    canonical: "/regularization",
  },
};

const benefits = [
  {
    icon: "📋",
    title: "Requisitos",
    description:
      "Comprueba las condiciones aplicables a tu situación antes de iniciar el proceso.",
  },
  {
    icon: "📄",
    title: "Documentación",
    description:
      "Prepara la documentación necesaria y evita errores que puedan retrasar tu trámite.",
  },
  {
    icon: "⏱️",
    title: "Plazos",
    description:
      "Organiza tu solicitud con tiempo y conoce los siguientes pasos del procedimiento.",
  },
];

export default function Regularization() {
  return (
    <main>
      <PageHero
        title="Regularización 2026 en España"
        text="Comprueba tu elegibilidad y conoce los requisitos, documentos y opciones disponibles para tu situación en España."
      />

      {/* INFORMATION CARDS */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                {item.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY CHECKER */}
      <EligibilityCTA />

      {/* CALL TO ACTION */}
      <section className="bg-[#fff8f5] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C60B1E]">
            Siguiente paso
          </span>

          <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
            ¿No sabes por dónde empezar?
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Habla con CitaEs y te indicaremos qué información necesitamos
            para orientarte sobre tu situación.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex rounded-xl bg-[#C60B1E] px-8 py-4 font-bold text-white transition hover:bg-[#A40818]"
          >
            Solicitar ayuda →
          </Link>
        </div>
      </section>

      {/* LEGAL NOTICE */}
      <LegalNotice />
    </main>
  );
}
