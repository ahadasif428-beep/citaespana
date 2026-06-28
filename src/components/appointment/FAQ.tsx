"use client";

import {useState} from "react";


export default function FAQ(){


const [open,setOpen]=useState<number|null>(null);


const questions=[

"How does the service work?",

"Do I need to pay before my appointment?",

"How long does it take?",

"Is it available in my province?",

"What procedures do you handle?",

"How do I receive confirmation?"

];



return(

<section className="bg-gray-50 py-24">


<div className="max-w-5xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center">

Frequently Asked Questions

</h2>



<div className="mt-12 space-y-4">


{
questions.map((q,index)=>(


<div

key={q}

className="bg-white rounded-2xl p-6 cursor-pointer shadow-sm"

onClick={()=>


setOpen(open===index ? null : index)

}

>


<div className="flex justify-between font-bold text-lg">

<span>
{q}
</span>


<span>

{open===index ? "−" : "+"}

</span>


</div>



{

open===index &&

<p className="text-gray-600 mt-5">

Our team helps you manage the appointment process through WhatsApp. We monitor availability and update you when possible.

</p>

}



</div>


))

}



</div>


</div>


</section>


)

}