"use client";

import { useState } from "react";


export default function FAQ(){


const faqs = [


{
q:"¿Este servicio es legal?",
a:"Sí. CitaEs es un servicio privado e independiente que ayuda a los usuarios a encontrar y gestionar citas de extranjería. No es una organización gubernamental."
},


{
q:"¿Cómo funciona exactamente?",
a:"Monitorizamos la disponibilidad de citas en las 52 provincias de España 24/7. Cuando aparece una cita, te avisamos y tú decides si confirmarla."
},


{
q:"¿Cuánto cuesta?",
a:"Los precios empiezan desde 69€ dependiendo del trámite. Solo pagas cuando tu cita está confirmada."
},


{
q:"¿Qué pasa si no conseguís mi cita?",
a:"No pagas nada. No hay ningún pago por adelantado."
},


{
q:"¿Estáis afiliados al gobierno?",
a:"No. CitaEs es un servicio privado independiente y no está afiliado a ninguna institución gubernamental."
},


{
q:"¿En qué provincias trabajáis?",
a:"Trabajamos en toda España, cubriendo las 52 provincias."
},


{
q:"¿Cuánto tarda conseguir una cita?",
a:"Depende de la provincia y del trámite. Monitorizamos continuamente la disponibilidad para encontrar citas adecuadas."
},


{
q:"¿Qué métodos de pago aceptáis?",
a:"Aceptamos Bizum, PayPal, transferencia bancaria, Western Union, MoneyGram y otros métodos de pago internacionales."
}


];



const [open,setOpen] = useState<number | null>(null);





return (



<section className="py-24 bg-white">





<div className="max-w-4xl mx-auto px-6">







<div className="text-center mb-14">






<p className="text-red-600 font-semibold uppercase text-sm tracking-wide">


Preguntas frecuentes


</p>






<h2 className="text-4xl font-bold text-[#101c34] mt-4">


Preguntas frecuentes


</h2>







<p className="text-gray-600 mt-4">


Respuestas claras sobre nuestro servicio de citas de extranjería


</p>








</div>









<div className="space-y-4">





{


faqs.map((item,index)=>(





<div


key={index}


className="
border
border-gray-200
rounded-xl
overflow-hidden
bg-white
shadow-sm
"



>








<button



onClick={()=>setOpen(open===index ? null:index)}



className="
w-full
flex
justify-between
items-center
px-6
py-5
text-left
font-semibold
text-[#13223c]
"



>






<span>{item.q}</span>






<span className="text-xl text-red-600">


{open===index ? "−":"+"}



</span>







</button>









{

open===index && (



<div


className="
px-6
pb-6
text-gray-600
leading-7
"



>


{item.a}


</div>



)



}








</div>







))





}








</div>









</div>






</section>





)


}