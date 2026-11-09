
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const guides = {
  "arraigo-social": {
    title: "Arraigo Social",
    description:
      "Guía sobre los requisitos y el procedimiento de Arraigo Social en España.",
  },
  "arraigo-laboral": {
    title: "Arraigo Laboral",
    description:
      "Información sobre las opciones de residencia por circunstancias laborales.",
  },
  "arraigo-familiar": {
    title: "Arraigo Familiar",
    description:
      "Información sobre requisitos y procedimientos de Arraigo Familiar.",
  },
  "renovar-nie": {
    title: "Renovar NIE",
    description: "Información sobre cómo renovar tu documentación NIE.",
  },
  "renovar-tie": {
    title: "Renovar TIE",
    description:
      "Guía informativa para renovar la Tarjeta de Identidad de Extranjero.",
  },
  "nacionalidad-espanola": {
    title: "Nacionalidad Española",
    description:
      "Información sobre los requisitos y el proceso de nacionalidad española.",
  },
  asilo: {
    title: "Asilo",
    description:
      "Información sobre solicitudes de protección internacional en España.",
  },
  "reagrupacion-familiar": {
    title: "Reagrupación Familiar",
    description:
      "Información sobre el procedimiento de reagrupación familiar.",
  },
  "residencia-no-lucrativa": {
    title: "Residencia No Lucrativa",
    description:
      "Información sobre los requisitos de residencia no lucrativa.",
  },
  "permiso-de-trabajo": {
    title: "Permiso de Trabajo",
    description:
      "Información sobre autorizaciones y permisos de trabajo en España.",
  },
  "visado-estudiante": {
    title: "Visado de Estudiante",
    description:
      "Guía informativa para estudiantes internacionales en España.",
  },
  "proteccion-internacional": {
    title: "Protección Internacional",
    description:
      "Información sobre protección internacional y sus procedimientos.",
  },
};

type GuideSlug = keyof typeof guides;

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in guides)) {
    return {
      title: "Guía no encontrada | CitaEs",
    };
  }

  const guide = guides[slug as GuideSlug];

  return {
    title: `${guide.title} | CitaEs`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in guides)) {
    notFound();
  }

  const guide = guides[slug as GuideSlug];

  const faqs = [
    {
      q: "¿Cuánto tarda el procedimiento?",
      a: "El plazo depende del tipo de trámite, de las circunstancias personales y de la administración competente.",
    },
    {
      q: "¿Necesito cita previa?",
      a: "Muchos procedimientos requieren cita previa. Comprueba las instrucciones oficiales correspondientes a tu trámite.",
    },
    {
      q: "¿Puedo solicitar la cita desde cualquier provincia?",
      a: "Depende del procedimiento y de las oficinas habilitadas para realizarlo.",
    },
    {
      q: "¿CitaEs pertenece al Gobierno?",
      a: "No. CitaEs es un servicio privado e independiente de información y asistencia.",
    },
  ];

  return (
    <main className="bg-white">
      {/* BREADCRUMB */}
      <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#C60B1E]">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-[#C60B1E]">
          Guías
        </Link>
        <span className="mx-2">/</span>
        <span>{guide.title}</span>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#C60B1E] to-[#920815] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-bold uppercase tracking-widest text-yellow-300">
            Guía de extranjería
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            {guide.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-red-100">
            {guide.description}
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Información sobre {guide.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            {guide.title} es un procedimiento relacionado con los trámites
            de extranjería en España. Antes de iniciar cualquier solicitud,
            es importante revisar los requisitos aplicables, preparar la
            documentación necesaria y consultar las instrucciones de la
            administración competente.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            Los requisitos y documentos pueden variar según la situación
            personal del solicitante y el tipo de autorización. Por eso,
            conviene comprobar siempre la información oficial y asegurarse
            de utilizar los formularios correspondientes.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            En CitaEs ofrecemos información y asistencia privada relacionada
            con citas para NIE, TIE, huellas, arraigo, nacionalidad,
            reagrupación familiar, asilo y otros procedimientos de
            extranjería.
          </p>

          <h2 className="mt-20 text-3xl font-bold text-gray-900">
            Documentación que puede ser necesaria
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Según el procedimiento, pueden solicitarse algunos de los
            siguientes documentos:
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✓ Pasaporte en vigor o documento de identidad válido.</li>
            <li>✓ Formulario oficial correspondiente al procedimiento.</li>
            <li>✓ Justificante del pago de las tasas, cuando corresponda.</li>
            <li>✓ Fotografías recientes, si son necesarias.</li>
            <li>✓ Documentación específica que acredite los requisitos.</li>
          </ul>

          <p className="mt-6 text-sm leading-7 text-gray-500">
            Esta lista es orientativa y no sustituye los requisitos oficiales
            de cada procedimiento.
          </p>

          {/* TIPS */}
          <h2 className="mt-20 text-3xl font-bold text-gray-900">
            Consejos importantes
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Revisa la documentación
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Comprueba que los documentos estén actualizados y que
                cumplan las instrucciones del trámite.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Consulta los plazos
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Revisa los plazos y las condiciones aplicables antes de
                presentar tu solicitud.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Consulta fuentes oficiales
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Verifica los requisitos actualizados en los organismos
                oficiales correspondientes.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Solicita información
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Contacta con nuestro equipo si necesitas información
                sobre nuestros servicios de asistencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-5xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-5xl">
            Otras guías
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(guides)
              .filter(([key]) => key !== slug)
              .slice(0, 6)
              .map(([key, item]) => (
                <Link
                  key={key}
                  href={`/guides/${key}`}
                  className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#C60B1E]">
                    Leer guía →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C60B1E] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            ¿Necesitas asistencia con tu cita de extranjería?
          </h2>

          <p className="mt-8 text-lg leading-9 text-red-100">
            Contacta con nuestro equipo para consultar información sobre
            tu procedimiento y nuestros servicios.
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
    </main>
  );
}
