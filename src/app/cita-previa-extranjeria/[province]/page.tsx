import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";
import { provinceMetadata, provinceBySlug, breadcrumbSchema, SITE_URL } from "@/lib/seo";
import SeoPageShell from "@/components/SeoPageShell";

export function generateStaticParams() {
  return provinces.map((province) => ({ province: province.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ province: string }> }): Promise<Metadata> {
  const { province } = await params;
  const item = provinceBySlug(province);
  return item ? provinceMetadata(item) : { title: "Cita previa extranjería en España" };
}

export default async function ProvincePage({ params }: { params: Promise<{ province: string }> }) {
  const { province: slug } = await params;
  const province = provinceBySlug(slug);
  if (!province) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Cita previa extranjería", url: "/cita-previa-extranjeria" },
    { name: province.name, url: `/cita-previa-extranjeria/${province.slug}` },
  ]);

  const faqs = [
    { q: `¿Cómo pedir cita previa de extranjería en ${province.name}?`, a: `El procedimiento depende del trámite y del organismo competente. Selecciona el trámite en esta página, revisa la información oficial y continúa con la solicitud si necesitas asistencia.` },
    { q: `¿Qué trámites puedo consultar en ${province.name}?`, a: `CitaEspaña organiza páginas para NIE, TIE, huellas, asilo, arraigo, residencia, trabajo, estudios, reagrupación y otros trámites. La disponibilidad exacta depende del sistema oficial.` },
    { q: `¿La disponibilidad es igual todos los días?`, a: "No. Las plazas publicadas por la Administración pueden cambiar por provincia, oficina, trámite y momento." },
  ];

  const serviceList = seoProcedures.map((procedure) => ({
    href: `/cita-previa-extranjeria/${province.slug}/${procedure.slug}`,
    label: procedure.name,
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Trámites de extranjería en ${province.name}`,
    itemListElement: seoProcedures.map((procedure, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: procedure.name,
      url: `${SITE_URL}/cita-previa-extranjeria/${province.slug}/${procedure.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SeoPageShell
        eyebrow={`${province.name} · Extranjería 2026`}
        title={`Cita previa extranjería en ${province.name}`}
        description={`Guía local de cita previa de extranjería en ${province.name}: NIE, TIE, toma de huellas, asilo, arraigo, residencia, trabajo y otros procedimientos. Consulta cada trámite y la fuente oficial antes de acudir.`}
        faqs={faqs}
        related={serviceList.slice(0, 8)}
        relatedTitle={`Trámites de extranjería en ${province.name}`}
      >
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border bg-white p-7 md:p-10 shadow-sm">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C60B1E]">🇪🇸 España</span>
              <span className="rounded-full bg-gray-50 border px-4 py-2 text-sm font-bold text-gray-700">Provincia: {province.name}</span>
              <span className="rounded-full bg-gray-50 border px-4 py-2 text-sm font-bold text-gray-700">14+ procedimientos</span>
            </div>
            <h2 className="mt-7 text-3xl font-black">Cita previa de extranjería en {province.name}</h2>
            <p className="mt-4 text-gray-600 leading-8">Esta página funciona como índice local. Entra en el trámite que necesitas para ver la guía específica, el organismo que suele intervenir, pasos básicos, oficinas cuando están disponibles en nuestros datos y enlaces a la información oficial.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {seoProcedures.map((procedure) => (
                <Link key={procedure.slug} href={`/cita-previa-extranjeria/${province.slug}/${procedure.slug}`} className="group rounded-2xl border bg-white p-5 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 transition">
                  <p className="text-xs uppercase tracking-wide font-bold text-[#C60B1E]">{procedure.department}</p>
                  <h3 className="mt-2 font-black text-lg text-gray-900">{procedure.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{procedure.intent} en {province.name}.</p>
                  <span className="mt-4 block font-bold text-[#C60B1E]">Ver guía →</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-[#C60B1E] text-white p-7 shadow-xl h-fit lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-100">Solicitar cita</p>
            <h2 className="mt-3 text-3xl font-black">{province.name}</h2>
            <p className="mt-4 text-red-50 leading-7">Completa el formulario de CitaEspaña y el precio se calcula según trámite, provincia y fecha elegida.</p>
            <Link href={`/appointment?province=${encodeURIComponent(province.name)}`} className="mt-7 block rounded-2xl bg-white text-[#C60B1E] px-5 py-4 text-center font-black">Solicitar cita en {province.name} →</Link>
            <a href="https://sede.administracionespublicas.gob.es/pagina/index/directorio/ayuda_cita_previa" target="_blank" rel="noopener noreferrer" className="mt-3 block rounded-2xl border border-white/30 px-5 py-4 text-center font-bold hover:bg-white/10">Fuente oficial</a>
          </aside>
        </div>

        <div className="mt-10 rounded-3xl border border-yellow-200 bg-yellow-50 p-7 md:p-8">
          <h2 className="text-2xl font-black">Importante antes de acudir</h2>
          <p className="mt-3 text-gray-700 leading-8">CitaEspaña es un servicio privado e independiente. No pertenece al Gobierno de España, la Policía Nacional ni las Oficinas de Extranjería. Los requisitos, tasas, oficinas, canales de presentación y disponibilidad deben confirmarse siempre en la fuente oficial.</p>
        </div>
      </SeoPageShell>
    </>
  );
}
