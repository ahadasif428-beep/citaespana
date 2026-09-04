export default function AppointmentBenefits(){


const items=[

{
icon:"🔎",
title:"Buscamos 24/7",
text:"Monitorizamos citas de extranjería disponibles para que no tengas que actualizar páginas todo el día."
},


{
icon:"💬",
title:"Soporte por WhatsApp",
text:"Nuestro equipo te mantiene informado y te guía durante todo el proceso."
},


{
icon:"💳",
title:"Sin pago inicial",
text:"Solo pagas cuando confirmamos una cita válida que aceptas."
},


{
icon:"🇪🇸",
title:"Todas las provincias de España",
text:"Ayudamos con trámites de extranjería en las 52 provincias."
}


];



return(


<section className="py-24 bg-white">



<div className="max-w-7xl mx-auto px-6">





<div className="text-center">





<h2 className="
text-4xl
font-bold
text-[#101c34]
">


¿Por qué elegir CitaEspaña?


</h2>





<p className="
mt-4
text-gray-600
text-lg
">


Tu cita gestionada de forma sencilla y segura.


</p>





</div>







<div className="
grid
md:grid-cols-4
gap-6
mt-14
">





{

items.map((item)=>(




<div


key={item.title}


className="
bg-gray-50
rounded-3xl
p-8
text-center
hover:shadow-lg
transition
"



>





<div className="
text-4xl
">


{item.icon}


</div>






<h3 className="
mt-5
font-bold
text-xl
">



{item.title}



</h3>







<p className="
mt-3
text-gray-600
leading-7
">



{item.text}



</p>






</div>




))


}






</div>





</div>





</section>


)


}