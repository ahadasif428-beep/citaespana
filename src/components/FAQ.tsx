"use client";

import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  { q: "¿Este servicio es legal?", a: "Sí. CitaEspaña es un servicio privado e independiente que ayuda a los usuarios a encontrar y gestionar citas de extranjería. No es una organización gubernamental." },
  { q: "¿Cómo funciona exactamente?", a: "Monitorizamos la disponibilidad de citas en las 52 provincias de España. Cuando aparece una cita, te guiamos para continuar con la solicitud." },
  { q: "¿Cuánto cuesta?", a: "El precio depende del trámite, provincia y fecha seleccionada. La plataforma muestra la tarifa antes de realizar el pago." },
  { q: "¿Qué pasa si no conseguís mi cita?", a: "El resultado y las condiciones dependen del servicio contratado. Consulta siempre el precio y las condiciones mostradas antes de pagar." },
  { q: "¿Estáis afiliados al gobierno?", a: "No. CitaEspaña es un servicio privado independiente y no está afiliado a ninguna institución gubernamental." },
  { q: "¿En qué provincias trabajáis?", a: "Trabajamos con solicitudes de toda España, incluyendo las 52 provincias." },
  { q: "¿Cuánto tarda conseguir una cita?", a: "Depende de la provincia, trámite y disponibilidad real. El calendario de reserva muestra las opciones disponibles para tu solicitud." },
  { q: "¿Qué métodos de pago aceptáis?", a: "La plataforma permite el pago mediante Stripe cuando está configurado en producción. También puedes contactar por WhatsApp para confirmar las opciones disponibles." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf8] py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F1BF00]/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C60B1E]/10 blur-[160px]" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 animate-[slideDown_.5s_ease-out] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#C60B1E]">
            <FaQuestionCircle /> Preguntas frecuentes
          </span>
          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">Resolvemos todas tus dudas</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">Todo lo que necesitas saber sobre nuestro servicio antes de solicitar tu cita.</p>
        </div>

        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between px-8 py-6 text-left">
                  <span className="pr-6 text-lg font-bold text-gray-900">{item.q}</span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold transition-all duration-300 ${isOpen ? "rotate-180 bg-[#C60B1E] text-white" : "bg-red-50 text-[#C60B1E]"}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="animate-[slideDown_.35s_ease-out] overflow-hidden">
                    <div className="border-t border-red-50 px-8 pb-8 leading-8 text-gray-600">{item.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
