export default function WhyChoose() {


const features = [

{
icon:"🎧",
title:"Soporte humano real",
text:"Te ayudamos por WhatsApp, respondemos tus preguntas y te explicamos el proceso paso a paso."
},


{
icon:"24/7",
title:"Buscamos 24/7, tú descansas",
text:"No tienes que revisar nada. Te avisamos cuando haya una cita real disponible."
},


{
icon:"€",
title:"Precio fijo y transparente",
text:"Desde 69€. No vendemos paquetes innecesarios si solo necesitas una cita."
},


{
icon:"👛",
title:"Sin pago por adelantado",
text:"Solo pagas cuando confirmamos una cita válida que aceptas."
},


{
icon:"✓",
title:"Garantía del 100%",
text:"Si no encontramos una cita adecuada para ti, no pagas nada."
}


]



return (

<section className="bg-white py-24">


<div className="max-w-[1200px] mx-auto px-6">





{/* heading */}

<div className="text-center">



<div className="
inline-flex
items-center
gap-2
bg-red-50
text-red-600
px-5
py-2
rounded-full
font-semibold
text-sm
">

⭐ ¿POR QUÉ ELEGIR CITAES?

</div>







<h2 className="
mt-6
text-5xl
font-bold
text-[#111827]
">

¿Por qué elegir CitaEs?

</h2>







<p className="
mt-5
text-xl
text-gray-500
">

Sin pago inicial. Sin letra pequeña. Sin costes de gestoría elevados.

</p>





</div>









{/* cards */}


<div className="
mt-14
grid
md:grid-cols-6
gap-6
justify-center
">







{features.map((item,index)=>(


<div

key={index}

className={`

bg-white
border
border-gray-100
rounded-2xl
shadow-sm
p-8
text-center
min-h-[360px]
flex
flex-col
items-center
justify-center

${index < 3 ? "md:col-span-2" : "md:col-span-2 md:mx-12"}

`}

>








<div className="
w-28
h-28
rounded-full
bg-red-50
flex
items-center
justify-center
text-red-600
text-5xl
font-bold
">

{item.icon}

</div>










<h3 className="
mt-7
text-2xl
font-bold
text-[#111827]
">

{item.title}

</h3>










<p className="
mt-4
text-gray-500
leading-8
text-lg
">

{item.text}

</p>









</div>


))}









</div>








</div>



</section>

)


}