import GoogleTranslate from "@/components/GoogleTranslate";


export const metadata = {

title:"CitaEs | Citas de Extranjería en España",

description:
"Gestionamos citas de extranjería en España."

};



export default function RootLayout({
children,
}:{
children:React.ReactNode
}){


return(

<html lang="es">

<body>

<GoogleTranslate/>

{children}

</body>

</html>

)

}