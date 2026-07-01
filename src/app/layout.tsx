import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

import type { Metadata } from "next";



export const metadata: Metadata = {

title:"CitaEs - Spain Immigration Appointment Assistance",

description:
"CitaEs helps you find Spanish immigration appointments faster.",

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}){


return(


<html lang="es" suppressHydrationWarning>


<body suppressHydrationWarning>


<LanguageProvider>


{children}


</LanguageProvider>


</body>


</html>


)

}