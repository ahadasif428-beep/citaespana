import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function EligibilityPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Check your eligibility"
        text="Find out if you qualify."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">Eligibility review</p>
            <h2 className="mt-4 text-2xl font-bold text-[#063d73] sm:text-3xl">Understand your options before you apply</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We help you review the right pathway for your case, whether it is regularization, residence, or another immigration need.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-[#063d73] transition hover:bg-yellow-300">
              Ask for a review
            </Link>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
