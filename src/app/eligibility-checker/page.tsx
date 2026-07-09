import type { Metadata } from "next";
export default function AboutPage() {
  return (
    <main>
      <h1>Eligibility Checker</h1>
    </main>
  );
}
export const metadata: Metadata = {
  title: "Eligibility Checker",

  description:
    "Check whether you qualify for immigration procedures before requesting an appointment.",

  alternates: {
    canonical: "/eligibility-checker",
  },
};