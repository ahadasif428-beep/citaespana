"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { provinces, procedures } from "@/data/options";

export default function Hero() {
  const [province, setProvince] = useState("");
  const [procedure, setProcedure] = useState("");
  const [phone, setPhone] = useState("");

  const [time, setTime] = useState({
    days: 6,
    hours: 9,
    minutes: 1,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "34672399181";

  const whatsappLink = createWhatsAppLink(
    whatsappNumber,
    "",
    "",
    province,
    procedure
  );
async function submit() {
  if (!province || !procedure || !phone) return;

  const message = `Nueva solicitud CitaEs

Provincia: ${province}
Trámite: ${procedure}
WhatsApp: ${phone}`;

  try {
    await supabase.from("leads").insert({
      name: "Website Lead",
      phone,
      province,
      procedure,
      status: "Nuevo",
    });
  } catch (err) {
    console.log(err);
  }

  window.open(
    `https://wa.me/34672399181?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

  return (
    <>
      {/* TOP BAR */}

      <div className="bg-[#C60B1E] text-white text-center py-3 font-semibold">

        🇪🇸 REGULARIZACIÓN 2026 — Comprueba tu elegibilidad GRATIS

      </div>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] py-16">

        {/* Background */}

        <div className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-red-200/40 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-200/40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center bg-white shadow-lg px-5 py-2 rounded-full text-[#C60B1E] font-bold">

              ⭐ Más de 15.000 clientes en España

            </span>

            <h1 className="text-6xl font-extrabold leading-tight mt-8 text-gray-900">

              Solicita tu

              <span className="block text-[#C60B1E]">

                cita de extranjería

              </span>

              en España

            </h1>

            <p className="text-xl text-gray-600 mt-8 leading-9">

              Monitorizamos citas de NIE, TIE, Huellas,
              Asilo, Arraigo y Extranjería las 24 horas del día
              para conseguir tu cita lo antes posible.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#formulario"
                className="bg-[#C60B1E] hover:bg-[#A40818] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:-translate-y-1"
              >
                Solicitar cita →
              </a>

              <a
                href="/eligibility-checker"
                className="border-2 border-[#C60B1E] text-[#C60B1E] hover:bg-[#C60B1E] hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl font-bold"
              >
                Comprobar elegibilidad
              </a>

            </div>

            <div className="grid grid-cols-4 gap-4 mt-14">

              {[
                ["15K+", "Solicitudes"],
                ["52", "Provincias"],
                ["24/7", "Monitorización"],
                ["98%", "Éxito"],
              ].map(([n, t]) => (

                <motion.div
                  key={t}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-lg p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-[#C60B1E]">

                    {n}

                  </h3>

                  <p className="text-sm text-gray-500 mt-2">

                    {t}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>
          {/* RIGHT */}

<motion.div
  id="formulario"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  <div className="bg-white rounded-[30px] shadow-2xl border border-gray-100 p-8">

    <div className="text-center">

      <span className="inline-block bg-red-100 text-[#C60B1E] font-bold px-5 py-2 rounded-full">

        🇪🇸 CITA GRATUITA

      </span>

      <h2 className="text-3xl font-extrabold text-gray-900 mt-5">

        Solicita tu cita ahora

      </h2>

      <p className="text-gray-500 mt-2">

        Solo pagas cuando conseguimos tu cita.

      </p>

    </div>

    {/* Province */}

    <div className="mt-8">

      <label className="font-semibold text-gray-700">

        Provincia

      </label>

      <select
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        className="w-full mt-2 h-14 rounded-xl border border-gray-300 px-4 focus:border-[#C60B1E] outline-none"
      >
        <option value="">

          Selecciona provincia

        </option>

        {provinces.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}

      </select>

    </div>

    {/* Procedure */}

    <div className="mt-5">

      <label className="font-semibold text-gray-700">

        Trámite

      </label>

      <select
        value={procedure}
        onChange={(e) => setProcedure(e.target.value)}
        className="w-full mt-2 h-14 rounded-xl border border-gray-300 px-4 focus:border-[#C60B1E] outline-none"
      >
        <option value="">

          Selecciona trámite

        </option>

        {procedures.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}

      </select>

    </div>

    {/* Phone */}

    <div className="mt-5">

      <label className="font-semibold text-gray-700">

        WhatsApp

      </label>

      <input
        type="tel"
        pattern="^\+[1-9][0-9]{7,14}$"
        placeholder="+34 612345678"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mt-2 h-14 rounded-xl border border-gray-300 px-4 focus:border-[#C60B1E] outline-none"
      />

      <p className="text-xs text-gray-500 mt-2">

        Ejemplo: +34 612345678

      </p>

    </div>

    {/* Button */}

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={submit}
      disabled={!province || !procedure || !phone}
      className={`w-full mt-8 h-14 rounded-xl font-bold transition-all duration-300

      ${
        !province || !procedure || !phone
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-[#C60B1E] hover:bg-[#A40818] text-white shadow-xl"
      }`}
    >

      ⚡ Solicitar cita GRATIS

    </motion.button>

    <div className="grid grid-cols-3 gap-3 mt-8">

      <div className="bg-gray-50 rounded-xl p-4 text-center">

        <div className="text-green-600 font-bold">

          ✓

        </div>

        <p className="text-xs mt-2">

          Sin pago inicial

        </p>

      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center">

        <div className="text-green-600 font-bold">

          ✓

        </div>

        <p className="text-xs mt-2">

          24/7 Monitorización

        </p>

      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center">

        <div className="text-green-600 font-bold">

          ✓

        </div>

        <p className="text-xs mt-2">

          Toda España

        </p>

      </div>

    </div>

  </div>
</motion.div>
{/* WHATSAPP BUTTON */}

<motion.a
  href={whatsappLink}
  target="_blank"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  className="mt-6 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white h-16 rounded-2xl font-bold text-lg shadow-xl transition-all"
>
  <FaWhatsapp className="text-3xl" />
  Hablar por WhatsApp
</motion.a>

{/* COUNTDOWN */}

<div className="mt-10">

  <h3 className="text-center font-bold text-xl text-gray-800">

    Tiempo restante

  </h3>

  <p className="text-center text-gray-500 mt-2">

    Miles de personas ya están solicitando citas.

  </p>

  <div className="grid grid-cols-4 gap-4 mt-8">

    {[
      ["Días", time.days],
      ["Horas", time.hours],
      ["Min", time.minutes],
      ["Seg", time.seconds],
    ].map(([label, value]) => (

      <motion.div
        key={label}
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 text-center"
      >

        <div className="text-4xl font-extrabold text-[#C60B1E]">

          {String(value).padStart(2, "0")}

        </div>

        <div className="text-sm text-gray-500 mt-2">

          {label}

        </div>

      </motion.div>

    ))}

  </div>

</div>

{/* LIVE COUNTER */}

<motion.div
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="mt-8 bg-gradient-to-r from-[#C60B1E] to-[#A40818] text-white rounded-2xl p-5 text-center shadow-xl"
>

  🔥 316 personas han comprobado su elegibilidad hoy

</motion.div>

{/* TRUSTPILOT */}

<div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

  <div className="flex justify-center text-yellow-400 text-2xl">

    ★★★★★

  </div>

  <h4 className="text-center font-bold text-lg mt-3">

    Excelente en Trustpilot

  </h4>

  <p className="text-center text-gray-500 mt-2">

    Más de 15.000 clientes satisfechos en toda España.

  </p>

</div>

</div>



{/* MOBILE CTA */}

<div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-4 flex gap-3 z-50">

  <a
    href={whatsappLink}
    target="_blank"
    className="flex-1 h-14 rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-2 font-bold"
  >
    <FaWhatsapp className="text-2xl" />
    WhatsApp
  </a>

  <button
    onClick={submit}
    disabled={!province || !procedure || !phone}
    className={`flex-1 h-14 rounded-xl font-bold ${
      !province || !procedure || !phone
        ? "bg-gray-300 text-gray-500"
        : "bg-[#C60B1E] text-white"
    }`}
  >
    Solicitar
  </button>

</div>

</section>

</>
);
}