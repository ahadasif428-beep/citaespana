"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { provinces, procedures } from "@/data/options";
import SpainFlagWaving from "@/components/SpainFlagWaving";

export default function Hero() {
  const router = useRouter();
  const [province, setProvince] = useState("");
  const [procedure, setProcedure] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState({ days: 6, hours: 9, minutes: 1, seconds: 14 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const whatsappNumber = "34672399181";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola CitaEspaña, necesito una cita. Provincia: ${province || ""}. Trámite: ${procedure || ""}`,
  )}`;

  function submit() {
    if (!province || !procedure || !phone) return;
    const params = new URLSearchParams({ province, procedure, whatsapp: phone });
    router.push(`/appointment/checkout?${params.toString()}`);
  }

  const stats = [
    ["52", "Provincias"],
    ["24/7", "Monitorización"],
    ["€45+", "Precios"],
    ["ES", "Toda España"],
  ];

  return (
    <section id="formulario" className="relative overflow-hidden bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] py-14 md:py-20">
      <SpainFlagWaving className="right-[-12%] top-[-2%] z-0 w-[1100px] max-w-[95vw] opacity-[0.18]" />
      <div className="absolute -top-40 -left-32 h-[450px] w-[450px] rounded-full bg-red-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 rounded-2xl bg-[#C60B1E] px-4 py-3 text-center font-semibold text-white shadow-lg">
          🇪🇸 CitaEspaña · Atención para citas de extranjería en toda España
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-[slideDown_.6s_ease-out] text-center lg:pt-8 lg:text-left">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-[#C60B1E] shadow-lg sm:px-5 sm:text-sm">
              ⭐ Atención para toda España
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Solicita tu <span className="block text-[#C60B1E]">cita de extranjería</span> en España
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
              Consulta provincia, trámite y fecha. Te mostramos el precio según el servicio y te llevamos al siguiente paso.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#formulario" className="w-full rounded-2xl bg-[#C60B1E] px-8 py-4 text-center font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#A40818] sm:w-auto">
                Solicitar cita →
              </a>
              <a href="/eligibility-checker" className="w-full rounded-2xl border-2 border-[#C60B1E] px-8 py-4 text-center font-bold text-[#C60B1E] transition hover:bg-[#C60B1E] hover:text-white sm:w-auto">
                Comprobar elegibilidad
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-black text-[#C60B1E]">{number}</div>
                  <div className="mt-1 text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold shadow">✓ Consulta de tarifa</span>
              <span className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold shadow">✓ Respuesta rápida</span>
              <span className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold shadow">✓ Toda España</span>
            </div>
          </div>

          <div className="animate-[slideDown_.7s_ease-out]">
            <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-2xl md:p-8">
              <div className="text-center">
                <span className="inline-block rounded-full bg-red-100 px-5 py-2 font-bold text-[#C60B1E]">🇪🇸 SOLICITA TU CITA</span>
                <h2 className="mt-5 text-2xl font-extrabold text-gray-900 md:text-3xl">Solicita tu cita</h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">Selecciona provincia, trámite y WhatsApp para continuar.</p>
              </div>

              <label className="mt-7 block text-sm font-semibold text-gray-700" htmlFor="hero-province">Provincia</label>
              <select id="hero-province" value={province} onChange={(e) => setProvince(e.target.value)} className="mt-2 h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#C60B1E] focus:ring-4 focus:ring-red-100">
                <option value="">Selecciona provincia</option>
                {provinces.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>

              <label className="mt-5 block text-sm font-semibold text-gray-700" htmlFor="hero-procedure">Trámite</label>
              <select id="hero-procedure" value={procedure} onChange={(e) => setProcedure(e.target.value)} className="mt-2 h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#C60B1E] focus:ring-4 focus:ring-red-100">
                <option value="">Selecciona trámite</option>
                {procedures.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>

              <label className="mt-5 block text-sm font-semibold text-gray-700" htmlFor="hero-whatsapp">WhatsApp</label>
              <input id="hero-whatsapp" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+34 612 345 678" className="mt-2 h-14 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#C60B1E] focus:ring-4 focus:ring-red-100" />

              <button type="button" onClick={submit} disabled={!province || !procedure || !phone} className={`mt-7 h-14 w-full rounded-xl font-bold transition hover:-translate-y-0.5 ${!province || !procedure || !phone ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-[#C60B1E] text-white hover:bg-[#A40818]"}`}>
                ⚡ Continuar con mi cita →
              </button>

              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 flex h-14 items-center justify-center gap-3 rounded-xl bg-[#25D366] font-bold text-white shadow-lg transition hover:bg-[#1EBE5D]">
                <FaWhatsapp className="text-2xl" /> Hablar por WhatsApp
              </a>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {['Tarifa', '24/7', 'España'].map((label) => (
                  <div key={label} className="rounded-xl bg-gray-50 p-3 text-center">
                    <div className="text-xl text-green-600">✓</div>
                    <p className="mt-1 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <h3 className="text-center font-bold text-gray-800">Tiempo restante</h3>
                <p className="mt-1 text-center text-xs text-gray-500">Consulta tu cita cuanto antes.</p>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[['Días', time.days], ['Horas', time.hours], ['Min', time.minutes], ['Seg', time.seconds]].map(([label, value]) => (
                    <div key={String(label)} className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <div className="text-xl font-extrabold text-[#C60B1E]">{String(value).padStart(2, '0')}</div>
                      <div className="mt-1 text-[11px] text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#C60B1E] to-[#A40818] p-4 text-center font-semibold text-white shadow-lg">
                🔥 Atención para solicitudes de toda España
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
