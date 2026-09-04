import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoLandingPageMap } from "@/data/seoLandingPages";

const page = seoLandingPageMap["cita-arraigo"];
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "/cita-arraigo" },
  openGraph: { title: page.title, description: page.description, url: "https://www.citaespana.com/cita-arraigo", type: "article", locale: "es_ES" },
};

export default function Page() { return <SeoLandingPage page={page} />; }
