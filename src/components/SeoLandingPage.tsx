import Link from "next/link";
import type { SeoLandingPage } from "@/data/seoLandingPages";
import { breadcrumbSchema, serviceSchema, SITE_URL } from "@/lib/seo";

export default function SeoLandingPage({ page }: { page: SeoLandingPage }) {
  const breadcrumb = breadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Cita previa", url: "/cita-previa-espana" },
    { name: page.h1, url: `/${page.slug}` },
  ]);

  const service = serviceSchema(page.h1, page.description, `/${page.slug}`);

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] border-b py-16">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-sm text-gray-500">
            <Link href="/">Inicio</Link><span className="mx-2">/</span>
            <Link href="/cita-previa-espana">Cita previa en España</Link><span className="mx-2">/</span>
            <span className="font-semibold text-gray-800">{page.h1}</span>
          </div>
          <span className="mt-8 inline-flex rounded-full bg-white border px-4 py-2 text-sm font-bold text-[#C60B1E] shadow-sm">🇪🇸 Guía de citas en España</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-gray-900">{page.h1}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/appointment" className="rounded-xl bg-[#C60B1E] px-6 py-4 font-black text-white shadow-lg hover:bg-[#A40818]">Solicitar asistencia</Link>
            <a href={page.officialUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border bg-white px-6 py-4 font-black text-gray-800 hover:bg-gray-50">Ver información oficial</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-12">
          <article className="min-w-0">
            {page.sections.map((section) => (
              <section key={section.title} className="mb-12">
                <h2 className="text-3xl font-black text-gray-900">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-gray-700 leading-8">{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {section.bullets.map((bullet) => <li key={bullet} className="rounded-xl border bg-gray-50 px-4 py-3 font-semibold text-gray-800">✓ {bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7">
              <h2 className="text-xl font-black">Importante</h2>
              <p className="mt-3 text-gray-700 leading-7">
                CitaEspaña es un servicio privado de asistencia y no pertenece a la Administración General del Estado, la Policía Nacional ni las Oficinas de Extranjería. Los requisitos, tasas, oficinas y disponibilidad deben confirmarse en la fuente oficial.
              </p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border bg-white p-6 shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide text-[#C60B1E]">También te puede interesar</p>
            <div className="mt-4 space-y-3">
              {page.related.map((href) => (
                <Link key={href} href={href} className="block rounded-xl border px-4 py-3 font-semibold text-gray-800 hover:border-red-200 hover:bg-red-50 transition">
                  {href === "/cita-previa-extranjeria" ? "Cita previa extranjería" : href.startsWith("/cita-") ? href.replace("/cita-", "Cita ").replaceAll("-", " ") : href.replace("/guides/", "Guía ").replaceAll("-", " ")}
                </Link>
              ))}
            </div>
            <Link href="/provinces" className="mt-5 block rounded-xl bg-gray-900 px-4 py-3 text-center font-bold text-white hover:bg-black">Ver las 52 provincias</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
