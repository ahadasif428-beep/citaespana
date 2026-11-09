
"use client";

import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Este servicio es legal?",
    a: "Sí. CitaEs es un servicio privado e independiente que ayuda a los usuarios a encontrar y gestionar citas de extranjería. No es una organización gubernamental."
  },
  {
    q: "¿Cómo funciona exactamente?",
    a: "Monitorizamos la disponibilidad de citas en las 52 provincias de España. Cuando aparece una cita, te avisamos y tú decides si confirmarla."
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Los precios dependen del trámite y la provincia. La plataforma muestra la tarifa y las condiciones antes de realizar el pago."
  },
  {
    q: "¿Qué pasa si no conseguís mi cita?",
    a: "El resultado y las condiciones dependen del servicio contratado. Consulta siempre las condiciones mostradas antes de pagar."
  },
  {
    q: "¿Estáis afiliados al gobierno?",
    a: "No. CitaEs es un servicio privado independiente y no está afiliado a ninguna institución gubernamental."
  },
  {
    q: "¿En qué provincias trabajáis?",
    a: "Trabajamos con solicitudes de toda España, incluyendo las 52 provincias."
  },
  {
    q: "¿Cuánto tarda conseguir una cita?",
    a: "Depende de la provincia, el trámite y la disponibilidad real de citas."
  },
  {
    q: "¿Qué métodos de pago aceptáis?",
    a: "La plataforma permite el pago mediante Stripe cuando está configurado en producción. También puedes contactar por WhatsApp para confirmar las opciones disponibles."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf8] py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F1BF00]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C60B1E]/10 blur-[160px]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#C60B1E]">
            <FaQuestionCircle />
            Preguntas frecuentes
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Resolvemos todas tus dudas
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Todo lo que necesitas saber sobre nuestro servicio antes de solicitar tu cita.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="pr-6 text-lg font-bold text-gray-900">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#C60B1E] text-white"
                        : "bg-red-50 text-[#C60B1E]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-red-50 px-8 pb-8 leading-8 text-gray-600">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

