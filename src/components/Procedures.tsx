export default function Procedures() {

const services = [

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

<section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#fff9f8] to-[#fff5f2]">

<div className="absolute top-0 left-0 w-96 h-96 bg-[#F1BF00]/10 rounded-full blur-[150px]" />

<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C60B1E]/10 rounded-full blur-[170px]" />

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<span
className="
inline-block
bg-red-50
text-[#C60B1E]
font-bold
uppercase
tracking-widest
text-sm
px-6
py-2
rounded-full
"
>

Nuestros Servicios

</span>

<h2
className="
mt-6
text-4xl
md:text-6xl
font-black
text-gray-900
leading-tight
"
>

Trámites de extranjería

<span className="text-[#C60B1E]">
{" "}en toda España
</span>

</h2>

<p
className="
mt-6
text-lg
text-gray-600
max-w-3xl
mx-auto
leading-8
"
>

NIE, TIE, Arraigo, Nacionalidad, Asilo y mucho más.
Nos encargamos de encontrar tu cita para que tú solo tengas que presentarte.

</p>

</div>

<div className="grid lg:grid-cols-3 gap-8 mt-16"></div>

{/* Bottom CTA */}

<div className="mt-20 text-center">

<div
className="
inline-flex
flex-col
items-center
bg-gradient-to-r
from-[#C60B1E]
to-[#A40818]
rounded-[30px]
px-12
py-10
text-white
shadow-2xl
hover:shadow-[0_25px_60px_rgba(198,11,30,0.35)]
hover:-translate-y-2
transition-all
duration-500
"
>

<h3
className="
text-3xl
font-black
"
>

¿No encuentras tu trámite?

</h3>

<p
className="
mt-4
max-w-xl
text-red-100
leading-8
"
>

Trabajamos con decenas de procedimientos de extranjería en toda España.
Nuestro equipo monitoriza las citas las 24 horas para ayudarte lo antes posible.

</p>

<button
className="
mt-8
bg-[#F1BF00]
text-[#7A0815]
font-black
px-10
py-4
rounded-2xl
shadow-lg
hover:scale-105
hover:shadow-xl
transition-all
duration-300
"
>

Ver todos los servicios →

</button>

</div>

</div>

</div>

</section>

)

}