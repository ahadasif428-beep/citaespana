export type SeoProcedure = {
  slug: string;
  name: string;
  shortName: string;
  department: "Policía Nacional" | "Oficina de Extranjería";
  intent: string;
  keywords: string[];
};

export const seoProcedures: SeoProcedure[] = [
  { slug: "nie", name: "Cita previa NIE", shortName: "NIE", department: "Policía Nacional", intent: "asignación y trámites relacionados con el NIE", keywords: ["cita previa NIE", "cita NIE", "cita NIE España"] },
  { slug: "tie", name: "Cita previa TIE", shortName: "TIE", department: "Policía Nacional", intent: "expedición, renovación y recogida de la TIE", keywords: ["cita previa TIE", "cita TIE", "tarjeta TIE cita"] },
  { slug: "huellas", name: "Cita previa para toma de huellas", shortName: "Huellas", department: "Policía Nacional", intent: "toma de huellas para expedición, renovación o duplicado de tarjeta", keywords: ["cita huellas extranjería", "cita previa huellas", "cita huellas TIE"] },
  { slug: "asilo", name: "Cita previa para asilo", shortName: "Asilo", department: "Policía Nacional", intent: "solicitud de asilo y protección internacional", keywords: ["cita asilo España", "cita previa asilo", "cita protección internacional"] },
  { slug: "autorizacion-regreso", name: "Cita previa autorización de regreso", shortName: "Autorización de regreso", department: "Policía Nacional", intent: "solicitud de autorización de regreso", keywords: ["cita autorización de regreso", "cita regreso extranjería"] },
  { slug: "carta-invitacion", name: "Cita previa carta de invitación", shortName: "Carta de invitación", department: "Policía Nacional", intent: "trámite de carta de invitación", keywords: ["cita carta invitación", "cita previa carta invitación"] },
  { slug: "certificado-ue", name: "Cita previa certificado UE", shortName: "Certificado UE", department: "Policía Nacional", intent: "certificado de registro de ciudadano de la Unión Europea", keywords: ["cita certificado UE", "cita registro comunitario", "cita ciudadano UE"] },
  { slug: "residencia", name: "Cita previa residencia", shortName: "Residencia", department: "Oficina de Extranjería", intent: "autorizaciones y trámites de residencia", keywords: ["cita residencia extranjería", "cita previa residencia España"] },
  { slug: "trabajo", name: "Cita previa permiso de trabajo", shortName: "Trabajo", department: "Oficina de Extranjería", intent: "autorizaciones y permisos de trabajo", keywords: ["cita permiso de trabajo", "cita trabajo extranjería"] },
  { slug: "estudios", name: "Cita previa estancia por estudios", shortName: "Estudios", department: "Oficina de Extranjería", intent: "estancia por estudios y trámites relacionados", keywords: ["cita estudios extranjería", "cita estancia estudios"] },
  { slug: "reagrupacion-familiar", name: "Cita previa reagrupación familiar", shortName: "Reagrupación familiar", department: "Oficina de Extranjería", intent: "solicitud de reagrupación familiar", keywords: ["cita reagrupación familiar", "cita previa reagrupación familiar"] },
  { slug: "arraigo", name: "Cita previa arraigo", shortName: "Arraigo", department: "Oficina de Extranjería", intent: "trámites de arraigo y regularización", keywords: ["cita arraigo", "cita previa arraigo", "arraigo extranjería cita"] },
  { slug: "renovacion-residencia", name: "Cita previa renovación de residencia", shortName: "Renovación de residencia", department: "Oficina de Extranjería", intent: "renovación de autorizaciones de residencia", keywords: ["cita renovación residencia", "renovar residencia cita previa"] },
  { slug: "larga-duracion", name: "Cita previa residencia de larga duración", shortName: "Larga duración", department: "Oficina de Extranjería", intent: "residencia de larga duración", keywords: ["cita larga duración", "cita residencia larga duración"] },
];

export const seoProcedureMap = Object.fromEntries(seoProcedures.map((item) => [item.slug, item]));

export const primaryTopics = [
  "cita previa extranjería",
  "cita extranjería España",
  "cita previa NIE",
  "cita previa TIE",
  "cita huellas extranjería",
  "cita asilo España",
  "cita autorización de regreso",
  "cita reagrupación familiar",
  "cita arraigo",
  "cita renovación residencia",
];
