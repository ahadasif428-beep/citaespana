"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { provinces, procedures } from "@/data/options";
import { getBookingPrice } from "@/data/pricing";
import { supabase } from "@/lib/supabase";

const countries = ["España", "Pakistán", "Marruecos", "Colombia", "Venezuela", "Perú", "Argentina", "Ecuador", "China", "Ucrania", "Otro"];
const paymentMethods = ["Tarjeta / Stripe", "Bizum", "Transferencia bancaria", "PayPal", "Quiero pagar por WhatsApp"];

function isoToday() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  return new Date(d.getTime() - offset * 60000).toISOString().slice(0, 10);
}

function formatDate(value: string) {
  if (!value) return "Selecciona una fecha";
  return new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

export default function AppointmentCheckout() {
  const [province, setProvince] = useState("");
  const [procedure, setProcedure] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const price = useMemo(() => {
    if (!procedure || !province || !date) return null;
    return getBookingPrice({ procedure, province, date: new Date(`${date}T12:00:00`) });
  }, [procedure, province, date]);

  const minDate = isoToday();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProvince(params.get("province") || "");
    setProcedure(params.get("procedure") || "");
    const whatsappParam = params.get("whatsapp") || "";
    if (whatsappParam) setWhatsapp(whatsappParam);
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!province || !procedure || !date || !country || !fullName || !email || !whatsapp || !paymentMethod || !price) {
      setError("Completa todos los campos obligatorios para continuar.");
      return;
    }

    setSaving(true);
    if (paymentMethod === "Tarjeta / Stripe") {
      try {
        const response = await fetch("/api/stripe/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ province, procedure, date, fullName, email, whatsapp, country, documentNumber, notes }),
        });
        const data = await response.json();
        if (!response.ok || !data.url) throw new Error(data.error || "No se pudo iniciar Stripe");
        window.location.href = data.url;
        return;
      } catch (stripeError) {
        console.error(stripeError);
        setError("No se pudo iniciar el pago con Stripe. Prueba otra forma de pago.");
        setSaving(false);
        return;
      }
    }

    const booking = {
      name: fullName,
      email,
      phone: whatsapp,
      country,
      province,
      procedure,
      appointment_date: date,
      document_number: documentNumber || null,
      payment_method: paymentMethod,
      price: price.total,
      status: "Nuevo",
      notes: notes || null,
    };

    const { error: supabaseError } = await supabase.from("leads").insert(booking);
    if (supabaseError) console.error(supabaseError);

    const message = `Hola CitaEspaña, quiero reservar una cita.\n\nNombre: ${fullName}\nEmail: ${email}\nPaís: ${country}\nProvincia: ${province}\nTrámite: ${procedure}\nFecha solicitada: ${formatDate(date)}\nWhatsApp: ${whatsapp}\nDocumento: ${documentNumber || "No indicado"}\nMétodo de pago: ${paymentMethod}\nPrecio: ${price.total}€\n${notes ? `Notas: ${notes}` : ""}`;

    window.open(`https://wa.me/34672399181?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setSaving(false);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#fff7f7] via-white to-[#fff8e8] py-20 px-5">
        <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 md:p-14 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-4xl">✓</div>
          <h1 className="text-4xl font-black mt-7 text-gray-900">Solicitud recibida</h1>
          <p className="mt-4 text-gray-600 leading-7">Hemos preparado tu solicitud y abierto WhatsApp para que podamos confirmar disponibilidad, cita y pago.</p>
          {price && <div className="mt-8 rounded-2xl bg-red-50 border border-red-100 p-6"><div className="text-sm font-semibold text-gray-500">Precio estimado</div><div className="text-5xl font-black text-[#C60B1E] mt-2">{price.total}€</div><div className="text-sm text-gray-600 mt-2">{price.note}</div></div>}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"><a href="https://wa.me/34672399181" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#25D366] text-white font-bold px-7 py-4">Abrir WhatsApp</a><Link href="/" className="rounded-2xl border-2 border-[#C60B1E] text-[#C60B1E] font-bold px-7 py-4">Volver a inicio</Link></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7f7] via-white to-[#fff8e8] py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-red-50 text-[#C60B1E] px-4 py-2 font-bold text-sm">🇪🇸 Solicitud de cita en España</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-black text-gray-900">Completa tu información de cita</h1>
          <p className="mt-4 text-gray-600 leading-7">Selecciona provincia, trámite y fecha. El precio se calcula automáticamente según la urgencia y el servicio.</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid lg:grid-cols-[1fr_360px] gap-7">
          <section className="bg-white rounded-[30px] shadow-xl border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Provincia *"><select value={province} onChange={(e) => setProvince(e.target.value)} className="input"><option value="">Selecciona provincia</option>{provinces.map((p) => <option key={p} value={p}>{p}</option>)}</select></Field>
              <Field label="Trámite *"><select value={procedure} onChange={(e) => setProcedure(e.target.value)} className="input"><option value="">Selecciona trámite</option>{procedures.map((p) => <option key={p} value={p}>{p}</option>)}<option>Asilo primera vez</option><option>Asilo renovación</option><option>Asilo renovación Pradillo-40</option><option>Asignación De N.I.E</option><option>Carta de invitation</option><option>AUTHORIZATION de regresso</option><option>Certificate residence no Residencies Comcordencia</option></select></Field>
            </div>

            <div>
              <label className="label">Fecha preferida de cita *</label>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {Array.from({ length: 14 }, (_, index) => {
                  const d = new Date();
                  d.setHours(12, 0, 0, 0);
                  d.setDate(d.getDate() + index);
                  const iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
                  const dayPrice = province && procedure ? getBookingPrice({ province, procedure, date: d }) : null;
                  const selected = date === iso;
                  return (
                    <button
                      type="button"
                      key={iso}
                      onClick={() => setDate(iso)}
                      className={`rounded-2xl border p-3 text-left transition ${selected ? "border-[#C60B1E] bg-red-50 ring-2 ring-red-100" : "border-gray-200 bg-white hover:border-red-200 hover:bg-red-50/40"}`}
                    >
                      <div className="text-xs font-bold uppercase text-gray-400">{new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(d)}</div>
                      <div className="mt-1 text-lg font-black text-gray-900">{d.getDate()} {new Intl.DateTimeFormat("es-ES", { month: "short" }).format(d)}</div>
                      {dayPrice ? <div className="mt-1 text-sm font-black text-[#C60B1E]">{dayPrice.total}€</div> : <div className="mt-1 text-xs text-gray-400">Selecciona trámite</div>}
                    </button>
                  );
                })}
              </div>
              <input required type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="input" aria-label="Fecha personalizada" />
              <p className="mt-2 text-xs text-gray-500">Dentro de 3 días = tarifa urgente. Después de 3 días = 10€ menos.</p>
            </div>

            <div className="rounded-3xl border border-red-100 bg-red-50 p-5">
              <div className="text-sm font-bold text-[#C60B1E]">Calendario de precios</div>
              <div className="mt-2 text-gray-700">{date ? formatDate(date) : "Selecciona una fecha"}</div>
              {price && <div className="mt-4 flex items-end justify-between"><div><div className="font-black text-gray-900">{price.label}</div><div className="text-xs text-gray-500 mt-1">{price.note}</div></div><div className="text-4xl font-black text-[#C60B1E]">{price.total}€</div></div>}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nombre completo *"><input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="input" placeholder="Nombre y apellidos" /></Field>
              <Field label="Email *"><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="tu@email.com" /></Field>
              <Field label="WhatsApp *"><input required type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="input" placeholder="+34 612 345 678" /></Field>
              <Field label="País *"><select required value={country} onChange={(e) => setCountry(e.target.value)} className="input"><option value="">Selecciona país</option>{countries.map((c) => <option key={c}>{c}</option>)}</select></Field>
              <Field label="NIE / Pasaporte"><input value={documentNumber} onChange={(e) => setDocumentNumber(e.target.value)} className="input" placeholder="Opcional" /></Field>
              <Field label="Método de pago *"><select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="input"><option value="">Selecciona método</option>{paymentMethods.map((m) => <option key={m}>{m}</option>)}</select></Field>
            </div>

            <div><label className="label">Información adicional</label><textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-28 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#C60B1E]" placeholder="Indica cualquier detalle importante sobre tu trámite..." /></div>
            {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-semibold">{error}</div>}
            <button disabled={saving} className="w-full rounded-2xl bg-[#C60B1E] hover:bg-[#A40818] disabled:bg-gray-400 text-white font-black py-4 text-lg shadow-xl transition">{saving ? "Enviando..." : `Continuar con ${price ? `${price.total}€` : "la solicitud"} →`}</button>
            <p className="text-center text-xs text-gray-500">La disponibilidad y el pago final se confirman con nuestro equipo. No se realiza un cargo automático en esta página.</p>
          </section>

          <aside className="lg:sticky lg:top-24 h-fit space-y-5">
            <div className="bg-gray-900 text-white rounded-[28px] p-7 shadow-2xl"><div className="text-sm text-gray-300">Tu resumen</div><div className="text-2xl font-black mt-2">CitaEspaña</div><div className="mt-6 space-y-3 text-sm"><Row k="Provincia" v={province || "—"}/><Row k="Trámite" v={procedure || "—"}/><Row k="Fecha" v={date ? formatDate(date) : "—"}/><Row k="País" v={country || "—"}/><Row k="Email" v={email || "—"}/></div><div className="mt-7 border-t border-white/10 pt-6"><div className="text-gray-400 text-sm">Total estimado</div><div className="text-5xl font-black mt-1">{price ? `${price.total}€` : "—"}</div>{price && price.urgencyDiscount > 0 && <div className="text-green-400 text-sm mt-2">-10€ por fecha posterior a 3 días</div>}</div></div>
            <div className="bg-white rounded-[28px] p-6 shadow-xl border border-gray-100"><div className="font-black text-gray-900">¿Necesitas ayuda?</div><p className="text-sm text-gray-600 mt-2">Nuestro equipo puede confirmar el trámite, la oficina y el pago por WhatsApp.</p><a className="mt-5 inline-flex w-full justify-center rounded-xl bg-[#25D366] text-white font-bold py-3" href="https://wa.me/34672399181" target="_blank" rel="noreferrer">💬 WhatsApp</a></div>
          </aside>
        </form>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="label">{label}</span>{children}</label>;
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex items-start justify-between gap-4"><span className="text-gray-400">{k}</span><span className="text-right font-semibold">{v}</span></div>;
}
