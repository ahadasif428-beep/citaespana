export type SeoLandingPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  keywords: string[];
  related: string[];
  officialUrl: string;
};

const OFFICIAL_APPOINTMENT = "https://sede.administracionespublicas.gob.es/pagina/index/directorio/ayuda_cita_previa";
const OFFICIAL_MIGRACIONES = "https://inclusion.gob.es/web/migraciones/informacion-util/tramites";

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "cita-previa-nie",
    title: "Cita previa NIE en España: cómo solicitarla",
    h1: "Cita previa NIE en España",
    description: "Información sobre la cita previa para trámites relacionados con el NIE en España, provincias, documentación y acceso a la información oficial.",
    intro: "El NIE es el Número de Identidad de Extranjero. Esta guía te ayuda a identificar el trámite que necesitas y a localizar la información de cita previa correspondiente en España.",
    sections: [
      { title: "Qué debes comprobar antes de pedir la cita", paragraphs: ["Primero identifica si necesitas una asignación de NIE, un trámite de documentación de extranjero u otro procedimiento relacionado. El tipo de cita disponible puede variar según la provincia y el organismo competente."], bullets: ["Provincia donde realizarás el trámite", "Tipo exacto de procedimiento", "Documentación y tasas indicadas por la Administración"] },
      { title: "Cita NIE por provincia", paragraphs: ["CitaEspaña organiza información por las 52 provincias y ciudades autónomas para que puedas pasar de esta guía general a una página local del trámite que buscas."] },
    ],
    keywords: ["cita previa NIE", "cita NIE España", "NIE cita previa", "pedir cita NIE"],
    related: ["/cita-previa-tie", "/cita-huellas", "/provinces", "/cita-previa-extranjeria"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-previa-tie",
    title: "Cita previa TIE en España | Tarjeta de Identidad de Extranjero",
    h1: "Cita previa TIE en España",
    description: "Guía de cita previa TIE para expedición, renovación y otros trámites de la Tarjeta de Identidad de Extranjero por provincia.",
    intro: "La TIE acredita la situación administrativa del extranjero en España. Esta guía explica cómo identificar la cita adecuada y encontrar información específica de tu provincia.",
    sections: [
      { title: "TIE: expedición, renovación y huellas", paragraphs: ["En muchos trámites de TIE interviene la Policía Nacional y puede ser necesaria una cita para toma de huellas. Comprueba siempre el procedimiento concreto que aparece en el canal oficial para tu provincia."], bullets: ["Expedición de tarjeta", "Renovación o duplicado cuando corresponda", "Toma de huellas y recogida según el procedimiento"] },
      { title: "Antes de acudir", paragraphs: ["Revisa la resolución o autorización, la documentación exigida y las tasas aplicables. La disponibilidad de citas depende de las plazas publicadas por la Administración."] },
    ],
    keywords: ["cita previa TIE", "cita TIE España", "cita tarjeta identidad extranjero", "renovar TIE cita"],
    related: ["/cita-huellas", "/cita-previa-nie", "/cita-renovacion-tie", "/cita-previa-extranjeria"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-huellas",
    title: "Cita previa huellas extranjería en España | TIE",
    h1: "Cita previa para toma de huellas en España",
    description: "Cómo localizar información sobre la cita de toma de huellas para TIE y otros trámites de extranjería por provincia.",
    intro: "La toma de huellas es un paso habitual para determinados trámites de documentación de extranjeros. Esta página te ayuda a localizar la información adecuada sin confundirla con otros tipos de cita.",
    sections: [
      { title: "Cuándo se utiliza una cita de huellas", paragraphs: ["La cita concreta depende del trámite, de la resolución o autorización obtenida y de la provincia. Antes de reservar, verifica qué servicio aparece en el sistema oficial."], bullets: ["Comprueba si corresponde toma de huellas", "Revisa la documentación indicada", "Confirma oficina y provincia"] },
      { title: "Huellas TIE por provincia", paragraphs: ["Puedes abrir una página específica por provincia desde nuestro buscador para consultar el procedimiento y enlaces oficiales relacionados."] },
    ],
    keywords: ["cita huellas extranjería", "cita previa huellas", "cita huellas TIE", "toma de huellas España"],
    related: ["/cita-previa-tie", "/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-previa-asilo",
    title: "Cita previa asilo y protección internacional en España",
    h1: "Cita previa para asilo en España",
    description: "Guía informativa para localizar la cita de asilo y protección internacional en España y consultar los canales oficiales.",
    intro: "Los procedimientos de protección internacional tienen canales y requisitos específicos. Usa esta guía como orientación y confirma siempre la información vigente en la fuente oficial.",
    sections: [
      { title: "Protección internacional", paragraphs: ["La cita y el canal aplicable pueden depender de la provincia y del tipo de actuación. Las autoridades competentes publican información y procedimientos que deben comprobarse antes de acudir."], bullets: ["Identifica el tipo de actuación", "Consulta la provincia correspondiente", "Revisa requisitos y documentación oficiales"] },
      { title: "Información oficial", paragraphs: ["El Ministerio de Inclusión publica información de utilidad y enlaces para procedimientos de extranjería y protección internacional."] },
    ],
    keywords: ["cita asilo España", "cita previa asilo", "cita protección internacional", "asilo cita España"],
    related: ["/cita-previa-extranjeria", "/guides/asilo", "/provinces"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-arraigo",
    title: "Cita previa arraigo en España | Guía 2026",
    h1: "Cita previa para arraigo en España",
    description: "Guía sobre cita previa y presentación de trámites de arraigo en España, con información por provincia y enlaces oficiales.",
    intro: "Los procedimientos de arraigo están vinculados a autorizaciones por circunstancias excepcionales y su tramitación depende de las reglas y canales vigentes.",
    sections: [
      { title: "Antes de buscar una cita de arraigo", paragraphs: ["Determina qué modalidad de arraigo corresponde a tu situación y revisa las condiciones, documentación y canal de presentación. Algunas solicitudes pueden realizarse por medios electrónicos y otras mediante cita, según el procedimiento."], bullets: ["Identificar la modalidad de arraigo", "Reunir la documentación exigida", "Comprobar si el procedimiento permite presentación electrónica o requiere cita"] },
      { title: "Arraigo por provincia", paragraphs: ["Consulta las páginas de cada provincia para localizar información contextual del trámite y avanzar hacia las fuentes oficiales."] },
    ],
    keywords: ["cita arraigo", "cita previa arraigo", "arraigo España cita", "cita extranjería arraigo"],
    related: ["/guides/arraigo-social", "/guides/arraigo-laboral", "/guides/arraigo-familiar", "/cita-previa-extranjeria"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-previa-residencia",
    title: "Cita previa residencia en España | Extranjería",
    h1: "Cita previa para residencia en España",
    description: "Información sobre citas y procedimientos de residencia de extranjeros en España, con guía por provincia y enlaces oficiales.",
    intro: "Los trámites de residencia pueden tener distintos procedimientos, organismos y canales de presentación. Esta guía ayuda a distinguirlos y encontrar la información correcta.",
    sections: [
      { title: "Qué tipo de residencia necesitas", paragraphs: ["Antes de solicitar una cita, identifica si se trata de una autorización inicial, renovación, modificación, larga duración u otro supuesto. Los procedimientos disponibles dependen de la situación concreta."], bullets: ["Residencia temporal", "Renovación de residencia", "Residencia de larga duración", "Otros procedimientos específicos"] },
      { title: "Presentación y cita", paragraphs: ["El Ministerio de Inclusión dispone de información sobre qué trámites pueden realizarse por Internet y cuáles utilizan cita previa para presentación presencial."] },
    ],
    keywords: ["cita previa residencia", "cita residencia España", "cita residencia extranjería", "residencia cita previa"],
    related: ["/cita-previa-extranjeria", "/cita-renovacion-residencia", "/guides/residencia-no-lucrativa"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-renovacion-tie",
    title: "Cita para renovar TIE en España | Guía por provincia",
    h1: "Cita para renovar la TIE en España",
    description: "Guía para localizar la cita y la información necesaria para renovar la TIE en España, con páginas específicas por provincia.",
    intro: "La renovación de la TIE requiere comprobar el procedimiento concreto, los plazos y la documentación antes de acudir a una oficina.",
    sections: [
      { title: "Qué revisar antes de renovar", paragraphs: ["Comprueba la fecha de vigencia de tu autorización, la documentación requerida y el procedimiento que corresponde a tu caso. Las instrucciones pueden variar según el trámite."], bullets: ["Autorización o resolución vigente", "Documentación personal", "Tasa y requisitos indicados oficialmente"] },
      { title: "Cita TIE por provincia", paragraphs: ["Utiliza el buscador de CitaEspaña para pasar directamente a la provincia y procedimiento que necesitas."] },
    ],
    keywords: ["cita renovar TIE", "cita renovación TIE", "renovar TIE España", "TIE renovación cita previa"],
    related: ["/cita-previa-tie", "/cita-huellas", "/cita-previa-extranjeria"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-reagrupacion-familiar",
    title: "Cita previa reagrupación familiar en España",
    h1: "Cita previa para reagrupación familiar",
    description: "Información sobre la cita previa de reagrupación familiar en España, documentación, presentación y páginas por provincia.",
    intro: "La reagrupación familiar tiene requisitos y documentación específicos. Antes de pedir cita, identifica el procedimiento y comprueba qué canal de presentación corresponde.",
    sections: [
      { title: "Preparación del trámite", paragraphs: ["Consulta los requisitos y modelos oficiales, prepara la documentación y comprueba si tu procedimiento se presenta ante una oficina de extranjería o por vía electrónica."], bullets: ["Requisitos del reagrupante", "Documentación del familiar", "Lugar y modalidad de presentación"] },
      { title: "Información por provincia", paragraphs: ["CitaEspaña enlaza la estructura de provincias para ayudarte a localizar el contexto territorial del procedimiento."] },
    ],
    keywords: ["cita reagrupación familiar", "cita previa reagrupación familiar", "reagrupación familiar cita España"],
    related: ["/guides/reagrupacion-familiar", "/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-autorizacion-regreso",
    title: "Cita previa autorización de regreso en España",
    h1: "Cita previa autorización de regreso",
    description: "Guía para localizar información sobre la autorización de regreso en España, documentación y oficina correspondiente.",
    intro: "La autorización de regreso es un trámite específico para determinados supuestos de salida y retorno a España. Confirma siempre los requisitos y la oficina competente.",
    sections: [
      { title: "Antes de pedir la cita", paragraphs: ["Revisa que tu situación encaje con el supuesto del trámite y reúne la documentación exigida. La disponibilidad de cita depende de la oficina competente."] },
      { title: "Cita por provincia", paragraphs: ["Puedes consultar la página de tu provincia para ver el contexto del procedimiento y acceder a la información oficial."] },
    ],
    keywords: ["cita autorización de regreso", "cita previa autorización de regreso", "autorización de regreso España"],
    related: ["/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-carta-invitacion",
    title: "Cita previa carta de invitación en España",
    h1: "Cita previa para carta de invitación",
    description: "Información sobre la cita de carta de invitación en España, Policía Nacional y contexto por provincia.",
    intro: "La carta de invitación es un trámite específico gestionado por la Policía Nacional. Consulta siempre la oficina y los requisitos aplicables a tu localidad.",
    sections: [
      { title: "Qué preparar", paragraphs: ["Revisa la documentación y condiciones del trámite antes de acudir y confirma la oficina donde debe presentarse."] },
      { title: "Por provincia", paragraphs: ["Utiliza nuestras páginas provinciales para localizar el contenido relacionado con la carta de invitación y otros trámites de Policía Nacional."] },
    ],
    keywords: ["cita carta invitación", "cita previa carta invitación", "carta de invitación España cita"],
    related: ["/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_APPOINTMENT,
  },
  {
    slug: "cita-certificado-ue",
    title: "Cita previa certificado UE en España",
    h1: "Cita previa certificado de registro UE",
    description: "Guía de cita previa para el certificado de registro de ciudadano de la Unión Europea y otros trámites relacionados.",
    intro: "Los ciudadanos de la Unión Europea y sus familiares siguen procedimientos específicos. Comprueba el trámite exacto y el organismo competente antes de pedir una cita.",
    sections: [
      { title: "Certificado de registro de ciudadano UE", paragraphs: ["Identifica si necesitas el certificado de registro u otro documento de residencia, y comprueba los requisitos correspondientes."] },
      { title: "Información territorial", paragraphs: ["Las oficinas y la disponibilidad dependen de la provincia. Consulta la página local antes de desplazarte."] },
    ],
    keywords: ["cita certificado UE", "cita registro comunitario", "cita ciudadano UE España"],
    related: ["/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-permiso-trabajo",
    title: "Cita previa permiso de trabajo en España",
    h1: "Cita previa permiso de trabajo en España",
    description: "Información sobre permisos de trabajo y presentación de solicitudes de extranjería en España.",
    intro: "Los permisos de trabajo forman parte de los procedimientos de extranjería y pueden utilizar diferentes canales de presentación según el caso.",
    sections: [
      { title: "Identifica el procedimiento", paragraphs: ["Comprueba si se trata de una autorización inicial, renovación, modificación u otro supuesto. El canal y la documentación dependen del procedimiento concreto."] },
      { title: "Presentación online y cita", paragraphs: ["El Ministerio de Inclusión publica información sobre trámites que pueden realizarse por Internet y sobre las citas para presentación presencial."] },
    ],
    keywords: ["cita permiso de trabajo", "cita trabajo extranjería", "permiso de trabajo España cita"],
    related: ["/guides/permiso-de-trabajo", "/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-estudios",
    title: "Cita previa estancia por estudios en España",
    h1: "Cita previa para estancia por estudios",
    description: "Guía de cita y presentación para estudiantes extranjeros en España, con información territorial y fuentes oficiales.",
    intro: "Los trámites de estancia por estudios tienen requisitos y plazos concretos. Identifica el procedimiento correcto antes de buscar una cita.",
    sections: [
      { title: "Estancia por estudios", paragraphs: ["Revisa la situación administrativa, documentación y canal de presentación aplicable. Algunas gestiones pueden realizarse electrónicamente según el procedimiento."] },
      { title: "Cita y provincia", paragraphs: ["La información territorial te ayuda a localizar la oficina o canal correspondiente en tu provincia."] },
    ],
    keywords: ["cita estancia por estudios", "cita estudios extranjería", "cita estudiante España"],
    related: ["/guides/visado-estudiante", "/cita-previa-extranjeria", "/provinces"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
  {
    slug: "cita-renovacion-residencia",
    title: "Cita previa renovación de residencia en España",
    h1: "Cita previa para renovar la residencia",
    description: "Información sobre la renovación de autorizaciones de residencia en España y los canales de presentación por provincia.",
    intro: "Las renovaciones tienen plazos y requisitos específicos. Comprueba el tipo de autorización y la vía de presentación antes de solicitar una cita.",
    sections: [
      { title: "Plazos y presentación", paragraphs: ["El Ministerio de Inclusión indica que determinados procedimientos de renovación pueden presentarse dentro de ventanas de plazo concretas y por vía electrónica si se cumplen los requisitos."], bullets: ["Comprueba la fecha de caducidad", "Revisa la ventana de presentación", "Confirma si tu procedimiento permite presentación electrónica"] },
      { title: "Renovación por provincia", paragraphs: ["Consulta la provincia para encontrar información contextual y enlazar con el procedimiento específico."] },
    ],
    keywords: ["cita renovar residencia", "cita renovación residencia", "renovar residencia España cita"],
    related: ["/cita-previa-residencia", "/guides/renovar-tie", "/cita-previa-extranjeria"],
    officialUrl: OFFICIAL_MIGRACIONES,
  },
];

export const seoLandingPageMap = Object.fromEntries(seoLandingPages.map((page) => [page.slug, page]));
