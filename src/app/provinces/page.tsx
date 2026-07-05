import Link from "next/link";
import { appointmentData } from "@/data/appointmentOptions";

export default function ProvincesPage() {
  const provinces = Object.keys(appointmentData);

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Immigration Appointments by Province
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Select your province to view all available immigration procedures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {provinces.map((province) => (
            <Link
              key={province}
              href={`/provinces/${province.toLowerCase()}`}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {province}
              </h2>

              <p className="text-gray-500 mt-3">
                {
                  appointmentData[province].procedures.length
                } procedures available
              </p>

              <div className="mt-6 text-green-600 font-semibold">
                View Procedures →
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}