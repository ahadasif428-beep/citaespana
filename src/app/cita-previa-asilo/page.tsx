import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoLandingPageMap } from "@/data/seoLandingPages";

const page = seoLandingPageMap["cita-previa-asilo"];
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "/cita-previa-asilo" },
  openGraph: { title: page.title, description: page.description, url: "https://www.citaespana.com/cita-previa-asilo", type: "article", locale: "es_ES" },
};

export default function Page() { return <SeoLandingPage page={page} />; }
