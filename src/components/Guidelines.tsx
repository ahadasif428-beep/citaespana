export default function Guidelines(){


const cards=[

{
title:"Complete Guide to Regularization 2026",
text:"Requirements, documents, deadlines and how to apply.",
color:"bg-[#c90022]",
link:"text-red-600"
},


{
title:"Required Documents",
text:"Complete list of valid documents and where to obtain them.",
color:"bg-[#064580]",
link:"text-blue-700"
},


{
title:"How to Obtain Registration",
text:"Step by step, even without a rental agreement.",
color:"bg-[#20bd5a]",
link:"text-green-600"
}


]



return(


<section className="
bg-white
py-24
">



<div className="
max-w-[1100px]
mx-auto
px-6
">






{/* heading */}

<div className="
text-center
">


<h2 className="
text-5xl
font-bold
text-[#101827]
font-serif
">

Regularization Guidelines 2026

</h2>




<p className="
mt-5
text-lg
text-gray-600
font-serif
">

The deadline is now open — you have until June 30th.

</p>


</div>









{/* cards */}


<div className="
grid
md:grid-cols-3
gap-6
mt-12
">






{

cards.map((card,index)=>(


<div

key={index}

className="
rounded-2xl
overflow-hidden
border
border-gray-200
shadow-sm
h-[198px]
"

>



<div className={`
${card.color}
text-white
h-[76px]
flex
items-center
px-6
font-bold
text-lg
font-serif
`}>

{card.title}

</div>







<div className="
p-6
font-serif
">


<p className="
text-gray-700
leading-6
">

{card.text}

</p>





<a

className={`
inline-block
mt-5
font-bold
${card.link}
`}

>

Read more →

</a>





</div>






</div>


))

}




</div>









{/* button */}


<div className="
flex
justify-center
mt-10
">


<button

className="
bg-[#d00020]
text-white
px-8
py-4
rounded-xl
font-bold
shadow-md
hover:opacity-90
font-serif
"

>

See full information on Regularization 2026 →

</button>



</div>





</div>


</section>


)


}