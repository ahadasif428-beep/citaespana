<<<<<<< HEAD
import { notFound, permanentRedirect } from "next/navigation";
import { provinces } from "@/data/provinces";

type Props = { params: Promise<{ province: string }> };

export default async function LegacyProvincePage({ params }: Props) {
  const { province: slug } = await params;
  const province = provinces.find((item) => item.slug === decodeURIComponent(slug).toLowerCase());
  if (!province) notFound();
  permanentRedirect(`/cita-previa-extranjeria/${province.slug}`);
}
=======
import { notFound } from "next/navigation";
import Link from "next/link";
import { appointmentData } from "@/data/appointmentOptions";

type Props = {
  params: Promise<{
    province: string;
  }>;
};

export default async function ProvincePage({ params }: Props) {
  const { province } = await params;

  const provinceName = Object.keys(appointmentData).find(
    (p) => p.toLowerCase() === province.toLowerCase()
  );

  if (!provinceName) {
    notFound();
  }

  const data = appointmentData[provinceName];

  return (
    <main className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold">
        {provinceName}
      </h1>

      <p className="mt-4 text-gray-600">
        Available immigration procedures in {provinceName}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {data.procedures.map((procedure: string) => (
          <Link
            key={procedure}
            href={`/provinces/${province}/${encodeURIComponent(procedure)}`}
            className="border rounded-2xl p-6 hover:shadow-lg"
          >
            <h2 className="font-bold text-xl">{procedure}</h2>

            <p className="text-blue-600 mt-4">
              View Offices →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
