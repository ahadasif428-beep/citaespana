
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Madrid",
        })
      );
    };

    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const links = [
    ["Regularización", "/regularization"],
    ["Cita previa", "/cita-previa-extranjeria"],
    ["Servicios", "/services"],
    ["Provincias", "/provinces"],
    ["Guías", "/guides"],
    ["Precios", "/prices"],
    ["Contacto", "/contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo.jpeg"
            alt="CitaEs"
            width={44}
            height={44}
            className="rounded-full"
          />

          <span
            translate="no"
            className="text-2xl font-black leading-none text-[#C60B1E] sm:text-3xl"
          >
            CitaEs
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 text-[15px] font-semibold xl:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-[#C60B1E]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="hidden items-center gap-2 text-sm text-gray-500 2xl:flex">
            <span>🇪🇸 Madrid</span>
            <span className="font-semibold">{time}</span>
          </div>

          <a
            href="https://wa.me/34672399181"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-xl border border-[#25D366] px-4 font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white xl:flex"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <Link
            href="/appointment"
            className="flex h-10 items-center justify-center rounded-xl bg-[#C60B1E] px-4 font-bold text-white shadow-md transition hover:bg-[#A40818] sm:px-6"
          >
            Solicitar cita →
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-xl text-[#C60B1E] lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="animate-[slideDown_.2s_ease-out] border-t border-gray-100 bg-white px-4 pb-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold hover:bg-red-50 hover:text-[#C60B1E]"
              >
                {label}
              </Link>
            ))}

            <a
              href="https://wa.me/34672399181"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[#25D366] py-3 font-bold text-[#25D366]"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <Link
              href="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#C60B1E] py-3 text-center font-bold text-white"
            >
              Solicitar cita →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
