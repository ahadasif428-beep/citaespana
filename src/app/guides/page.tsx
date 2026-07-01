import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const guides = [
  "How to prepare for your first immigration appointment",
  "What to bring to your NIE or TIE appointment",
  "Residence and regularization requirements explained",
  "How to check if your documents are complete",
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Immigration guides"
        text="Learn everything about Spanish procedures."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-[#063d73] sm:text-3xl">Helpful guides for your process</h2>
            <div className="mt-6 space-y-3">
              {guides.map((guide) => (
                <div key={guide} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
                  {guide}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
