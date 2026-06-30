import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const guides = [
  {
    title: "Why am I seeing a 404 on Netlify?",
    description:
      "A practical checklist for diagnosing unexpected 404 responses on Netlify deployments.",
    href: "/guides/netlify-404-troubleshooting"
  }
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-[#063d73] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-blue-100 font-semibold">Practical Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Troubleshooting guides for common site problems
            </h1>
            <p className="text-lg text-blue-100 mt-6 max-w-3xl leading-8">
              Clear checks for diagnosing issues that are easy to miss during
              deployment and routing setup.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-2xl font-bold text-[#10243e]">
                  {guide.title}
                </h2>
                <p className="text-gray-600 mt-3 leading-7">
                  {guide.description}
                </p>
                <span className="text-red-600 font-bold inline-block mt-5">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
