export default function Provinces() {


const provinces = [
"Madrid",
"Barcelona",
"Valencia",
"Sevilla",
"Málaga",
"Alicante",

"Murcia",
"Zaragoza",
"Bizkaia (Bilbao)",
"Islas Baleares",
"Granada",
"Cádiz",

"A Coruña",
"Pontevedra",
"Almería",
"Tarragona",
"Lleida",
"Girona",

"Huelva",
"Córdoba",
"Jaén",
"Toledo",
"Valladolid",
"Salamanca",

"Badajoz",
"Cáceres",
"Asturias (Oviedo)",
"Cantabria",
"La Rioja",
"Navarra",

"Álava (Vitoria)",
"Gipuzkoa",
"Lugo",
"Ourense",
"León",
"Burgos",

"Palencia",
"Segovia",
"Ávila",
"Soria",
"Zamora",
"Guadalajara",

"Cuenca",
"Albacete",
"Ciudad Real",
"Castellón",
"Teruel",
"Huesca",

"Las Palmas",
"Santa Cruz de Tenerife",
"Ceuta",
"Melilla"
];


return (

<section className="py-24 bg-white">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-center text-4xl font-bold text-[#0b1b36]">

Trabajamos en las 52 provincias de España

</h2>


<p className="text-center mt-5 text-gray-600">

Haz clic en tu provincia para ver disponibilidad y guías locales.

</p>



<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-16">

{
provinces.map((province,index)=>(

<button

key={province}

className="
group
relative
overflow-hidden
h-[58px]
rounded-2xl
bg-white
border
border-gray-100
shadow-md
font-semibold
text-gray-700
hover:-translate-y-2
hover:shadow-xl
hover:border-[#C60B1E]
transition-all
duration-300
"

>

<div
className="
absolute
left-0
top-0
w-0
h-full
bg-gradient-to-r
from-[#C60B1E]
to-[#F1BF00]
group-hover:w-full
transition-all
duration-500
"
/>

<span
className="
relative
z-10
group-hover:text-white
transition-colors
duration-300
"
>

📍 {province}

</span>

</button>

))

}

</div>



{/* Bottom CTA */}

<div className="mt-20">

<div
className="
rounded-[32px]
bg-gradient-to-r
from-[#C60B1E]
via-[#B10A19]
to-[#A40818]
text-white
text-center
px-10
py-12
shadow-2xl
relative
overflow-hidden
"
>

<div
className="
absolute
top-0
right-0
w-64
h-64
bg-[#F1BF00]/20
rounded-full
blur-3xl
"
/>

<div
className="
absolute
bottom-0
left-0
w-56
h-56
bg-white/10
rounded-full
blur-3xl
"
/>

<h3
className="
relative
z-10
text-3xl
font-black
"
>

¿No encuentras tu provincia?

</h3>

<p
className="
relative
z-10
mt-5
text-red-100
max-w-2xl
mx-auto
leading-8
"
>

Trabajamos en las 52 provincias de España y añadimos nuevas oficinas y disponibilidad cada día.

</p>

<button

className="
relative
z-10
mt-8
bg-[#F1BF00]
text-[#8B0000]
font-black
px-10
py-4
rounded-2xl
shadow-lg
hover:scale-105
hover:shadow-xl
transition-all
duration-300
"

>

Ver todas las provincias →

</button>

</div>

</div>
</div>
</section>


)

}