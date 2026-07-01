import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const provinces = [
  "Alicante",
  "Barcelona",
  "Bilbao",
  "Cádiz",
  "Madrid",
  "Málaga",
  "Sevilla",
  "Valencia",
];

export default function ProvincesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Spain provinces"
        text="We monitor appointments across 52 provinces."
      />

      <main className="overflow-x-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {provinces.map((province) => (
              <div key={province} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#063d73]">{province}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Appointment monitoring and process guidance available for {province}.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#063d73] p-8 text-white shadow-xl sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Support in every province</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
              Whether you need help in a large city or a smaller office, we help you find the next suitable slot.
            </p>
            <Link href="/appointment" className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-[#063d73] transition hover:bg-yellow-300">
              Request appointment
            </Link>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
