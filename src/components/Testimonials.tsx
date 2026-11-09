
"use client";

import Link from "next/link";
import { PRICE_LIST } from "@/data/pricing";

export default function Pricing() {
  const whatsapp = (plan: string) => {
    const whatsappNumber = "34672399181";

    const message = `Hola CitaEs,

Quiero información sobre el plan ${plan}.

Gracias.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="precios"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf9] py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F1BF00]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C60B1E]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-50 px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#C60B1E]">
            Tarifas Transparentes
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-6xl">
            Precios claros,
            <span className="text-[#C60B1E]"> sin sorpresas</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estas son las tarifas para solicitudes dentro de los próximos
            3 días. Para una fecha posterior se descuentan 10€.
          </p>
        </div>

        {/* DYNAMIC PRICING */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICE_LIST.map((item) => {
            const province =
              item.scope === "España" ||
              item.scope === "Cualquier provincia"
                ? ""
                : item.scope;

            const checkoutUrl = `/appointment/checkout?procedure=${encodeURIComponent(
              item.service
            )}&province=${encodeURIComponent(province)}`;

            return (
              <article
                key={`${item.service}-${item.scope}`}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#C60B1E]">
                      {item.scope}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-gray-900">
                      {item.service}
                    </h3>
                  </div>

                  <div className="shrink-0 rounded-2xl bg-red-50 px-4 py-3 text-center">
                    <div className="text-2xl font-black text-[#C60B1E]">
                      {item.urgentPrice}€
                    </div>

                    <div className="text-[11px] font-bold text-gray-500">
                      ≤ 3 días
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-gray-500">&gt; 3 días</span>

                  <span className="font-black text-gray-900">
                    {item.price}€
                  </span>
                </div>

                <Link
                  href={checkoutUrl}
                  className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#C60B1E] py-3.5 font-black text-white transition hover:bg-[#A40818]"
                >
                  Solicitar cita →
                </Link>

                <button
                  type="button"
                  onClick={() => whatsapp(item.service)}
                  className="mt-3 inline-flex w-full justify-center rounded-2xl border border-[#25D366] py-3 font-bold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                >
                  Consultar por WhatsApp
                </button>
              </article>
            );
          })}
        </div>

        {/* MADRID SPECIAL */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-900 p-7 text-white md:flex-row md:p-9">
          <div>
            <h3 className="text-2xl font-black">
              Madrid · Asilo renovación · Pradillo-40
            </h3>

            <p className="mt-2 text-gray-300">
              Tarifa urgente 130€ · Después de 3 días 120€
            </p>
          </div>

          <Link
            href="/appointment/checkout?procedure=Asilo%20renovaci%C3%B3n%20Pradillo-40&province=Madrid"
            className="rounded-2xl bg-[#F1BF00] px-7 py-4 font-black text-[#7A0815] transition hover:bg-yellow-400"
          >
            Solicitar Madrid →
          </Link>
        </div>

        {/* SERVICE PLANS */}
        <div className="mx-auto mb-16 mt-24 max-w-3xl text-center">
          <h2 className="text-3xl font-black text-gray-900 md:text-5xl">
            Nuestros planes de servicio
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Consulta las opciones de asistencia disponibles para tus
            trámites de extranjería.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* STANDARD */}
          <article className="group overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#C60B1E] to-[#A40818] p-8 text-white">
              <h3 className="text-2xl font-black">ESTÁNDAR</h3>

              <div className="mt-6 flex items-end">
                <span className="text-6xl font-black">€69</span>
                <span className="ml-2 text-red-100">/ cita</span>
              </div>

              <p className="mt-3 text-red-100">
                Consulta las condiciones
              </p>
            </div>

            <div className="p-8">
              <ul className="space-y-5 text-gray-700">
                <li>✓ NIE</li>
                <li>✓ Huellas digitales</li>
                <li>✓ Certificados</li>
                <li>✓ Carta de invitación</li>
                <li>✓ Autorización de regreso</li>
              </ul>

              <button
                type="button"
                onClick={() => whatsapp("Estándar")}
                className="mt-10 w-full rounded-2xl bg-[#25D366] py-4 font-black text-white shadow-lg transition hover:bg-[#20BD5A] hover:shadow-xl"
              >
                Solicitar por WhatsApp
              </button>
            </div>
          </article>

          {/* PREMIUM */}
          <article className="relative overflow-hidden rounded-[34px] border-2 border-[#F1BF00] bg-gradient-to-br from-[#C60B1E] via-[#B30A1C] to-[#8E0716] text-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute right-5 top-5 rounded-full bg-[#F1BF00] px-5 py-2 text-xs font-black uppercase text-[#C60B1E]">
              Más popular
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black">PREMIUM</h3>

              <div className="mt-6 flex items-end">
                <span className="text-6xl font-black">€149</span>
                <span className="ml-2 text-red-100">/ cita</span>
              </div>

              <p className="mt-3 text-red-100">
                Consulta las condiciones
              </p>

              <ul className="mt-10 space-y-5">
                <li>⭐ TIE</li>
                <li>⭐ Renovaciones</li>
                <li>⭐ Arraigo</li>
                <li>⭐ Reagrupación familiar</li>
              </ul>

              <button
                type="button"
                onClick={() => whatsapp("Premium")}
                className="mt-10 w-full rounded-2xl bg-[#F1BF00] py-4 font-black text-[#C60B1E] shadow-xl transition duration-300 hover:scale-[1.02]"
              >
                Solicitar por WhatsApp
              </button>
            </div>
          </article>

          {/* REGULARIZATION */}
          <article className="relative overflow-hidden rounded-[32px] border-2 border-[#F1BF00] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute right-5 top-5 rounded-full bg-[#C60B1E] px-4 py-2 text-xs font-black uppercase text-white">
              BOE 2026
            </div>

            <div className="bg-gradient-to-r from-[#F1BF00] to-[#D9A500] p-8 text-[#7A0815]">
              <h3 className="text-2xl font-black">
                REGULARIZACIÓN 2026
              </h3>

              <div className="mt-6 flex items-end">
                <span className="text-6xl font-black">€300</span>
                <span className="ml-2">/ paquete</span>
              </div>

              <p className="mt-3 font-semibold">
                Consulta lo que incluye
              </p>
            </div>

            <div className="p-8">
              <ul className="space-y-5 text-gray-700">
                <li>✓ Regularización 2026</li>
                <li>✓ Protección Internacional</li>
                <li>✓ Revisión de elegibilidad</li>
                <li>✓ Preparación de documentos</li>
                <li>✓ Seguimiento del trámite</li>
              </ul>

              <Link
                href="/eligibility-checker"
                className="mt-10 inline-flex w-full justify-center rounded-2xl bg-[#C60B1E] py-4 font-black text-white shadow-lg transition hover:bg-[#A40818] hover:shadow-xl"
              >
                Comprobar elegibilidad →
              </Link>
            </div>
          </article>
        </div>

        {/* FOOTNOTE */}
        <p className="mx-auto mt-16 max-w-3xl text-center text-sm leading-8 text-gray-500">
          <span className="font-bold text-[#C60B1E]">CitaEs</span> es un
          servicio independiente especializado en la gestión y búsqueda de
          citas de extranjería. La disponibilidad, oficina, fecha, alcance
          del servicio y cualquier tasa administrativa oficial se confirman
          antes del pago.
        </p>
      </div>
    </section>
  );
}
