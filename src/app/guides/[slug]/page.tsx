import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const guides = {
  "arraigo-social": {
    title: "Arraigo Social",
    description:
      "Guía completa sobre el procedimiento de Arraigo Social en España.",
  },
  "arraigo-laboral": {
    title: "Arraigo Laboral",
    description:
      "Todo lo que necesitas saber sobre el Arraigo Laboral.",
  },
  "arraigo-familiar": {
    title: "Arraigo Familiar",
    description:
      "Requisitos y proceso para solicitar Arraigo Familiar.",
  },
  "renovar-nie": {
    title: "Renovar NIE",
    description:
      "Cómo renovar tu NIE paso a paso.",
  },
  "renovar-tie": {
    title: "Renovar TIE",
    description:
      "Guía para renovar la Tarjeta de Identidad de Extranjero.",
  },
  "nacionalidad-espanola": {
    title: "Nacionalidad Española",
    description:
      "Cómo obtener la nacionalidad española.",
  },
  "asilo": {
    title: "Asilo",
    description:
      "Solicitud de protección internacional en España.",
  },
  "reagrupacion-familiar": {
    title: "Reagrupación Familiar",
    description:
      "Proceso completo para reagrupar a tu familia.",
  },
  "residencia-no-lucrativa": {
    title: "Residencia No Lucrativa",
    description:
      "Todo sobre la residencia no lucrativa.",
  },
  "permiso-de-trabajo": {
    title: "Permiso de Trabajo",
    description:
      "Información sobre permisos de trabajo en España.",
  },
  "visado-estudiante": {
    title: "Visado de Estudiante",
    description:
      "Guía para estudiantes internacionales.",
  },
  "proteccion-internacional": {
    title: "Protección Internacional",
    description:
      "Información sobre protección internacional.",
  },
};

type GuideSlug = keyof typeof guides;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: GuideSlug }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const guide = guides[slug];

  if (!guide) {
    return {
      title: "Guía",
    };
  }

  return {
    title: `${guide.title} | CitaEspaña`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: GuideSlug }>;
}) {
  const { slug } = await params;

  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      

      <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-500">
        <Link href="/">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/guides">Guías</Link>
        <span className="mx-2">/</span>
        <span>{guide.title}</span>
      </div>

      <section className="bg-[#0A4ABF] text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            {guide.title}
          </h1>

          <p className="text-xl text-blue-100 mt-8">
            {guide.description}
          </p>

        </div>

      </section>
            {/* ARTICLE */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold">

            Información sobre {guide.title}

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">

            {guide.title} es uno de los procedimientos más solicitados por
            ciudadanos extranjeros que residen en España. Antes de iniciar
            cualquier trámite es importante revisar los requisitos,
            preparar correctamente la documentación y solicitar una cita
            previa en la oficina de extranjería correspondiente.

          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">

            Dependiendo de la provincia, la disponibilidad de citas puede
            variar considerablemente. En muchas ocasiones las citas se
            agotan en pocos minutos, por lo que recomendamos realizar un
            seguimiento constante o utilizar un servicio de monitorización.

          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">

            En CitaEspaña ayudamos diariamente a personas que necesitan
            conseguir una cita para NIE, TIE, Arraigo, Nacionalidad,
            Reagrupación Familiar, Asilo y otros procedimientos de
            extranjería en cualquier provincia de España.

          </p>

          <h2 className="text-4xl font-bold mt-20">

            Documentación habitual

          </h2>

          <ul className="space-y-4 mt-8">

            <li>✅ Pasaporte en vigor</li>

            <li>✅ Formulario oficial</li>

            <li>✅ Fotografías recientes</li>

            <li>✅ Justificante del pago de tasas</li>

            <li>✅ Documentación específica del procedimiento</li>

          </ul>

          <h2 className="text-4xl font-bold mt-20">

            Consejos

          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl">

                Revisa la documentación

              </h3>

              <p className="mt-4 text-gray-600">

                Asegúrate de llevar todos los documentos originales y copias.

              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl">

                Solicita cita con antelación

              </h3>

              <p className="mt-4 text-gray-600">

                Las citas suelen agotarse rápidamente.

              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl">

                Consulta información oficial

              </h3>

              <p className="mt-4 text-gray-600">

                Comprueba siempre los requisitos actualizados.

              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl">

                Recibe ayuda

              </h3>

              <p className="mt-4 text-gray-600">

                Nuestro equipo puede ayudarte a encontrar una cita disponible.

              </p>

            </div>

          </div>
                {/* FAQ */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Preguntas Frecuentes

          </h2>

          <div className="space-y-6 mt-16">

            {[
              {
                q: "¿Cuánto tarda el procedimiento?",
                a: "Depende de la provincia y del tipo de trámite solicitado.",
              },
              {
                q: "¿Necesito cita previa?",
                a: "Sí. La mayoría de los procedimientos de extranjería requieren cita previa.",
              },
              {
                q: "¿Puedo solicitar la cita desde cualquier provincia?",
                a: "Sí, siempre que el procedimiento esté disponible en esa provincia.",
              },
              {
                q: "¿CitaEspaña pertenece al Gobierno?",
                a: "No. Somos un servicio privado de ayuda para conseguir citas de extranjería.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="bg-white rounded-2xl border p-8"
              >

                <h3 className="text-xl font-bold">

                  {faq.q}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {faq.a}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RELATED GUIDES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Otras Guías

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {Object.entries(guides)
              .filter(([key]) => key !== slug)
              .slice(0, 6)
              .map(([key, item]) => (

                <Link
                  key={key}
                  href={`/guides/${key}`}
                  className="border rounded-3xl p-8 hover:shadow-lg transition"
                >

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-gray-600">

                    {item.description}

                  </p>

                  <span className="inline-block mt-6 text-blue-600 font-bold">

                    Leer guía →

                  </span>

                </Link>

              ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#0A4ABF] text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">

            ¿Necesitas una cita de extranjería?

          </h2>

          <p className="text-xl text-blue-100 mt-8 leading-9">

            Nuestro equipo monitoriza las citas disponibles las 24 horas
            para ayudarte a conseguir tu cita rápidamente.

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
              className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold"
            >

              Solicitar cita

            </Link>

          </div>

        </div>

      </section>
      </div>
      </section>
      

    </>
  );
}