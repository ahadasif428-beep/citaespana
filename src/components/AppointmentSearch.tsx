"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";

export default function AppointmentSearch() {
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const selectedProvince = provinces.find((item) => item.slug === province);
    const procedureMatches = seoProcedures.filter((item) =>
      [item.name, item.shortName, item.intent, ...item.keywords].some((value) =>
        value.toLowerCase().includes(normalized),
      ),
    );

    if (!normalized && !selectedProvince) return seoProcedures.slice(0, 8);
    return procedureMatches.length ? procedureMatches.slice(0, 8) : seoProcedures.slice(0, 8);
  }, [query, province]);

  return (
    <section id="buscador-citas" className="relative z-10 py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C60B1E]">
            Buscador de citas de extranjería
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900">
            Busca tu trámite y provincia en España
          </h2>
          <p className="mt-4 text-gray-600 leading-7">
            Encuentra rápidamente información sobre NIE, TIE, huellas, asilo, arraigo, residencia y otros trámites de extranjería.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_280px] gap-4">
          <label className="block">
            <span className="sr-only">Buscar trámite</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej.: cita previa NIE, huellas, TIE..."
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 outline-none transition focus:border-[#C60B1E] focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </label>
          <label className="block">
            <span className="sr-only">Selecciona provincia</span>
            <select
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 outline-none transition focus:border-[#C60B1E] focus:bg-white focus:ring-4 focus:ring-red-100"
            >
              <option value="">Todas las provincias</option>
              {provinces.map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((procedure) => {
            const destination = province
              ? `/cita-previa-extranjeria/${province}/${procedure.slug}`
              : `/cita-previa-extranjeria#${procedure.slug}`;
            return (
              <Link
                key={procedure.slug}
                href={destination}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#C60B1E]">{procedure.department}</span>
                  <span className="text-gray-400 transition group-hover:translate-x-1">→</span>
                </div>
                <h3 className="mt-3 font-black text-gray-900">{procedure.shortName}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{procedure.intent}.</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          <Link className="rounded-full border px-4 py-2 font-semibold hover:bg-gray-50" href="/cita-previa-nie">Cita previa NIE</Link>
          <Link className="rounded-full border px-4 py-2 font-semibold hover:bg-gray-50" href="/cita-previa-tie">Cita previa TIE</Link>
          <Link className="rounded-full border px-4 py-2 font-semibold hover:bg-gray-50" href="/cita-huellas">Cita para huellas</Link>
          <Link className="rounded-full border px-4 py-2 font-semibold hover:bg-gray-50" href="/cita-previa-extranjeria">Todas las citas</Link>
        </div>
      </div>
    </section>
  );
}
