import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Contact CitaEs"
        text="Our team is ready to help you."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">Get in touch</p>
            <h2 className="mt-4 text-2xl font-bold text-[#063d73] sm:text-3xl">We are here to help with your appointment</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Reach out for appointment support, eligibility questions, or general immigration guidance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/appointment" className="inline-flex items-center justify-center rounded-xl bg-[#d90429] px-6 py-3 font-semibold text-white transition hover:bg-red-700">
                Book appointment
              </Link>
              <Link href="/eligibility" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-[#063d73] transition hover:bg-slate-100">
                Check eligibility
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#063d73] p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold">Fast response</h3>
            <p className="mt-4 text-base leading-7 text-blue-100">
              We reply quickly and help you move forward with your immigration procedure.
            </p>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
