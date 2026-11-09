import Link from "next/link";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de extranjería en España | CitaEs",
  description:
    "Servicios de extranjería en España: citas NIE, TIE, huellas, residencia, arraigo, asilo, reagrupación familiar y asistencia informativa por provincia.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Cita de extranjería",
    slug: "immigration-appointment",
    icon: "📅",
    description:
      "Asistencia para localizar y gestionar citas de extranjería en distintas provincias de España.",
    tags: ["Asistencia personalizada", "Avisos por WhatsApp", "Varias provincias"],
  },
  {
    title: "Toma de huellas",
    slug: "fingerprinting",
    icon: "👆",
    description:
      "Asistencia para encontrar citas de toma de huellas necesarias para obtener la tarjeta TIE.",
    tags: ["Cita de huellas", "Orientación documental", "Seguimiento"],
  },
  {
    title: "Renovación NIE/TIE",
    slug: "nie-tie-renewal",
    icon: "🪪",
    description:
      "Orientación y asistencia para trámites relacionados con la renovación de NIE y TIE.",
    tags: ["Orientación", "Documentación", "Seguimiento"],
  },
  {
    title: "Asilo y protección internacional",
    slug: "asylum-and-international-protection",
    icon: "🛂",
    description:
      "Información y asistencia para localizar citas relacionadas con solicitudes de asilo y protección internacional.",
    tags: ["Información", "Asistencia", "Confidencialidad"],
  },
  {
    title: "Arraigo",
    slug: "social-integration",
    icon: "🏠",
    description:
      "Información sobre las distintas modalidades de arraigo y sus requisitos documentales.",
    tags: ["Arraigo social", "Arraigo sociolaboral", "Arraigo familiar"],
  },
  {
    title: "Nacionalidad española",
    slug: "spanish-nationality",
    icon: "🇪🇸",
    description:
      "Información y asistencia para trámites de nacionalidad española por residencia y otras vías.",
    tags: ["Requisitos", "Documentación", "Seguimiento"],
  },
  {
    title: "Estudiantes extranjeros",
    slug: "foreign-students",
    icon: "🎓",
    description:
      "Información sobre visados de estudios, renovaciones y autorizaciones de trabajo para estudiantes extranjeros.",
    tags: ["Visado de estudios", "Renovaciones", "Autorización de trabajo"],
  },
  {
    title: "Antecedentes penales",
    slug: "criminal-record",
    icon: "📄",
    description:
      "Asistencia informativa para solicitar certificados de antecedentes penales.",
    tags: ["Información", "Documentación", "Asistencia"],
  },
];

const guides = [
  "Arraigo social",
  "Arraigo sociolaboral",
  "Arraigo familiar",
  "Arraigo socioformativo",
  "Regularización 2026",
  "Renovación NIE",
  "Autorización de trabajo",
  "Reagrupación familiar",
  "Residencia no lucrativa",
  "Asilo y refugio",
  "Nacionalidad española",
  "Tarjeta comunitaria",
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Servicios de extranjería"
        text="Soluciones para citas de NIE, TIE, huellas, arraigo, asilo, nacionalidad y otros trámites en toda España."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Nuestros servicios de extranjería
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Información y asistencia para tus trámites de extranjería en
            España. Te ayudamos a encontrar el servicio adecuado y orientarte
            durante el proceso.
          </p>

          <a
            href="https://wa.me/34672399181"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-green-500 px-10 py-4 font-bold text-white transition hover:bg-green-600"
          >
            💬 Contactar por WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Todos los servicios que necesitas
          </h2>

          <p className="mt-3 text-center text-gray-600">
            Desde la búsqueda de citas hasta la orientación sobre documentación.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  {service.tags.map((tag) => (
                    <div
                      key={tag}
                      className="text-sm font-semibold text-gray-700"
                    >
                      ✓ {tag}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-7 inline-block font-bold text-red-600 transition hover:text-red-700"
                >
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Guía de trámites disponibles
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Consulta información sobre requisitos, documentos y procedimientos.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {guides.map((item) => (
              <Link
                key={item}
                href={`/services/${item
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-800 transition hover:bg-gray-100"
              >
                <span>{item}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            ¿No sabes qué servicio necesitas?
          </h2>

          <p className="mt-5 text-gray-600">
            Escríbenos por WhatsApp y te ayudaremos a identificar el servicio
            adecuado para tu situación.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/34672399181"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-10 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Contactar por WhatsApp
            </a>

            <Link
              href="/guides"
              className="rounded-xl bg-red-600 px-10 py-4 font-bold text-white transition hover:bg-red-700"
            >
              Ver guías
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}