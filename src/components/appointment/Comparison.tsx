export default function Comparison(){


return(

<section className="py-24 bg-white">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center">

CitaPro vs Traditional Management Services

</h2>


<p className="text-center text-gray-500 mt-4">

Why more people choose CitaPro

</p>




<div className="
mt-12
overflow-x-auto
">


<table className="
w-full
border
rounded-3xl
overflow-hidden
">


<thead className="bg-blue-700 text-white">


<tr>

<th className="p-5 text-left">
Feature
</th>


<th className="p-5">
CitaPro
</th>


<th className="p-5">
Management services
</th>


</tr>


</thead>




<tbody>


{[

["Standard appointment price","€69","€100-200"],

["No upfront payment","✅","❌"],

["WhatsApp response","✅ <24h","❌"],

["Available 24/7","✅","❌"],

["52 provinces covered","✅","Local only"],

["Automatic monitoring","✅","❌"]

].map(row=>(


<tr 
key={row[0]}
className="border-b"
>


<td className="p-5 font-semibold">

{row[0]}

</td>


<td className="p-5 text-center text-green-600 font-bold">

{row[1]}

</td>


<td className="p-5 text-center">

{row[2]}

</td>



</tr>


))}



</tbody>


</table>



</div>


<p className="text-gray-500 text-sm mt-5">

CitaPro is not a law firm. Prices are indicative of administrative services.

</p>



</div>


</section>

)

}