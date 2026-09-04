import { NextResponse } from "next/server";
import Stripe from "stripe";
import { calculateServerPrice } from "@/lib/booking-server";

export const runtime = "nodejs";

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { procedure, province, date, fullName, email, whatsapp, country, documentNumber, notes } = body ?? {};
    if (!procedure || !province || !date || !fullName || !email || !whatsapp || !country) {
      return NextResponse.json({ error: "Missing required booking fields" }, { status: 400 });
    }

    const price = calculateServerPrice({ procedure, province, date });
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
    const session = await stripeClient().checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      client_reference_id: `booking_${Date.now()}`,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: price.total * 100,
          product_data: {
            name: `${price.label} — ${province}`,
            description: `Fecha solicitada: ${date}. ${price.note}`,
          },
        },
      }],
      metadata: { fullName, email, whatsapp, country, province, procedure, date, documentNumber: documentNumber || "", notes: notes || "", price: String(price.total) },
      success_url: `${siteUrl}/appointment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/appointment/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to create Stripe Checkout Session" }, { status: 500 });
  }
}
