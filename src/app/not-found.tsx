import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <p className="text-7xl font-black text-[#063d73] sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-[#063d73] sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you were looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#d90429] px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
