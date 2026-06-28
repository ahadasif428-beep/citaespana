"use client";

import { useState } from "react";


export default function FAQ(){


const faqs = [

{
q:"Is this service legal?",
a:"Yes. CitaEx is a private and independent service that helps users find and manage immigration appointments. It is not a government organization."
},

{
q:"How exactly does it work?",
a:"We monitor appointment availability in the 52 provinces of Spain 24/7. When an appointment appears, we notify you and you decide whether to confirm it."
},

{
q:"How much does it cost?",
a:"Prices start from €69 depending on the procedure. You only pay when your appointment is confirmed."
},

{
q:"What happens if you cannot get my appointment?",
a:"You do not pay anything. There is no upfront payment."
},

{
q:"Are you affiliated with the government?",
a:"No. CitaEx is an independent private service and is not affiliated with any government institution."
},

{
q:"In which provinces do you work?",
a:"We work throughout Spain, covering all 52 provinces."
},

{
q:"How long does it take to get an appointment?",
a:"It depends on the province and procedure. We continuously monitor availability to find suitable appointments."
},

{
q:"What payment methods do you accept?",
a:"We accept Bizum, PayPal, bank transfer, Western Union, MoneyGram and other international payment methods."
}

];


const [open,setOpen] = useState<number | null>(null);



return (

<section className="py-24 bg-white">


<div className="max-w-4xl mx-auto px-6">



<div className="text-center mb-14">


<p className="text-red-600 font-semibold uppercase text-sm tracking-wide">
Frequently Asked Questions
</p>


<h2 className="text-4xl font-bold text-[#101c34] mt-4">
Preguntas frecuentes
</h2>


<p className="text-gray-600 mt-4">
Clear answers about our immigration appointment service
</p>


</div>





<div className="space-y-4">


{
faqs.map((item,index)=>(


<div

key={index}

className="
border
border-gray-200
rounded-xl
overflow-hidden
bg-white
shadow-sm
"


>


<button

onClick={()=>setOpen(open===index ? null:index)}

className="
w-full
flex
justify-between
items-center
px-6
py-5
text-left
font-semibold
text-[#13223c]
"


>


<span>{item.q}</span>


<span className="text-xl text-red-600">

{open===index ? "−":"+"}

</span>


</button>





{
open===index && (

<div

className="
px-6
pb-6
text-gray-600
leading-7
"

>

{item.a}

</div>

)

}



</div>


))

}



</div>





</div>


</section>

)

}