import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre CitaEspaña",
  description:
    "Conoce CitaEspaña y cómo ayudamos a conseguir citas de extranjería en toda España.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      <section className="bg-[#27439b] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Sobre CitaEspaña
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Ayudamos a personas de toda España a conseguir citas de
            extranjería de forma rápida mediante un sistema de monitorización
            continua y asistencia por WhatsApp.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Quiénes Somos
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            CitaEspaña nace con el objetivo de facilitar la obtención de
            citas para trámites de extranjería en toda España.
            Nuestro equipo supervisa constantemente la disponibilidad de
            citas para ayudarte a conseguir una lo antes posible.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gestionamos citas para NIE, TIE, huellas, arraigo,
            autorizaciones de residencia, reagrupación familiar,
            asilo, estudiantes y muchos otros procedimientos.
          </p>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            ¿Por qué elegir CitaEspaña?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="font-bold text-xl">
                Monitorización 24/7
              </h3>
              <p className="mt-4 text-gray-600">
                Buscamos citas de forma continua todos los días.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="font-bold text-xl">
                Avisos por WhatsApp
              </h3>
              <p className="mt-4 text-gray-600">
                Recibe la información inmediatamente.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="font-bold text-xl">
                Toda España
              </h3>
              <p className="mt-4 text-gray-600">
                Trabajamos con oficinas de las 52 provincias.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="font-bold text-xl">
                Sin costes ocultos
              </h3>
              <p className="mt-4 text-gray-600">
                Servicio transparente y atención personalizada.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            ¿Cómo funciona?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="border rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Elige tu trámite
              </h3>

              <p className="mt-4 text-gray-600">
                Indícanos la provincia y el procedimiento.
              </p>

            </div>

            <div className="border rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Buscamos tu cita
              </h3>

              <p className="mt-4 text-gray-600">
                Nuestro sistema monitoriza las citas disponibles.
              </p>

            </div>

            <div className="border rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Te avisamos
              </h3>

              <p className="mt-4 text-gray-600">
                Recibirás la información por WhatsApp.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#27439b] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <div className="text-5xl font-bold">52</div>
              <p>Provincias</p>
            </div>

            <div>
              <div className="text-5xl font-bold">14+</div>
              <p>Procedimientos</p>
            </div>

            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p>Monitorización</p>
            </div>

            <div>
              <div className="text-5xl font-bold">100%</div>
              <p>Soporte WhatsApp</p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            ¿Necesitas una cita?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Contacta con nosotros y comienza hoy mismo.
          </p>

          <Link
            href="https://wa.me/34672399181"
            target="_blank"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold"
          >
            Contactar por WhatsApp
          </Link>

        </div>
      </section>

    </main>
  );
}