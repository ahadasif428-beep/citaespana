"use client";

import { useState } from "react";
import Link from "next/link";

const provinces = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Málaga",
  "Murcia",
  "Alicante",
  "Zaragoza",
  "Bilbao",
  "Granada",
  "Las Palmas",
  "Valladolid",
];

const procedures = [
  "NIE",
  "TIE",
  "Renovar NIE",
  "Renovar TIE",
  "Arraigo Social",
  "Arraigo Laboral",
  "Arraigo Familiar",
  "Nacionalidad Española",
  "Asilo",
  "Permiso de Trabajo",
  "Visado de Estudiante",
];

export default function EligibilityChecker() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    location: "",
    nationality: "",
    procedure: "",
    province: "",
    hasAppointment: "",
    urgency: "",
    name: "",
    email: "",
    phone: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function next() {
    if (step < 8) setStep(step + 1);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <main>

      {/* HERO */}

      <section className="bg-blue-700 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold">

            Eligibility Checker

          </h1>

          <p className="text-xl mt-6 text-blue-100">

            Discover which immigration procedure is right for you in Spain.

          </p>

        </div>

      </section>

      {/* PROGRESS */}

      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="flex justify-between mb-3">

          <span className="font-semibold">

            Step {step} of 8

          </span>

          <span>

            {Math.round((step / 8) * 100)}%

          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{
              width: `${(step / 8) * 100}%`,
            }}
          />

        </div>

      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          {/* STEP 1 */}

          {step === 1 && (

            <>

              <h2 className="text-3xl font-bold">

                Where are you currently?

              </h2>

              <div className="space-y-4 mt-8">

                <button
                  onClick={() => update("location", "Spain")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >
                  🇪🇸 I am in Spain
                </button>

                <button
                  onClick={() => update("location", "Outside Spain")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >
                  🌍 I am outside Spain
                </button>

              </div>

            </>

          )}

          {/* STEP 2 */}

          {step === 2 && (

            <>

              <h2 className="text-3xl font-bold">

                What is your nationality?

              </h2>

              <input
                className="w-full border rounded-xl p-4 mt-8"
                placeholder="Example: Pakistani"
                value={form.nationality}
                onChange={(e) =>
                  update("nationality", e.target.value)
                }
              />

            </>

          )}

          {/* STEP 3 */}

          {step === 3 && (

            <>

              <h2 className="text-3xl font-bold">

                Which procedure do you need?

              </h2>

              <select
                className="w-full border rounded-xl p-4 mt-8"
                value={form.procedure}
                onChange={(e) =>
                  update("procedure", e.target.value)
                }
              >

                <option value="">

                  Select procedure

                </option>

                {procedures.map((item) => (

                  <option key={item} value={item}>

                    {item}

                  </option>

                ))}

              </select>

            </>

          )}
                    {/* STEP 4 */}

          {step === 4 && (

            <>

              <h2 className="text-3xl font-bold">

                Which province?

              </h2>

              <select
                className="w-full border rounded-xl p-4 mt-8"
                value={form.province}
                onChange={(e) =>
                  update("province", e.target.value)
                }
              >

                <option value="">

                  Select province

                </option>

                {provinces.map((province) => (

                  <option
                    key={province}
                    value={province}
                  >

                    {province}

                  </option>

                ))}

              </select>

            </>

          )}

          {/* STEP 5 */}

          {step === 5 && (

            <>

              <h2 className="text-3xl font-bold">

                Do you already have an appointment?

              </h2>

              <div className="space-y-4 mt-8">

                <button
                  onClick={() => update("hasAppointment", "Yes")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >

                  ✅ Yes

                </button>

                <button
                  onClick={() => update("hasAppointment", "No")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >

                  ❌ No

                </button>

              </div>

            </>

          )}

          {/* STEP 6 */}

          {step === 6 && (

            <>

              <h2 className="text-3xl font-bold">

                How urgent is it?

              </h2>

              <div className="space-y-4 mt-8">

                <button
                  onClick={() => update("urgency", "Urgent")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-red-50"
                >

                  🔥 Urgent

                </button>

                <button
                  onClick={() => update("urgency", "This Month")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >

                  📅 This month

                </button>

                <button
                  onClick={() => update("urgency", "No Rush")}
                  className="w-full border rounded-xl p-5 text-left hover:bg-gray-100"
                >

                  🙂 No rush

                </button>

              </div>

            </>

          )}

          
                {/* STEP 7 */}

          {step === 7 && (

            <>

              <h2 className="text-3xl font-bold">

                Your information

              </h2>

              <div className="space-y-6 mt-8">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e)=>update("name",e.target.value)}
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e)=>update("email",e.target.value)}
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="tel"
                  placeholder="+34 612345678"
                  value={form.phone}
                  onChange={(e)=>update("phone",e.target.value)}
                  className="w-full border rounded-xl p-4"
                />

              </div>

            </>

          )}

          {/* STEP 8 */}

          {step === 8 && (

            <>

              <div className="text-center">

                <div className="text-7xl">

                  ✅

                </div>

                <h2 className="text-4xl font-bold mt-6">

                  Eligibility Result

                </h2>

                <p className="text-gray-600 mt-6 text-lg">

                  According to your answers, we recommend the following procedure:

                </p>

                <div className="bg-blue-50 rounded-2xl p-8 mt-10">

                  <h3 className="text-3xl font-bold text-blue-700">

                    {form.procedure || "Immigration Appointment"}

                  </h3>

                  <div className="mt-6 space-y-3 text-left">

                    <p>✅ Province: {form.province}</p>

                    <p>✅ Nationality: {form.nationality}</p>

                    <p>✅ Urgency: {form.urgency}</p>

                    <p>✅ Status: Eligible to continue</p>

                  </div>

                </div>

                <a
                  href={`https://wa.me/34672399181?text=${encodeURIComponent(
`Hello CitaEspaña

Name: ${form.name}

Email: ${form.email}

Phone: ${form.phone}

Nationality: ${form.nationality}

Province: ${form.province}

Procedure: ${form.procedure}

Urgency: ${form.urgency}`
                  )}`}
                  target="_blank"
                  className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold"
                >

                  Continue via WhatsApp

                </a>

              </div>
</>
            

          )}
          {/* NAVIGATION */}

          <div className="flex justify-between mt-16">

            <button
              onClick={back}
              disabled={step === 1}
              className="px-8 py-4 rounded-xl border disabled:opacity-50"
            >

              ← Previous

            </button>

            <button
              onClick={next}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold"
            >

              {step === 8 ? "Finish" : "Next →"}

            </button>

          </div>

        </div>


</section>

</main>
);
}