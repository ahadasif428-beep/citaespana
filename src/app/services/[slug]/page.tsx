import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import Link from "next/link";


type ServiceSlug = keyof typeof services;


export default async function Page({
  params
}: {
  params: Promise<{ slug: ServiceSlug }>
}) {


  const { slug } = await params;


  const service = services[slug];


  const faqs = [
    {
      q: "How long does it take?",
      a: "The time depends on the province and immigration procedure. We monitor availability 24/7."
    },
    {
      q: "Do I pay before appointment?",
      a: "No. You only pay after we find and confirm your appointment."
    },
    {
      q: "Is it available in my province?",
      a: "Yes. We cover all 52 provinces of Spain."
    },
    {
      q: "Are you connected with Spanish Government?",
      a: "No. Citaes is an independent private appointment assistance service."
    }
  ];


  if (!service) {
    return (
      <h1 className="text-3xl text-center mt-20">
        Service not found
      </h1>
    );
  }


  return (
    <>


      <Navbar />


      {/* HERO */}

      <section className="bg-[#0046d8] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


          <div>


            <span className="bg-blue-500 px-5 py-2 rounded-full">

              {service.badge}

            </span>


            <h1 className="text-6xl font-bold mt-8 leading-tight">

              {service.title}

            </h1>


            <p className="text-xl text-blue-100 mt-6 leading-8">

              {service.description}

            </p>



            <div className="flex gap-5 mt-10">


              <a
                href="https://wa.me/923001234567"
                className="
                bg-green-500
                px-10
                py-4
                rounded-xl
                font-bold
                "
              >

                💬 Contact via WhatsApp

              </a>



              <Link
                href="/appointment"
                className="
                bg-white
                text-blue-700
                px-10
                py-4
                rounded-xl
                font-bold
                "
              >

                Request appointment

              </Link>


            </div>


          </div>





          <div className="
          bg-white/10
          rounded-3xl
          p-10
          border
          border-white/20
          ">


            <h2 className="text-3xl font-bold">

              Need an appointment?

            </h2>


            <p className="mt-5 text-blue-100">

              We monitor availability 24/7 and notify you when an appointment appears.

            </p>


            <div className="mt-8 space-y-4">

              <div>✓ All Spain provinces</div>
              <div>✓ WhatsApp alerts</div>
              <div>✓ No upfront payment</div>

            </div>


          </div>



        </div>


      </section>







      {/* STATS */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">


          {[
            ["5000+", "Appointments"],
            ["24/7", "Monitoring"],
            ["52", "Provinces"],
            ["98%", "Success"]

          ].map((x) => (

            <div
              key={x[1]}
              className="
              bg-gray-50
              rounded-3xl
              p-8
              text-center
              "
            >

              <h2 className="text-4xl font-bold">

                {x[0]}

              </h2>


              <p className="text-gray-600 mt-3">

                {x[1]}

              </p>


            </div>


          ))}


        </div>


      </section>








      {/* HOW WORK */}


      <section className="bg-gray-50 py-24">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-5xl font-bold text-center">

            How does it work?

          </h2>



          <div className="grid md:grid-cols-4 gap-6 mt-14">


            {[
              "Send your information",
              "We activate monitoring",
              "We find availability",
              "You receive confirmation"

            ].map((x,i)=>(


              <div
                key={x}
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-sm
                "
              >


                <div className="
                w-14
                h-14
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-xl
                ">


                  0{i+1}


                </div>


                <h3 className="font-bold text-xl mt-6">

                  {x}

                </h3>


              </div>


            ))}


          </div>


        </div>


      </section>








      {/* FEATURES */}


      <section className="py-24">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-5xl font-bold">

            What we manage

          </h2>



          <div className="grid md:grid-cols-3 gap-6 mt-12">


            {service.features.map((x)=>(


              <div
                key={x}
                className="
                border
                rounded-3xl
                p-8
                "
              >

                <h3 className="text-xl font-bold">

                  ✓ {x}

                </h3>


              </div>


            ))}


          </div>


        </div>


      </section>







      <FAQ />








      <section className="bg-yellow-50 py-20">


        <div className="text-center">


          <h2 className="text-5xl font-bold">

            Do you need your appointment?

          </h2>


          <a
            href="https://wa.me/923001234567"
            className="
            inline-block
            mt-8
            bg-red-600
            text-white
            px-10
            py-4
            rounded-xl
            font-bold
            "
          >

            Contact via WhatsApp

          </a>


        </div>


      </section>





      <Footer />


    </>
  );
}