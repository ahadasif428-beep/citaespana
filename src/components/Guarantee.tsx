export default function Guarantee() {

  const cards = [

    {
      icon: "💰",
      title: "Cero pago anticipado",
      text: "No pedimos ningún pago hasta que tengas la cita confirmada en tus manos."
    },

    {
      icon: "🛡️",
      title: "Sin cita, no pagas",
      text: "Si no podemos encontrar una cita adecuada para ti, no pagas absolutamente nada."
    },

    {
      icon: "🤝",
      title: "Sin compromiso",
      text: "Cancela cuando quieras. Sin contratos, sin penalizaciones y sin letra pequeña."
    },

    {
      icon: "💬",
      title: "Tú decides",
      text: "Te enviaremos la propuesta por WhatsApp. La revisas y solo confirmas si estás conforme."
    }

  ];

  return (

    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#C60B1E] via-[#b20a1b] to-[#920815] text-white">

      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 text-center">

        <div
          className="
          w-24
          h-24
          mx-auto
          rounded-full
          bg-[#F1BF00]/20
          border
          border-[#F1BF00]/30
          flex
          items-center
          justify-center
          text-5xl
          shadow-xl
          "
        >
          🛡️
        </div>

        <span className="
        inline-block
        mt-8
        bg-yellow-400/20
        text-[#F1BF00]
        px-6
        py-2
        rounded-full
        font-bold
        uppercase
        tracking-widest
        text-sm
        ">
<<<<<<< HEAD
          Garantía CitaEspaña
=======
          Garantía CitaEs
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
        </span>

        <h2 className="
        mt-6
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        ">
          Sin riesgo para ti,
          <br />
          <span className="text-[#F1BF00]">
            siempre.
          </span>
        </h2>

        <p className="
        mt-6
        text-red-100
        text-lg
        leading-8
        max-w-3xl
        mx-auto
        ">
          Más de <strong>15.000 personas</strong> ya han confiado en nosotros
          sin pagar nada hasta conseguir su cita.
        </p>

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-16
        ">          {cards.map((card, index) => (

            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-[#F1BF00]/50
              "
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#F1BF00]/5
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
              />

              <div
                className="
                relative
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-[#F1BF00]/20
                flex
                items-center
                justify-center
                text-3xl
                group-hover:scale-110
                transition-all
                duration-300
                "
              >
                {card.icon}
              </div>

              <h3
                className="
                relative
                mt-6
                text-2xl
                font-bold
                "
              >
                {card.title}
              </h3>

              <p
                className="
                relative
                mt-5
                text-red-100
                leading-8
                "
              >
                {card.text}
              </p>

            </div>

          ))}

        </div>

        <a
          href="https://wa.me/34672399181"
          target="_blank"
          className="
          inline-flex
          items-center
          gap-3
          mt-14
          bg-[#F1BF00]
          text-[#C60B1E]
          px-12
          py-5
          rounded-2xl
          font-black
          text-lg
          shadow-2xl
          hover:scale-105
          hover:shadow-yellow-400/40
          transition-all
          duration-300
          "
        >
          💬 Empezar gratis por WhatsApp
        </a>

        <p
          className="
          mt-6
          text-red-100
          text-sm
          "
        >
          ✓ No necesitas registrarte &nbsp;&nbsp; • &nbsp;&nbsp;
          ✓ Solo pagas cuando confirmas tu cita
        </p>

      </div>

    </section>

  );
}