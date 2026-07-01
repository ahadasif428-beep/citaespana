import Link from "next/link";

export default function FinalCTA(){


return (

<section className="py-24 bg-white">


<div className="max-w-6xl mx-auto px-6">



<div className="
bg-[#063d73]
rounded-3xl
px-8
py-16
md:px-16
text-center
text-white
overflow-hidden
">





<div className="max-w-3xl mx-auto">





<p className="
text-yellow-400
font-bold
uppercase
tracking-widest
text-sm
">

Need help?

</p>







<h2 className="
mt-5
text-4xl
md:text-5xl
font-bold
leading-tight
">

Do you need your immigration appointment?

</h2>







<p className="
mt-5
text-blue-100
text-lg
">

Talk to us now. You only pay if we succeed.

</p>









<div className="
flex
flex-col
md:flex-row
justify-center
gap-5
mt-10
">





<a
href="https://wa.me/34672399181"
target="_blank"
rel="noopener noreferrer"
className="
bg-[#d90429]
text-white
px-10
py-4
rounded-xl
font-bold
hover:bg-red-700
transition
"

>

💬 Request via WhatsApp

</a>







<Link
href="/appointment"
className="
bg-white
text-[#063d73]
px-10
py-4
rounded-xl
font-bold
hover:bg-gray-100
transition
"

>

📝 Apply Online

</Link>





</div>








<div className="
mt-10
flex
justify-center
gap-4
flex-wrap
text-sm
text-blue-100
">


<span>
✓ Over 15,000 appointments secured
</span>


<span>
✓ No upfront payment
</span>


<span>
✓ All 52 provinces
</span>



</div>






</div>





</div>



</div>


</section>


)

}