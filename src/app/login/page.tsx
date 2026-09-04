"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage(){

const router = useRouter();

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");


function login(){

if(
username==="admin" &&
password==="12345"
){

localStorage.setItem(
"admin",
"true"
);


router.push("/admin");


}else{

alert("Wrong login");

}

}



return(

<main className="min-h-screen flex items-center justify-center bg-gray-100">


<div className="bg-white p-8 rounded-xl shadow w-96">


<h1 className="text-3xl font-bold mb-6">
Admin Login
</h1>


<input

className="border p-3 w-full mb-4 rounded"

placeholder="Username"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>



<input

className="border p-3 w-full mb-4 rounded"

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<button

onClick={login}

<<<<<<< HEAD
className="bg-[#C60B1E] text-white w-full p-3 rounded"
=======
className="bg-blue-600 text-white w-full p-3 rounded"
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

>

Login

</button>


</div>


</main>

)

}