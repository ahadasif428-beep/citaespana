import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitar cita de extranjería en España",
  description: "Completa tus datos, selecciona provincia, trámite y fecha para consultar la tarifa de tu cita de extranjería en España.",
  alternates: { canonical: "/appointment/checkout" },
  robots: { index: false, follow: true },
};

export default function CheckoutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
