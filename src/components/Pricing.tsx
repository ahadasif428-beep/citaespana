"use client";

<<<<<<< HEAD
import Link from "next/link";
import { PRICE_LIST } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="precios" className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf9]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[170px]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-red-50 text-[#C60B1E] px-6 py-2 rounded-full uppercase tracking-widest font-bold text-sm">Tarifas Transparentes</span>
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900">Precios claros, <span className="text-[#C60B1E]">sin sorpresas</span></h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">Estas son las tarifas urgentes para solicitudes dentro de los próximos 3 días. Para una fecha posterior se descuentan 10€.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICE_LIST.map((item) => (
            <article key={`${item.service}-${item.scope}`} className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider font-black text-[#C60B1E]">{item.scope}</p>
                  <h3 className="mt-2 text-xl font-black text-gray-900">{item.service}</h3>
                </div>
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-center shrink-0">
                  <div className="text-2xl font-black text-[#C60B1E]">{item.urgentPrice}€</div>
                  <div className="text-[11px] font-bold text-gray-500">≤ 3 días</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-gray-500">&gt; 3 días</span>
                <span className="font-black text-gray-900">{item.price}€</span>
              </div>
              <Link href={`/appointment/checkout?procedure=${encodeURIComponent(item.service)}&province=${encodeURIComponent(item.scope === "España" || item.scope === "Cualquier provincia" ? "" : item.scope)}`} className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#C60B1E] hover:bg-[#A40818] text-white py-3.5 font-black transition">Solicitar cita →</Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gray-900 text-white p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Madrid · Asilo renovación · Pradillo-40</h3>
            <p className="text-gray-300 mt-2">Tarifa urgente 130€ · Después de 3 días 120€</p>
          </div>
          <Link href="/appointment/checkout?procedure=Asilo%20renovaci%C3%B3n%20Pradillo-40&province=Madrid" className="rounded-2xl bg-[#F1BF00] text-[#7A0815] px-7 py-4 font-black">Solicitar Madrid →</Link>
        </div>

        <p className="mt-10 text-center text-gray-500 text-sm max-w-3xl mx-auto">La tarifa de CitaEspaña corresponde a nuestro servicio de gestión de cita. La disponibilidad, oficina, fecha y cualquier tasa administrativa oficial se confirman antes del pago.</p>
      </div>
    </section>
  );
}
=======
export default function Pricing() {

  function whatsapp(plan: string) {

    const whatsappNumber = "34672399181";

    const message = `Hola CitaEs,

Quiero información sobre el plan ${plan}.

Gracias.`;

    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  function eligibility() {
    window.location.href = "/eligibility-checker";
  }

  return (

<section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#fff8f5] to-[#fffdf9]">

  {/* Background */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[150px]" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[170px]" />

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

    <div className="text-center mb-20">

      <span
        className="
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
        "
      >
        Tarifas Transparentes
      </span>

      <h2
        className="
        mt-6
        text-4xl
        md:text-6xl
        font-black
        text-gray-900
        "
      >
        Precios claros,
        <span className="text-[#C60B1E]">
          {" "}sin sorpresas
        </span>
      </h2>

      <p
        className="
        mt-6
        text-lg
        text-gray-600
        max-w-3xl
        mx-auto
        leading-8
        "
      >
        Solo pagas cuando conseguimos tu cita.
        Sin costes ocultos ni pagos por adelantado.
      </p>

    </div>

    <div className="
    grid
    lg:grid-cols-3
    gap-8
    ">      {/* ESTÁNDAR */}

      <div
        className="
        group
        bg-white
        rounded-[32px]
        border
        border-gray-100
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-500
        overflow-hidden
        "
      >

        <div className="bg-gradient-to-r from-[#C60B1E] to-[#A40818] p-8 text-white">

          <h3 className="text-2xl font-black">
            ESTÁNDAR
          </h3>

          <div className="flex items-end mt-6">

            <span className="text-6xl font-black">
              €69
            </span>

            <span className="ml-2 text-red-100">
              / cita
            </span>

          </div>

          <p className="mt-3 text-red-100">
            Sin pago anticipado
          </p>

        </div>

        <div className="p-8">

          <ul className="space-y-5 text-gray-700">

            <li>✅ NIE</li>

            <li>✅ Huellas digitales</li>

            <li>✅ Certificados</li>

            <li>✅ Carta de invitación</li>

            <li>✅ Autorización de regreso</li>

          </ul>

          <button
            onClick={() => whatsapp("Estándar")}
            className="
            mt-10
            w-full
            bg-[#25D366]
            hover:bg-[#20BD5A]
            text-white
            py-4
            rounded-2xl
            font-black
            shadow-lg
            hover:shadow-xl
            transition-all
            "
          >
            Solicitar por WhatsApp
          </button>

        </div>

      </div>

      {/* PREMIUM */}

      <div
        className="
        relative
        group
        rounded-[34px]
        overflow-hidden
        shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-500
        border-2
        border-[#F1BF00]
        bg-gradient-to-br
        from-[#C60B1E]
        via-[#B30A1C]
        to-[#8E0716]
        text-white
        "
      >

        <div className="
        absolute
        top-5
        right-5
        bg-[#F1BF00]
        text-[#C60B1E]
        px-5
        py-2
        rounded-full
        font-black
        text-xs
        uppercase
        ">
          Más popular
        </div>

        <div className="p-8">

          <h3 className="text-2xl font-black">
            PREMIUM
          </h3>

          <div className="flex items-end mt-6">

            <span className="text-6xl font-black">
              €149
            </span>

            <span className="ml-2 text-red-100">
              / cita
            </span>

          </div>

          <p className="mt-3 text-red-100">
            Sin pago anticipado
          </p>

          <ul className="space-y-5 mt-10">

            <li>⭐ TIE</li>

            <li>⭐ Renovaciones</li>

            <li>⭐ Arraigo</li>

            <li>⭐ Reagrupación familiar</li>

          </ul>

          <button
            onClick={() => whatsapp("Premium")}
            className="
            mt-10
            w-full
            bg-[#F1BF00]
            text-[#C60B1E]
            py-4
            rounded-2xl
            font-black
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-xl
            "
          >
            Solicitar por WhatsApp
          </button>

        </div>

      </div>      {/* REGULARIZACIÓN */}

      <div
        className="
        relative
        group
        bg-white
        rounded-[32px]
        border-2
        border-[#F1BF00]
        shadow-xl
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-500
        overflow-hidden
        "
      >

        <div
          className="
          absolute
          top-5
          right-5
          bg-[#C60B1E]
          text-white
          px-4
          py-2
          rounded-full
          text-xs
          font-black
          uppercase
          "
        >
          BOE 2026
        </div>

        <div
          className="
          bg-gradient-to-r
          from-[#F1BF00]
          to-[#D9A500]
          p-8
          text-[#7A0815]
          "
        >

          <h3 className="text-2xl font-black">
            REGULARIZACIÓN 2026
          </h3>

          <div className="flex items-end mt-6">

            <span className="text-6xl font-black">
              €300
            </span>

            <span className="ml-2">
              / paquete
            </span>

          </div>

          <p className="mt-3 font-semibold">
            Todo incluido
          </p>

        </div>

        <div className="p-8">

          <ul className="space-y-5 text-gray-700">

            <li>✔ Regularización 2026</li>

            <li>✔ Protección Internacional</li>

            <li>✔ Revisión de elegibilidad</li>

            <li>✔ Preparación de documentos</li>

            <li>✔ Seguimiento completo</li>

          </ul>

          <button
            onClick={eligibility}
            className="
            mt-10
            w-full
            bg-[#C60B1E]
            hover:bg-[#A40818]
            text-white
            py-4
            rounded-2xl
            font-black
            shadow-lg
            hover:shadow-xl
            transition-all
            "
          >
            Comprobar elegibilidad →
          </button>

        </div>

      </div>

    </div>

    <div className="mt-16 text-center">

      <p className="text-gray-500 leading-8 max-w-2xl mx-auto">
        <span className="font-bold text-[#C60B1E]">
          CitaEs
        </span>{" "}
        es un servicio independiente especializado en la búsqueda
        de citas de extranjería. Solo pagas cuando conseguimos una
        cita válida para ti.
      </p>

    </div>

  </div>

</section>

  );
}
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
