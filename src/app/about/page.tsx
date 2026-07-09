import type { Metadata } from "next";
export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
    </main>
  );
}

export const metadata: Metadata = {
  title: "About CitaEspaña",

  description:
    "Learn about CitaEspaña and how we help people obtain immigration appointments throughout Spain.",

  alternates: {
    canonical: "/about",
  },
};