import { procedures } from "@/data/procedures";


export default async function ProcedurePage(
{
params
}:{
params:Promise<{slug:string}>
}

){


const {slug}=await params;


const procedure = procedures.find(
(item)=> item.slug === slug
);



return(

<main className="p-10">


<h1 className="text-4xl font-bold">

{procedure?.name || "Procedure"}

</h1>


<p className="mt-5">

Complete information about {procedure?.name}

</p>


</main>

)

}