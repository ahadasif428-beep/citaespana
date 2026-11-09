
export default function Process() {
  const steps = [
    {
      icon: "🗺️",
      title: "Selecciona tu provincia",
      text: "Elige la provincia donde necesitas realizar tu trámite de extranjería.",
    },
    {
      icon: "📋",
      title: "Selecciona el trámite",
      text: "Consulta los procedimientos disponibles: NIE, TIE, huellas, renovaciones y permisos de residencia.",
    },
    {
      icon: "🏢",
      title: "Selecciona la oficina",
      text: "Consulta las oficinas correspondientes a tu provincia y procedimiento.",
    },
    {
      icon: "✅",
      title: "Recibe información",
      text: "Contacta con nuestro equipo por WhatsApp para recibir información sobre tu solicitud.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-black text-gray-900 md:text-5xl">
          ¿Cómo funciona?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-600">
          Sigue estos pasos para consultar y solicitar asistencia con tu cita
          de extranjería en España.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{step.icon}</div>

              <div className="mt-5 font-bold text-[#C60B1E]">
                Paso 0{index + 1}
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
