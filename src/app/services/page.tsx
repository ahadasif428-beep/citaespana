import Link from "next/link";
<<<<<<< HEAD
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de extranjería en España | CitaEspaña",

  description:
    "Servicios de extranjería en España: citas NIE, TIE, huellas, residencia, arraigo, asilo, reagrupación familiar y asistencia informativa por provincia.",
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Services",

  description:
    "Explore our immigration appointment services including NIE, TIE, Residence, Family Reunification, Fingerprints and more.",
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

  alternates: {
    canonical: "/services",
  },
};


const services = [

{
title:"Immigration Appointment",
slug:"immigration-appointment",
icon:"📅",
description:
"24/7 automated monitoring system for scheduling appointments at immigration offices. Instant alerts via WhatsApp.",
tags:[
"24/7 Monitoring",
"WhatsApp Alerts",
"All provinces"
]
},


{
title:"Fingerprinting",
slug:"fingerprinting",
icon:"👆",
description:
"Get your appointment for the fingerprinting required to obtain your TIE in any province.",
tags:[
"Quick and easy",
"No waiting",
"Full management"
]
},


{
title:"NIE/TIE Renewal",
slug:"nie-tie-renewal",
icon:"🪪",
description:
"Full assistance to renew your Foreigner Identity Number or Foreigner Identity Card.",
tags:[
"Consulting included",
"Documentation",
"Follow-up"
]
},


{
title:"Asylum and International Protection",
slug:"asylum-and-international-protection",
icon:"🛂",
description:
"Advice and appointment management for asylum and international protection applications in Spain.",
tags:[
"Legal advice",
"Ongoing support",
"Confidentiality"
]
},



{
title:"Social Integration",
slug:"social-integration",
icon:"🏠",
description:
"We handle residency applications based on social, employment, and family ties.",
tags:[
"3 types of rootedness",
"Documentation",
"High success rate"
]
},



{
title:"Spanish Nationality",
slug:"spanish-nationality",
icon:"🇪🇸",
description:
"Assistance in obtaining Spanish nationality through residence, marriage or other legal means.",
tags:[
"Several ways",
"Exam preparation",
"Full tracking"
]
},



{
title:"Foreign Students",
slug:"foreign-students",
icon:"🎓",
description:
"Specialized services for international students: visas, renewals and work permits.",
tags:[
"Student visa",
"Renewals",
"Work authorization"
]
},



{
title:"Criminal Record",
slug:"criminal-record",
icon:"📄",
description:
"Appointment management to request or renew criminal record certificates.",
tags:[
"Full management",
"All provinces",
"Consulting included"
]
}



];





const guides=[

"Social Integration",
"Employment Ties",
"Family Ties",
"Roots Training",
"Regularization 2026",
"NIE Renewal",
"Work Authorization",
"Family Reunification",
"Non-Profit Residence",
"Asylum and Refuge",
"Spanish Nationality",
"Community Card"

];





export default function Services(){



return(

<>





<<<<<<< HEAD
<PageHero title="Servicios de extranjería" text="Soluciones para citas de NIE, TIE, huellas, arraigo, asilo, nacionalidad y otros trámites en toda España." />
=======
<section className="bg-blue-700 text-white py-24">


<div className="max-w-6xl mx-auto text-center px-6">


<h1 className="text-5xl font-bold">

Our Immigration Services

</h1>


<p className="text-xl mt-6 text-blue-100">

Complete solutions for all your immigration procedures in Spain.
24/7 automated monitoring and personalized support.

</p>



<a

href="https://wa.me/34672399181"

target="_blank"

className="
inline-block
mt-10
bg-green-500
px-10
py-4
rounded-xl
font-bold
"

>

💬 Contact via WhatsApp

</a>


</div>


</section>
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823






<section className="py-24">


<div className="max-w-7xl mx-auto px-6">



<h2 className="text-4xl font-bold text-center">

All the Services You Need

</h2>


<p className="text-center text-gray-600 mt-3">

From scheduling appointments to complete document processing

</p>




<<<<<<< HEAD
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-14">
=======
<div className="grid md:grid-cols-3 gap-8 mt-14">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823


{

services.map((service)=>(


<div

key={service.slug}

className="
bg-white
border
rounded-3xl
p-8
shadow-sm
hover:shadow-xl
transition
"


>


<div className="text-5xl">

{service.icon}

</div>



<h3 className="text-2xl font-bold mt-6">

{service.title}

</h3>



<p className="text-gray-600 mt-4 leading-7">

{service.description}

</p>



<div className="mt-6 space-y-2">


{

service.tags.map(tag=>(


<div

key={tag}

className="text-sm font-semibold"

>

✓ {tag}

</div>


))


}


</div>





<Link href={`/services/${service.slug}`}>
More information →
</Link>



</div>


))


}


</div>



</div>


</section>








<section className="bg-gray-50 py-24">


<div className="max-w-5xl mx-auto px-6">


<h2 className="text-4xl font-bold text-center">

Guide to Available Procedures

</h2>



<p className="text-center text-gray-600 mt-4">

Detailed information about requirements, documents and steps.

</p>




<div className="grid md:grid-cols-3 gap-5 mt-12">


{


guides.map(item=>(


<Link


key={item}


href={`/services/${item
.toLowerCase()
.replaceAll(" ","-")
}`}


className="
border
rounded-xl
p-5
bg-white
hover:bg-gray-100
font-semibold
flex
justify-between
"


>


<span>

{item}

</span>


<span>

→

</span>



</Link>


))


}



</div>



</div>


</section>









<section className="py-20">


<div className="max-w-4xl mx-auto text-center px-6">


<h2 className="text-4xl font-bold">

Not sure which service you need?

</h2>


<p className="mt-5 text-gray-600">

Contact us via WhatsApp and we will help you choose the right service.

</p>



<div className="flex justify-center gap-5 mt-10">


<a

href="https://wa.me/34672399181"

target="_blank"

className="
bg-green-500
text-white
px-10
py-4
rounded-xl
font-bold
"

>

Contact via WhatsApp

</a>


<Link

href="/guides"

className="
bg-red-600
text-white
px-10
py-4
rounded-xl
font-bold
"

>

View Guides

</Link>


</div>


</div>


</section>







</>


)

}