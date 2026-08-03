"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {

  const faqs = [
    {
      q: "¿Este servicio es legal?",
      a: "Sí. CitaEs es un servicio privado e independiente que ayuda a los usuarios a encontrar y gestionar citas de extranjería. No es una organización gubernamental."
    },
    {
      q: "¿Cómo funciona exactamente?",
      a: "Monitorizamos la disponibilidad de citas en las 52 provincias de España 24/7. Cuando aparece una cita, te avisamos y tú decides si confirmarla."
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Los precios empiezan desde 69€ dependiendo del trámite. Solo pagas cuando tu cita está confirmada."
    },
    {
      q: "¿Qué pasa si no conseguís mi cita?",
      a: "No pagas nada. No hay ningún pago por adelantado."
    },
    {
      q: "¿Estáis afiliados al gobierno?",
      a: "No. CitaEs es un servicio privado independiente y no está afiliado a ninguna institución gubernamental."
    },
    {
      q: "¿En qué provincias trabajáis?",
      a: "Trabajamos en toda España, cubriendo las 52 provincias."
    },
    {
      q: "¿Cuánto tarda conseguir una cita?",
      a: "Depende de la provincia y del trámite. Monitorizamos continuamente la disponibilidad para encontrar citas adecuadas."
    },
    {
      q: "¿Qué métodos de pago aceptáis?",
      a: "Aceptamos Bizum, PayPal, transferencia bancaria, Western Union, MoneyGram y otros métodos de pago internacionales."
    }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (

    <section className="relative py-24 bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf8] overflow-hidden">

      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[160px]" />

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="
          inline-flex
          items-center
          gap-2
          bg-red-50
          text-[#C60B1E]
          px-6
          py-2
          rounded-full
          font-bold
          tracking-widest
          uppercase
          text-sm
          ">

            <FaQuestionCircle />

            Preguntas frecuentes

          </span>

          <h2 className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          text-gray-900
          ">

            Resolvemos todas tus dudas

          </h2>

          <p className="
          mt-6
          text-lg
          text-gray-600
          max-w-3xl
          mx-auto
          leading-8
          ">

            Todo lo que necesitas saber sobre nuestro servicio
            antes de solicitar tu cita.

          </p>

        </motion.div>

        <div className="space-y-5">
                      {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
              bg-white
              rounded-3xl
              border
              border-gray-100
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              overflow-hidden
              "
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="
                w-full
                flex
                justify-between
                items-center
                px-8
                py-6
                text-left
                "
              >
                <span
                  className="
                  text-lg
                  font-bold
                  text-gray-900
                  pr-6
                  "
                >
                  {item.q}
                </span>

                <div
                  className={`
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-xl
                  transition-all
                  duration-300
                  ${
                    open === index
                      ? "bg-[#C60B1E] text-white rotate-180"
                      : "bg-red-50 text-[#C60B1E]"
                  }
                  `}
                >
                  {open === index ? "−" : "+"}
                </div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                      px-8
                      pb-8
                      text-gray-600
                      leading-8
                      border-t
                      border-red-50
                      "
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
        