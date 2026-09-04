import Link from "next/link";
import { appointmentData } from "@/data/appointmentOptions";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Provincias", description: "CitaEspaña trabaja con citas de extranjería en las provincias de España.", alternates: { canonical: "/provinces" } };

export default function ProvincesPage() {
  const provinces = Object.keys(appointmentData);
  return <main><PageHero title="Citas de extranjería por provincia" text="Selecciona tu provincia para consultar los trámites y oficinas disponibles." /><section className="py-20 bg-[#fffdf9]"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{provinces.map((province)=><Link key={province} href={`/provinces/${province.toLowerCase()}`} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:border-[#C60B1E] hover:shadow-lg transition-all"><h2 className="font-bold text-gray-900 group-hover:text-[#C60B1E]">{province}</h2><p className="mt-2 text-sm text-gray-500">{appointmentData[province].procedures.length} trámites</p><span className="mt-4 block text-sm font-bold text-[#C60B1E]">Ver disponibilidad →</span></Link>)}</div></div></section></main>;
}
