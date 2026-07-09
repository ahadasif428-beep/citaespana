import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AppointmentHero from "@/components/appointment/AppointmentHero";

import Process from "@/components/appointment/Process";
import Comparison from "@/components/appointment/Comparison";
import AppointmentProcedures from "@/components/appointment/AppointmentProcedures";
import Pricing from "@/components/appointment/Pricing";
import FAQ from "@/components/appointment/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",

  description:
    "Request your immigration appointment anywhere in Spain through CitaEspaña.",

  alternates: {
    canonical: "/appointment",
  },
};

export default function Appointment(){


return(

<>

<Navbar/>

<AppointmentHero/>



<Process/>

<Comparison/>

<AppointmentProcedures/>

<Pricing/>

<FAQ/>

<Footer/>



</>

)

}