import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | CitaEspaña",
  description:
    "Contacta con CitaEspaña para obtener ayuda con citas de extranjería en cualquier provincia de España.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#27439b] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contacto
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Estamos disponibles para ayudarte a conseguir tu cita de
            extranjería en cualquier provincia de España.
          </p>

        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                WhatsApp
              </h2>

              <p className="mt-4 text-gray-600">
                Habla directamente con nuestro equipo.
              </p>

              <Link
                href="https://wa.me/34672399181"
                target="_blank"
                className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Abrir WhatsApp
              </Link>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                Correo Electrónico
              </h2>

              <p className="mt-4 text-gray-600">
                soporte@citaespana.com
              </p>

              <p className="mt-2 text-gray-500">
                Respondemos lo antes posible.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                Horario
              </h2>

              <p className="mt-4 text-gray-600">
                Atención por WhatsApp
              </p>

              <p className="text-gray-600">
                Lunes - Domingo
              </p>

              <p className="font-semibold text-green-600 mt-2">
                Monitorización 24/7
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            ¿En qué podemos ayudarte?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow">

              <h3 className="text-2xl font-bold">
                Citas de Extranjería
              </h3>

              <p className="mt-4 text-gray-600">
                NIE, TIE, Huellas, Arraigo, Asilo,
                Reagrupación Familiar y mucho más.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow">

              <h3 className="text-2xl font-bold">
                Información y Asesoramiento
              </h3>

              <p className="mt-4 text-gray-600">
                Resolvemos dudas sobre documentación,
                procedimientos y disponibilidad de citas.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-8 mt-14">

            <div>

              <h3 className="font-bold text-xl">
                ¿Cómo solicito una cita?
              </h3>

              <p className="text-gray-600 mt-2">
                Escríbenos por WhatsApp indicando la provincia
                y el trámite que necesitas.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl">
                ¿Trabajáis en toda España?
              </h3>

              <p className="text-gray-600 mt-2">
                Sí. Gestionamos citas en todas las provincias.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl">
                ¿Cómo recibiré mi cita?
              </h3>

              <p className="text-gray-600 mt-2">
                Te avisaremos inmediatamente mediante WhatsApp.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#27439b] text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            ¿Listo para conseguir tu cita?
          </h2>

          <p className="mt-6 text-lg">
            Nuestro equipo está preparado para ayudarte.
          </p>

          <Link
            href="https://wa.me/34672399181"
            target="_blank"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold transition"
          >
            Contactar por WhatsApp
          </Link>

        </div>

      </section>

    </main>
  );
}