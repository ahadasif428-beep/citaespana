export default function WhyChoose() {


const features = [

{
icon:"🎧",
title:"Real human support",
text:"We'll assist you via WhatsApp, answer your questions, and explain the process step by step."
},


{
icon:"24/7",
title:"We search 24/7, you rest",
text:"You don't have to check anything. We'll notify you when a real appointment is available."
},


{
icon:"€",
title:"Fixed and transparent price",
text:"From €69. We don't sell unnecessary packages if you only need one appointment."
},


{
icon:"👛",
title:"No upfront payment",
text:"You only pay when we confirm a valid appointment that you accept."
},


{
icon:"✓",
title:"100% Guarantee",
text:"If we can't find a suitable appointment for you, you don't pay anything at all."
}


]



return (

<section className="bg-white py-24">


<div className="max-w-[1200px] mx-auto px-6">





{/* heading */}

<div className="text-center">



<div className="
inline-flex
items-center
gap-2
bg-red-50
text-red-600
px-5
py-2
rounded-full
font-semibold
text-sm
">

⭐ WHY CHOOSE CITAPRO?

</div>





<h2 className="
mt-6
text-5xl
font-bold
text-[#111827]
">

Why choose Citapro?

</h2>





<p className="
mt-5
text-xl
text-gray-500
">

No upfront payment. No fine print. No expensive management fees.

</p>




</div>









{/* cards */}


<div className="
mt-14
grid
md:grid-cols-6
gap-6
justify-center
">






{features.map((item,index)=>(


<div

key={index}

className={`
bg-white
border
border-gray-100
rounded-2xl
shadow-sm
p-8
text-center
min-h-[360px]
flex
flex-col
items-center
justify-center

${index < 3 ? "md:col-span-2" : "md:col-span-2 md:mx-12"}

`}

>






<div className="
w-28
h-28
rounded-full
bg-red-50
flex
items-center
justify-center
text-red-600
text-5xl
font-bold
">

{item.icon}

</div>







<h3 className="
mt-7
text-2xl
font-bold
text-[#111827]
">

{item.title}

</h3>







<p className="
mt-4
text-gray-500
leading-8
text-lg
">

{item.text}

</p>







</div>


))}








</div>





</div>



</section>

)


}