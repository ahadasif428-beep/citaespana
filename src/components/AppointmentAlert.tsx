export default function AppointmentAlert(){


return (


<section className="py-24 bg-white">


<div className="max-w-5xl mx-auto px-6">





<div className="
bg-[#fff7f7]
border
border-red-100
rounded-3xl
p-10
md:p-14
text-center
">






<p className="
text-red-600
font-bold
uppercase
text-sm
tracking-wider
">

Alertas de citas

</p>








<h2 className="
text-4xl
font-bold
text-[#101c34]
mt-4
">

¿No hay citas disponibles ahora mismo?

</h2>








<p className="
text-gray-600
mt-5
max-w-2xl
mx-auto
text-lg
">


Déjanos tu número y te avisaremos cuando haya una cita disponible para tu trámite. Sin compromiso y sin pago inicial.


</p>









<div className="
max-w-xl
mx-auto
mt-10
space-y-5
">








<div className="text-left">



<label className="
text-sm
font-semibold
text-gray-700
">


Tu número de WhatsApp


</label>





<input


type="text"


placeholder="Tu número de WhatsApp (+34...)"


className="
mt-2
w-full
h-14
rounded-xl
border
border-gray-200
px-5
outline-none
focus:border-red-500
"


/>




</div>









<div className="text-left">



<label className="
text-sm
font-semibold
text-gray-700
">


Tu correo electrónico (opcional)


</label>






<input


type="email"


placeholder="Tu correo electrónico (opcional)"


className="
mt-2
w-full
h-14
rounded-xl
border
border-gray-200
px-5
outline-none
focus:border-red-500
"


/>





</div>









<button


className="
w-full
h-14
bg-[#d90429]
text-white
rounded-xl
font-semibold
text-lg
hover:bg-red-700
transition
"


>


💬 Avísame por WhatsApp


</button>










<button


className="
w-full
h-14
border
border-gray-300
rounded-xl
font-semibold
text-gray-700
hover:bg-gray-50
transition
"


>


✈️ O recibir alertas por Telegram


</button>









</div>









<div className="
flex
justify-center
gap-5
flex-wrap
mt-8
text-sm
text-gray-500
">



<span>

✓ Sin compromiso

</span>





<span>

✓ Sin pago inicial

</span>





<span>

✓ Cancela cuando quieras

</span>





</div>









</div>





</div>





</section>



)


}