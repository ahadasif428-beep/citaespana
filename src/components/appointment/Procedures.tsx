export default function Procedures(){


const police=[

"Exceptional entry authorization",

"Registration card",

"NIE assignment",

"Certificate of residence",

"Fingerprinting (TIE)",

"EU citizen registration",

"Asylum request",

"Invitation letter",

"Return authorization"

];



const immigration=[

"Exceptional roots",

"Family reunification",

"Residence permits",

"Work authorizations",

"Study stay",

"NIE renewal",

"TIE renewal",

"Spanish nationality",

"Community card"

];



return(


<section className="py-24 bg-gray-50">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center">

Procedures we handle

</h2>




<div className="
grid
md:grid-cols-2
gap-10
mt-14
">





<div className="
bg-white
rounded-3xl
p-8
">


<h3 className="text-3xl font-bold mb-8">

👮 National Police

</h3>



<div className="space-y-4">


{

police.map(item=>(


<div

key={item}

className="
border
rounded-xl
p-4
font-semibold
"


>

✓ {item}

</div>


))

}



</div>


</div>







<div className="
bg-white
rounded-3xl
p-8
">


<h3 className="text-3xl font-bold mb-8">

📄 Immigration Office

</h3>




<div className="space-y-4">


{

immigration.map(item=>(


<div

key={item}

className="
border
rounded-xl
p-4
font-semibold
"


>

✓ {item}

</div>


))

}



</div>


</div>




</div>


</div>


</section>


)

}