import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const sections = [
  {
    title: "Check the publish directory",
    body:
      "If a site is deployed directly from a repository without a build step, the site files may live inside a subfolder while Netlify is publishing the repository root. In that case, the deployed URL can show a 404 because the actual files are under the subfolder path. Move the files to the configured publish root or update the publish directory in the Netlify site settings."
  },
  {
    title: "Add the SPA redirect rule",
    body:
      "Single-page applications built with tools such as Create React App, Vite, Angular, and similar frameworks usually rely on JavaScript for client-side routing. Add a _redirects file to the public folder, or the equivalent copied publish folder, with the fallback rule below."
  },
  {
    title: "Confirm SSR integration output",
    body:
      "Frameworks such as Next.js, Gatsby, Nuxt, Astro, Remix, and SvelteKit can use server-side rendering on Netlify. These integrations commonly generate redirects or function routes. If a deploy has no redirects, or far fewer than expected for a framework such as Next.js, the framework integration may not have run or may be misconfigured."
  },
  {
    title: "Inspect application-level 404 logic",
    body:
      "A server-rendered route or function can intentionally return a 404 based on data lookup results, authentication checks, feature flags, or other conditional logic. If the platform routing looks correct, inspect the code path that handles the request."
  },
  {
    title: "Check proxy destinations",
    body:
      "When a 404 comes from a proxied URL, verify whether the destination origin is returning the 404. Netlify may be routing the request correctly while the upstream service is responding with the missing page."
  },
  {
    title: "Verify asset paths",
    body:
      "If the HTML page loads but scripts, styles, images, or fonts return 404s, check that the generated asset URLs match where those files are actually published. Create React App, for example, can change asset paths based on the homepage value in package.json."
  },
  {
    title: "Review Edge Functions",
    body:
      "An Edge Function can intercept a request before it reaches the static file, rewrite, or function that you expected to handle it. Review any active Edge Functions that match the failing path."
  },
  {
    title: "Match proxied subdirectory assets",
    body:
      "If rewrites proxy one site into a subdirectory of another site, make sure assets are also published or referenced at URLs matching that directory structure. A base tag or absolute asset URLs can make the published paths more reliable."
  },
  {
    title: "Browse the deploy output",
    body:
      "When in doubt, build locally with the production build command rather than the development server, then inspect the deploy output. Netlify's Deploy File Browser can also confirm whether a file exists at the exact path being requested."
  }
];

export default function Netlify404TroubleshootingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-[#063d73] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/guides" className="text-blue-100 font-semibold">
              ← Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Why am I seeing a 404 on Netlify?
            </h1>
            <p className="text-lg text-blue-100 mt-6 leading-8">
              Netlify tries several file and route candidates before serving a
              404. If the URL looks correct, these are the most common causes to
              check.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-16">
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-[#10243e]">
              How Netlify reaches a 404
            </h2>
            <p className="text-gray-700 leading-8 mt-3">
              A request such as <code>/example/</code> can cause Netlify to look
              for files such as <code>/example/index.html</code>,{" "}
              <code>/example.html</code>, <code>/example/home.html</code>, and
              other route candidates before it falls through to the 404 page.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-[#10243e]">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-8 mt-3">{section.body}</p>
                {section.title === "Add the SPA redirect rule" && (
                  <pre className="mt-5 overflow-x-auto rounded-xl bg-[#061b33] p-5 text-white">
                    <code>{`/* /index.html 200`}</code>
                  </pre>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
