import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CitaEs",
  description:
    "Answers to common questions about immigration appointments and procedures in Spain.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What is CitaEs?",
    answer:
      "CitaEs is an independent private service that provides information and assistance related to immigration appointments and procedures in Spain.",
  },
  {
    question: "Can I book an immigration appointment through CitaEs?",
    answer:
      "You can contact our team to ask about assistance with your appointment request. Availability depends on the province and procedure.",
  },
  {
    question: "Which procedures can I ask about?",
    answer:
      "You can ask about NIE, TIE, fingerprint appointments, residence permits, asylum procedures and other immigration-related services.",
  },
  {
    question: "How can I contact CitaEs?",
    answer:
      "You can contact our team through WhatsApp for information about available services and prices.",
  },
  {
    question: "Are CitaEs services free?",
    answer:
      "Some services may have fees. Check the prices page and confirm the applicable conditions before purchasing.",
  },
  {
    question: "Is CitaEs a Spanish government website?",
    answer:
      "No. CitaEs is an independent private service and is not affiliated with the Spanish government or immigration authorities.",
  },
  {
    question: "Are appointments guaranteed?",
    answer:
      "No. Appointment availability depends on the relevant authorities. We do not guarantee that an appointment will be available.",
  },
  {
    question: "Where can I find official immigration information?",
    answer:
      "You should consult the official Spanish government and immigration authority websites for current requirements and procedures.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#C60B1E] to-[#920815] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-widest text-yellow-300">
            CitaEs
          </p>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-red-100">
            Find answers to common questions about our immigration appointment
            information and assistance services in Spain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-gray-900">
                {faq.question}
                <span className="text-2xl text-[#C60B1E] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Still have questions?
        </h2>
        <p className="mt-4 text-gray-600">
          Contact our team for more information.
        </p>
        <Link
          href="https://wa.me/34672399181"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-[#C60B1E] px-8 py-4 font-bold text-white transition hover:bg-[#920815]"
        >
          Contact us on WhatsApp
        </Link>
      </section>
    </main>
  );
}