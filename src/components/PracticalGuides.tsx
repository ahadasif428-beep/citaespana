import Link from "next/link";

export default function PracticalGuides() {


const guides = [

{
title:"Why am I seeing a 404 on Netlify?",
text:"Common causes of unexpected 404s on Netlify and the checks that usually fix them.",
color:"bg-yellow-400",
linkColor:"text-red-600",
href:"/guides/netlify-404-troubleshooting"
},

{
title:"Is my passport expired?",
text:"What to do when your documents have expired before you can request an appointment.",
color:"bg-red-700",
linkColor:"text-red-600",
href:"#"
},

{
title:"Rooting without an employment contract?",
text:"How to demonstrate social and employment ties without a formal contract. Alternative documents.",
color:"bg-green-500",
linkColor:"text-green-500",
href:"#"
},

{
title:"My application was denied",
text:"What resources and options do you have after receiving a denial?",
color:"bg-blue-900",
linkColor:"text-blue-700",
href:"#"
},

{
title:"Problems with the census",
text:"How to obtain historical registration and resolve conflicts with the town hall.",
color:"bg-orange-500",
linkColor:"text-red-600",
href:"#"
},

{
title:"Criminal record",
text:"How do I request a background check certificate? What happens if I have a criminal record?",
color:"bg-purple-600",
linkColor:"text-purple-600",
href:"#"
}

]



return (

<section className="py-24 bg-white">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-center text-4xl font-serif font-bold text-[#10243e]">

Practical Guides: Common Problems

</h2>


<p className="text-center mt-4 text-gray-600 font-serif">

The most frequently asked questions we receive via WhatsApp, answered.

</p>




<div className="grid md:grid-cols-3 gap-6 mt-12">



{
guides.map((item,index)=>(


<div

key={index}

className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"

>


<div

className={`${item.color} p-7 h-[105px] flex items-center`}

>


<h3 className="text-white text-xl font-bold font-serif">

{item.title}

</h3>


</div>



<div className="p-7 h-[170px]">


<p className="text-gray-700 leading-7 font-serif text-[15px]">

{item.text}

</p>



<Link
href={item.href}

className={`${item.linkColor} font-bold inline-block mt-6`}

>

Read guide →

</Link>



</div>


</div>


))

}



</div>




<div className="text-center mt-12">

<Link href="/guides" className="text-red-600 font-bold text-lg">

View all practical guides →

</Link>

</div>



</div>


</section>


)

}
