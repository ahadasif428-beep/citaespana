export default function AppointmentProcedures(){


const police=[

"POLICE - EXCEPTIONAL ENTRY AUTHORIZATION",
"POLICE - REGISTRATION CARD",
"POLICE - CONCORDANCE CERTIFICATES",
"POLICE - NOTIFICATION OF CHANGE OF ADDRESS",
"POLICE - OTHER PROCEDURES AT THE POLICE STATION",
"POLICE - EXTENSION OF STAY WITH VISA",
"POLICE - EXTENSION OF STAY WITHOUT VISA",
"POLICE - COLLECTION OF FOREIGNER IDENTITY CARD (TIE)",
"POLICE - APPLICATION FOR STATELESSNESS",
"POLICE - TRAVEL TICKETS",
"POLICE - ASYLUM REQUEST",
"POLICE-NIE ASSIGNMENT",
"POLICE - INVITATION LETTER",
"POLICE - EU CITIZEN REGISTRATION CERTIFICATE",
"POLICE - RETURN AUTHORIZATION",
"POLICE - FINGERPRINTING (CARD ISSUANCE) INITIAL, RENEWAL, DUPLICATE AND LAW 14/2013"

];


const immigration=[

"ACCESS TO 1ST AUTH. OF LONG-TERM RESIDENCE AND LONG-TERM EU",
"EXCEPTIONAL ROOTS",
"NIE Assignment",
"ASYLUM - FIRST APPOINTMENT",
"FAMILY REUNIFICATION",
"RESIDENCE AUTHORIZATIONS",
"WORK AUTHORIZATIONS",
"WORK PERMITS FOR STUDY",
"STUDY STAY",
"LONG-TERM RESIDENCE",
"INITIAL EMPLOYMENT AND RESIDENCE",
"INITIAL SELF-EMPLOYMENT WORK AND RESIDENCE",
"EU CERTIFICATES"

];



return(


<section className="py-20 bg-gray-50">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center mb-14">

Procedures we handle

</h2>



<div className="grid md:grid-cols-2 gap-10">


<div className="bg-white rounded-3xl p-8">


<h3 className="text-2xl font-bold mb-6">

👮 National Police

</h3>


{

police.map((item,index)=>(


<div

key={index}

className="py-3 border-b"

>

✓ {item}


</div>


))

}


</div>





<div className="bg-white rounded-3xl p-8">


<h3 className="text-2xl font-bold mb-6">

📄 Immigration Office

</h3>


{

immigration.map((item,index)=>(


<div

key={index}

className="py-3 border-b"

>

✓ {item}


</div>


))

}



</div>



</div>


</div>


</section>


)

}