import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">Terms of service</p>
            <h1 className="mt-4 text-3xl font-bold text-[#063d73] sm:text-4xl">Terms and conditions</h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                By using CitaEs, you agree to use the service responsibly and provide accurate information about your appointment needs.
              </p>
              <p>
                Our support service is designed to help you find and manage immigration appointments, but final appointment availability is determined by the relevant administration.
              </p>
              <p>
                Fees may apply depending on the support package you choose, and all pricing is clearly explained before you proceed.
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
