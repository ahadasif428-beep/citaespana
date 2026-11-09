import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "Cita urgente extranjería en España 2026 | CitaEspaña",
  description: "Información y asistencia para buscar una cita urgente de extranjería en España. Consulta provincia, trámite, fecha preferida y tarifa antes de enviar la solicitud.",
  keywords: ["cita urgente extranjería", "cita extranjería urgente", "cita NIE urgente", "cita TIE urgente", "cita huellas urgente", "cita asilo urgente"],
  alternates: { canonical: "/cita-urgente" },
};

const faqs = [
  { q: "¿Qué significa cita urgente?", a: "En CitaEspaña usamos 'urgente' para solicitudes con una fecha dentro de los próximos 3 días. La tarifa se calcula en el formulario según el servicio y la provincia." },
  { q: "¿La cita urgente está garantizada?", a: "No. La disponibilidad depende de las citas que publique la Administración. Mostramos el precio correspondiente, pero no prometemos una plaza que todavía no exista." },
  { q: "¿Puedo pedir una cita urgente en cualquier provincia?", a: "Puedes enviar una solicitud para cualquiera de las 52 provincias. Algunos servicios tienen tarifas específicas según provincia." },
];

export default function Page() {
  return <SeoPageShell eyebrow="Cita urgente" title="Cita urgente de extranjería en España" description="Cuando necesitas una cita de extranjería para los próximos días, el primer paso es seleccionar correctamente provincia y trámite. CitaEspaña organiza esa solicitud y calcula la tarifa según la fecha elegida." faqs={faqs} related={[
    { href: "/cita-previa-nie", label: "Cita previa NIE" },
    { href: "/cita-previa-tie", label: "Cita previa TIE" },
    { href: "/cita-huellas", label: "Cita de huellas" },
    { href: "/cita-previa-asilo", label: "Cita de asilo" },
  ]}>
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">Cómo funciona la solicitud urgente</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {["Elige provincia y trámite", "Selecciona una fecha", "Comprueba la tarifa y envía"].map((x, i) => <div key={x} className="rounded-2xl bg-gray-50 border p-6"><span className="w-10 h-10 rounded-full bg-[#C60B1E] text-white inline-flex items-center justify-center font-black">{i+1}</span><h3 className="mt-5 font-black text-xl">{x}</h3></div>)}
        </div>
        <p className="mt-8 text-gray-600 leading-8">El precio no es igual para todos los trámites. Determinadas citas de huellas tienen tarifas especiales por provincia; asilo tiene una tarifa diferente y la renovación de asilo en Madrid Pradillo-40 tiene una tarifa específica.</p>
      </div>
      <div className="rounded-3xl bg-[#C60B1E] text-white p-8 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-100">Empieza ahora</p>
        <h2 className="mt-3 text-3xl font-black">Calcula tu precio</h2>
        <p className="mt-4 text-red-50 leading-7">El formulario de CitaEspaña muestra el precio según tu provincia, trámite y fecha.</p>
        <Link href="/appointment" className="mt-7 block rounded-2xl bg-white px-5 py-4 text-center font-black text-[#C60B1E]">Solicitar cita</Link>
      </div>
    </div>
  </SeoPageShell>;
}
