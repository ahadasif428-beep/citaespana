import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const formalities = [
  {
    title: "NIE",
    text: "Apply or renew your foreigner identity number with the right documents and timing.",
  },
  {
    title: "TIE",
    text: "Learn how to get or renew your residence card and avoid common document issues.",
  },
  {
    title: "Residence",
    text: "Review the document checklist and procedures for residence and renewal needs.",
  },
  {
    title: "Nationality",
    text: "Get guidance on the steps required for nationality applications and legal support.",
  },
];

export default function FormalitiesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Immigration formalities"
        text="Complete guidance for your documents."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {formalities.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#063d73]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
