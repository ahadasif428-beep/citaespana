import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios de citas de extranjería en España",

  description:
    "Precios de citas de extranjería en España: NIE, TIE y huellas, carta de invitación, autorización de regreso, certificados y asilo.",

  alternates: {
    canonical: "/prices",
  },
};

export default function Prices(){


return(

<>

<PageHero

title="Simple transparent prices"

text="You only pay when we secure your appointment."

/>


<Pricing/>


</>

)


}