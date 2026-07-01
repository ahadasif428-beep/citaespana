"use client";


export default function PageHero({

title,

text

}:{

title:string;

text:string;

}) {



function handleWhatsApp(){


const message = 
`
Hola CitaEs,

Quiero solicitar información sobre una cita de extranjería.

Gracias.
`;


window.open(

`https://api.whatsapp.com/send?phone=34672399181&text=${encodeURIComponent(message)}`,

"_blank"

);


}





return(


<section className="
bg-blue-700
text-white
py-24
">


<div className="
max-w-6xl
mx-auto
px-6
text-center
">



<h1 className="
text-4xl
md:text-6xl
font-bold
">

{title}

</h1>




<p className="
mt-6
text-xl
text-blue-100
">

{text}

</p>





<button

onClick={handleWhatsApp}

className="
mt-10
bg-yellow-400
text-black
px-8
py-4
rounded-xl
font-bold
"

>

⚡ Solicitar cita

</button>




</div>


</section>


)


}