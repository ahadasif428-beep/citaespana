"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import { provinces, procedures } from "@/data/options";

export default function Hero() {


const [province,setProvince]=useState("");
const [procedure,setProcedure]=useState("");
const [phone,setPhone]=useState("");


const [time,setTime]=useState({

days:6,
hours:9,
minutes:1,
seconds:14

});



useEffect(()=>{


const timer=setInterval(()=>{


setTime((prev)=>{


let {days,hours,minutes,seconds}=prev;



if(seconds > 0){

seconds--;

}

else{

seconds=59;


if(minutes > 0){

minutes--;

}

else{

minutes=59;


if(hours > 0){

hours--;

}

else{

hours=23;


if(days > 0){

days--;

}


}

}


}



return{

days,
hours,
minutes,
seconds

};


});


},1000);



return()=>clearInterval(timer);


},[]);





const whatsappNumber="34672399181";



const whatsappLink=createWhatsAppLink(

whatsappNumber,

"",

"",

province,

procedure

);







async function submit(){



if(!province || !procedure || !phone){

return;

}




const {error}=await supabase

.from("leads")

.insert({

name:"Website Lead",

phone,

province,

procedure,

status:"Nuevo"

});





if(error){

console.log(error);

alert("Error guardando solicitud");

return;

}







const message =

`

Nueva solicitud CitaEs


Provincia: ${province}


Trámite: ${procedure}


WhatsApp: ${phone}

`;






window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

"_blank"

);



}









return(


<>


<div className="bg-yellow-400 text-center py-3 text-black font-semibold text-sm md:text-base">


🔴 REGULARIZACIÓN 2026 — Fecha límite: Comprueba tu elegibilidad →


</div>








<section className="bg-blue-700 text-white flex items-center py-10 md:min-h-[900px]">



<div className="max-w-7xl w-full mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">








{/* LEFT */}



<div>



<div className="inline-block bg-blue-500 px-5 py-2 rounded-full">


🟢 MONITOREO ACTIVO 24/7


</div>







<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-7">


Solicita tu cita de extranjería en España en 2026



<br/>




<span className="text-yellow-300">


sin perder horas buscando


</span>



</h1>








<p className="mt-8 text-base md:text-xl text-blue-100">


Monitorizamos citas por ti 24/7 en toda España.


Solo pagas si conseguimos tu cita.



</p>









<div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">



<div className="bg-blue-600 px-5 py-3 rounded-full">


⭐ 15.000+ solicitudes


</div>





<div className="bg-blue-600 px-5 py-3 rounded-full">


🌍 52 provincias


</div>





<div className="bg-blue-600 px-5 py-3 rounded-full">


✅ Sin pago inicial


</div>



</div>





</div>









{/* RIGHT */}



<div>





<div className="w-full bg-white/10 border border-white/30 rounded-3xl p-5 md:p-8 backdrop-blur">






<h2 className="text-center text-xl font-bold mb-6">


Solicita tu cita ahora — es gratis



</h2>







<select


className="w-full bg-white text-black p-4 rounded-xl mb-4"


onChange={(e)=>setProvince(e.target.value)}


>


<option value="">


Provincia


</option>



{

provinces.map((item)=>(


<option key={item} value={item}>


{item}


</option>



))


}



</select>










<select


className="w-full bg-white text-black p-4 rounded-xl mb-4"


onChange={(e)=>setProcedure(e.target.value)}


>



<option value="">


Trámite


</option>




{

procedures.map((item)=>(


<option key={item} value={item}>


{item}


</option>



))


}





</select>









<input


className="w-full bg-white text-black p-4 rounded-xl mb-4"


placeholder="📱 Tu número de WhatsApp (+34...)"


value={phone}


onChange={(e)=>setPhone(e.target.value)}


/>









<button


disabled={!province || !procedure || !phone}


onClick={submit}




className={`w-full p-4 rounded-xl font-bold


${


!province || !procedure || !phone


?


"bg-gray-400"


:


"bg-yellow-400 text-black"


}`}




>


⚡ Solicitar cita gratis



</button>








<p className="text-center text-sm mt-4">


Sin pago inicial · Solo pagas si conseguimos tu cita



</p>






</div>









<a


href={whatsappLink}


target="_blank"


className="mt-5 bg-[#25D366] text-white flex items-center justify-center gap-3 p-4 rounded-xl font-bold"


>



<FaWhatsapp className="text-3xl"/>


Hablar por WhatsApp



</a>









<div className="text-center mt-6">



<h3 className="font-bold mb-4">


TIEMPO RESTANTE PARA SOLICITAR



</h3>






<div className="grid grid-cols-4 gap-2">



{

[

time.days,

time.hours,

time.minutes,

time.seconds


].map((n,i)=>(



<div


key={i}


className="bg-white/20 p-3 md:p-5 rounded-xl text-xl md:text-3xl font-bold"



>


{String(n).padStart(2,"0")}



</div>



))


}





</div>



</div>









<div className="mt-6 bg-white/20 rounded-full text-center py-3">


316+ comprobaciones de elegibilidad realizadas


</div>









<div className="mt-8 text-center">



<div className="bg-white text-blue-700 inline-block px-6 py-3 rounded-xl">


★★★★★ Mira nuestras reseñas en Trustpilot



</div>



</div>






</div>





</div>









{/* MOBILE STICKY BUTTON */}



<div className="fixed bottom-0 left-0 right-0 md:hidden bg-white p-4 flex gap-3 z-50 shadow-xl">






<a


href={whatsappLink}


target="_blank"


className="flex-1 h-14 bg-[#25D366] text-white flex items-center justify-center gap-2 rounded-xl font-bold"



>



<FaWhatsapp className="text-3xl"/>


WhatsApp



</a>









<button


onClick={submit}


className="flex-1 h-14 bg-yellow-400 text-black rounded-xl font-bold"



>


⚡ Solicitar



</button>






</div>







</section>





</>

)


}