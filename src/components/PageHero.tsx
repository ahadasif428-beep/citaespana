export default function PageHero({
title,
text
}:{
title:string,
text:string
}){


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



<button className="
mt-10
bg-yellow-400
text-black
px-8
py-4
rounded-xl
font-bold
">

⚡ Request appointment

</button>


</div>


</section>


)

}