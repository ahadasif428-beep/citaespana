export default function Guidelines() {

  const cards = [

    {
      title: "Guía completa de Regularización 2026",
      text: "Requisitos, documentos, plazos y cómo solicitarla.",
      color: "from-[#C60B1E] to-[#A40818]",
      button: "text-[#C60B1E]"
    },

    {
      title: "Documentos necesarios",
      text: "Lista completa de documentos válidos y dónde obtenerlos.",
      color: "from-[#F1BF00] to-[#D9A600]",
      button: "text-[#B8860B]"
    },

    {
      title: "Cómo obtener el empadronamiento",
      text: "Paso a paso, incluso sin contrato de alquiler.",
      color: "from-[#C60B1E] to-[#7D0714]",
      button: "text-[#C60B1E]"
    }

  ];

  return (

<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#fff9f4] to-[#fffdf9]">

  {/* Background */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[160px]" />

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="
      inline-block
      bg-red-50
      text-[#C60B1E]
      px-6
      py-2
      rounded-full
      font-bold
      uppercase
      tracking-widest
      text-sm
      ">
        Guías Oficiales
      </span>

      <h2 className="
      mt-6
      text-4xl
      md:text-6xl
      font-black
      text-gray-900
      leading-tight
      ">
        Guías de
        <span className="text-[#C60B1E]">
          {" "}Regularización 2026
        </span>
      </h2>

      <p className="
      mt-6
      text-lg
      text-gray-600
      max-w-3xl
      mx-auto
      leading-8
      ">
        El plazo ya está abierto.
        Consulta nuestras guías paso a paso antes de solicitar tu cita.
      </p>

    </div>

    <div className="
    grid
    md:grid-cols-3
    gap-8
    mt-16
    ">      {cards.map((card, index) => (

        <div
          key={index}
          className="
          group
          bg-white
          rounded-[28px]
          overflow-hidden
          border
          border-gray-100
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-3
          transition-all
          duration-500
          "
        >

          <div
            className={`
            bg-gradient-to-r
            ${card.color}
            h-36
            flex
            items-end
            p-8
            relative
            overflow-hidden
            `}
          >

            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10" />

            <h3
              className="
              relative
              text-white
              text-2xl
              font-black
              leading-snug
              "
            >
              {card.title}
            </h3>

          </div>

          <div className="p-8">

            <p
              className="
              text-gray-600
              leading-8
              min-h-[90px]
              "
            >
              {card.text}
            </p>

            <button
              className={`
              mt-6
              inline-flex
              items-center
              gap-2
              font-bold
              ${card.button}
              group-hover:translate-x-2
              transition-all
              duration-300
              `}
            >
              Leer más
              <span>→</span>
            </button>

          </div>

        </div>

      ))}

    </div>

    <div className="flex justify-center mt-16">

      <button
        className="
        bg-[#C60B1E]
        hover:bg-[#A40818]
        text-white
        px-12
        py-5
        rounded-2xl
        font-black
        text-lg
        shadow-xl
        hover:shadow-2xl
        hover:scale-105
        transition-all
        duration-300
        "
      >
        Ver toda la información sobre Regularización 2026 →
      </button>

    </div>

  </div>

</section>

  );
}