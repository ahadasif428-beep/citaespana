"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { provinces, procedures } from "@/data/options";


export default function AppointmentForm(){

const [province,setProvince]=useState("");
const [procedure,setProcedure]=useState("");
const [phone,setPhone]=useState("");


const whatsappNumber="923001234567";


async function submit(){


if(!province || !procedure || !phone){

alert("Please complete the form");

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

alert("Error");

return;

}



const message =

`
Hola CitaPro,

Quiero solicitar una cita de extranjería.

Provincia: ${province}

Procedimiento: ${procedure}

WhatsApp: ${phone}

Gracias.
`;



window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

"_blank"

);



}



return(

<div className="bg-white rounded-3xl shadow-xl p-8">


<h2 className="text-2xl font-bold text-center mb-6">

Request your appointment

</h2>



<select

className="w-full p-4 border rounded-xl mb-4"

value={province}

onChange={(e)=>setProvince(e.target.value)}

>

<option value="">

Select province

</option>


{

provinces.map((item)=>(

<option key={item}>

{item}

</option>

))

}


</select>





<select

className="w-full p-4 border rounded-xl mb-4"

value={procedure}

onChange={(e)=>setProcedure(e.target.value)}

>


<option value="">

Select procedure

</option>


{

procedures.map((item)=>(

<option key={item}>

{item}

</option>

))

}


</select>





<input

className="w-full p-4 border rounded-xl mb-4"

placeholder="WhatsApp number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>





<button

onClick={submit}

className="w-full bg-red-600 text-white py-4 rounded-xl font-bold"

>

Request appointment

</button>



</div>

)

}