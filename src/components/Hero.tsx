"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {provinces, procedures} from "@/data/options";
export default function Hero(){

const [province,setProvince]=useState("");
const [procedure,setProcedure]=useState("");
const [phone,setPhone]=useState("");

const whatsappNumber="923001234567";


const whatsappLink=createWhatsAppLink(
whatsappNumber,
"",
"",
province,
procedure
);



async function submit(){


if(!province || !procedure || !phone){

return;

}



const {error}=await supabase
.from("leads")
.insert({

name:"Website Lead",

phone,

province,

procedure,

status:"New"

});



if(error){

console.log(error);

alert("Error saving request");

return;

}




const message =
`
New CitaEs Request

Province: ${province}

Procedure: ${procedure}

WhatsApp: ${phone}
`;



window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

"_blank"

);



}





return(

<>

<div className="bg-yellow-400 text-center py-3 text-black font-semibold">

🔴 REGULARIZATION 2026 — Deadline: Check eligibility →

</div>



<section className="bg-blue-700 min-h-[900px] text-white flex items-center">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">





{/* LEFT */}

<div>


<div className="inline-block bg-blue-500 px-5 py-2 rounded-full">

🟢 ACTIVE MONITORING 24/7

</div>



<h1 className="text-6xl font-bold leading-tight mt-7">


Schedule your Spanish Immigration Appointment in 2026


<br/>


<span className="text-yellow-300">

without spending hours searching

</span>


</h1>




<p className="mt-8 text-xl text-blue-100">

We monitor appointments for you 24/7 throughout Spain.

You only pay if we secure your appointment.

</p>





<div className="flex flex-wrap gap-4 mt-8">


<div className="bg-blue-600 px-5 py-3 rounded-full">

⭐ 15,000+ requests

</div>


<div className="bg-blue-600 px-5 py-3 rounded-full">

🌍 52 provinces

</div>


<div className="bg-blue-600 px-5 py-3 rounded-full">

✅ No upfront payment

</div>


</div>


</div>







{/* RIGHT */}

<div>



<div className="bg-white/10 border border-white/30 rounded-3xl p-8 backdrop-blur">


<h2 className="text-center text-xl font-bold mb-6">

Request your appointment now —  it's free

</h2>




<select

className="w-full bg-white text-black p-4 rounded-xl mb-4"

onChange={(e)=>setProvince(e.target.value)}

>

<option value="">
Province
</option>


{
provinces.map((item)=>(

<option key={item} value={item}>

{item}

</option>

))

}

</select>





<select

className="w-full bg-white text-black p-4 rounded-xl mb-4"

onChange={(e)=>setProcedure(e.target.value)}

>


<option value="">

Procedure

</option>


{

procedures.map((item)=>(

<option key={item} value={item}>

{item}

</option>

))

}


</select>





<input

className="w-full bg-white text-black p-4 rounded-xl mb-4"

placeholder="📱 Your WhatsApp number (+34...)"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>





<button

disabled={!province || !procedure || !phone}


onClick={submit}


className={`w-full p-4 rounded-xl font-bold
${!province || !procedure || !phone
?
"bg-gray-400"
:
"bg-yellow-400 text-black"
}`}

>


⚡ Request free appointment


</button>




<p className="text-center text-sm mt-4">

No upfront payment · You only pay if we get your appointment

</p>



</div>






<a

href={whatsappLink}

className="block mt-5 bg-green-500 text-center p-4 rounded-xl font-bold"

>

💬 Talk on WhatsApp

</a>







<div className="text-center mt-6">


<h3 className="font-bold mb-4">

TIME REMAINING TO APPLY

</h3>



<div className="grid grid-cols-4 gap-3">


{
["06","09","01","14"].map((n)=>(

<div

key={n}

className="bg-white/20 p-5 rounded-xl text-3xl font-bold"

>

{n}

</div>


))

}


</div>


</div>





<div className="mt-6 bg-white/20 rounded-full text-center py-3">

316+ eligibility checks performed

</div>




<div className="mt-8 text-center">


<div className="bg-white text-blue-700 inline-block px-6 py-3 rounded-xl">

★★★★★ Check our reviews on Trustpilot

</div>


</div>




</div>



</div>


</section>


</>

)


}