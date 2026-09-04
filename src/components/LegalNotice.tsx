export default function LegalNotice() {

  return (

<section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#fffdf8] via-[#fff7f2] to-white">

  {/* Background */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[160px]" />

  <div className="max-w-6xl mx-auto px-6">

    <div
      className="
      bg-white
      rounded-[36px]
      shadow-2xl
      border
      border-gray-100
      overflow-hidden
      "
    >

      {/* Header */}

      <div className="
      bg-gradient-to-r
      from-[#C60B1E]
      to-[#A40818]
      px-10
      py-10
      text-white
      ">

        <div className="flex items-center gap-5">

          <div
            className="
            w-20
            h-20
            rounded-full
            bg-[#F1BF00]/20
            border
            border-[#F1BF00]/30
            flex
            items-center
            justify-center
            text-4xl
            "
          >
            ⚖️
          </div>

          <div>

            <span className="
            uppercase
            tracking-widest
            text-sm
            text-yellow-300
            font-bold
            ">
              Transparencia
            </span>

            <h2 className="
            mt-2
            text-4xl
            md:text-5xl
            font-black
            ">
              Aviso Legal Importante
            </h2>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="p-10 md:p-14 space-y-8 text-gray-600 leading-8 text-[17px]">        <p>
          <strong className="text-[#C60B1E] text-lg">
            CitaEspaña
          </strong>{" "}
          es un servicio profesional e independiente especializado en la búsqueda
          y gestión de citas de extranjería en toda España.
        </p>

        <p>
          CitaEspaña no es un despacho de abogados ni una agencia registrada.
          No ofrecemos asesoramiento jurídico. Para cualquier procedimiento
          legal recomendamos consultar con un abogado especializado en
          extranjería.
        </p>

        <p>
          No pertenecemos al Gobierno de España ni a ninguna institución
          pública y no disponemos de acceso preferente a las citas oficiales.
          Toda la información utilizada procede únicamente de los canales
          oficiales publicados por la Administración Española.
        </p>

        <p>
          Nuestro servicio es totalmente opcional. Cualquier persona puede
          solicitar una cita gratuitamente desde las páginas oficiales.
          Nosotros ofrecemos un servicio de monitorización continua, ahorro
          de tiempo y asistencia personalizada para aumentar las posibilidades
          de conseguir una cita disponible.
        </p>

        <p>
          Solo cobramos cuando conseguimos una cita válida y el cliente decide
          aceptarla. Nunca prometemos resultados imposibles ni garantizamos
          plazos irreales; siempre informamos de la situación real según la
          provincia y el trámite solicitado.
        </p>

        {/* Premium Notice */}

        <div
          className="
          mt-12
          bg-gradient-to-r
          from-[#FFF5E6]
          to-[#FFF9F1]
          border
          border-[#F1BF00]/40
          rounded-3xl
          p-8
          shadow-lg
          "
        >

          <h3 className="text-2xl font-black text-[#C60B1E] mb-5">
            Nuestro compromiso
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-gray-900">
                  Transparencia
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Información clara y sin letra pequeña.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <h4 className="font-bold text-gray-900">
                  Sin pago anticipado
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Solo pagas cuando tu cita queda confirmada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="font-bold text-gray-900">
                  Sin falsas promesas
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Nunca prometemos resultados que no podamos cumplir.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

  );
}