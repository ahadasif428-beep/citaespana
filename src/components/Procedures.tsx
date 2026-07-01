export default function Procedures(){

const services=[

{
title:"NIE (Número de Identidad de Extranjero)",
text:"Te ayudamos a conseguir una cita para obtener tu NIE por primera vez o actualizarlo.",
benefit:"Evita retrasos y errores al comenzar tu vida en España."
},

{
title:"TIE (Tarjeta de Identidad de Extranjero)",
text:"Buscamos una cita para solicitar o renovar tu TIE en la comisaría de tu provincia.",
benefit:"Proteges tu situación legal evitando que tu tarjeta caduque."
},

{
title:"Toma de huellas",
text:"Localizamos una cita para la toma de huellas relacionada con tu TIE o trámites aprobados.",
benefit:"Finalizas el proceso sin perder plazos por falta de cita."
},

{
title:"Asilo y Protección Internacional",
text:"Te ayudamos a encontrar citas relacionadas con solicitudes de asilo.",
benefit:"Ganas tiempo en un proceso delicado y estresante."
},

{
title:"Arraigo (Social, Laboral, Familiar)",
text:"Encontramos una cita para tus trámites de residencia según tu situación y provincia.",
benefit:"Aumentas tus posibilidades de regularizar tu situación."
},

{
title:"Nacionalidad Española",
text:"Te ayudamos con citas para huellas y pasos presenciales relacionados con nacionalidad.",
benefit:"Avanzas en el proceso sin que la cita sea un obstáculo."
},

{
title:"Estudiantes Extranjeros",
text:"Buscamos citas para autorizaciones, renovaciones y cambios de estancia por estudios.",
benefit:"Puedes concentrarte en tus estudios mientras buscamos tu cita."
}

];


return(

<section className="py-24 bg-white">


<div className="max-w-[1350px] mx-auto px-6">



<div className="text-center">


<h2 className="text-5xl font-bold text-gray-900">

Trámites de extranjería en los que podemos ayudarte

</h2>


<p className="mt-5 text-xl text-gray-600">

NIE, TIE, arraigo, asilo, huellas, nacionalidad — en toda España.

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

Ver todos los servicios →

</button>


</div>



</div>


</section>


)


}