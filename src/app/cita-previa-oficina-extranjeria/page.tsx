import type { Metadata } from "next";
import SeoPageShell from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "Cita previa Oficina de Extranjería 2026 | CitaEspaña",
  description: "Guía de cita previa en la Oficina de Extranjería para residencia, arraigo, trabajo, reagrupación y otros procedimientos según provincia.",
  keywords: ["cita previa oficina extranjería", "cita oficina extranjería España", "cita arraigo extranjería", "cita residencia extranjería", "cita reagrupación familiar"],
  alternates: { canonical: "/cita-previa-oficina-extranjeria" },
};

export default function Page() {
  return <SeoPageShell eyebrow="Oficina de Extranjería" title="Cita previa en la Oficina de Extranjería" description="La Oficina de Extranjería gestiona diferentes procedimientos administrativos. El trámite exacto y el canal de presentación pueden cambiar según provincia y procedimiento." related={[
    {href:'/cita-arraigo',label:'Arraigo'},
    {href:'/cita-previa-residencia',label:'Residencia'},
    {href:'/cita-reagrupacion-familiar',label:'Reagrupación familiar'},
    {href:'/cita-permiso-trabajo',label:'Permiso de trabajo'},
  ]}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[['Arraigo','Información para localizar el procedimiento de arraigo correspondiente.'],['Residencia','Autorizaciones y renovaciones de residencia según el caso.'],['Trabajo','Autorizaciones y modificaciones vinculadas al trabajo.'],['Reagrupación familiar','Guía para identificar la vía y la provincia aplicable.'],['Estudios','Información sobre trámites relacionados con estudios y estancia.'],['Otros procedimientos','Consulta el buscador o la página de tu provincia si no encuentras el trámite.']].map(([t,d])=><article key={t} className="rounded-3xl border bg-white p-7"><h2 className="text-2xl font-black">{t}</h2><p className="mt-3 text-gray-600 leading-7">{d}</p></article>)}
    </div>
  </SeoPageShell>;
}
