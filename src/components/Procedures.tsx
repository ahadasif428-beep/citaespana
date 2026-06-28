export default function Procedures(){

const services=[

{
title:"NIE (Foreigner's Identity Number)",
text:"We help you get an appointment to obtain your NIE for the first time or to update it.",
benefit:"You avoid delays and mistakes when starting your life in Spain."
},

{
title:"TIE (Foreigner Identity Card)",
text:"We are looking for an appointment to apply for or renew your TIE at the police station in your province.",
benefit:"You protect your legal status by preventing your card from expiring."
},

{
title:"Fingerprinting",
text:"We located an appointment for fingerprinting linked to your TIE or approved procedures.",
benefit:"You close the process without missing deadlines due to lack of appointment."
},

{
title:"Asylum and International Protection",
text:"We support you in finding appointments related to asylum applications.",
benefit:"You gain time in a very sensitive and stressful process."
},

{
title:"Roots (Social, Labor, Family)",
text:"We found an appointment for your residency procedures according to your type and province.",
benefit:"You increase your chances of regularizing your situation."
},

{
title:"Spanish Nationality",
text:"We help you with appointments for fingerprints and in-person steps related to nationality.",
benefit:"You move forward in the process without the appointment being a roadblock."
},

{
title:"Foreign Students",
text:"We are looking for appointments for authorizations, renewals, and changes of stay for studies.",
benefit:"You can focus on your studies while we find your appointment."
}

];


return(

<section className="py-24 bg-white">


<div className="max-w-[1350px] mx-auto px-6">



<div className="text-center">


<h2 className="text-5xl font-bold text-gray-900">

Immigration procedures we can help you with

</h2>


<p className="mt-5 text-xl text-gray-600">

NIE, TIE, arraigo, asilo, huellas, nacionalidad — throughout Spain.

</p>


</div>





<div className="grid md:grid-cols-3 gap-8 mt-14">



{

services.map((service)=>(


<div

key={service.title}

className="
border
rounded-3xl
p-8
min-h-[330px]
hover:shadow-xl
transition
"


>



<div className="
w-12
h-12
rounded-full
bg-blue-100
flex
items-center
justify-center
text-blue-600
font-bold
text-xl
">

✓

</div>



<h3 className="text-2xl font-bold mt-6 text-gray-900">

{service.title}

</h3>



<p className="mt-4 text-gray-600 leading-relaxed">

{service.text}

</p>



<p className="mt-5 font-semibold text-blue-700">

{service.benefit}

</p>



</div>



))


}



</div>



<div className="text-center mt-14">


<button className="text-blue-600 font-bold text-lg">

View all services →

</button>


</div>



</div>


</section>


)


}