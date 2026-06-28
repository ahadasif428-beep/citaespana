export default function HowItWorks(){


const steps=[

{
number:"01",
title:"Tell us about your procedure and your province",
text:"Tell us what procedure you need (NIE, TIE, residency permit, asylum, nationality, student visa, etc.), which province you're in, and your availability."
},

{
number:"02",
title:"We'll find your available appointment 24 hours a day",
text:"We continuously monitor appointments at immigration offices and police stations in your area, so you don't have to keep watching the screen."
},

{
number:"03",
title:"We'll confirm your appointment, and you'll only pay then.",
text:"When we find an appointment that fits your case, we'll send the details for your review. You only pay after confirmation."
}

];


return(

<section 
id="como-funciona"
className="bg-gray-50 py-24 scroll-mt-24"
>


<div className="max-w-[1350px] h-[786px] mx-auto px-10">


<div className="text-center">


<h2 className="text-5xl font-bold text-gray-900">

How does CitaPro work?

</h2>


<p className="mt-5 text-xl text-gray-600">

No registration. No endless forms. Just WhatsApp.

</p>


</div>




<div className="grid grid-cols-3 gap-8 justify-center mt-14">


{

steps.map((step)=>(


<div

key={step.number}

className="
bg-white
rounded-3xl
shadow-md
w-[320px]
h-[492px]
p-8
mx-auto
"


>


<div className="
w-16
h-16
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
text-2xl
font-bold
">


{step.number}


</div>



<h3 className="text-2xl font-bold mt-10 text-gray-900">

{step.title}

</h3>



<p className="mt-6 text-gray-600 leading-8">

{step.text}

</p>



</div>


))


}


</div>



</div>


</section>


)

}