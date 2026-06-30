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
className="bg-gray-50 py-16 md:py-24 scroll-mt-24"
>


<div className="max-w-7xl mx-auto px-4 md:px-10">


<div className="text-center">


<h2 className="text-3xl md:text-5xl font-bold text-gray-900">

How does CitaEs work?

</h2>


<p className="mt-5 text-base md:text-xl text-gray-600">

No registration. No endless forms. Just WhatsApp.

</p>


</div>





<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
md:gap-8
mt-12
">



{

steps.map((step)=>(


<div

key={step.number}

className="
bg-white
rounded-3xl
shadow-md
p-8
min-h-[420px]
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




<h3 className="
text-xl
md:text-2xl
font-bold
mt-8
text-gray-900
">


{step.title}


</h3>





<p className="
mt-5
text-gray-600
leading-7
">


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