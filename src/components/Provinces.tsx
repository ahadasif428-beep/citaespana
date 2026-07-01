export default function Provinces() {


const provinces = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Malaga",
"Alicante",

"Murcia",
"Saragossa",
"Bizkaia (Bilbao)",
"Balearic Islands",
"Grenade",
"Cadiz",

"A Coruña",
"Pontevedra",
"Almería",
"Tarragona",
"Lleida",
"Girona",

"Huelva",
"Cordova",
"Jaén",
"Toledo",
"Valladolid",
"Salamanca",

"Badajoz",
"Cáceres",
"Asturias (Oviedo)",
"Cantabria",
"Rioja",
"Navarre",

"Álava (Vitoria)",
"Gipuzkoa",
"Lugo",
"Ourense",
"Lion",
"Burgos",

"Palencia",
"Segovia",
"Ávila",
"Soria",
"Zamora",
"Guadalajara",

"Basin",
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
We work in all 52 provinces of Spain
</h2>


<p className="text-center mt-5 text-gray-600">
Click on your province to see availability and local guides.
</p>



<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">


{
provinces.map((province)=>(


<button

key={province}

className="
h-[46px]
rounded-xl
border
border-gray-200
bg-white
text-[#152744]
text-sm
hover:border-red-500
hover:text-red-600
transition
"

>

{province}


</button>


))

}


</div>




<div className="text-center mt-10">


<a
href="/provinces"
className="
text-red-600
font-semibold
hover:underline
cursor-pointer
"

>

View all provinces →

</a>


</div>



</div>


</section>


)

}