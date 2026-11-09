import { notFound, permanentRedirect } from "next/navigation";
import { provinces } from "@/data/provinces";

type Props = { params: Promise<{ province: string }> };

export default async function LegacyProvincePage({ params }: Props) {
  const { province: slug } = await params;
  const province = provinces.find((item) => item.slug === decodeURIComponent(slug).toLowerCase());
  if (!province) notFound();
  permanentRedirect(`/cita-previa-extranjeria/${province.slug}`);
}
