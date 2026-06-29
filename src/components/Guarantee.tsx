export default function Guarantee(){


const cards=[

{
icon:"💰",
title:"Zero advanced",
text:"We don't ask for any payment until you have the confirmed appointment in your hands."
},


{
icon:"🛡️",
title:"No appointment necessary, no charge required",
text:"If we can't find a suitable appointment for you, you don't pay anything at all."
},


{
icon:"‹",
title:"No commitment",
text:"Cancel anytime. No contracts, no penalties, no fine print."
},


{
icon:"💬",
title:"You make the decision",
text:"We'll send you the quote via WhatsApp. You review it. You only confirm if you're happy with it."
}


]



return(


<section className="
bg-[#063d73]
py-28
text-white
">



<div className="
max-w-[1200px]
mx-auto
px-6
text-center
">





<div className="
w-20
h-20
mx-auto
rounded-full
bg-blue-400/20
border
border-blue-300/30
flex
items-center
justify-center
text-4xl
">


🛡️


</div>






<p className="
mt-6
text-yellow-400
font-bold
tracking-wider
text-sm
">

CITAES GUARANTEE

</p>





<h2 className="
text-5xl
font-bold
mt-4
">

No risk to you — always

</h2>





<p className="
mt-5
text-blue-100
text-lg
max-w-2xl
mx-auto
">

More than 15,000 people have already trusted us without paying a penny until they have their appointment.

</p>








<div className="
grid
md:grid-cols-4
gap-5
mt-14
">



{

cards.map((card,index)=>(



<div

key={index}

className="
bg-white/10
border
border-white/10
rounded-xl
p-7
min-h-[285px]
"


>



<div className="
w-14
h-14
mx-auto
rounded-lg
bg-blue-300/20
flex
items-center
justify-center
text-2xl
text-yellow-400
">

{card.icon}

</div>





<h3 className="
mt-5
font-bold
text-xl
">

{card.title}

</h3>






<p className="
mt-4
text-blue-100
leading-7
">

{card.text}

</p>





</div>



))


}



</div>







<button

className="
mt-12
bg-yellow-400
text-gray-900
px-10
py-4
rounded-xl
font-bold
text-lg
hover:bg-yellow-300
"

>

💬 Get started for free via WhatsApp

</button>







<p className="
mt-5
text-blue-200
text-sm
">

No registration required · You only pay when you confirm your appointment

</p>






</div>



</section>



)

}