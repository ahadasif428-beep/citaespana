const commonProcedures = [

"POLICE - FINGERPRINTING (CARD ISSUANCE) INITIAL, RENEWAL, DUPLICATE AND LAW 14/2013",

"POLICE-NIE ASSIGNMENT",

"POLICE - ASYLUM REQUEST",

"POLICE - INVITATION LETTER",

"POLICE - RETURN AUTHORIZATION",

"POLICE - EU CITIZEN REGISTRATION CERTIFICATE",

"EXCEPTIONAL ROOTS",

"FAMILY REUNIFICATION",

"RESIDENCE AUTHORIZATIONS",

"WORK AUTHORIZATIONS",

"STUDY STAY",

"NIE RENEWAL",

"TIE RENEWAL",

"LONG-TERM RESIDENCE"

];



const officesByCity:any={


Madrid:[

"Comisaría de Policía Aluche",

"Comisaría de Policía Centro",

"Comisaría de Policía Madrid Norte",

"Oficina de Extranjería Madrid"

],


Barcelona:[

"Comisaría Barcelona Rambla Guipuzcoa",

"Comisaría Barcelona Mallorca",

"Oficina Extranjería Barcelona"

],


Valencia:[

"Comisaría Valencia Zapadores",

"Oficina Extranjería Valencia"

],


Sevilla:[

"Comisaría Sevilla Centro",

"Oficina Extranjería Sevilla"

],


Malaga:[

"Comisaría Malaga Norte",

"Oficina Extranjería Malaga"

],


Bilbao:[

"Comisaría Bilbao"

],


Zaragoza:[

"Comisaría Zaragoza"

]

};





export const provinceList=[

"Álava",
"Albacete",
"Alicante",
"Almería",
"Asturias",
"Ávila",
"Badajoz",
"Barcelona",
"Bizkaia",
"Burgos",
"Cáceres",
"Cádiz",
"Cantabria",
"Castellón",
"Ceuta",
"Ciudad Real",
"Córdoba",
"Cuenca",
"Gipuzkoa",
"Girona",
"Granada",
"Guadalajara",
"Huelva",
"Huesca",
"Illes Balears",
"Jaén",
"La Rioja",
"Las Palmas",
"León",
"Lleida",
"Lugo",
"Madrid",
"Málaga",
"Melilla",
"Murcia",
"Navarra",
"Orense",
"Palencia",
"Pontevedra",
"Salamanca",
"Santa Cruz de Tenerife",
"Segovia",
"Sevilla",
"Soria",
"Tarragona",
"Teruel",
"Toledo",
"Valencia",
"Valladolid",
"Zamora",
"Zaragoza"

];






export const appointmentData:any={};



provinceList.forEach((province)=>{


appointmentData[province]={


procedures:commonProcedures,


offices:{}


};



// add offices for city if available

if(officesByCity[province]){


commonProcedures.forEach((procedure)=>{


appointmentData[province].offices[procedure]=officesByCity[province];


});


}else{


commonProcedures.forEach((procedure)=>{


appointmentData[province].offices[procedure]=[

`Immigration Office ${province}`,

`Police Station ${province}`

];


});


}



});





export const provinces = Object.keys(appointmentData);