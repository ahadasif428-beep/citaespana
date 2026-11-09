"use client";

import { useState } from "react";
import { appointmentData, provinceList } from "@/data/appointmentOptions";
import { FaWhatsapp } from "react-icons/fa";
import SpainFlagWaving from "@/components/SpainFlagWaving";

export default function AppointmentHero() {
  const [province, setProvince] = useState("");
  const [procedure, setProcedure] = useState("");
  const [office, setOffice] = useState("");
  const availableProcedures = province ? appointmentData[province]?.procedures || [] : [];
  const availableOffices = province && procedure ? appointmentData[province]?.offices?.[procedure] || [] : [];

  function sendWhatsapp() {
    if (!province || !procedure || !office) return;
    const message = `Hola CitaEspaña, quiero solicitar una cita.\n\nProvincia: ${province}\nTrámite: ${procedure}\nOficina: ${office}`;
    window.open(`https://api.whatsapp.com/send?phone=34672399181&text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] py-16 md:py-24">
      <SpainFlagWaving className="right-[-10%] top-[-5%] w-[900px] max-w-[84vw] opacity-[0.2]" />
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-yellow-200/50 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="animate-[slideDown_.6s_ease-out]"><div className="-translate-x-0">
          <span className="inline-flex bg-white shadow-lg px-5 py-2 rounded-full text-[#C60B1E] font-bold">🇪🇸 CitaEspaña</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mt-7 text-gray-900">Solicita tu <span className="block text-[#C60B1E]">cita de extranjería</span> sin estrés</h1>
          <p className="text-lg md:text-xl text-gray-600 mt-6 leading-8">Selecciona provincia, trámite y oficina. Te ayudamos a gestionar tu solicitud y continuar por WhatsApp.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-9">
            {[['52','Provincias'],['24/7','Monitorización'],['€0','Pago inicial']].map(([n,t])=><div key={t} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center"><div className="text-2xl font-black text-[#C60B1E]">{n}</div><div className="text-xs sm:text-sm text-gray-500 mt-1">{t}</div></div>)}
          </div>
        </div>
</div>
        <div className="animate-[slideDown_.7s_ease-out] bg-white rounded-[28px] shadow-2xl border border-gray-100 p-6 sm:p-8">
          <span className="inline-block bg-red-50 text-[#C60B1E] font-bold px-4 py-2 rounded-full">📋 SOLICITAR CITA</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-5">Cuéntanos qué necesitas</h2>
          <p className="text-gray-500 mt-2">Te llevaremos al siguiente paso por WhatsApp.</p>
          <label className="block mt-7 font-bold text-gray-700">1. Provincia</label>
          <select value={province} onChange={e=>{setProvince(e.target.value);setProcedure("");setOffice("");}} className="w-full h-14 border border-gray-200 bg-gray-50 px-4 rounded-xl mt-2 outline-none focus:border-[#C60B1E] focus:ring-4 focus:ring-red-100"><option value="">Selecciona tu provincia</option>{provinceList.map((p) => <option key={p} value={p}>{p}</option>)}</select>
          <label className="block mt-5 font-bold text-gray-700">2. Trámite</label>
          <select disabled={!province} value={procedure} onChange={e=>{setProcedure(e.target.value);setOffice("");}} className="w-full h-14 border border-gray-200 bg-gray-50 px-4 rounded-xl mt-2 outline-none disabled:opacity-50 focus:border-[#C60B1E]"><option value="">Selecciona trámite</option>{availableProcedures.map(p=><option key={p} value={p}>{p}</option>)}</select>
          <label className="block mt-5 font-bold text-gray-700">3. Oficina</label>
          <select disabled={!procedure} value={office} onChange={e=>setOffice(e.target.value)} className="w-full h-14 border border-gray-200 bg-gray-50 px-4 rounded-xl mt-2 outline-none disabled:opacity-50 focus:border-[#C60B1E]"><option value="">Selecciona oficina</option>{availableOffices.map(o=><option key={o} value={o}>{o}</option>)}</select>
          <button disabled={!office} onClick={sendWhatsapp} className="mt-7 w-full h-14 rounded-xl bg-[#25D366] text-white font-bold shadow-lg disabled:bg-gray-300 disabled:text-gray-500 flex items-center justify-center gap-2"><FaWhatsapp className="text-2xl"/> Solicitar por WhatsApp</button>
          <p className="text-center text-xs text-gray-500 mt-4">✓ Sin pago inicial · ✓ Toda España · ✓ Atención humana</p>
        </div>
      </div>
    </section>
  );
}
