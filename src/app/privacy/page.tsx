import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">Privacy policy</p>
            <h1 className="mt-4 text-3xl font-bold text-[#063d73] sm:text-4xl">Privacy policy</h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                CitaEs respects your privacy and only uses your information to provide appointment support and related communication.
              </p>
              <p>
                We collect basic contact details when you request assistance and use them to respond to your request and improve our service.
              </p>
              <p>
                We do not share your personal information with third parties for marketing purposes without your consent.
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
