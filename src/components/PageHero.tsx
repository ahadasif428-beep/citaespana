"use client";

import SpainFlagWaving from "@/components/SpainFlagWaving";

export default function PageHero({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  function handleWhatsApp() {
    const message = `Hola CitaEs,

Quiero solicitar información sobre una cita de extranjería.

Gracias.`;

    window.open(
      `https://wa.me/34672399181?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      translate="no"
      className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#B20A1B] to-[#920815] py-24 text-white md:py-28"
    >
      <SpainFlagWaving className="right-[-12%] top-[-8%] w-[920px] max-w-[85vw] opacity-[0.26]" />

      {/* Background effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F1BF00]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/20 px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#F1BF00]">
          🇪🇸 CitaEs España
        </span>

        <h1 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-red-100 md:text-xl">
          {text}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="rounded-2xl bg-[#F1BF00] px-10 py-4 font-black text-[#C60B1E] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            ⚡ Solicitar cita
          </button>

          <a
            href="https://wa.me/34672399181"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-4 font-bold backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#C60B1E]"
          >
            💬 WhatsApp
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-red-100">
          <span>✅ Atención personalizada</span>
          <span>•</span>
          <span>⭐ Asistencia profesional</span>
          <span>•</span>
          <span>🇪🇸 Servicios en España</span>
        </div>
      </div>
    </section>
  );
}