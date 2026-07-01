export default function Guarantee(){


const cards=[


{
icon:"💰",
title:"Cero pago anticipado",
text:"No pedimos ningún pago hasta que tengas la cita confirmada en tus manos."
},



{
icon:"🛡️",
title:"Sin cita, no pagas",
text:"Si no podemos encontrar una cita adecuada para ti, no pagas absolutamente nada."
},



{
icon:"‹",
title:"Sin compromiso",
text:"Cancela cuando quieras. Sin contratos, sin penalizaciones y sin letra pequeña."
},



{
icon:"💬",
title:"Tú decides",
text:"Te enviaremos la propuesta por WhatsApp. La revisas y solo confirmas si estás conforme."
}



]





return(



<section className="
bg-[#063d73]
py-28
text-white
">





<div className="
max-w-[1200px]
mx-auto
px-6
text-center
">







<div className="
w-20
h-20
mx-auto
rounded-full
bg-blue-400/20
border
border-blue-300/30
flex
items-center
justify-center
text-4xl
">



🛡️



</div>








<p className="
mt-6
text-yellow-400
font-bold
tracking-wider
text-sm
">



GARANTÍA CITAES



</p>









<h2 className="
text-5xl
font-bold
mt-4
">



Sin riesgo para ti — siempre



</h2>









<p className="
mt-5
text-blue-100
text-lg
max-w-2xl
mx-auto
">



Más de 15.000 personas ya han confiado en nosotros sin pagar nada hasta conseguir su cita.



</p>











<div className="
grid
md:grid-cols-4
gap-5
mt-14
">







{

cards.map((card,index)=>(






<div


key={index}


className="
bg-white/10
border
border-white/10
rounded-xl
p-7
min-h-[285px]
"



>






<div className="
w-14
h-14
mx-auto
rounded-lg
bg-blue-300/20
flex
items-center
justify-center
text-2xl
text-yellow-400
">



{card.icon}



</div>









<h3 className="
mt-5
font-bold
text-xl
">



{card.title}



</h3>










<p className="
mt-4
text-blue-100
leading-7
">



{card.text}



</p>








</div>





))





}








</div>












<button



className="
mt-12
bg-yellow-400
text-gray-900
px-10
py-4
rounded-xl
font-bold
text-lg
hover:bg-yellow-300
"



>



💬 Empezar gratis por WhatsApp



</button>









<p className="
mt-5
text-blue-200
text-sm
">



No necesitas registrarte · Solo pagas cuando confirmas tu cita



</p>








</div>






</section>





)

}