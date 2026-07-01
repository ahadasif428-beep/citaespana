import Link from "next/link";

export default function PageHero({
title,
text
}: {
title: string;
text: string;
}) {
  return (
    <section className="bg-[#063d73] text-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full bg-blue-600/80 px-4 py-2 text-sm font-semibold text-blue-50 sm:text-base">
          ⚡ Fast appointment support
        </div>

        <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg lg:text-xl">
          {text}
        </p>

        <Link
          href="/appointment"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-[#063d73] transition hover:bg-yellow-300 sm:px-8 sm:text-base"
        >
          ⚡ Request appointment
        </Link>
      </div>
    </section>
  );
}