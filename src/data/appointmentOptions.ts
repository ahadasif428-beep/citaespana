import { provinces } from "@/data/provinces";
import { seoProcedures } from "@/data/seo";

const officeNames: Record<string, string[]> = {
  madrid: ["Comisarías y oficinas de extranjería de Madrid"],
  barcelona: ["Comisarías y oficinas de extranjería de Barcelona"],
  valencia: ["Comisarías y oficinas de extranjería de Valencia"],
  sevilla: ["Comisarías y oficinas de extranjería de Sevilla"],
  malaga: ["Comisarías y oficinas de extranjería de Málaga"],
  bizkaia: ["Comisarías y oficinas de extranjería de Bizkaia"],
  zaragoza: ["Comisarías y oficinas de extranjería de Zaragoza"],
};

export const provinceList = provinces.map((province) => province.name);

export const appointmentData = Object.fromEntries(
  provinces.map((province) => {
    const offices = officeNames[province.slug] ?? [`Oficinas de extranjería y Policía Nacional de ${province.name}`];
    return [
      province.name,
      {
        procedures: seoProcedures.map((procedure) => procedure.name),
        offices: Object.fromEntries(seoProcedures.map((procedure) => [procedure.name, offices])),
      },
    ];
  }),
);

export const provincesBySlug = Object.fromEntries(provinces.map((province) => [province.slug, province]));
