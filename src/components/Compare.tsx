export default function Compare(){

const rows=[
{
feature:"Price",
cita:"From €69\nOnly if we get your appointment",
gestoria:"€150–€499\nThey get paid even if they fail",
alone:"Free\nHours spent searching with no guarantee"
},
{
feature:"Prepayment",
cita:"No",
gestoria:"Yeah\nYou pay before you have an appointment",
alone:"—"
},
{
feature:"Guarantee of success",
cita:"100%\nIf there is no appointment, there is no charge",
gestoria:"Seldom\nWithholding of fees",
alone:"No\nNo support if there are no appointments"
},
{
feature:"24/7 Monitoring",
cita:"Yeah\nAutomatic alerts instantly",
gestoria:"No\nOffice Hours",
alone:"No\nYou check manually"
},
{
feature:"WhatsApp Support",
cita:"Yeah\nResponse in <10 min",
gestoria:"Phone / email\nLong waiting times",
alone:"No"
},
{
feature:"International payment",
cita:"Yeah\nWestern Union, Remitly, Wise...",
gestoria:"Not always\nSpanish bank required",
alone:"—"
},
{
feature:"Response time",
cita:"1–15 days\nAccording to province and procedure",
gestoria:"2–6 weeks\nHigh workload",
alone:"Indefinite\nIt depends on availability"
}

]


return(

<section className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6">


<p className="text-red-600 text-center font-bold tracking-wide">
COMPARE BEFORE YOU DECIDE
</p>


<h2 className="text-4xl font-bold text-center mt-3">
CitaPro vs. Gestoría vs. Going alone
</h2>


<p className="text-center text-gray-600 mt-4">
The same appointment, three very different experiences.
</p>



<div className="mt-12 max-w-[1020px] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">


<table className="w-full table-fixed">


<thead>

<tr className="h-[72px]">


<th className="w-[286px] text-left px-6 bg-gray-50 text-sm text-gray-500">
FEATURE
</th>


<th className="w-[245px] bg-red-600 text-white text-center">
<div className="font-bold">
CitaPro
</div>
<span className="text-xs">
From €69
</span>
</th>



<th className="w-[245px] bg-gray-700 text-white text-center">

<div className="font-bold">
Management services
</div>

<span className="text-xs">
€150–€499
</span>

</th>



<th className="w-[245px] bg-gray-500 text-white text-center">

<div className="font-bold">
Going it alone (DIY)
</div>

<span className="text-xs">
Hours searching
</span>

</th>


</tr>

</thead>



<tbody>


{
rows.map((row)=>(


<tr 
key={row.feature}
className="h-[72px] border-t border-gray-100"
>



<td className="px-6 text-sm text-gray-700">

{row.feature}

</td>



<td className="px-5 text-center text-sm whitespace-pre-line text-red-600">

{row.cita}

</td>



<td className="px-5 text-center text-sm whitespace-pre-line text-gray-700">

{row.gestoria}

</td>



<td className="px-5 text-center text-sm whitespace-pre-line text-gray-700">

{row.alone}

</td>



</tr>


))

}


</tbody>


</table>


</div>



<button className="mt-10 mx-auto block bg-red-600 text-white px-8 py-4 rounded-xl font-bold">

💬 Get started with CitaPro — Free until appointment confirmed

</button>



</div>

</section>

)

}