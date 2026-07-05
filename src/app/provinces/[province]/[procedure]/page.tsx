import { notFound } from "next/navigation";
import Link from "next/link";
import { appointmentData } from "@/data/appointmentOptions";

type Props = {
  params: Promise<{
    province: string;
    procedure: string;
  }>;
};

export default async function ProcedurePage({ params }: Props) {
  const { province, procedure } = await params;

  const provinceName = Object.keys(appointmentData).find(
    (p) => p.toLowerCase() === decodeURIComponent(province).toLowerCase()
  );

  if (!provinceName) {
    notFound();
  }

  const data = appointmentData[provinceName];

  const procedureName = data.procedures.find(
    (p: string) =>
      p.toLowerCase() === decodeURIComponent(procedure).toLowerCase()
  );

  if (!procedureName) {
    notFound();
  }

  const offices = data.offices?.[procedureName] || [];

  return (
    <main className="max-w-7xl mx-auto py-20 px-6">
      <Link
        href={`/provinces/${province}`}
        className="text-blue-600 hover:underline"
      >
        ← Back to {provinceName}
      </Link>

      <h1 className="text-5xl font-bold mt-8">
        {procedureName}
      </h1>

      <p className="mt-4 text-gray-600">
        Province: <strong>{provinceName}</strong>
      </p>

      <div className="mt-10 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">
          Available Offices
        </h2>

        {offices.length > 0 ? (
          <ul className="space-y-3">
            {offices.map((office: string) => (
              <li
                key={office}
                className="border rounded-xl p-4"
              >
                {office}
              </li>
            ))}
          </ul>
        ) : (
          <p>No offices found for this procedure.</p>
        )}
      </div>

      <a
  href={`https://wa.me/34672399181?text=${encodeURIComponent(
    `Hello CitaEspaña,

Province: ${provinceName}

Procedure: ${procedureName}`
  )}`}
  target="_blank"
  className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold"
>
  Request Appointment via WhatsApp
</a>
    </main>
  );
}