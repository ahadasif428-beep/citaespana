import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">Legal notice</p>
            <h1 className="mt-4 text-3xl font-bold text-[#063d73] sm:text-4xl">Legal notice</h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                CitaEs is a service that provides information and support related to immigration appointment availability.
              </p>
              <p>
                This website is for informational purposes and does not replace official legal or administrative advice.
              </p>
              <p>
                For official procedures, always consult the relevant public authority or your legal representative.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
