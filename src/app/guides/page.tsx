import type { Metadata } from "next";
import Link from "next/link";
<<<<<<< HEAD
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

export const metadata: Metadata = {
  title: "Guías de Extranjería en España",
  description:
    "Consulta nuestras guías completas sobre NIE, TIE, Arraigo, Nacionalidad Española, Asilo, Reagrupación Familiar y todos los trámites de extranjería en España.",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "Arraigo Social",
    slug: "arraigo-social",
    icon: "🏠",
    description: "Requisitos, documentación y proceso completo.",
  },
  {
    title: "Arraigo Laboral",
    slug: "arraigo-laboral",
    icon: "💼",
    description: "Cómo solicitar el arraigo laboral en España.",
  },
  {
    title: "Arraigo Familiar",
    slug: "arraigo-familiar",
    icon: "👨‍👩‍👧",
    description: "Guía completa del arraigo familiar.",
  },
  {
    title: "Renovar NIE",
    slug: "renovar-nie",
    icon: "🪪",
    description: "Todo sobre la renovación del NIE.",
  },
  {
    title: "Renovar TIE",
    slug: "renovar-tie",
    icon: "📄",
    description: "Proceso para renovar la tarjeta TIE.",
  },
  {
    title: "Nacionalidad Española",
    slug: "nacionalidad-espanola",
    icon: "🇪🇸",
    description: "Cómo obtener la nacionalidad española.",
  },
  {
    title: "Asilo",
    slug: "asilo",
    icon: "🛂",
    description: "Solicitud de protección internacional.",
  },
  {
    title: "Reagrupación Familiar",
    slug: "reagrupacion-familiar",
    icon: "❤️",
    description: "Traer a tu familia legalmente a España.",
  },
  {
    title: "Residencia No Lucrativa",
    slug: "residencia-no-lucrativa",
    icon: "🏡",
    description: "Residencia sin actividad laboral.",
  },
  {
    title: "Permiso de Trabajo",
    slug: "permiso-de-trabajo",
    icon: "📑",
    description: "Autorizaciones de trabajo en España.",
  },
  {
    title: "Visado de Estudiante",
    slug: "visado-estudiante",
    icon: "🎓",
    description: "Guía para estudiantes internacionales.",
  },
  {
    title: "Protección Internacional",
    slug: "proteccion-internacional",
    icon: "🌍",
    description: "Información sobre protección internacional.",
  },
];

export default function GuidesPage() {
  return (
    <>
      

      {/* HERO */}

<<<<<<< HEAD
      <section className="bg-[#C60B1E] text-white py-24">
=======
      <section className="bg-[#0A4ABF] text-white py-24">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">

            Guías de Extranjería en España

          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-9">

            Aprende todo sobre NIE, TIE, Arraigo,
            Nacionalidad Española, Asilo,
            Reagrupación Familiar y mucho más.

          </p>

          <Link
            href="/appointment"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-xl font-bold"
          >
            Solicitar cita
          </Link>

        </div>

      </section>

      {/* SEARCH */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <input
            type="text"
            placeholder="Buscar guía..."
            className="w-full border rounded-2xl px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>

      </section>
            {/* GUIDES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Todas las Guías

          </h2>

          <p className="text-center text-gray-600 mt-5">

            Información actualizada sobre procedimientos de extranjería.

          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {guides.map((guide) => (

              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="border rounded-3xl p-8 hover:shadow-xl transition bg-white"
              >

                <div className="text-5xl">

                  {guide.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {guide.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {guide.description}

                </p>

<<<<<<< HEAD
                <span className="inline-block mt-8 text-[#C60B1E] font-bold">
=======
                <span className="inline-block mt-8 text-blue-600 font-bold">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

                  Leer guía →

                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Categorías

          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            {[
              "NIE",
              "TIE",
              "Residencia",
              "Trabajo",
              "Familia",
              "Estudiantes",
              "Asilo",
              "Nacionalidad",
            ].map((category) => (

              <div
                key={category}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition"
              >

                <h3 className="text-2xl font-bold">

                  {category}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY READ OUR GUIDES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            ¿Por qué leer nuestras guías?

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "Información actualizada",
                icon: "📄",
              },
              {
                title: "Explicaciones sencillas",
                icon: "📚",
              },
              {
                title: "Paso a paso",
                icon: "✅",
              },
              {
                title: "Toda España",
                icon: "🇪🇸",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="border rounded-3xl p-8 text-center"
              >

                <div className="text-5xl">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* SEO CONTENT */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold">

            Guías completas de Extranjería en España

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">

            En CitaEspaña encontrarás información actualizada sobre todos
            los procedimientos de extranjería en España. Nuestras guías
            explican paso a paso cómo solicitar una cita previa para NIE,
            TIE, Arraigo Social, Arraigo Laboral, Reagrupación Familiar,
            Nacionalidad Española, Asilo, Protección Internacional,
            Permisos de Residencia y muchos otros trámites.

          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9">

            También encontrarás información sobre la documentación
            necesaria, requisitos, tiempos de espera y oficinas de
            extranjería disponibles en las distintas provincias de España.
            Nuestro objetivo es ayudarte a comprender el proceso antes de
            solicitar tu cita.

          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9">

            Si no encuentras disponibilidad en la sede electrónica,
            nuestro servicio de monitorización puede ayudarte a localizar
            una cita disponible rápidamente y recibir avisos por WhatsApp.

          </p>

        </div>

      </section>

      {/* CTA */}

<<<<<<< HEAD
      <section className="bg-[#C60B1E] text-white py-24">
=======
      <section className="bg-[#0A4ABF] text-white py-24">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">

            ¿Necesitas ayuda con tu cita?

          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">

            Nuestro equipo puede ayudarte a encontrar una cita de
            extranjería en cualquier provincia de España.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <a
              href="https://wa.me/34672399181"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-xl font-bold"
            >
              Contactar por WhatsApp
            </a>

            <Link
              href="/appointment"
<<<<<<< HEAD
              className="bg-white text-[#C60B1E] px-10 py-4 rounded-xl font-bold"
=======
              className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold"
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
            >
              Solicitar cita
            </Link>

          </div>

        </div>

      </section>

      

    </>
  );
}