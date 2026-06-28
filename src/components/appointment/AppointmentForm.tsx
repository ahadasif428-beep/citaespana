"use client";

import {useState} from "react";


const procedures=[


"POLICE - EXCEPTIONAL ENTRY AUTHORIZATION",
"POLICE - REGISTRATION CARD",
"POLICE - CONCORDANCE CERTIFICATES",
"POLICE - NOTIFICATION OF CHANGE OF ADDRESS",
"POLICE - COLLECTION OF FOREIGNER IDENTITY CARD (TIE)",
"POLICE - APPLICATION FOR STATELESSNESS",
"POLICE - TRAVEL TICKETS",
"POLICE - ASYLUM REQUEST",
"POLICE-NIE ASSIGNMENT",
"POLICE - INVITATION LETTER",
"POLICE - EU CITIZEN REGISTRATION CERTIFICATE",
"POLICE - RETURN AUTHORIZATION",
"POLICE - FINGERPRINTING (CARD ISSUANCE) INITIAL, RENEWAL, DUPLICATE AND LAW 14/2013",


"ACCESS TO 1ST AUTH. OF LONG-TERM RESIDENCE AND LONG-TERM EU",
"EXCEPTIONAL ROOTS",
"NIE Assignment",
"FAMILY REUNIFICATION",
"RESIDENCE AUTHORIZATIONS",
"WORK AUTHORIZATIONS",
"WORK PERMITS FOR STUDY",
"STUDY STAY",
"LONG-TERM RESIDENCE",
"INITIAL EMPLOYMENT AND RESIDENCE",
"INITIAL SELF-EMPLOYMENT WORK AND RESIDENCE"

];



export default function AppointmentForm(){


const [procedure,setProcedure]=useState("");



return(


<section className="py-20">


<div className="max-w-3xl mx-auto px-6">


<div className="bg-white shadow-xl rounded-3xl p-10">


<h2 className="text-3xl font-bold mb-8">

📋 Request your appointment

</h2>



<label className="font-semibold">

Procedure *

</label>



<select

value={procedure}

onChange={(e)=>setProcedure(e.target.value)}

className="
w-full
mt-3
p-4
border
rounded-xl
"


>


<option>

Select the procedure

</option>


{

procedures.map((p,index)=>(

<option

key={index}

value={p}

>

{p}

</option>


))

}



</select>



<button

className="
mt-8
w-full
bg-green-500
text-white
p-4
rounded-xl
font-bold
"

>

💬 Send Request via WhatsApp

</button>



</div>


</div>


</section>


)

}