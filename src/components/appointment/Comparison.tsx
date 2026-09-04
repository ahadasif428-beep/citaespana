export default function Comparison(){


return(

<section className="py-24 bg-white">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center">

<<<<<<< HEAD
CitaEspaña vs Traditional Management Services
=======
CitaEs vs Traditional Management Services
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

</h2>


<p className="text-center text-gray-500 mt-4">

<<<<<<< HEAD
Why more people choose CitaEspaña
=======
Why more people choose CitaEs
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

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


<<<<<<< HEAD
<thead className="bg-[#C60B1E] text-white">
=======
<thead className="bg-blue-700 text-white">
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823


<tr>

<th className="p-5 text-left">
Feature
</th>


<th className="p-5">
<<<<<<< HEAD
CitaEspaña
=======
CitaEs
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
</th>


<th className="p-5">
Management services
</th>


</tr>


</thead>




<tbody>


{[

<<<<<<< HEAD
["Appointment service price","From €45","€100-200"],
=======
["Standard appointment price","€69","€100-200"],
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

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

<<<<<<< HEAD
CitaEspaña is not a law firm. Prices are indicative of administrative services.
=======
CitaEs is not a law firm. Prices are indicative of administrative services.
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

</p>



</div>


</section>

)

}