import type { Metadata } from "next";
import Link from "next/link";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";
import { SITE_URL } from "@/lib/seo";
import SpainFlagWaving from "@/components/SpainFlagWaving";

export const metadata: Metadata = {
  title: "Cita previa extranjería en España 2026 | NIE, TIE, huellas y asilo",
  description:
    "Cita previa de extranjería en España por provincia: NIE, TIE, toma de huellas, asilo, residencia, arraigo, trabajo y reagrupación familiar. Guías locales y fuentes oficiales.",
  keywords: [
    "cita previa extranjería",
    "cita extranjería España",
    "cita previa NIE",
    "cita previa TIE",
    "cita huellas extranjería",
    "cita asilo España",
  ],
  alternates: { canonical: "/cita-previa-extranjeria" },
  openGraph: {
    title: "Cita previa extranjería en España | CitaEspaña",
    description:
      "Información por provincia y procedimiento para citas de extranjería en España.",
    url: `${SITE_URL}/cita-previa-extranjeria`,
    type: "website",
  },
};

export default function CitaPreviaPage() {
  const procedureLinks: Record<string, string> = {
    nie: "/cita-previa-nie",
    tie: "/cita-previa-tie",
    huellas: "/cita-huellas",
    asilo: "/cita-previa-asilo",
    arraigo: "/cita-arraigo",
    residencia: "/cita-previa-residencia",
    "renovacion-residencia": "/cita-renovacion-residencia",
    "reagrupacion-familiar": "/cita-reagrupacion-familiar",
    "autorizacion-regreso": "/cita-autorizacion-regreso",
    "carta-invitacion": "/cita-carta-invitacion",
    "certificado-ue": "/cita-certificado-ue",
    trabajo: "/cita-permiso-trabajo",
    estudios: "/cita-estudios",
    "larga-duracion": "/cita-previa-residencia",
  };

  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-[#C60B1E] text-white py-20">
        <SpainFlagWaving className="right-[-10%] top-[-16%] w-[900px] max-w-[84vw] opacity-[0.2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="font-bold uppercase tracking-wider text-red-100">CitaEspaña</p>
          <h1 className="text-4xl md:text-6xl font-black mt-4">Cita previa extranjería en España</h1>
          <p className="text-lg md:text-xl text-red-50 max-w-4xl mt-6 leading-8">
            Consulta las principales citas y trámites de extranjería por provincia. Incluimos NIE, TIE, toma de huellas,
            asilo, residencia, arraigo, trabajo, estudios y reagrupación familiar.
          </p>
          <Link href="/appointment" className="inline-flex mt-8 bg-white text-[#C60B1E] px-7 py-4 rounded-xl font-black">
            Solicitar ayuda con una cita
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black">Cita previa por provincia</h2>
          <p className="mt-4 text-gray-600 max-w-3xl leading-8">
            Selecciona tu provincia para consultar procedimientos, organismo competente y enlaces de ayuda.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {provinces.map((province) => (
              <Link key={province.slug} href={`/cita-previa-extranjeria/${province.slug}`} className="border rounded-2xl p-5 bg-white hover:shadow-lg hover:border-red-200 transition">
                <h3 className="font-bold text-lg">Cita extranjería {province.name}</h3>
                <p className="text-sm text-gray-500 mt-2">NIE · TIE · Huellas · Residencia</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black">Procedimientos de extranjería</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {seoProcedures.map((procedure) => (
              <Link key={procedure.slug} href={procedureLinks[procedure.slug] ?? `/cita-previa-extranjeria#${procedure.slug}`} className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg">{procedure.name}</h3>
                <p className="text-gray-600 mt-2 leading-7">{procedure.intent}. Consulta la información por provincia.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
