export function createWhatsAppLink(
  phone: string,
  name: string,
  email: string,
  province: string,
  procedure: string
) {


const message = 
`Hola CitaEspaña,

Quiero solicitar una cita de extranjería.

Nombre: ${name}



Correo electrónico: ${email || "No proporcionado"}

Provincia: ${province}

Procedimiento: ${procedure}

Gracias.`;


return `https://wa.me/34672399181?text=${encodeURIComponent(message)}`;


};