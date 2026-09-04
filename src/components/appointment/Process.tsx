export default function Process(){

const steps = [

{
icon:"🗺️",
title:"Choose your province",
text:"Select where you need the appointment. We cover all 52 provinces of Spain."
},

{
icon:"📋",
title:"Select the procedure",
text:"NIE, TIE, fingerprints, renewals, residency permits and more."
},

{
icon:"🏢",
title:"Choose the office",
text:"We show available offices for your procedure and province."
},

{
icon:"✅",
title:"Confirmation via WhatsApp",
text:"You receive your confirmed appointment directly on WhatsApp."
}

];


return(

<section className="bg-gray-50 py-24">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center">

How does it work?

</h2>



<div className="grid md:grid-cols-4 gap-6 mt-14">


{

steps.map((step,index)=>(


<div

key={index}

className="bg-white rounded-3xl p-8"

>


<div className="text-4xl">

{step.icon}

</div>



<<<<<<< HEAD
<div className="mt-5 text-[#C60B1E] font-bold">
=======
<div className="mt-5 text-blue-600 font-bold">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

Step 0{index+1}

</div>



<h3 className="text-xl font-bold mt-4">

{step.title}

</h3>



<p className="text-gray-600 mt-4">

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