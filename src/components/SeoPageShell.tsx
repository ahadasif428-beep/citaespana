import Link from "next/link";
import type { ReactNode } from "react";
import SpainFlagWaving from "@/components/SpainFlagWaving";

const wa = "34672399181";

export type SeoFaq = { q: string; a: string };

export default function SeoPageShell({
  eyebrow,
  title,
  description,
  children,
  faqs = [],
  related = [],
  relatedTitle = "También puede interesarte",
  primaryHref = "/appointment",
  primaryLabel = "Solicitar cita",
  secondaryHref = "https://sede.administracionespublicas.gob.es/pagina/index/directorio/ayuda_cita_previa",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  faqs?: SeoFaq[];
  related?: { href: string; label: string }[];
  relatedTitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
}) {
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <main className="pt-20">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f8] via-white to-[#fff6e5] border-b py-16 md:py-24">
        <SpainFlagWaving className="right-[-10%] top-[-12%] w-[920px] max-w-[86vw] opacity-[0.22]" />
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white border px-4 py-2 text-sm font-bold text-[#C60B1E] shadow-sm">
              🇪🇸 {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className="rounded-2xl bg-[#C60B1E] px-7 py-4 font-black text-white shadow-lg hover:bg-[#A40818] transition">
                {primaryLabel} →
              </Link>
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white border px-7 py-4 font-black text-gray-800 hover:bg-gray-50 transition">
                Información oficial
              </a>
              <a href={`https://wa.me/${wa}?text=${encodeURIComponent(`Hola CitaEspaña, necesito ayuda con una cita. Tema: ${title}`)}`} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-green-600 bg-green-50 px-7 py-4 font-black text-green-700 hover:bg-green-100 transition">
                WhatsApp
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-gray-600">
              <span className="rounded-full bg-white border px-4 py-2">52 provincias</span>
              <span className="rounded-full bg-white border px-4 py-2">NIE · TIE · Huellas · Asilo</span>
              <span className="rounded-full bg-white border px-4 py-2">Servicio privado independiente</span>
            </div>
          </div>
          <div className="rounded-[2rem] border bg-white/90 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C60B1E]">CitaEspaña</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-black text-gray-900">Encuentra el procedimiento correcto</h2>
            <p className="mt-3 text-gray-600 leading-7">Selecciona provincia y trámite para continuar con el mismo flujo de solicitud de la página principal.</p>
            <Link href="/appointment" className="mt-6 block rounded-2xl bg-gray-900 px-5 py-4 text-center font-black text-white hover:bg-black transition">Abrir formulario de cita</Link>
            <div className="grid grid-cols-2 gap-3 mt-5">
              {["Precio según fecha", "WhatsApp", "Email", "Pago"].map((item) => (
                <div key={item} className="rounded-xl bg-gray-50 border p-4 text-sm font-bold text-gray-700">✓ {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {children}
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="bg-gray-50 border-y py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C60B1E]">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-900">Dudas sobre {title.toLowerCase()}</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-black text-gray-900 flex items-center justify-between gap-6">
                    <span>{faq.q}</span><span className="text-[#C60B1E] group-open:rotate-45 transition">＋</span>
                  </summary>
                  <p className="mt-4 leading-8 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C60B1E]">Más información</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">{relatedTitle}</h2>
              </div>
              <Link href="/cita-previa-extranjeria" className="hidden sm:inline-flex font-bold text-[#C60B1E]">Ver todas las provincias →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border bg-white p-5 font-bold text-gray-800 hover:-translate-y-1 hover:shadow-lg hover:border-red-200 transition">{item.label} →</Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
