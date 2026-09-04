import type { Metadata } from "next";
import Link from "next/link";
import { provinces } from "@/data/provinces";
import SeoPageShell from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "Disponibilidad de citas de extranjería por provincia 2026 | CitaEspaña",
  description: "Consulta la disponibilidad y dificultad de las citas de extranjería por provincia. Accede a la guía local y solicita seguimiento de tu cita con CitaEspaña.",
  keywords: ["disponibilidad citas extranjería", "citas extranjería por provincia", "cita previa extranjería hoy", "citas NIE disponibilidad", "citas TIE disponibilidad"],
  alternates: { canonical: "/disponibilidad-citas" },
};

export default function Page() {
  return <SeoPageShell eyebrow="Disponibilidad" title="Disponibilidad de citas de extranjería por provincia" description="La disponibilidad de citas cambia constantemente. Esta página conecta cada provincia con su guía local para que puedas revisar el trámite correcto y continuar con la solicitud." related={provinces.slice(0, 8).map((p) => ({ href: `/cita-previa-extranjeria/${p.slug}`, label: `Cita ${p.name}` }))} relatedTitle="Provincias destacadas">
    <div className="rounded-3xl border bg-white p-7 md:p-10 shadow-sm">
      <div className="grid md:grid-cols-3 gap-5">
        {[['52','provincias cubiertas'],['24/7','seguimiento'],['14','grupos de trámites']].map(([n,t])=><div key={t} className="rounded-2xl bg-gray-50 border p-6"><div className="text-4xl font-black text-[#C60B1E]">{n}</div><div className="mt-2 text-gray-600 font-semibold">{t}</div></div>)}
      </div>
      <h2 className="text-3xl font-black mt-12">Consulta una provincia</h2>
      <p className="mt-4 text-gray-600 leading-8">Abre la página de tu provincia para ver los principales procedimientos, organismo responsable, enlaces oficiales y opciones para solicitar asistencia.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {provinces.map((p) => <Link key={p.slug} href={`/cita-previa-extranjeria/${p.slug}`} className="rounded-xl border p-4 font-bold hover:border-red-200 hover:bg-red-50 transition">{p.name} →</Link>)}
      </div>
      <p className="mt-8 text-sm text-gray-500">La disponibilidad real depende de las plazas que publique la Administración. CitaEspaña no controla ni garantiza la oferta oficial.</p>
    </div>
  </SeoPageShell>;
}
