import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const plans = [
  {
    title: "Appointment support",
    price: "No upfront fee",
    text: "You only pay when we secure an appointment for you.",
  },
  {
    title: "Procedure guidance",
    price: "From €49",
    text: "Simple support to understand your next steps and prepare your documents.",
  },
  {
    title: "Complete follow-up",
    price: "From €99",
    text: "Ongoing help from monitoring to confirmation and booking support.",
  },
];

export default function Prices() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Simple transparent prices"
        text="You only pay when we secure your appointment."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d90429]">{plan.title}</p>
                <p className="mt-4 text-3xl font-bold text-[#063d73]">{plan.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{plan.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <h2 className="text-2xl font-bold text-[#063d73] sm:text-3xl">No hidden fees</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Our pricing stays simple. We only charge you after we successfully help you secure an appointment.
            </p>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}