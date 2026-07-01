export default function Testimonials(){


const reviews=[

{
letter:"M",
name:"María González",
location:"Venezuela - Madrid",
text:"No sabía qué hacer durante meses. CitaEs consiguió mi cita para el proceso de regularización en 4 días. Sin pago por adelantado, tal como prometieron. Imprescindible."
},


{
letter:"A",
name:"Ahmed Hassan",
location:"Marruecos - Barcelona",
text:"Pensé que sería imposible conseguir una cita antes del 30 de junio. CitaEs lo consiguió en menos de una semana. Muy recomendable."
},


{
letter:"F",
name:"Farida Boukhari",
location:"Argelia - Valencia",
text:"Tenía miedo de perder el plazo. El equipo de CitaEs me guió con todo: documentos, Cl@ve y todo el proceso. Mi cita quedó confirmada."
},


{
letter:"C",
name:"Carlos Rodríguez",
location:"Colombia - Sevilla",
text:"Servicio increíble. Me ayudaron con todos los trámites y conseguí la cita en tiempo récord. Vale cada euro."
},


{
letter:"J",
name:"João Ferreira",
location:"Portugal - Málaga",
text:"Excelente. WhatsApp responde muy rápido, en minutos. Me explicaron todo lo necesario y la cita llegó antes de lo esperado."
},


{
letter:"I",
name:"Ibrahim Diallo",
location:"Senegal - Murcia",
text:"Me ayudaron cuando ya había perdido la esperanza. Proceso claro y sin sorpresas. Lo recomiendo a todos mis compatriotas."
}

];





return(

<section className="py-16 md:py-24 bg-gray-50">


<div className="max-w-6xl mx-auto px-4 md:px-6">







<div className="text-center">


<span className="
inline-block
bg-yellow-100
text-yellow-700
px-5
py-2
rounded-full
text-sm
font-semibold
">

⭐ Opiniones verificadas

</span>





<h2 className="
text-3xl
md:text-5xl
font-bold
mt-6
text-gray-900
">

Lo que dicen nuestros clientes

</h2>





<p className="text-gray-600 mt-5 text-base md:text-lg">

Más de 15.000 citas gestionadas en las 52 provincias desde 2024.

</p>



</div>









<div className="
grid
grid-cols-1
sm:grid-cols-3
gap-8
mt-12
text-center
">



<div>

<h3 className="text-4xl font-bold text-red-600">

15.000+

</h3>

<p className="text-gray-600">

Citas conseguidas

</p>


</div>







<div>

<h3 className="text-4xl font-bold text-red-600">

5.0 /5

</h3>

<p className="text-gray-600">

Valoración media

</p>


</div>







<div>

<h3 className="text-4xl font-bold text-red-600">

52

</h3>

<p className="text-gray-600">

Provincias

</p>


</div>



</div>









<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mt-14
">







{

reviews.map((review,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
border
border-gray-200
p-6
shadow-sm
"

>








<div className="flex justify-between items-start">






<div className="flex gap-4">



<div className="
w-12
h-12
rounded-full
bg-red-500
text-white
flex
items-center
justify-center
font-bold
shrink-0
">

{review.letter}

</div>








<div>


<h4 className="font-bold text-gray-900">

{review.name}

</h4>



<p className="text-sm text-gray-500">

{review.location}

</p>



</div>





</div>







<div className="text-yellow-500 text-sm">

★★★★★

</div>





</div>









<p className="
mt-6
text-gray-600
leading-7
text-sm
md:text-base
">

“{review.text}”

</p>











<div className="
flex
flex-col
sm:flex-row
justify-between
gap-3
mt-8
">






<span className="
bg-red-50
text-red-600
px-4
py-2
rounded-full
text-sm
font-medium
text-center
">

Regularización 2026

</span>







<span className="
text-gray-400
text-sm
text-center
">

Abril 2026

</span>





</div>







</div>



))


}








</div>









<div className="mt-12 text-center">


<button

className="
bg-red-600
text-white
px-8
md:px-10
py-4
rounded-xl
font-bold
hover:bg-red-700
"

>

Dejar tu opinión

</button>



</div>







</div>


</section>


)

}