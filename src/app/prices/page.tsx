import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",

  description:
    "Transparent pricing for immigration appointment services. Pay only after your appointment is secured.",

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