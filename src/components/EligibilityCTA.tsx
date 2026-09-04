"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

export default function EligibilityCTA() {
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#fffdf4] via-[#fff7e6] to-white">

      {/* Background Blobs */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[160px]" />

      <div className="max-w-5xl mx-auto px-6">

<<<<<<< HEAD
        <div
=======
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
          className="
          relative
          overflow-hidden
          bg-white/90
          backdrop-blur-xl
          rounded-[36px]
          shadow-2xl
          border
          border-white
          p-10
          md:p-16
          text-center
          "
        >

          {/* Decorative */}

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F1BF00]/20 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C60B1E]/10 blur-3xl" />

          <span className="
          inline-flex
          items-center
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
            Comprobación de elegibilidad
          </span>

          <h2 className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          text-gray-900
          leading-tight
          ">
            ¿Puedes acceder a la
            <span className="text-[#C60B1E]">
              {" "}Regularización 2026?
            </span>
          </h2>

          <p className="
          mt-6
          text-lg
          leading-8
          text-gray-600
          max-w-3xl
          mx-auto
          ">
            Más de <strong>500.000 personas</strong> podrían cumplir los requisitos.
            Comprueba tu elegibilidad gratis en menos de
            <strong> 2 minutos.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="📱 Tu número de WhatsApp (+34...)"
              className="
              h-14
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-5
              outline-none
              transition-all
              focus:border-[#C60B1E]
              focus:ring-4
              focus:ring-red-100
              "
            />

            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="
              h-14
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-5
              outline-none
              transition-all
              focus:border-[#C60B1E]
              focus:ring-4
              focus:ring-red-100
              "
            >
              <option value="">Selecciona tu provincia</option>
              <option>Madrid</option>
              <option>Barcelona</option>
              <option>Valencia</option>
              <option>Sevilla</option>
              <option>Málaga</option>
              <option>Alicante</option>
            </select>
          </div>
                    <div className="mt-10 flex justify-center">

<<<<<<< HEAD
            <a href={`https://wa.me/34672399181?text=${encodeURIComponent(
=======
            <motion.a
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: .97,
              }}
              href={`https://wa.me/34672399181?text=${encodeURIComponent(
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
                `Hola, quiero comprobar mi elegibilidad.

WhatsApp: ${phone}

Provincia: ${province}`
              )}`}
              target="_blank"
              className="
              inline-flex
              items-center
              gap-3
              bg-[#C60B1E]
              hover:bg-[#A40818]
              text-white
              font-bold
              px-12
              py-5
              rounded-2xl
              shadow-xl
              hover:shadow-red-300/40
              transition-all
              duration-300
              "
            >
              <FaWhatsapp className="text-2xl animate-pulse" />

              Comprobar mi elegibilidad GRATIS →
<<<<<<< HEAD
            </a>
=======
            </motion.a>
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

          </div>

          <div className="
          mt-12
          grid
          md:grid-cols-3
          gap-4
          ">

            <div className="
            bg-yellow-50
            rounded-2xl
            p-5
            border
            border-yellow-100
            ">
              <p className="text-[#C60B1E] font-bold">
                ✓ Sin registro
              </p>
            </div>

            <div className="
            bg-red-50
            rounded-2xl
            p-5
            border
            border-red-100
            ">
              <p className="text-[#C60B1E] font-bold">
                ✓ Sin pago inicial
              </p>
            </div>

            <div className="
            bg-yellow-50
            rounded-2xl
            p-5
            border
            border-yellow-100
            ">
              <p className="text-[#C60B1E] font-bold">
                ✓ Respuesta por WhatsApp
              </p>
            </div>

          </div>

<<<<<<< HEAD
        </div>
=======
        </motion.div>
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

      </div>

    </section>
  );
}