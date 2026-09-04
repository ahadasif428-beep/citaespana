import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoLandingPageMap } from "@/data/seoLandingPages";

const page = seoLandingPageMap["cita-permiso-trabajo"];
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "/cita-permiso-trabajo" },
  openGraph: { title: page.title, description: page.description, url: "https://www.citaespana.com/cita-permiso-trabajo", type: "article", locale: "es_ES" },
};

export default function Page() { return <SeoLandingPage page={page} />; }
