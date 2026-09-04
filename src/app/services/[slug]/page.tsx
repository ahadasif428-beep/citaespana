import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { services } from "@/data/services";

type ServiceSlug = keyof typeof services;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return {
      title: "Servicio",
    };
  }

  return {
    title: `${service.title} | CitaEspaña`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://www.citaespana.com/services/${slug}`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return (
      <main className="py-32 text-center">
        <h1 className="text-5xl font-bold">
          Servicio no encontrado
        </h1>
      </main>
    );
  }

  return (
    <>
      

      {/* Breadcrumb */}

      <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-500">

        <Link href="/" className="hover:text-[#C60B1E]">
          Inicio
        </Link>

        <span className="mx-2">/</span>

        <Link
          href="/services"
          className="hover:text-[#C60B1E]"
        >
          Servicios
        </Link>

        <span className="mx-2">/</span>

        <span className="font-semibold text-gray-700">
          {service.title}
        </span>

      </div>

      {/* HERO */}

      <section className="bg-[#C60B1E] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block bg-[#C60B1E] rounded-full px-5 py-2 font-semibold">

              {service.badge}

            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight">

              {service.title}

            </h1>

            <p className="text-xl text-blue-100 mt-8 leading-9">

              {service.description}

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://wa.me/34672399181"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-bold"
              >
                Contactar por WhatsApp
              </a>

              <Link
                href="/appointment"
                className="bg-white text-[#C60B1E] px-8 py-4 rounded-xl font-bold"
              >
                Solicitar cita
              </Link>

            </div>

          </div>

          <div className="bg-white/10 rounded-3xl border border-white/20 p-10">

            <h2 className="text-3xl font-bold">
              ¿Por qué elegir CitaEspaña?
            </h2>

            <p className="mt-6 text-blue-100 leading-8">
              Nuestro sistema monitoriza automáticamente las citas
              disponibles durante las 24 horas del día para ayudarte
              a conseguir una cita lo antes posible.
            </p>

            <div className="space-y-4 mt-8 text-lg">

              <div>✅ Monitorización 24/7</div>

              <div>✅ Avisos inmediatos por WhatsApp</div>

              <div>✅ Cobertura en toda España</div>

              <div>✅ Atención personalizada</div>

            </div>

          </div>

        </div>

      </section>
            {/* STATS */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                number: "5000+",
                text: "Citas gestionadas",
              },
              {
                number: "52",
                text: "Provincias",
              },
              {
                number: "24/7",
                text: "Monitorización",
              },
              {
                number: "98%",
                text: "Clientes satisfechos",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-gray-50 rounded-3xl p-8 text-center shadow-sm"
              >
                <h3 className="text-5xl font-bold text-[#C60B1E]">
                  {item.number}
                </h3>

                <p className="mt-4 text-gray-600 font-medium">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            ¿Cómo funciona?

          </h2>

          <p className="text-center text-gray-600 mt-5">

            Solo tienes que seguir estos sencillos pasos.

          </p>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "Contacta",
                text: "Nos envías tu provincia y trámite.",
              },
              {
                title: "Monitorizamos",
                text: "Buscamos citas automáticamente las 24 horas.",
              },
              {
                title: "Encontramos",
                text: "Detectamos una cita disponible.",
              },
              {
                title: "Te avisamos",
                text: "Recibes un mensaje por WhatsApp.",
              },
            ].map((step, index) => (

              <div
                key={step.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >

                <div className="w-14 h-14 rounded-full bg-[#C60B1E] text-white flex items-center justify-center text-xl font-bold">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {step.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {step.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            ¿Qué incluye este servicio?

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {service.features.map((feature) => (

              <div
                key={feature}
                className="border rounded-3xl p-8 hover:shadow-lg transition"
              >

                <div className="text-green-500 text-3xl">

                  ✓

                </div>

                <h3 className="text-xl font-bold mt-5">

                  {feature}

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

            ¿Por qué elegir CitaEspaña?

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">

            En CitaEspaña ayudamos a personas de toda España a conseguir
            citas para procedimientos de extranjería de forma rápida,
            segura y sencilla. Nuestro sistema monitoriza continuamente
            las citas disponibles para NIE, TIE, Huellas, Arraigo,
            Reagrupación Familiar, Nacionalidad Española, Asilo,
            Residencia y muchos otros procedimientos.

          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9">

            Trabajamos con todas las provincias españolas y ofrecemos un
            seguimiento personalizado mediante WhatsApp para que no tengas
            que revisar constantemente la página oficial.

          </p>

        </div>

      </section>

      {/* FAQ */}

      <FAQ />

      {/* RELATED SERVICES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">

            Servicios relacionados

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {Object.entries(services)
              .filter(([key]) => key !== slug)
              .slice(0, 6)
              .map(([key, item]) => (

                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="border rounded-2xl p-6 hover:border-[#C60B1E] hover:shadow-lg transition"
                >

                  <h3 className="text-xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-3 text-gray-600">

                    {item.description}

                  </p>

                  <span className="inline-block mt-6 text-[#C60B1E] font-semibold">

                    Más información →

                  </span>

                </Link>

              ))}

          </div>

        </div>

      </section>
            {/* FINAL CTA */}

      <section className="bg-[#C60B1E] text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">

            ¿Necesitas ayuda con tu cita?

          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">

            Nuestro equipo está preparado para ayudarte a conseguir tu
            cita de extranjería lo antes posible.

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
              className="bg-white text-[#C60B1E] px-10 py-4 rounded-xl font-bold"
            >
              Solicitar cita
            </Link>

          </div>

        </div>

      </section>

      

    </>
  );
}