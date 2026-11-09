import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios de citas de extranjería en España | CitaEs",
  description:
    "Consulta los precios de nuestros servicios de extranjería en España: citas NIE, TIE, huellas, carta de invitación, autorización de regreso, certificados y asilo.",
  alternates: {
    canonical: "/prices",
  },
};

export default function Prices() {
  return (
    <>
      <PageHero
        title="Precios claros y transparentes"
        text="Consulta nuestras tarifas para servicios de citas y asistencia en trámites de extranjería en España."
      />

      <Pricing />
    </>
  );
}