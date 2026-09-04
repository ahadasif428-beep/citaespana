"use client";

import { FaWhatsapp } from "react-icons/fa";


export default function Compare(){


const rows=[


{
feature:"Precio",
cita:"Desde 69€\nSolo si conseguimos tu cita",
gestoria:"150€–499€\nCobran aunque no consigan nada",
alone:"Gratis\nHoras buscando sin garantía"
},



{
feature:"Pago por adelantado",
cita:"No",
gestoria:"Sí\nPagas antes de tener cita",
alone:"—"
},



{
feature:"Garantía de éxito",
cita:"100%\nSi no hay cita, no pagas",
gestoria:"Pocas veces\nRetienen los pagos",
alone:"No\nSin ayuda si no hay citas"
},



{
feature:"Monitoreo 24/7",
cita:"Sí\nAlertas automáticas al instante",
gestoria:"No\nSolo horario de oficina",
alone:"No\nTú buscas manualmente"
},



{
feature:"Soporte WhatsApp",
cita:"Sí\nRespuesta en menos de 10 min",
gestoria:"Teléfono / email\nLargos tiempos de espera",
alone:"No"
},



{
feature:"Pago internacional",
cita:"Sí\nWestern Union, Remitly, Wise...",
gestoria:"No siempre\nNecesitas banco español",
alone:"—"
},



{
feature:"Tiempo de respuesta",
cita:"1–15 días\nSegún provincia y trámite",
gestoria:"2–6 semanas\nAlta carga de trabajo",
alone:"Indefinido\nDepende de disponibilidad"
}



];






return(



<section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#fff8f8] to-white">



<div className="max-w-6xl mx-auto px-4 md:px-6">






<p className="inline-block mx-auto bg-red-50 text-[#C60B1E] font-bold tracking-widest text-sm px-5 py-2 rounded-full">


COMPARA ANTES DE DECIDIR


</p>






<h2 className="text-4xl md:text-5xl font-black text-center mt-6 text-gray-900">

<<<<<<< HEAD
CitaEspaña vs. Gestoría vs. Hacerlo solo
=======
CitaEs vs. Gestoría vs. Hacerlo solo
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823


</h2>






<p className="text-center text-lg text-gray-600 mt-6 max-w-3xl mx-auto">

La misma cita, tres experiencias completamente diferentes.


</p>










{/* DESKTOP TABLE */}



<div className="
hidden
md:block
mt-16
rounded-3xl
overflow-hidden
border
border-gray-100
shadow-xl
">





<table className="w-full table-fixed">





<thead>



<tr className="h-[72px]">





<th className="bg-gray-50 text-left px-6 text-sm text-gray-500">


CARACTERÍSTICA


</th>






<th className="bg-[#C60B1E] text-white">


<div className="font-bold">

<<<<<<< HEAD
CitaEspaña
=======
CitaEs
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

</div>


<span className="text-xs">

Desde 69€

</span>


</th>








<th className="bg-gray-800 text-white">


<div className="font-bold">

Servicios de gestoría

</div>


<span className="text-xs">

150€–499€

</span>


</th>









<th className="bg-gray-500 text-white">


<div className="font-bold">

Hacerlo solo

</div>


<span className="text-xs">

DIY

</span>


</th>





</tr>




</thead>









<tbody>



{


rows.map((row)=>(



<tr
key={row.feature}
className="
border-t
h-[90px]
hover:bg-red-50
transition-all
duration-300
"
>





<td className="px-6 text-sm text-gray-700 font-medium">


{row.feature}


</td>







<td className="
px-5
text-center
text-sm
font-semibold
whitespace-pre-line
text-[#C60B1E]
">


{row.cita}


</td>







<td className="px-5 text-center text-sm whitespace-pre-line text-gray-700">


{row.gestoria}


</td>








<td className="px-5 text-center text-sm whitespace-pre-line text-gray-700">


{row.alone}


</td>







</tr>





))



}






</tbody>





</table>





</div>













{/* MOBILE CARDS */}





<div className="md:hidden mt-10 space-y-5">






{


rows.map((row)=>(




<div



key={row.feature}



className="
border
border-gray-100
rounded-3xl
p-6
shadow-lg
hover:shadow-2xl
transition-all
duration-300
"



>






<h3 className="font-bold text-gray-900 mb-4">


{row.feature}


</h3>







<div className="space-y-3 text-sm">







<div className="bg-red-50 text-red-600 p-3 rounded-xl whitespace-pre-line">


<<<<<<< HEAD
<b>CitaEspaña</b>
=======
<b>CitaEs</b>
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823


{"\n"}


{row.cita}


</div>








<div className="bg-gray-100 p-3 rounded-xl whitespace-pre-line">


<b>Gestoría</b>


{"\n"}


{row.gestoria}


</div>








<div className="bg-gray-50 p-3 rounded-xl whitespace-pre-line">


<b>DIY</b>


{"\n"}


{row.alone}


</div>








</div>






</div>






))



}






</div>









<a


href="#"


className="

mt-10

mx-auto

bg-[#C60B1E]
hover:bg-[#A40818]
hover:-translate-y-1
transition-all
duration-300
shadow-xl
hover:shadow-2xl

text-white

px-6

md:px-8

py-4

rounded-xl

font-bold

flex

items-center

justify-center

gap-3

w-full

md:w-fit

"





>




<FaWhatsapp className="text-3xl animate-pulse"/>




<<<<<<< HEAD
Empezar con CitaEspaña — Gratis hasta confirmar la cita
=======
Empezar con CitaEs — Gratis hasta confirmar la cita
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823





</a>









</div>





</section>



)


}