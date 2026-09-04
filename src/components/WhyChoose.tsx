export default function WhyChoose() {


const features = [

{
icon:"🎧",
title:"Soporte humano real",
text:"Te ayudamos por WhatsApp, respondemos tus preguntas y te explicamos el proceso paso a paso."
},


{
icon:"24/7",
title:"Buscamos 24/7, tú descansas",
text:"No tienes que revisar nada. Te avisamos cuando haya una cita real disponible."
},


{
icon:"€",
title:"Precio fijo y transparente",
text:"Desde 69€. No vendemos paquetes innecesarios si solo necesitas una cita."
},


{
icon:"👛",
title:"Sin pago por adelantado",
text:"Solo pagas cuando confirmamos una cita válida que aceptas."
},


{
icon:"✓",
title:"Garantía del 100%",
text:"Si no encontramos una cita adecuada para ti, no pagas nada."
}


]



return (

<section className="py-28 bg-gradient-to-b from-white via-[#FFF8F6] to-[#FFF2F2]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center">

      <div
        className="
        inline-flex
        items-center
        gap-2
        bg-[#F1BF00]
        text-[#8B0000]
        px-6
        py-3
        rounded-full
        font-bold
        shadow-md
        text-sm
      "
      >
        ⭐ ¿POR QUÉ ELEGIR CITAES?
      </div>

      <h2
        className="
        mt-6
        text-4xl
        md:text-6xl
        font-black
        text-gray-900
        leading-tight
      "
      >
        ¿Por qué miles de personas eligen CitaEspaña?
      </h2>

      <p
        className="
        mt-6
        text-lg
        md:text-xl
        text-gray-600
        leading-8
        max-w-3xl
        mx-auto
      "
      >
        Combinamos tecnología, monitorización automática y atención humana
        para ayudarte a conseguir tu cita de extranjería sin perder tiempo.
      </p>

    </div>

    {/* Cards */}

    <div
      className="
      mt-16
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
    "
    >

      {features.map((item, index) => (

        <div
          key={index}
          className="
          group
          bg-white
          rounded-3xl
          border
          border-red-100
          p-8
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-3
          hover:border-[#C60B1E]/20
          transition-all
          duration-500
        "
        >

          {/* Icon */}

          <div
            className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-gradient-to-br
            from-[#C60B1E]
            to-[#8B0000]
            flex
            items-center
            justify-center
            text-5xl
            text-white
            shadow-xl
            group-hover:scale-110
            transition-all
            duration-500
          "
          >
            {item.icon}
          </div>

          {/* Title */}

          <h3
            className="
            mt-8
            text-2xl
            font-bold
            text-gray-900
            text-center
            group-hover:text-[#C60B1E]
            transition-colors
            duration-300
          "
          >
            {item.title}
          </h3>

          {/* Text */}

          <p
            className="
            mt-5
            text-gray-600
            leading-8
            text-center
            text-lg
          "
          >
            {item.text}
          </p>

        </div>

      ))}

    </div>

    {/* Bottom CTA */}

    <div className="mt-20 text-center">

      <a
        href="https://wa.me/34672399181"
        target="_blank"
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
        💬 Solicitar mi cita por WhatsApp
      </a>

      <p
        className="
        mt-5
        text-gray-500
        text-sm
      "
      >
        Sin pago por adelantado • Sin compromiso • Respuesta en minutos
      </p>

    </div>

  </div>
</section>
)}