import Link from "next/link";

export default function EligibilityBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F1BF00] via-[#FFD84D] to-[#F1BF00] relative overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
      <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-[#C60B1E]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <div>

            <span className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-white
              text-[#C60B1E]
              font-bold
              shadow-md
              text-sm
            ">
              ⏳ Plazo abierto · Cierra el 30 de junio
            </span>

            <h2 className="
              mt-6
              text-4xl
              md:text-5xl
              font-black
              text-[#111827]
              leading-tight
            ">
              ¿Eres elegible para la
              <br />
              <span className="text-[#C60B1E]">
                Regularización 2026?
              </span>
            </h2>

            <p className="
              mt-5
              text-lg
              text-gray-800
              max-w-2xl
              leading-8
            ">
              Más de <strong>500.000 personas</strong> podrían solicitarla.
              Comprueba tu elegibilidad gratuitamente en menos de
              <strong> 2 minutos.</strong>
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex-shrink-0">

            <Link
              href="/eligibility-checker"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#C60B1E]
                hover:bg-[#A40818]
                text-white
                px-10
                py-5
                rounded-2xl
                font-bold
                text-lg
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Comprobar elegibilidad
              <span className="text-xl">→</span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}