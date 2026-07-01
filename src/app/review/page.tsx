import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function ReviewPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Leave your feedback"
        text="Share your CitaEs experience."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-[#063d73] sm:text-3xl">Your feedback helps us improve</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tell us about your experience, what worked well, and how we can make the process even easier.
            </p>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
