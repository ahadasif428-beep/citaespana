<<<<<<< HEAD
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EligibilityCTA from "@/components/EligibilityCTA";
import LegalNotice from "@/components/LegalNotice";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Regularización 2026", description: "Información y comprobación de elegibilidad para Regularización 2026.", alternates: { canonical: "/regularization" } };

export default function Regularization() {
  return (
    <main>
      <PageHero title="Regularización 2026" text="Comprueba tu elegibilidad y conoce los pasos, documentos y opciones disponibles para tu situación en España." />
      <section className="py-20 bg-white"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
        {[['📋','Requisitos','Comprueba las condiciones aplicables a tu situación antes de iniciar el proceso.'],['📄','Documentación','Prepara la documentación necesaria y evita errores que puedan retrasar tu trámite.'],['⏱️','Plazos','Organiza tu solicitud con tiempo y recibe orientación sobre los siguientes pasos.']].map(([icon,title,text])=><div key={title} className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 hover:-translate-y-1 hover:shadow-xl transition-all"><div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-2xl">{icon}</div><h2 className="mt-6 text-2xl font-bold text-gray-900">{title}</h2><p className="mt-3 text-gray-600 leading-7">{text}</p></div>)}
      </div></section>
      <EligibilityCTA />
      <section className="py-20 bg-[#fff8f5]"><div className="max-w-4xl mx-auto px-6 text-center"><span className="text-[#C60B1E] font-bold uppercase tracking-widest text-sm">Siguiente paso</span><h2 className="mt-4 text-4xl font-black text-gray-900">¿No sabes por dónde empezar?</h2><p className="mt-5 text-lg text-gray-600">Habla con CitaEspaña y te indicaremos qué información necesitamos para ayudarte.</p><Link href="/appointment" className="inline-flex mt-8 bg-[#C60B1E] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#A40818] transition">Solicitar ayuda →</Link></div></section>
      <LegalNotice />
    </main>
  );
}
=======
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regularization 2026",

  description:
    "Information about Regularization 2026 and immigration support in Spain.",

  alternates: {
    canonical: "/regularization",
  },
};

export default function Regularization(){


return(

<PageHero

title="Regularization Spain 2026"

text="Check your eligibility and get help with your immigration process."

/>

)


}
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
