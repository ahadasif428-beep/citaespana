export function createWhatsAppLink(
  phone: string,
  name: string,
  email: string,
  province: string,
  procedure: string
) {


const message = 
<<<<<<< HEAD
`Hola CitaEspaña,
=======
`Hola CitaEs,
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823

Quiero solicitar una cita de extranjería.

Nombre: ${name}



Correo electrónico: ${email || "No proporcionado"}

Provincia: ${province}

Procedimiento: ${procedure}

Gracias.`;


return `https://wa.me/34672399181?text=${encodeURIComponent(message)}`;


};