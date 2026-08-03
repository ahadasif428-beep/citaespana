"use client";

export default function PageHero({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  function handleWhatsApp() {
    const message = `
Hola CitaEs,

Quiero solicitar información sobre una cita de extranjería.

Gracias.
`;

    window.open(
      `https://api.whatsapp.com/send?phone=34672399181&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#B20A1B] to-[#920815] text-white py-28">

      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <span
          className="
          inline-flex
          items-center
          gap-2
          px-6
          py-2
          rounded-full
          bg-yellow-400/20
          border
          border-yellow-400/30
          text-[#F1BF00]
          font-bold
          uppercase
          tracking-widest
          text-sm
          "
        >
          🇪🇸 CitaEs España
        </span>

        <h1
          className="
          mt-8
          text-4xl
          md:text-6xl
          font-black
          leading-tight
          "
        >
          {title}
        </h1>

        <p
          className="
          mt-8
          max-w-3xl
          mx-auto
          text-lg
          md:text-xl
          leading-9
          text-red-100
          "
        >
          {text}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <button
            onClick={handleWhatsApp}
            className="
            bg-[#F1BF00]
            text-[#C60B1E]
            px-10
            py-4
            rounded-2xl
            font-black
            shadow-xl
            hover:shadow-2xl
            hover:scale-105
            transition-all
            duration-300
            "
          >
            ⚡ Solicitar cita
          </button>

          <a
            href="https://wa.me/34672399181"
            target="_blank"
            rel="noopener noreferrer"
            className="
            border-2
            border-white/30
            bg-white/10
            backdrop-blur
            px-10
            py-4
            rounded-2xl
            font-bold
            hover:bg-white
            hover:text-[#C60B1E]
            transition-all
            duration-300
            "
          >
            💬 WhatsApp
          </a>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-red-100">

          <span>✅ Sin pago inicial</span>

          <span>•</span>

          <span>⭐ Más de 15.000 clientes</span>

          <span>•</span>

          <span>🇪🇸 52 Provincias</span>

        </div>

      </div>
    </section>
  );
}