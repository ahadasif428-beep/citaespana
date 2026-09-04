"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34672399181"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-[#25D366]
      flex
      items-center
      justify-center
      text-white
      text-4xl
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
      animate-bounce
      "
    >
      <FaWhatsapp />
    </a>
  );
}