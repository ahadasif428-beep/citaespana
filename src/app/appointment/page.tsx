
import AppointmentHero from "@/components/appointment/AppointmentHero";

import Process from "@/components/appointment/Process";
import Comparison from "@/components/appointment/Comparison";
import AppointmentProcedures from "@/components/appointment/AppointmentProcedures";
import Pricing from "@/components/appointment/Pricing";
import FAQ from "@/components/appointment/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitar cita previa de extranjería en España",

  description:
    "Solicita tu cita previa de extranjería en España. Selecciona provincia y trámite, elige fecha, consulta la tarifa y completa tus datos de contacto.",

  alternates: {
    canonical: "/appointment",
  },
};

export default function Appointment(){


return(

<>



<AppointmentHero/>



<Process/>

<Comparison/>

<AppointmentProcedures/>

<Pricing/>

<FAQ/>




</>

)

}