import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Precios de citas de extranjería en España",

  description:
    "Precios de citas de extranjería en España: NIE, TIE y huellas, carta de invitación, autorización de regreso, certificados y asilo.",
=======
  title: "Pricing",

  description:
    "Transparent pricing for immigration appointment services. Pay only after your appointment is secured.",
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

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