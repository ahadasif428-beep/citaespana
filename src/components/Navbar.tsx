"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    ["Cita previa", "/cita-previa-extranjeria"],
    ["Servicios", "/services"],
    ["Provincias", "/provinces"],
    ["Guías", "/guides"],
    ["Precios", "/prices"],
    ["Contacto", "/contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-[72px] px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo.jpeg" alt="CitaEspaña" width={44} height={44} className="rounded-full" />
          <span translate="no" className="text-2xl sm:text-3xl font-black text-[#C60B1E] leading-none">CitaEspaña</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 text-[15px] font-semibold">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-[#C60B1E] transition-colors">{label}</Link>)}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="hidden 2xl:flex items-center gap-2 text-sm text-gray-500"><span>🇪🇸 Madrid</span><span className="font-semibold">{time}</span></div>
          <a href="https://wa.me/34672399181" target="_blank" rel="noopener noreferrer" className="hidden xl:flex items-center gap-2 h-10 px-4 rounded-xl border border-[#25D366] text-[#25D366] font-semibold hover:bg-[#25D366] hover:text-white transition"><FaWhatsapp /> WhatsApp</a>
          <Link href="/appointment" className="flex items-center justify-center h-10 px-4 sm:px-6 rounded-xl bg-[#C60B1E] hover:bg-[#A40818] text-white font-bold shadow-md transition">Solicitar cita →</Link>
        </div>

        <button aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)} className="lg:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[#C60B1E] text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 pb-5 animate-[slideDown_.2s_ease-out]">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl font-semibold hover:bg-red-50 hover:text-[#C60B1E]">{label}</Link>)}
            <a href="https://wa.me/34672399181" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366] text-[#25D366] font-bold"><FaWhatsapp /> WhatsApp</a>
            <Link href="/appointment" onClick={() => setOpen(false)} className="mt-2 text-center py-3 rounded-xl bg-[#C60B1E] text-white font-bold">Solicitar cita →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
