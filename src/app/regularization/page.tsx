import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const options = [
  "Residence options and rootedness pathways",
  "Required documentation and deadlines",
  "Support for family, employment, and social ties",
];

export default function Regularization() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Regularization Spain 2026"
        text="Check your eligibility and get help with your immigration process."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">What we cover</p>
            <h2 className="mt-4 text-2xl font-bold text-[#063d73] sm:text-3xl">A clear path to regularization</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We explain your options in simple terms and help you prepare the documents needed to move forward with confidence.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
              {options.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                  <span className="mt-1 text-yellow-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#063d73] p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold">Need a fast review?</h3>
            <p className="mt-4 text-base leading-7 text-blue-100">
              Send us your case details and we will guide you through the best next step.
            </p>
            <Link href="/eligibility" className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-[#063d73] transition hover:bg-yellow-300">
              Check eligibility
            </Link>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}