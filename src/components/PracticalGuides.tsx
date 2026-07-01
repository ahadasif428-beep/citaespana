export default function PracticalGuides() {


const guides = [


{
title:"¿No hay citas disponibles?",
text:"Estrategias para conseguir tu cita incluso cuando parece que no hay disponibilidad.",
color:"bg-yellow-400",
linkColor:"text-red-600"
},



{
title:"¿Mi pasaporte está caducado?",
text:"Qué hacer cuando tus documentos han caducado antes de poder solicitar una cita.",
color:"bg-red-700",
linkColor:"text-red-600"
},



{
title:"¿Arraigo sin contrato laboral?",
text:"Cómo demostrar vínculos sociales y laborales sin un contrato formal. Documentos alternativos.",
color:"bg-green-500",
linkColor:"text-green-500"
},



{
title:"Mi solicitud fue denegada",
text:"Qué recursos y opciones tienes después de recibir una denegación.",
color:"bg-blue-900",
linkColor:"text-blue-700"
},



{
title:"Problemas con el empadronamiento",
text:"Cómo obtener el empadronamiento histórico y resolver problemas con el ayuntamiento.",
color:"bg-orange-500",
linkColor:"text-red-600"
},



{
title:"Antecedentes penales",
text:"¿Cómo solicitar el certificado de antecedentes? ¿Qué pasa si tengo antecedentes?",
color:"bg-purple-600",
linkColor:"text-purple-600"
}



]






return (



<section className="py-24 bg-white">





<div className="max-w-6xl mx-auto px-6">






<h2 className="text-center text-4xl font-serif font-bold text-[#10243e]">



Guías prácticas: problemas comunes



</h2>






<p className="text-center mt-4 text-gray-600 font-serif">



Las preguntas más frecuentes que recibimos por WhatsApp, respondidas.



</p>









<div className="grid md:grid-cols-3 gap-6 mt-12">







{

guides.map((item,index)=>(






<div



key={index}



className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"



>







<div



className={`${item.color} p-7 h-[105px] flex items-center`}



>







<h3 className="text-white text-xl font-bold font-serif">



{item.title}



</h3>






</div>









<div className="p-7 h-[170px]">







<p className="text-gray-700 leading-7 font-serif text-[15px]">



{item.text}



</p>








<a



className={`${item.linkColor} font-bold inline-block mt-6`}



>



Leer guía →



</a>






</div>









</div>






))





}







</div>









<div className="text-center mt-12">





<a className="text-red-600 font-bold text-lg">



Ver todas las guías prácticas →



</a>






</div>







</div>







</section>





)


}