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
px-4
lg:px-6
py-4
flex
items-center
justify-between
gap-4
">





{/* Logo */}

{/* Logo */}

<Link

href="/"

className="
flex
items-center
gap-3
whitespace-nowrap
"

>

<Image

src="/logo.jpeg"

alt="CitaEs logo"

width={55}

height={55}

/>


<span className="
text-3xl
font-bold
text-[#063d73]
">

CitaEs

</span>


</Link>









{/* Menu */}

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
whitespace-nowrap
">

Regularization 2026

<span className="
bg-green-100
text-green-700
text-[10px]
px-2
py-[2px]
rounded-full
">

New

</span>

</span>

</Link>




<a 
href="#como-funciona"
className="whitespace-nowrap"
>
How it works
</a>


<Link 
href="/services"
className="whitespace-nowrap"
>
Services
</Link>


<Link 
href="/prices"
className="whitespace-nowrap"
>
Prices
</Link>


<Link 
href="/provinces"
className="whitespace-nowrap"
>
Provinces
</Link>


<Link 
href="/formalities"
className="whitespace-nowrap"
>
Formalities
</Link>


<Link 
href="/guides"
className="whitespace-nowrap"
>
Guides
</Link>


<Link 
href="/contact"
className="whitespace-nowrap"
>
Contact
</Link>


</nav>






{/* right buttons */}

<div className="
flex
items-center
gap-3
whitespace-nowrap
">


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





<a
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





<Link

href="/appointment"

className="
bg-[#d90429]
text-white
px-5
py-3
rounded-lg
font-bold
text-xs
"

>

REQUEST AN APPOINTMENT

</Link>


</div>



</div>


</header>



)


}