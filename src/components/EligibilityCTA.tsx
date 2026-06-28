export default function EligibilityCTA(){


return (

<section className="py-24 bg-[#f8fafc]">


<div className="max-w-5xl mx-auto px-6">



<div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10 md:p-14 text-center">



<p className="text-red-600 font-bold uppercase text-sm tracking-wider">
Eligibility Check
</p>



<h2 className="text-4xl font-bold text-[#101c34] mt-4">
Do you qualify for Regularization 2026?
</h2>



<p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">

More than 500,000 people may qualify.
Check your eligibility for free in less than 2 minutes.

</p>





<div className="grid md:grid-cols-2 gap-5 mt-10">


<div>


<input

placeholder="Your WhatsApp number (+34...)"

className="
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



<div>


<select

className="
w-full
h-14
rounded-xl
border
border-gray-200
px-5
text-gray-500
"

>

<option>
Select your province
</option>

<option>
Madrid
</option>

<option>
Barcelona
</option>

<option>
Valencia
</option>


</select>


</div>



</div>






<button

className="
mt-8
bg-[#d90429]
text-white
font-semibold
px-10
py-4
rounded-xl
hover:bg-red-700
transition
"

>

Check my eligibility FREE →

</button>





<p className="text-sm text-gray-500 mt-6">

✓ No registration &nbsp; ✓ No upfront payment &nbsp; ✓ WhatsApp response

</p>



</div>





</div>


</section>

)


}