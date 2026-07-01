"use client";

export default function Pricing() {


function whatsapp(plan:string){


const whatsappNumber = "34672399181";


const message = 
`Hola CitaEs,

Quiero información sobre el plan ${plan}.

Gracias.`;


window.open(

`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`,

"_blank"

);


}



function eligibility(){

window.location.href="/eligibility-checker";

}





return (



<section className="py-24 bg-white">





<div className="max-w-7xl mx-auto px-6">







{/* HEADER */}




<div className="text-center mb-16">





<p className="text-blue-600 font-bold tracking-widest">


TARIFAS TRANSPARENTES


</p>







<h2 className="text-5xl font-bold mt-4 text-[#111827]">



Precios claros, sin sorpresas



</h2>







<p className="mt-5 text-gray-500 text-lg">



Solo pagas si conseguimos tu cita. Sin costes ocultos.



</p>







</div>









<div className="grid md:grid-cols-3 gap-8">







{/* STANDARD */}





<div className="
border
rounded-3xl
p-10
shadow-sm
hover:shadow-xl
transition
">






<h3 className="text-blue-900 font-bold tracking-wide">


ESTÁNDAR


</h3>







<div className="flex items-end mt-5">





<span className="text-5xl font-bold">


€69


</span>





<span className="text-blue-900 ml-2">


/cita


</span>





</div>







<p className="mt-4 text-gray-500">


Sin pago anticipado


</p>







<ul className="mt-8 space-y-5 text-lg">





<li>✓ NIE</li>


<li>✓ Huellas digitales</li>


<li>✓ Certificados de residencia</li>


<li>✓ Carta de invitación</li>


<li>✓ Autorización de regreso</li>





</ul>








<button



onClick={()=>whatsapp("Estándar")}



className="
mt-10
w-full
border-2
border-green-500
text-green-600
py-4
rounded-xl
font-bold
hover:bg-green-500
hover:text-white
transition
"



>



Solicitar por WhatsApp



</button>






</div>












{/* PREMIUM */}







<div className="
bg-[#27439b]
text-white
rounded-3xl
p-10
shadow-xl
border-2
border-blue-500
relative
">





<div className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-yellow-400
text-black
px-6
py-2
rounded-full
font-bold
text-sm
">



MÁS POPULAR



</div>







<h3 className="font-bold tracking-wide">


PREMIUM


</h3>







<div className="flex items-end mt-5">





<span className="text-5xl font-bold">


€149


</span>





<span className="ml-2">


/cita


</span>





</div>







<p className="mt-4">


Sin pago anticipado


</p>







<ul className="mt-8 space-y-5 text-lg">





<li>✓ TIE (Tarjeta de extranjero)</li>


<li>✓ Renovación de permisos</li>


<li>✓ Arraigo social / laboral</li>


<li>✓ Reagrupación familiar</li>





</ul>








<button



onClick={()=>whatsapp("Premium")}



className="
mt-10
w-full
bg-green-500
py-4
rounded-xl
font-bold
hover:bg-green-600
transition
"



>



Solicitar por WhatsApp



</button>








</div>













{/* REGULARIZATION */}







<div className="
border
border-red-300
rounded-3xl
p-10
relative
">







<div className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-red-500
text-white
px-6
py-2
rounded-full
font-bold
text-sm
text-center
">



Boletín Oficial del Estado (BOE)

<br/>

15 Abril 2026



</div>









<h3 className="
text-red-600
font-bold
tracking-wide
">



REGULARIZACIÓN 2026 + ASILO



</h3>









<div className="flex items-end mt-5">





<span className="text-5xl font-bold">


€300


</span>





<span className="ml-2 text-gray-500">


/paquete


</span>





</div>







<p className="mt-4 text-gray-500">



Paquete completo incluido



</p>







<ul className="mt-8 space-y-5 text-lg">






<li className="text-red-500">

✓ <span className="text-gray-700">


Regularización 2026 completa


</span>

</li>






<li className="text-red-500">

✓ <span className="text-gray-700">


Asilo y Protección Internacional


</span>

</li>






<li className="text-red-500">

✓ <span className="text-gray-700">


Verificación de elegibilidad


</span>

</li>






<li className="text-red-500">

✓ <span className="text-gray-700">


Preparación de documentos


</span>

</li>






<li className="text-red-500">

✓ <span className="text-gray-700">


Seguimiento hasta resolución


</span>

</li>







</ul>









<button



onClick={eligibility}



className="
mt-10
w-full
bg-red-600
text-white
py-4
rounded-xl
font-bold
hover:bg-red-700
transition
"



>



Más información →


</button>







</div>









</div>








<p className="text-center mt-10 text-gray-400">



CitaEs no es un despacho de abogados.



</p>







</div>







</section>



)


}