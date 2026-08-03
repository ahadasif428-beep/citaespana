"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }));
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header
  className="
  fixed
  top-0
  left-0
  right-0
  z-50
  bg-white/95
  backdrop-blur-xl
  border-b
  border-gray-100
  shadow-sm
  "
>
  <div className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

    {/* LOGO */}

    <Link href="/" className="flex items-center gap-3 shrink-0">

      <Image
        src="/logo.jpeg"
        alt="CitaEs"
        width={48}
        height={48}
        className="rounded-full"
      />

      <span
        translate="no"
        className="text-3xl font-black text-[#C60B1E] leading-none"
      >
        CitaEs
      </span>

    </Link>

    {/* MENU */}

    <nav className="hidden xl:flex items-center gap-7 text-[15px] font-semibold">

      <Link
        href="/regularization"
        className="hover:text-[#C60B1E] transition-colors"
      >
        Regularización
      </Link>

      <Link
        href="/services"
        className="hover:text-[#C60B1E] transition-colors"
      >
        Servicios
      </Link>

      <Link
        href="/provinces"
        className="hover:text-[#C60B1E] transition-colors"
      >
        Provincias
      </Link>

      <Link
        href="/guides"
        className="hover:text-[#C60B1E] transition-colors"
      >
        Guías
      </Link>

      <Link
        href="/contact"
        className="hover:text-[#C60B1E] transition-colors"
      >
        Contacto
      </Link>

    </nav>
        {/* DESKTOP MENU */}

            {/* RIGHT SIDE */}

    <div className="flex items-center gap-4 shrink-0">

      {/* Madrid Time */}

      <div className="hidden 2xl:flex items-center gap-2 text-sm text-gray-500">

        <span>🇪🇸 Madrid</span>

        <span className="font-semibold">

          {time}

        </span>

      </div>

      {/* WhatsApp */}

      <a
        href="https://wa.me/34672399181"
        target="_blank"
        rel="noopener noreferrer"
        className="
        hidden
        lg:flex
        items-center
        gap-2
        h-10
        px-5
        rounded-xl
        border
        border-[#25D366]
        text-[#25D366]
        font-semibold
        hover:bg-[#25D366]
        hover:text-white
        transition-all
        duration-300
        "
      >

        <FaWhatsapp className="text-lg" />

        WhatsApp

      </a>

      {/* Appointment */}

      <Link
        href="/appointment"
        className="
        flex
        items-center
        justify-center
        h-10
        px-6
        rounded-xl
        bg-[#C60B1E]
        hover:bg-[#A40818]
        text-white
        font-bold
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        "
      >

        Solicitar cita →

      </Link>

    </div>

  </div>

</header>
);
}