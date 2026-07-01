import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const steps = [
  {
    title: "Tell us your procedure",
    text: "Share the immigration procedure you need and the province where you want to book.",
  },
  {
    title: "We monitor 24/7",
    text: "Our system checks for openings continuously and alerts you when an appointment is available.",
  },
  {
    title: "You confirm and book",
    text: "We guide you through the next steps so you can secure your appointment quickly.",
  },
];

export default function Appointment() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Book your immigration appointment"
        text="Tell us your procedure and province. We monitor appointments 24/7."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#063d73]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#063d73] p-8 text-white shadow-xl sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Why it works</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Fast support for urgent immigration needs</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
              We help you find the right opening in the right province without wasting hours checking official portals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#d90429] px-6 py-3 font-semibold text-white transition hover:bg-red-700">
                Contact us
              </Link>
              <Link href="/eligibility" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Check eligibility
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}