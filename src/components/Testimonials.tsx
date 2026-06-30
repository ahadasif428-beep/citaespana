export default function Testimonials(){


const reviews=[

{
letter:"M",
name:"María González",
location:"Venezuela - Madrid",
text:"I hadn't known what to do for months. CitaEs got me an appointment for the regularization process in 4 days. No upfront payment, just as they promised. Essential."
},


{
letter:"A",
name:"Ahmed Hassan",
location:"Morocco - Barcelona",
text:"I thought it would be impossible to get an appointment before June 30th. CitaEs did it in less than a week. Highly recommended."
},


{
letter:"F",
name:"Farida Boukhari",
location:"Algeria - Valencia",
text:"I was afraid of missing the deadline. The CitaEs team guided me through everything: documents, Cl@ve, everything. My appointment was confirmed."
},


{
letter:"C",
name:"Carlos Rodríguez",
location:"Colombia - Seville",
text:"Incredible service. They guided me through all the paperwork and I got the appointment in record time. Worth every penny."
},


{
letter:"J",
name:"João Ferreira",
location:"Portugal - Malaga",
text:"Excellent. WhatsApp responds very quickly, in minutes. They explained everything I needed and the appointment came sooner than expected."
},


{
letter:"Yo",
name:"Ibrahim Diallo",
location:"Senegal - Murcia",
text:"They helped me when I had already lost hope. Clear process with no surprises. I recommend it to all my fellow countrymen."
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

⭐ Verified reviews

</span>




<h2 className="
text-3xl
md:text-5xl
font-bold
mt-6
text-gray-900
">

What our customers say

</h2>




<p className="text-gray-600 mt-5 text-base md:text-lg">

More than 15,000 appointments managed in 52 provinces since 2024.

</p>



</div>









{/* STATS */}


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

15,000+

</h3>

<p className="text-gray-600">

Appointments obtained

</p>


</div>





<div>

<h3 className="text-4xl font-bold text-red-600">

5.0 /5

</h3>

<p className="text-gray-600">

Average rating

</p>


</div>





<div>

<h3 className="text-4xl font-bold text-red-600">

52

</h3>

<p className="text-gray-600">

Provinces

</p>


</div>



</div>









{/* REVIEWS */}



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

Regularization 2026

</span>




<span className="
text-gray-400
text-sm
text-center
">

April 2026

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

Leave your feedback

</button>



</div>







</div>


</section>


)

}