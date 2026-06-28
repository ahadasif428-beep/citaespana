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

Appointment alerts

</p>





<h2 className="
text-4xl
font-bold
text-[#101c34]
mt-4
">

Are there no appointments available right now?

</h2>





<p className="
text-gray-600
mt-5
max-w-2xl
mx-auto
text-lg
">


Leave us your number and we'll notify you when an appointment becomes available for your procedure. No obligation, no upfront payment.


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

Your WhatsApp number

</label>


<input

type="text"

placeholder="Your WhatsApp number (+34...)"

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

Your email (optional)

</label>


<input

type="email"

placeholder="Your email (optional)"

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

💬 Notify me via WhatsApp

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

✈️ Or receive alerts via Telegram

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
✓ No commitment
</span>


<span>
✓ No upfront payment
</span>


<span>
✓ Cancel anytime
</span>


</div>






</div>



</div>


</section>

)


}