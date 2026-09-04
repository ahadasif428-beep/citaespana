"use client";

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
