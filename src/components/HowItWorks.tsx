export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cuéntanos tu trámite y tu provincia",
      text: "Dinos qué trámite necesitas (NIE, TIE, permiso de residencia, asilo, nacionalidad, visado de estudiante, etc.), en qué provincia estás y tu disponibilidad.",
    },
    {
      number: "02",
      title: "Encontramos tu cita disponible las 24 horas",
      text: "Monitorizamos continuamente las citas disponibles en oficinas de extranjería y comisarías de tu zona, para que no tengas que estar revisando la pantalla.",
    },
    {
      number: "03",
      title: "Confirmamos tu cita y solo pagas entonces",
      text: "Cuando encontramos una cita adecuada para tu caso, te enviamos los detalles para que los revises. Solo pagas después de la confirmación.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="bg-[#fafafa] py-20 md:py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-red-50 text-[#C60B1E] font-bold px-5 py-2 rounded-full">
            Cómo funciona
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
            ¿Cómo funciona CitaEspaña?
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Sin registro. Sin formularios interminables. Solo WhatsApp.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
              group
              bg-white
              rounded-3xl
              border
              border-gray-100
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              p-8
              min-h-[420px]
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-red-50
                text-[#C60B1E]
                flex
                items-center
                justify-center
                text-2xl
                font-black
                group-hover:bg-[#C60B1E]
                group-hover:text-white
                transition-all
                duration-300
                "
              >
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-8 text-gray-900 leading-snug">
                {step.title}
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                {step.text}
              </p>

              <div
                className="
                mt-8
                w-16
                h-1
                rounded-full
                bg-[#C60B1E]
                group-hover:w-28
                transition-all
                duration-300
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}