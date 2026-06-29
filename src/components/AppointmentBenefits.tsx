export default function AppointmentBenefits(){


const items=[

{
icon:"🔎",
title:"We search 24/7",
text:"We monitor available immigration appointments so you don't have to refresh pages all day."
},

{
icon:"💬",
title:"WhatsApp support",
text:"Our team keeps you updated and guides you through the process."
},

{
icon:"💳",
title:"No upfront payment",
text:"You only pay when we confirm a valid appointment that you accept."
},

{
icon:"🇪🇸",
title:"All Spain provinces",
text:"We help with immigration procedures across all 52 provinces."
}

];


return(

<section className="py-24 bg-white">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center">


<h2 className="
text-4xl
font-bold
text-[#101c34]
">

Why choose CitaEs?

</h2>


<p className="
mt-4
text-gray-600
text-lg
">

Your appointment, managed simply and safely.

</p>


</div>




<div className="
grid
md:grid-cols-4
gap-6
mt-14
">


{

items.map((item)=>(


<div

key={item.title}

className="
bg-gray-50
rounded-3xl
p-8
text-center
hover:shadow-lg
transition
"


>


<div className="
text-4xl
">

{item.icon}

</div>


<h3 className="
mt-5
font-bold
text-xl
">

{item.title}

</h3>


<p className="
mt-3
text-gray-600
leading-7
">

{item.text}

</p>


</div>


))

}


</div>


</div>


</section>

)

}