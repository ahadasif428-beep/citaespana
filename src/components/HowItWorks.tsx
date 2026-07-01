export default function HowItWorks(){


const steps=[


{
number:"01",
title:"Cuéntanos tu trámite y tu provincia",
text:"Dinos qué trámite necesitas (NIE, TIE, permiso de residencia, asilo, nacionalidad, visado de estudiante, etc.), en qué provincia estás y tu disponibilidad."
},



{
number:"02",
title:"Encontramos tu cita disponible las 24 horas",
text:"Monitorizamos continuamente las citas disponibles en oficinas de extranjería y comisarías de tu zona, para que no tengas que estar revisando la pantalla."
},



{
number:"03",
title:"Confirmamos tu cita y solo pagas entonces",
text:"Cuando encontramos una cita adecuada para tu caso, te enviamos los detalles para que los revises. Solo pagas después de la confirmación."
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



¿Cómo funciona CitaEs?



</h2>






<p className="mt-5 text-base md:text-xl text-gray-600">



Sin registro. Sin formularios interminables. Solo WhatsApp.



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