import Link from "next/link";

export default async function AppointmentSuccess({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const params = await searchParams;
  return <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 via-white to-amber-50 px-5"><div className="max-w-xl w-full bg-white rounded-[32px] shadow-2xl border p-10 text-center"><div className="mx-auto w-20 h-20 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-4xl">✓</div><h1 className="mt-6 text-4xl font-black">Pago recibido</h1><p className="mt-4 text-gray-600">Tu pago se ha procesado correctamente. Guardamos tu solicitud y nuestro equipo confirmará la disponibilidad.</p>{params.session_id && <p className="mt-4 text-xs text-gray-400 break-all">Referencia: {params.session_id}</p>}<Link href="/" className="inline-flex mt-8 rounded-2xl bg-[#C60B1E] text-white font-bold px-7 py-4">Volver a CitaEspaña</Link></div></main>;
}
