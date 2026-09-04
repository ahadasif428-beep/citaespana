import { getBookingPrice } from "@/data/pricing";

export function calculateServerPrice(input: { procedure: string; province: string; date: string }) {
  if (!input.procedure || !input.province || !input.date) throw new Error("Missing booking data");
  const date = new Date(`${input.date}T12:00:00`);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid date");
  return getBookingPrice({ procedure: input.procedure, province: input.province, date });
}
