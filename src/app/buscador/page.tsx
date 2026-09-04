import type { Metadata } from "next";
import AppointmentSearch from "@/components/AppointmentSearch";
export const metadata: Metadata = {
  title: "Buscador de citas de extranjería por trámite y provincia",
  description: "Busca citas de extranjería por provincia y procedimiento en España: NIE, TIE, huellas, asilo, arraigo, residencia y más.",
  alternates: { canonical: "/buscador" },
};
export default function BuscadorPage() { return <main className="pt-24"><AppointmentSearch /></main>; }
