
"use client";

import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  function whatsapp(plan: string) {
    const message = `Hello CitaEs,

I want to request the ${plan} package.

Please provide more details.`;

    window.open(
      `https://api.whatsapp.com/send?phone=34672399181&text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function eligibility() {
    router.push("/eligibility-checker");
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="font-bold tracking-widest text-blue-600">
            TRANSPARENT TARIFFS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#111827]">
            Clear prices, no surprises
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Contact our team to confirm service availability and applicable
            fees before proceeding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* STANDARD */}
          <div className="rounded-3xl border p-10 shadow-sm transition hover:shadow-xl">
            <h3 className="font-bold tracking-wide text-blue-900">
              STANDARD
            </h3>

            <div className="mt-5 flex items-end">
              <span className="text-5xl font-bold">€69</span>
              <span className="ml-2 text-blue-900">/appointment</span>
            </div>

            <p className="mt-4 text-gray-500">
              Contact us for payment details.
            </p>

            <ul className="mt-8 space-y-5 text-lg">
              <li>✓ NIE</li>
              <li>✓ Fingerprinting</li>
              <li>✓ Certificates of Residence</li>
              <li>✓ Invitation Letter</li>
              <li>✓ Return Authorization</li>
            </ul>

            <button
              type="button"
              onClick={() => whatsapp("Standard")}
              className="mt-10 w-full rounded-xl border-2 border-green-500 py-4 font-bold text-green-600 transition hover:bg-green-500 hover:text-white"
            >
              Request via WhatsApp
            </button>
          </div>

          {/* PREMIUM */}
          <div className="relative rounded-3xl border-2 border-blue-500 bg-[#27439b] p-10 text-white shadow-xl">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-black">
              MOST POPULAR
            </div>

            <h3 className="font-bold tracking-wide">PREMIUM</h3>

            <div className="mt-5 flex items-end">
              <span className="text-5xl font-bold">€149</span>
              <span className="ml-2">/appointment</span>
            </div>

            <p className="mt-4">
              Contact us for payment details.
            </p>

            <ul className="mt-8 space-y-5 text-lg">
              <li>✓ TIE (Foreigner&apos;s Card)</li>
              <li>✓ Permit Renewals</li>
              <li>✓ Social / Labor Integration</li>
              <li>✓ Family Reunification</li>
            </ul>

            <button
              type="button"
              onClick={() => whatsapp("Premium")}
              className="mt-10 w-full rounded-xl bg-green-500 py-4 font-bold transition hover:bg-green-600"
            >
              Request via WhatsApp
            </button>
          </div>

          {/* REGULARIZATION */}
          <div className="relative rounded-3xl border border-red-300 p-10">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 px-6 py-2 text-center text-sm font-bold text-white">
              REGULARIZATION 2026
            </div>

            <h3 className="font-bold tracking-wide text-red-600">
              REGULARIZATION + ASYLUM
            </h3>

            <div className="mt-5 flex items-end">
              <span className="text-5xl font-bold">€300</span>
              <span className="ml-2 text-gray-500">/package</span>
            </div>

            <p className="mt-4 text-gray-500">
              Package information and assistance.
            </p>

            <ul className="mt-8 space-y-5 text-lg">
              <li className="text-red-500">
                ✓{" "}
                <span className="text-gray-700">
                  Regularization 2026 information
                </span>
              </li>

              <li className="text-red-500">
                ✓{" "}
                <span className="text-gray-700">
                  Asylum and International Protection
                </span>
              </li>

              <li className="text-red-500">
                ✓{" "}
                <span className="text-gray-700">
                  Eligibility information
                </span>
              </li>

              <li className="text-red-500">
                ✓{" "}
                <span className="text-gray-700">
                  Document guidance
                </span>
              </li>

              <li className="text-red-500">
                ✓{" "}
                <span className="text-gray-700">
                  Information about next steps
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={eligibility}
              className="mt-10 w-full rounded-xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700"
            >
              More information →
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-400">
          CitaEs is an independent private service, not a law firm or
          government agency. Prices and service conditions should be
          confirmed before purchase.
        </p>
      </div>
    </section>
  );
}
