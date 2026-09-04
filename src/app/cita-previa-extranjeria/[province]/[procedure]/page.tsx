import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";
import { appointmentData } from "@/data/appointmentOptions";
import { procedureMetadata, provinceBySlug, procedureBySlug, breadcrumbSchema, SITE_URL } from "@/lib/seo";
import SeoPageShell from "@/components/SeoPageShell";

export function generateStaticParams() {
  return provinces.flatMap((province) => seoProcedures.map((procedure) => ({ province: province.slug, procedure: procedure.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ province: string; procedure: string }> }): Promise<Metadata> {
  const { province, procedure } = await params;
  const p = provinceBySlug(province);
  const item = procedureBySlug(procedure);
  return p && item ? procedureMetadata(p, item) : { title: "Cita previa extranjería en España" };
}

export default async function ProcedurePage({ params }: { params: Promise<{ province: string; procedure: string }> }) {
  const { province: provinceSlug, procedure: procedureSlug } = await params;
  const province = provinceBySlug(provinceSlug);
  const procedure = procedureBySlug(procedureSlug);
  if (!province || !procedure) notFound();

  const offices = appointmentData[province.name]?.offices?.[procedure.name] ?? [];
  const breadcrumb = breadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Cita previa extranjería", url: "/cita-previa-extranjeria" },
    { name: province.name, url: `/cita-previa-extranjeria/${province.slug}` },
    { name: procedure.shortName, url: `/cita-previa-extranjeria/${province.slug}/${procedure.slug}` },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${procedure.name} en ${province.name}`,
    serviceType: procedure.intent,
    description: `Guía de ${procedure.name.toLowerCase()} en ${province.name}. Información de procedimiento, pasos básicos y acceso a fuentes oficiales.`,
    provider: { "@type": "Organization", name: "CitaEspaña", url: SITE_URL },
    areaServed: { "@type": "AdministrativeArea", name: province.name },
  };

  const related = seoProcedures.filter((x) => x.slug !== procedure.slug).slice(0, 6).map((x) => ({
    href: `/cita-previa-extranjeria/${province.slug}/${x.slug}`,
    label: `${x.shortName} en ${province.name}`,
  }));

  const faqs = [
    { q: `¿Cómo pedir ${procedure.name.toLowerCase()} en ${province.name}?`, a: `Primero confirma que este sea el procedimiento que corresponde a tu caso. Después revisa la información oficial y la disponibilidad para ${province.name}.` },
    { q: `¿Qué organismo tramita ${procedure.shortName} en ${province.name}?`, a: `Esta guía identifica como referencia ${procedure.department}. El canal concreto puede cambiar según el procedimiento, la oficina y tu situación.` },
    { q: `¿La cita de ${procedure.shortName} está siempre disponible?`, a: "No. La disponibilidad cambia y depende de las plazas que publique la Administración." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SeoPageShell
        eyebrow={`${procedure.shortName} · ${province.name}`}
        title={`${procedure.name} en ${province.name}`}
        description={`Guía local para ${procedure.intent} en ${province.name}. Comprueba el organismo, los pasos básicos, las oficinas disponibles en nuestros datos y el enlace oficial antes de presentar o acudir a tu cita.`}
        faqs={faqs}
        related={related}
        relatedTitle={`Otros trámites en ${province.name}`}
        primaryHref={`/appointment?province=${encodeURIComponent(province.name)}&procedure=${encodeURIComponent(procedure.name)}`}
      >
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-3xl border bg-white p-7 md:p-10 shadow-sm">
              <div className="grid sm:grid-cols-3 gap-4">
                {[['Provincia', province.name], ['Organismo', procedure.department], ['Trámite', procedure.shortName]].map(([a,b]) => <div key={a} className="rounded-2xl bg-gray-50 border p-5"><p className="text-sm text-gray-500">{a}</p><p className="mt-2 font-black text-lg">{b}</p></div>)}
              </div>
              <h2 className="mt-10 text-3xl font-black">¿Qué es {procedure.shortName}?</h2>
              <p className="mt-4 text-gray-600 leading-8">Esta página está diseñada para una búsqueda concreta: {procedure.name.toLowerCase()} en {province.name}. El objetivo es ayudarte a distinguir el trámite correcto y pasar rápidamente a la información oficial, sin mezclar requisitos de otros procedimientos.</p>
              <h2 className="mt-10 text-3xl font-black">Pasos para solicitar la cita</h2>
              <ol className="mt-6 space-y-4">
                {[`Confirma que ${procedure.shortName} es el procedimiento que corresponde a tu caso.`,`Selecciona ${province.name} y la oficina/canal que indique la Administración.`,`Revisa documentación, tasas y requisitos antes de acudir.`,`Guarda la confirmación de la cita y llega con la documentación requerida.`].map((step, i) => <li key={step} className="flex gap-4 items-start"><span className="w-9 h-9 shrink-0 rounded-full bg-[#C60B1E] text-white flex items-center justify-center font-black">{i+1}</span><p className="text-gray-700 leading-7">{step}</p></li>)}
              </ol>
            </section>

            <section className="rounded-3xl border bg-white p-7 md:p-10">
              <h2 className="text-3xl font-black">Oficinas y atención en {province.name}</h2>
              {offices.length > 0 ? <div className="mt-6 grid gap-3">{offices.map((office: string) => <div key={office} className="rounded-2xl border bg-gray-50 px-5 py-4 font-semibold">{office}</div>)}</div> : <p className="mt-4 text-gray-600 leading-8">No mostramos una oficina concreta en nuestros datos para este cruce. Comprueba la oficina que ofrece el sistema oficial para el procedimiento seleccionado.</p>}
              <a href="https://sede.administracionespublicas.gob.es/pagina/index/directorio/ayuda_cita_previa" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-bold text-[#C60B1E]">Consultar información oficial →</a>
            </section>

            <section className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 md:p-8">
              <h2 className="text-2xl font-black">Aviso importante</h2>
              <p className="mt-3 text-gray-700 leading-8">CitaEspaña es un servicio privado e independiente. No somos la Policía Nacional ni la Oficina de Extranjería. La fuente oficial prevalece sobre cualquier información resumida en esta página.</p>
            </section>
          </div>

          <aside className="rounded-3xl bg-[#C60B1E] text-white p-7 shadow-xl h-fit lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-100">Solicitud</p>
            <h2 className="mt-3 text-3xl font-black">¿Necesitas esta cita?</h2>
            <p className="mt-4 text-red-50 leading-7">Envía provincia y trámite. El siguiente paso permite seleccionar fecha y ver la tarifa correspondiente.</p>
            <Link href={`/appointment?province=${encodeURIComponent(province.name)}&procedure=${encodeURIComponent(procedure.name)}`} className="mt-7 block rounded-2xl bg-white text-[#C60B1E] px-5 py-4 text-center font-black">Continuar con la solicitud →</Link>
            <div className="mt-6 rounded-2xl bg-white/10 p-5"><p className="text-sm text-red-100">Búsquedas relacionadas</p><div className="mt-3 flex flex-wrap gap-2">{procedure.keywords.slice(0,4).map((k)=><span key={k} className="rounded-full border border-white/20 px-3 py-2 text-xs font-bold">{k}</span>)}</div></div>
          </aside>
        </div>
      </SeoPageShell>
    </>
  );
}
