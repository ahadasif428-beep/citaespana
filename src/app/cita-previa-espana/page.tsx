import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cita previa en España 2026 | Extranjería, DNI, DGT, SEPE y más",
  description: "Guía para encontrar cita previa en España. Accede a información de extranjería, DNI y pasaporte, DGT, SEPE, Seguridad Social y otros servicios públicos.",
  keywords: ["cita previa España", "pedir cita España", "cita previa extranjería", "cita DNI", "cita DGT", "cita SEPE", "cita seguridad social"],
  alternates: { canonical: "/cita-previa-espana" },
  openGraph: { title: "Cita previa en España | Guía de trámites", description: "Encuentra información y canales oficiales para pedir cita previa en España.", url: "https://www.citaespana.com/cita-previa-espana", type: "website", locale: "es_ES" },
};

const categories = [
  ["Extranjería", "Cita previa de extranjería, NIE, TIE, huellas, residencia, arraigo y otros procedimientos.", "/cita-previa-extranjeria"],
  ["DNI y Pasaporte", "Información oficial para solicitar cita de DNI y/o Pasaporte.", "https://www.citapreviadnie.es/"],
  ["DGT", "Accede al servicio oficial de cita previa para trámites de tráfico.", "https://sede.dgt.gob.es/"],
  ["SEPE", "Información sobre citas y atención del Servicio Público de Empleo Estatal.", "https://sede.sepe.gob.es/"],
  ["Seguridad Social", "Acceso a información y servicios de atención de la Seguridad Social.", "https://sede.seg-social.gob.es/"],
  ["Otros trámites", "El Punto de Acceso General reúne citas frecuentes de la Administración General del Estado.", "https://administracion.gob.es/pag_Home/atencionCiudadana/Solicitar_cita_previa-nueva.html"],
];

export default function CitaPreviaEspanaPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Cita previa en España", url: "/cita-previa-espana" }]);
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex rounded-full bg-white border px-4 py-2 font-bold text-[#C60B1E]">🇪🇸 Guía de citas en España</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-black text-gray-900">Cita previa en España</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">Encuentra la ruta correcta para solicitar una cita previa. Esta guía distingue entre extranjería y otros servicios públicos para evitar confusiones.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cita-previa-extranjeria" className="rounded-xl bg-[#C60B1E] px-6 py-4 font-black text-white">Cita de extranjería</Link>
            <Link href="/buscador" className="rounded-xl border bg-white px-6 py-4 font-black text-gray-800">Buscar un trámite</Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black">Citas previas más buscadas</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(([name, description, href]) => (
              <a key={name} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-black">{name}</h3>
                <p className="mt-3 text-gray-600 leading-7">{description}</p>
                <span className="mt-5 inline-block font-bold text-[#C60B1E]">Consultar →</span>
              </a>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border bg-gray-50 p-7">
            <h2 className="text-2xl font-black">Fuente oficial</h2>
            <p className="mt-3 text-gray-700 leading-7">El Punto de Acceso General del Gobierno de España mantiene una página con categorías frecuentes de cita previa, incluida extranjería, DNI/pasaporte, DGT, SEPE y otros servicios.</p>
            <a className="mt-5 inline-block font-bold text-[#C60B1E]" href="https://administracion.gob.es/pag_Home/atencionCiudadana/Solicitar_cita_previa-nueva.html" target="_blank" rel="noopener noreferrer">Abrir información oficial →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
