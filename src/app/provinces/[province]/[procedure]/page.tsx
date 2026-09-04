import { notFound, permanentRedirect } from "next/navigation";
import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";

type Props = { params: Promise<{ province: string; procedure: string }> };

export default async function LegacyProcedurePage({ params }: Props) {
  const { province: provinceSlug, procedure: procedureSlug } = await params;
  const province = provinces.find((item) => item.slug === decodeURIComponent(provinceSlug).toLowerCase());
  if (!province) notFound();

  const raw = decodeURIComponent(procedureSlug).toLowerCase();
  const procedure = seoProcedures.find((item) => item.slug === raw || item.name.toLowerCase() === raw || item.shortName.toLowerCase() === raw);
  if (!procedure) notFound();

  permanentRedirect(`/cita-previa-extranjeria/${province.slug}/${procedure.slug}`);
}
