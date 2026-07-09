import type { Metadata } from "next";
export default function AboutPage() {
  return (
    <main>
      <h1>Contact</h1>
    </main>
  );
}
export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact CitaEspaña through WhatsApp and receive assistance with your immigration appointment.",

  alternates: {
    canonical: "/contact",
  },
};