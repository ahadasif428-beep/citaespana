import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer(){


return(


<footer className="bg-[#063d73] text-white py-14">



<div className="max-w-7xl mx-auto px-6">







<div className="
grid
grid-cols-1
md:grid-cols-4
gap-10
">







{/* BRAND */}



<div>





<h2 className="text-3xl font-bold">


CitaEs


</h2>







<p className="mt-4 text-blue-100 leading-7">


Tu servicio de confianza para gestionar citas de extranjería en España.


</p>







<a


href="https://wa.me/34672399181"



target="_blank"


className="
mt-5
bg-[#25D366]
flex
items-center
justify-center
gap-2
px-5
py-3
rounded-xl
font-bold
w-fit
"



>



<FaWhatsapp className="text-2xl"/>


WhatsApp



</a>






</div>














{/* LINKS */}



<div>





<h3 className="font-bold text-lg mb-4">


Servicios


</h3>







<div className="space-y-3 text-blue-100">






<Link href="/services">


Servicios de extranjería


</Link>




<br/>





<Link href="/regularization">


Regularización 2026


</Link>






<br/>





<Link href="/provinces">


Provincias


</Link>






<br/>





<Link href="/guides">


Guías


</Link>







</div>







</div>













{/* COMPANY */}



<div>





<h3 className="font-bold text-lg mb-4">


Empresa


</h3>







<div className="space-y-3 text-blue-100">






<Link href="/about">


Sobre nosotros


</Link>






<br/>





<Link href="/contact">


Contacto


</Link>






<br/>





<Link href="/faq">


Preguntas frecuentes


</Link>






<br/>





<Link href="/privacy">


Política de privacidad


</Link>







</div>






</div>













{/* CTA */}



<div>





<h3 className="font-bold text-lg mb-4">


¿Necesitas una cita?


</h3>







<p className="text-blue-100 mb-5">


Consigue tu cita de extranjería sin perder horas buscando.


</p>







<Link



href="/appointment"



className="
block
bg-red-600
text-white
text-center
px-5
py-3
rounded-xl
font-bold
"



>



Solicitar cita



</Link>








</div>









</div>













<div className="
border-t
border-blue-400/30
mt-12
pt-6
text-center
text-sm
text-blue-200
">





© {new Date().getFullYear()} CitaEs. Todos los derechos reservados.





</div>









</div>





</footer>



)


}