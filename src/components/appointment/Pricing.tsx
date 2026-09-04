<<<<<<< HEAD
export { default } from "@/components/Pricing";
=======
"use client";

export default function Pricing() {


function whatsapp(plan:string){

const message = `
Hello CitaEs,

I want to request the ${plan} package.

Please provide more details.

`;

window.open(
`https://api.whatsapp.com/send?phone=34672399181&text=${encodeURIComponent(message)}`,
"_blank"
);

}



function eligibility(){

window.location.href="/eligibility-checker";

}



return (

<section className="py-24 bg-white">


<div className="max-w-7xl mx-auto px-6">


{/* HEADER */}

<div className="text-center mb-16">


<p className="text-blue-600 font-bold tracking-widest">
TRANSPARENT TARIFFS
</p>


<h2 className="text-5xl font-bold mt-4 text-[#111827]">

Clear prices, no surprises

</h2>


<p className="mt-5 text-gray-500 text-lg">

You only pay if we get you an appointment. No hidden fees.

</p>


</div>





<div className="grid md:grid-cols-3 gap-8">





{/* STANDARD */}

<div className="
border
rounded-3xl
p-10
shadow-sm
hover:shadow-xl
transition
">


<h3 className="text-blue-900 font-bold tracking-wide">
STANDARD
</h3>


<div className="flex items-end mt-5">

<span className="text-5xl font-bold">
€69
</span>

<span className="text-blue-900 ml-2">
/appointment
</span>

</div>


<p className="mt-4 text-gray-500">
No upfront payment
</p>



<ul className="mt-8 space-y-5 text-lg">


<li>✓ NIE</li>

<li>✓ Fingerprinting</li>

<li>✓ Certificates of Residence</li>

<li>✓ Invitation Letter</li>

<li>✓ Return Authorization</li>


</ul>




<button

onClick={()=>whatsapp("Standard")}

className="
mt-10
w-full
border-2
border-green-500
text-green-600
py-4
rounded-xl
font-bold
hover:bg-green-500
hover:text-white
transition
"

>

Request via WhatsApp

</button>



</div>







{/* PREMIUM */}



<div className="
bg-[#27439b]
text-white
rounded-3xl
p-10
shadow-xl
border-2
border-blue-500
relative
">


<div className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-yellow-400
text-black
px-6
py-2
rounded-full
font-bold
text-sm
">

MOST POPULAR

</div>




<h3 className="font-bold tracking-wide">

PREMIUM

</h3>



<div className="flex items-end mt-5">


<span className="text-5xl font-bold">

€149

</span>


<span className="ml-2">
/appointment
</span>


</div>




<p className="mt-4">

No upfront payment

</p>





<ul className="mt-8 space-y-5 text-lg">


<li>✓ TIE (Foreigner's Card)</li>

<li>✓ Permit Renewals</li>

<li>✓ Social / Labor Integration</li>

<li>✓ Family Reunification</li>


</ul>






<button

onClick={()=>whatsapp("Premium")}

className="
mt-10
w-full
bg-green-500
py-4
rounded-xl
font-bold
hover:bg-green-600
transition
"

>

Request via WhatsApp

</button>




</div>









{/* REGULARIZATION */}



<div className="
border
border-red-300
rounded-3xl
p-10
relative
">



<div className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-red-500
text-white
px-6
py-2
rounded-full
font-bold
text-sm
text-center
">

Official State Gazette (BOE)
<br/>
15 April 2026

</div>





<h3 className="
text-red-600
font-bold
tracking-wide
">

REGULARIZATION 2026 + ASYLUM

</h3>




<div className="flex items-end mt-5">


<span className="text-5xl font-bold">

€300

</span>


<span className="ml-2 text-gray-500">
/package
</span>


</div>




<p className="mt-4 text-gray-500">

All-inclusive complete package

</p>






<ul className="mt-8 space-y-5 text-lg">


<li className="text-red-500">
✓ <span className="text-gray-700">
Regularization 2026 complete
</span>
</li>


<li className="text-red-500">
✓ <span className="text-gray-700">
Asylum and International Protection
</span>
</li>


<li className="text-red-500">
✓ <span className="text-gray-700">
Eligibility verification
</span>
</li>


<li className="text-red-500">
✓ <span className="text-gray-700">
Document preparation
</span>
</li>


<li className="text-red-500">
✓ <span className="text-gray-700">
Follow-up until resolution
</span>
</li>


</ul>






<button

onClick={eligibility}

className="
mt-10
w-full
bg-red-600
text-white
py-4
rounded-xl
font-bold
hover:bg-red-700
transition
"

>

More information →

</button>




</div>






</div>



<p className="text-center mt-10 text-gray-400">

CitaEs is not a law firm.

</p>



</div>


</section>

)


}
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
