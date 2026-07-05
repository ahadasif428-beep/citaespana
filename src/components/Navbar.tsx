"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar(){


const [time,setTime]=useState("");



useEffect(()=>{


const update=()=>{

setTime(
new Date().toLocaleTimeString("en-GB")
)

}


update();


const timer=setInterval(update,1000);


return()=>clearInterval(timer);


},[]);





return(


<header className="
w-full
bg-white
shadow-sm
sticky
top-0
z-50
">



<div className="
w-full
px-3
md:px-6
py-3
md:py-4
flex
items-center
justify-between
gap-3
">






{/* Logo */}


<Link

href="/"

className="
flex
items-center
gap-2
whitespace-nowrap
"

>


<Image

src="/logo.jpeg"

alt="CitaEs logo"

width={50}

height={50}

/>


<span className="
text-2xl
md:text-3xl
font-bold
text-[#063d73]
" translate="no">

CitaEs

</span>


</Link>








{/* Desktop Menu */}


<nav className="
hidden
xl:flex
items-center
gap-5
text-[14px]
font-medium
text-gray-700
whitespace-nowrap
">



<Link href="/regularization">

<span className="
flex
items-center
gap-1
">

Regularización 2026


<span className="
bg-green-100
text-green-700
text-[10px]
px-2
py-[2px]
rounded-full
">

Nuevo

</span>


</span>

</Link>





<a href="#como-funciona">

Cómo funciona

</a>



<Link href="/services">

Servicios

</Link>



<Link href="/prices">

Precios

</Link>



<Link href="/provinces">

Provincias

</Link>



<Link href="/formalities">

Trámites

</Link>



<Link href="/guides">

Guías

</Link>



<Link href="/contact">

Contacto

</Link>




</nav>









{/* Right section */}


<div className="
flex
items-center
gap-2
">







{/* Time desktop only */}


<div className="
hidden
2xl:flex
items-center
gap-2
text-sm
">


🇪🇸 Madrid


<span className="text-gray-500">

{time}

</span>


</div>








{/* WhatsApp desktop only */}


<a

href="https://wa.me/34672399181"

target="_blank"

className="
hidden
lg:block
border
border-green-500
text-green-600
px-4
py-2
rounded-lg
font-semibold
text-sm
"

>

WhatsApp

</a>









{/* Appointment */}


<Link

href="/appointment"

className="
bg-[#d90429]
text-white
px-3
md:px-5
py-2
md:py-3
rounded-lg
font-bold
text-[10px]
md:text-xs
whitespace-nowrap
"

>

SOLICITAR CITA

</Link>








</div>






</div>


</header>


)


}