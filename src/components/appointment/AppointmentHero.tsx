"use client";


import {useState} from "react";

import {appointmentData,provinces} from "@/data/appointmentOptions";



export default function AppointmentHero(){


const [province,setProvince]=useState("");

const [procedure,setProcedure]=useState("");

const [office,setOffice]=useState("");




const availableProcedures =

province

?

appointmentData[province]?.procedures || []

:

[];



const availableOffices =

province && procedure

?

appointmentData[province]?.offices?.[procedure] || []

:

[];






function sendWhatsapp(){


const message=`

Hello CitaEs

Province:
${province}

Procedure:
${procedure}

Office:
${office}

`;



window.open(

`https://wa.me/923001234567?text=${encodeURIComponent(message)}`,

"_blank"

);


}





return(


<section className="bg-[#2446c8] text-white py-20">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">



<div>


<h1 className="text-6xl font-bold mt-10">

Your appointment at the

<span className="text-green-400">

 Immigration Office

</span>

, stress-free

</h1>


<p className="mt-6 text-xl">

We manage immigration appointments in all Spain provinces.

</p>


</div>






<div className="bg-white text-black rounded-3xl p-10">


<h2 className="text-3xl font-bold">

📋 Request your appointment

</h2>






<label className="block mt-8 font-bold">

1 Province *

</label>


<select

className="w-full border p-4 rounded-xl mt-3"

value={province}

onChange={(e)=>{

setProvince(e.target.value);

setProcedure("");

setOffice("");

}}

>


<option value="">

Select your province

</option>



{

provinces.map((p)=>(

<option key={p} value={p}>

{p}

</option>

))


}


</select>








<label className="block mt-6 font-bold">

2 Procedure *

</label>


<select


disabled={!province}

value={procedure}

onChange={(e)=>{

setProcedure(e.target.value);

setOffice("");

}}


className="w-full border p-4 rounded-xl mt-3 disabled:bg-gray-200"


>


<option>

Select procedure

</option>



{

availableProcedures.map((p:string)=>(


<option key={p} value={p}>

{p}

</option>


))


}



</select>









<label className="block mt-6 font-bold">

3 Office *

</label>


<select


disabled={!procedure}


value={office}


onChange={(e)=>setOffice(e.target.value)}


className="w-full border p-4 rounded-xl mt-3 disabled:bg-gray-200"


>


<option>

Select office

</option>



{

availableOffices.map((o:string)=>(


<option key={o} value={o}>

{o}

</option>


))


}



</select>








<button


disabled={!office}


onClick={sendWhatsapp}


className="mt-8 w-full bg-green-500 text-white py-5 rounded-xl font-bold disabled:bg-gray-400"


>


💬 Send Request via WhatsApp


</button>





</div>



</div>


</section>


)


}