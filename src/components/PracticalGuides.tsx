export default function PracticalGuides() {

  const guides = [

    {
      title: "¿No hay citas disponibles?",
      text: "Estrategias para conseguir tu cita incluso cuando parece que no hay disponibilidad.",
      color: "from-[#C60B1E] to-[#A40818]",
      button: "text-[#C60B1E]"
    },

    {
      title: "¿Mi pasaporte está caducado?",
      text: "Qué hacer cuando tus documentos han caducado antes de poder solicitar una cita.",
      color: "from-[#F1BF00] to-[#D8A400]",
      button: "text-[#B8860B]"
    },

    {
      title: "¿Arraigo sin contrato laboral?",
      text: "Cómo demostrar vínculos sociales y laborales sin un contrato formal.",
      color: "from-[#C60B1E] to-[#7A0612]",
      button: "text-[#C60B1E]"
    },

    {
      title: "Mi solicitud fue denegada",
      text: "Qué recursos y opciones tienes después de recibir una denegación.",
      color: "from-[#F1BF00] to-[#E0B000]",
      button: "text-[#B8860B]"
    },

    {
      title: "Problemas con el empadronamiento",
      text: "Cómo obtener el empadronamiento histórico y resolver problemas con el ayuntamiento.",
      color: "from-[#C60B1E] to-[#A40818]",
      button: "text-[#C60B1E]"
    },

    {
      title: "Antecedentes penales",
      text: "Cómo solicitar el certificado y qué hacer si tienes antecedentes.",
      color: "from-[#F1BF00] to-[#D8A400]",
      button: "text-[#B8860B]"
    }

  ];

  return (

<section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf9]">

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[150px]" />

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
      uppercase
      tracking-widest
      font-bold
      text-sm
      ">
        Guías prácticas
      </span>

      <h2 className="
      mt-6
      text-4xl
      md:text-6xl
      font-black
      text-gray-900
      ">
        Problemas comunes
      </h2>

      <p className="
      mt-6
      text-lg
      text-gray-600
      max-w-3xl
      mx-auto
      leading-8
      ">
        Las preguntas más frecuentes que recibimos por WhatsApp,
        respondidas de forma clara y sencilla.
      </p>

      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      mt-16
      "></div>
              {guides.map((item, index) => (

          <div
            key={index}
            className="
            group
            bg-white
            rounded-[30px]
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
              relative
              bg-gradient-to-r
              ${item.color}
              h-36
              p-8
              flex
              items-end
              overflow-hidden
              `}
            >

              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />

              <h3
                className="
                relative
                text-white
                text-2xl
                font-black
                leading-snug
                "
              >
                {item.title}
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
                {item.text}
              </p>

              <button
                className={`
                mt-6
                inline-flex
                items-center
                gap-2
                font-bold
                ${item.button}
                group-hover:translate-x-2
                transition-all
                duration-300
                `}
              >
                Leer guía
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
          Ver todas las guías prácticas →
        </button>

      </div>

    </div>

</section>

  );
}