import type { Metadata } from "next";
import SeoPageShell from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "Cita previa Policía Nacional extranjería 2026 | CitaEspaña",
  description: "Guía para identificar citas de Policía Nacional relacionadas con NIE, TIE, toma de huellas, autorización de regreso, carta de invitación y certificado UE.",
  keywords: ["cita previa policía extranjería", "cita policía NIE", "cita policía TIE", "cita huellas policía", "cita carta invitación policía"],
  alternates: { canonical: "/cita-previa-policia" },
};

export default function Page() {
  return <SeoPageShell eyebrow="Policía Nacional" title="Cita previa Policía Nacional para extranjería" description="Muchos trámites de documentación de extranjeros se realizan en dependencias de Policía Nacional. Aquí puedes distinguir los procedimientos más comunes y llegar a la página provincial correcta." related={[
    {href:'/cita-previa-nie',label:'NIE'},
    {href:'/cita-previa-tie',label:'TIE'},
    {href:'/cita-huellas',label:'Toma de huellas'},
    {href:'/cita-autorizacion-regreso',label:'Autorización de regreso'},
  ]}>
    <div className="grid md:grid-cols-2 gap-6">
      {[['NIE','Asignación o gestiones relacionadas con el Número de Identidad de Extranjero.'],['TIE','Expedición, renovación, duplicado o recogida según el trámite.'],['Huellas','Toma de huellas para documentación de extranjero cuando corresponde.'],['Carta de invitación','Solicitud y formalización de cartas de invitación en los casos aplicables.'],['Autorización de regreso','Trámite para determinados viajes cuando existe la situación administrativa correspondiente.'],['Certificado UE','Certificado de registro de ciudadano de la Unión Europea en los procedimientos que lo requieran.']].map(([t,d])=><article key={t} className="rounded-3xl border bg-white p-7 hover:shadow-xl transition"><h2 className="text-2xl font-black">{t}</h2><p className="mt-3 text-gray-600 leading-7">{d}</p></article>)}
    </div>
  </SeoPageShell>;
}
