"use client";

import { useState, use } from "react";
import { supabase } from "@/lib/supabase";

export default function AppointmentPage({

params

}:{

params: Promise<{
province:string;
procedure:string;
}>

}){


const { province, procedure } = use(params);


const [name,setName] = useState("");

const [phone,setPhone] = useState("");



async function submit(){


const { error } = await supabase.from("leads").insert([
  {
    name: name || "test",
    phone: phone || "test",
    province,
    procedure,
    status: "New"
  }
]);


if (error) {
  console.log("SUPABASE ERROR:", error);
  alert(error.message);
  return;
}


alert("Appointment request sent");


}


return(

<main className="min-h-screen bg-gray-50 py-20">


<div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">


<h1 className="text-3xl font-bold">

Request Free Appointment

</h1>



<p className="mt-5">

Province: {province}

</p>



<p>

Procedure: {procedure}

</p>




<div className="mt-8 space-y-4">



<input

className="border p-4 rounded-xl w-full"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>





<input

className="border p-4 rounded-xl w-full"

placeholder="WhatsApp Number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>





<button

onClick={submit}

className="bg-blue-600 text-white w-full py-4 rounded-xl"

>

Submit Request

</button>



</div>


</div>


</main>


)

}