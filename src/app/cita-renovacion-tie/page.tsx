import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoLandingPageMap } from "@/data/seoLandingPages";

const page = seoLandingPageMap["cita-renovacion-tie"];
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "/cita-renovacion-tie" },
  openGraph: { title: page.title, description: page.description, url: "https://www.citaespana.com/cita-renovacion-tie", type: "article", locale: "es_ES" },
};

export default function Page() { return <SeoLandingPage page={page} />; }
