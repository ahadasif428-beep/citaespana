
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre CitaEs | Servicios de extranjería en España",
  description:
    "Conoce CitaEs y nuestros servicios de información y asistencia para trámites de extranjería en España.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const benefits = [
    {
      title: "Atención por WhatsApp",
      description:
        "Contacta con nuestro equipo para consultar información sobre tu trámite.",
    },
    {
      title: "Información de trámites",
      description:
        "Consulta información sobre citas NIE, TIE, huellas y otros procedimientos.",
    },
    {
      title: "Servicios en España",
      description:
        "Consulta la disponibilidad de asistencia según tu provincia y procedimiento.",
    },
    {
      title: "Precios transparentes",
      description:
        "Consulta las tarifas y las condiciones del servicio antes de contratar.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Elige tu trámite",
      description:
        "Indícanos la provincia y el procedimiento para el que necesitas asistencia.",
    },
    {
      number: "2",
      title: "Consulta la información",
      description:
        "Revisamos tu solicitud y te informamos sobre las opciones disponibles.",
    },
    {
      number: "3",
      title: "Recibe asistencia",
      description:
        "Contacta con nuestro equipo por WhatsApp para continuar con tu solicitud.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#C60B1E] to-[#920815] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-bold uppercase tracking-widest text-yellow-300">
            CitaEs España
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Sobre CitaEs
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-100 md:text-xl">
            Ayudamos a las personas a encontrar información y asistencia
            relacionada con citas y trámites de extranjería en España.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Quiénes somos
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            CitaEs nace con el objetivo de facilitar el acceso a información
            sobre citas y procedimientos de extranjería en España. Queremos
            que las personas puedan conocer mejor los pasos necesarios para
            sus trámites.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ofrecemos información y asistencia relacionada con NIE, TIE,
            toma de huellas, arraigo, autorizaciones de residencia,
            reagrupación familiar, asilo y procedimientos para estudiantes
            extranjeros.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            ¿Por qué elegir CitaEs?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-[#C60B1E]" />

                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            ¿Cómo funciona?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C60B1E] text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C60B1E] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            ¿Necesitas asistencia con tu cita?
          </h2>

          <p className="mt-6 text-lg text-red-100">
            Contacta con nosotros para consultar tu trámite de extranjería.
          </p>

          <Link
            href="https://wa.me/34672399181"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-4 font-bold text-[#C60B1E] transition hover:bg-gray-100"
          >
            Contactar por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
