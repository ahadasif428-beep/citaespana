import type { Metadata } from "next";
export default function AboutPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
    </main>
  );
}
export const metadata: Metadata = {
  title: "Frequently Asked Questions",

  description:
    "Answers to the most common questions about immigration appointments in Spain.",

  alternates: {
    canonical: "/faq",
  },
};