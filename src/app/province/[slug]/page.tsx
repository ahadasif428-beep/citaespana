import { provinces } from "@/data/provinces";


export default async function ProvincePage(
{
params
}:{
params: Promise<{slug:string}>
}

){


const {slug} = await params;


const province = provinces.find(
(item)=> item.slug === slug
);



return(

<main className="p-10">


<h1 className="text-4xl font-bold">

Appointment in {province?.name || "Unknown Province"}

</h1>


<p className="mt-5">

Get help with immigration appointments in {province?.name || "this province"}

</p>


</main>

)

}