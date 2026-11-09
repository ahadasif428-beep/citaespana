
"use client";

import { useState } from "react";
import Link from "next/link";

type Guide = {
  title: string;
  slug: string;
  icon: string;
  description: string;
};

export default function GuidesSearch({ guides }: { guides: Guide[] }) {
  const [search, setSearch] = useState("");

  const filteredGuides = guides.filter((guide) =>
    `${guide.title} ${guide.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar guía..."
            className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-5 text-lg text-gray-900 outline-none transition focus:border-[#C60B1E] focus:ring-2 focus:ring-red-200"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-black text-gray-900 md:text-5xl">
            Todas las Guías
          </h2>

          <p className="mt-5 text-center text-gray-600">
            Información sobre los principales procedimientos de extranjería.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="text-5xl">{guide.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {guide.description}
                </p>

                <span className="mt-8 inline-block font-bold text-[#C60B1E]">
                  Leer guía →
                </span>
              </Link>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              No se encontraron guías.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
