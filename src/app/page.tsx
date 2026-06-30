import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

import Procedures from "@/components/Procedures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Compare from "@/components/Compare";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Guidelines from "@/components/Guidelines";
import PracticalGuides from "@/components/PracticalGuides";
import Provinces from "@/components/Provinces";
import EligibilityCTA from "@/components/EligibilityCTA";
import AppointmentAlert from "@/components/AppointmentAlert";
import LegalNotice from "@/components/LegalNotice";
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
        <Stats />
        <HowItWorks />
        <Procedures />
        <Pricing />
        <Compare />
        <Testimonials />
        <Guarantee />
        <WhyChoose />
        <Guidelines />
        <PracticalGuides />
        <Provinces />
        <FAQ />
        <EligibilityCTA />
        <AppointmentAlert />
        <LegalNotice />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}