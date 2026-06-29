export default function Footer(){


const procedures=[
"Regularization 2026",
"Social Integration",
"Employment Ties",
"Family Ties",
"Roots through Education",
"NIE Renewal",
"Work Authorization",
"Non-Profit Residence",
"Community Card",
"Asylum and Refuge",
"Spanish Nationality"
]


const tools=[
"Appointment Alerts",
"Digital Certificate / Cl@ve",
"Document Verifier",
"PDF Forms",
"Practical Guides →",
"Blog",
"Glossary of Foreigners"
]


const forYou=[
"NIE appointment",
"TIE Appointment",
"Urgent Appointment",
"Families",
"Latin Americans",
"Moroccans",
"Ukrainians 🇺🇦"
]


const countries=[
"From Morocco",
"From Colombia",
"From Venezuela",
"From Pakistan",
"From Senegal"
]


const provinces=[
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Malaga"
]



return(

<footer className="
bg-[#061b33]
text-white
pt-20
">



<div className="
max-w-7xl
mx-auto
px-6
">






<div className="
grid
md:grid-cols-4
lg:grid-cols-6
gap-10
pb-16
">






{/* brand */}

<div className="lg:col-span-2">


<h2 className="
text-3xl
font-bold
">

CitaEs

</h2>


<p className="
mt-5
text-blue-200
leading-7
">

Professional appointment management service for immigration procedures in Spain.

</p>



<div className="mt-5 space-y-2 text-sm text-blue-100">


<p>
✓ Team in Spain
</p>


<p>
✓ No upfront payment
</p>


</div>



</div>









<div>


<h3 className="font-bold mb-5">
Main Procedures
</h3>


<a className="text-red-400 block mb-4">
All Procedures →
</a>


{procedures.map(x=>(

<p key={x} className="text-blue-200 text-sm mb-3">

{x}

</p>

))}



</div>








<div>


<h3 className="font-bold mb-5">
Tools
</h3>


{tools.map(x=>(

<p key={x} className="text-blue-200 text-sm mb-3">

{x}

</p>

))}



<h3 className="font-bold mt-8 mb-5">
For you
</h3>


{forYou.map(x=>(

<p key={x} className="text-blue-200 text-sm mb-3">

{x}

</p>

))}



</div>









<div>


<h3 className="font-bold mb-5">
Country Guides
</h3>


{countries.map(x=>(

<p key={x} className="text-blue-200 text-sm mb-3">

{x}

</p>

))}



<h3 className="font-bold mt-8 mb-5">
People's Provinces
</h3>



{provinces.map(x=>(

<p key={x} className="text-blue-200 text-sm mb-3">

{x}

</p>

))}


<p className="text-red-400 mt-4">
View 52 provinces →
</p>



</div>








<div>


<h3 className="font-bold mb-5">
Help and Legal
</h3>


<div className="space-y-3 text-blue-200 text-sm">


<p>About Us</p>
<p>Request an Appointment</p>
<p>Prices</p>
<p>Contact</p>
<p>Leave a review</p>
<p>Legal Notice</p>
<p>Privacy Policy</p>
<p>Terms of Use</p>
<p>Cookie Policy</p>


</div>



<h3 className="font-bold mt-8 mb-4">
Contact
</h3>


<p className="text-blue-200 text-sm">
WhatsApp: +34 663 939 048
</p>


<p className="text-blue-200 text-sm">
WhatsApp: +34 672 373 900
</p>


<p className="text-blue-200 text-sm">
info@citaes.com
</p>


<p className="mt-3">
Telegram
</p>


</div>






</div>









{/* bottom legal */}


<div className="
border-t
border-white/10
py-8
text-center
">



<p className="
text-blue-200
text-sm
leading-7
max-w-5xl
mx-auto
">


🇪🇸 Independent, non-governmental service


<br/><br/>


CitaEs is a private and independent service. We are not affiliated with the Spanish Government, the Ministry of the Interior, the National Police, or any other public administration. Appointments are always obtained through official government platforms. Our service is optional and consists of helping you locate available appointments.


</p>





<p className="
mt-6
text-blue-300
text-sm
">


© 2026 CitaEs. All rights reserved.


</p>



</div>







</div>


</footer>


)

}