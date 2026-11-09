
import GuidesSearch from "@/components/GuidesSearch";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guías de Extranjería en España | CitaEs",
  description:
    "Consulta nuestras guías sobre NIE, TIE, arraigo, nacionalidad española, asilo, reagrupación familiar y otros trámites de extranjería en España.",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "Arraigo Social",
    slug: "arraigo-social",
    icon: "🏠",
    description: "Requisitos, documentación y proceso de solicitud.",
  },
  {
    title: "Arraigo Laboral",
    slug: "arraigo-laboral",
    icon: "💼",
    description: "Información sobre las autorizaciones por circunstancias de arraigo.",
  },
  {
    title: "Arraigo Familiar",
    slug: "arraigo-familiar",
    icon: "👨‍👩‍👧",
    description: "Información sobre residencia por vínculos familiares.",
  },
  {
    title: "Renovar NIE",
    slug: "renovar-nie",
    icon: "🪪",
    description: "Información sobre la renovación y los trámites relacionados con el NIE.",
  },
  {
    title: "Renovar TIE",
    slug: "renovar-tie",
    icon: "📄",
    description: "Documentación y pasos para renovar la tarjeta TIE.",
  },
  {
    title: "Nacionalidad Española",
    slug: "nacionalidad-espanola",
    icon: "🇪🇸",
    description: "Requisitos y proceso para solicitar la nacionalidad española.",
  },
  {
    title: "Asilo",
    slug: "asilo",
    icon: "🛂",
    description: "Información sobre la solicitud de protección internacional.",
  },
  {
    title: "Reagrupación Familiar",
    slug: "reagrupacion-familiar",
    icon: "👨‍👩‍👧",
    description: "Información sobre los requisitos para reagrupar a familiares.",
  },
  {
    title: "Residencia No Lucrativa",
    slug: "residencia-no-lucrativa",
    icon: "🏡",
    description: "Información sobre residencia sin realizar actividades laborales.",
  },
  {
    title: "Permiso de Trabajo",
    slug: "permiso-de-trabajo",
    icon: "📑",
    description: "Tipos de autorizaciones de trabajo en España.",
  },
  {
    title: "Visado de Estudiante",
    slug: "visado-estudiante",
    icon: "🎓",
    description: "Información para estudiantes internacionales.",
  },
  {
    title: "Protección Internacional",
    slug: "proteccion-internacional",
    icon: "🌍",
    description: "Información general sobre protección internacional.",
  },
];

const categories = [
  "NIE",
  "TIE",
  "Residencia",
  "Trabajo",
  "Familia",
  "Estudiantes",
  "Asilo",
  "Nacionalidad",
];

const benefits = [
  { title: "Información clara", icon: "📄" },
  { title: "Explicaciones sencillas", icon: "📚" },
  { title: "Guías paso a paso", icon: "✅" },
  { title: "Trámites en España", icon: "🇪🇸" },
];

export default function GuidesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#C60B1E] to-[#920815] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold">
            CitaEs España
          </span>

          <h1 className="mt-8 text-4xl font-black md:text-6xl">
            Guías de Extranjería en España
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-red-100 md:text-xl">
            Aprende sobre NIE, TIE, arraigo, nacionalidad española, asilo,
            reagrupación familiar y otros procedimientos de extranjería.
          </p>

          <Link
            href="/appointment"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-4 font-bold text-[#C60B1E] transition hover:bg-gray-100"
          >
            Solicitar cita
          </Link>
        </div>
      </section>

      {/* SEARCH AND GUIDES */}
      <GuidesSearch guides={guides} />

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-black text-gray-900 md:text-5xl">
            Categorías
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY READ OUR GUIDES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-black text-gray-900 md:text-5xl">
            ¿Por qué consultar nuestras guías?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 p-8 text-center"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
            Guías completas de Extranjería en España
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            En CitaEs encontrarás información sobre los principales
            procedimientos de extranjería en España. Nuestras guías explican
            los pasos relacionados con NIE, TIE, arraigo social, arraigo
            familiar, reagrupación familiar, nacionalidad española, asilo,
            protección internacional y permisos de residencia.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            También encontrarás información sobre documentación, requisitos
            y procedimientos en las distintas provincias de España. Nuestro
            objetivo es ayudarte a comprender cada trámite antes de solicitar
            una cita.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            Si necesitas asistencia para localizar una cita de extranjería,
            puedes consultar nuestros servicios y contactar con nuestro equipo
            para obtener más información.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#C60B1E] to-[#920815] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            ¿Necesitas ayuda con tu cita?
          </h2>

          <p className="mt-8 text-lg leading-9 text-red-100 md:text-xl">
            Consulta nuestros servicios de asistencia para citas de
            extranjería en España.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/34672399181"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-10 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Contactar por WhatsApp
            </a>

            <Link
              href="/appointment"
              className="rounded-xl bg-white px-10 py-4 font-bold text-[#C60B1E] transition hover:bg-gray-100"
            >
              Solicitar cita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
