import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#C60B1E] text-white">

      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-5xl font-black">
              CitaEs
            </h2>

            <p className="mt-6 text-red-100 leading-8">
              Tu servicio profesional para conseguir citas de extranjería en España de forma rápida, segura y sin estrés.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-red-100">
                <FaMapMarkerAlt />
                Madrid, España
              </div>

              <div className="flex items-center gap-3 text-red-100">
                <FaEnvelope />
                soporte@citaes.com
              </div>

            </div>

            <a
              href="https://wa.me/34672399181"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              bg-[#25D366]
              px-6
              py-4
              rounded-2xl
              font-bold
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <FaWhatsapp className="text-2xl animate-pulse" />
              WhatsApp
            </a>

          </div>
                    {/* SERVICES */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Servicios
            </h3>

            <div className="space-y-4">

              <Link
                href="/services"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Servicios de extranjería
              </Link>

              <Link
                href="/regularization"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Regularización 2026
              </Link>

              <Link
                href="/provinces"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Provincias
              </Link>

              <Link
                href="/guides"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Guías
              </Link>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Empresa
            </h3>

            <div className="space-y-4">

              <Link
                href="/about"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Sobre nosotros
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Contacto
              </Link>

              <Link
                href="/faq"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Preguntas frecuentes
              </Link>

              <Link
                href="/privacy"
                className="flex items-center gap-2 text-red-100 hover:text-[#F1BF00] transition"
              >
                <FaArrowRight className="text-xs" />
                Política de privacidad
              </Link>

            </div>

          </div>

          {/* CTA */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              ¿Necesitas una cita?
            </h3>

            <p className="text-red-100 leading-8 mb-8">
              Empieza hoy mismo y deja que encontremos tu cita mientras tú te olvidas de buscar.
            </p>

            <Link
              href="/appointment"
              className="
              flex
              justify-center
              items-center
              gap-3
              bg-[#F1BF00]
              text-[#C60B1E]
              font-black
              rounded-2xl
              py-4
              shadow-xl
              hover:shadow-2xl
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Solicitar cita
              <FaArrowRight />
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-red-100 text-sm">
            © {new Date().getFullYear()} CitaEs. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-red-100 text-sm">

            <Link href="/cookies" className="hover:text-[#F1BF00] transition">
              Cookies
            </Link>

            <Link href="/privacy" className="hover:text-[#F1BF00] transition">
              Privacidad
            </Link>

            <Link href="/legal" className="hover:text-[#F1BF00] transition">
              Aviso legal
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}