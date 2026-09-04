export type BookingPricingInput = {
  procedure: string;
  province: string;
  date: Date;
};

export type BookingPrice = {
  base: number;
  urgencyDiscount: number;
  total: number;
  label: string;
  note: string;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const SPECIAL_PROVINCE_FOOTPRINT: Record<string, number> = {
  castellon: 65,
  valencia: 55,
  almeria: 55,
  palencia: 55,
};

export const PRICE_LIST = [
  { service: "TIE / Footprints", scope: "España", price: 45, urgentPrice: 45 },
  { service: "TIE / Footprints", scope: "Castellón", price: 55, urgentPrice: 65 },
  { service: "TIE / Footprints", scope: "Valencia", price: 45, urgentPrice: 55 },
  { service: "TIE / Footprints", scope: "Almería", price: 45, urgentPrice: 55 },
  { service: "TIE / Footprints", scope: "Palencia", price: 45, urgentPrice: 55 },
  { service: "NIE Assignment", scope: "España", price: 45, urgentPrice: 45 },
  { service: "Carta de invitación", scope: "España", price: 45, urgentPrice: 45 },
  { service: "Authorization de regreso", scope: "España", price: 45, urgentPrice: 45 },
  { service: "Certificado de residencia / no residencia / concordancia", scope: "España", price: 45, urgentPrice: 45 },
  { service: "Asilo primera vez", scope: "Cualquier provincia", price: 190, urgentPrice: 200 },
  { service: "Asilo renovación", scope: "España", price: 70, urgentPrice: 80 },
  { service: "Asilo renovación Pradillo-40", scope: "Madrid", price: 120, urgentPrice: 130 },
] as const;

function daysFromToday(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(date);
  selected.setHours(0, 0, 0, 0);
  return Math.round((selected.getTime() - today.getTime()) / 86400000);
}

export function getBookingPrice({ procedure, province, date }: BookingPricingInput): BookingPrice {
  const p = normalize(procedure);
  const provinceKey = normalize(province);
  const days = daysFromToday(date);
  const urgent = days <= 3;

  let base = 45;
  let urgentPrice = 45;
  let label = "Gestión de cita";

  if (p.includes("footprint") || p.includes("huellas") || p.includes("tie")) {
    base = 45;
    urgentPrice = SPECIAL_PROVINCE_FOOTPRINT[provinceKey] ?? 45;
    label = "TIE / Footprints";
  } else if (p.includes("nie")) {
    base = urgentPrice = 45;
    label = "Asignación de N.I.E";
  } else if (p.includes("carta") && p.includes("invit")) {
    base = urgentPrice = 45;
    label = "Carta de invitación";
  } else if (p.includes("regreso") || p.includes("regresso") || p.includes("return")) {
    base = urgentPrice = 45;
    label = "Authorization de regreso";
  } else if (p.includes("certificado") || p.includes("concordancia")) {
    base = urgentPrice = 45;
    label = "Certificado / Concordancia";
  } else if (p.includes("asilo") && p.includes("renov")) {
    if (provinceKey === "madrid") {
      base = 120;
      urgentPrice = 130;
      label = "Asilo renovación — Pradillo-40";
    } else {
      base = 70;
      urgentPrice = 80;
      label = "Asilo renovación";
    }
  } else if (p.includes("asilo")) {
    base = 190;
    urgentPrice = 200;
    label = "Asilo primera vez";
  }

  const total = urgent ? urgentPrice : Math.max(0, urgentPrice - 10);
  const urgencyDiscount = urgent ? 0 : 10;

  return {
    base,
    urgencyDiscount,
    total,
    label,
    note: urgent
      ? "Tarifa urgente: cita solicitada dentro de los próximos 3 días."
      : "Tarifa estándar: para una fecha posterior a 3 días se aplican 10€ de descuento.",
  };
}
