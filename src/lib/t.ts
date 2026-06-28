import { translations } from "./translations";

export function t(lang: "es" | "en", key: string) {
  const keys = key.split(".");

  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}