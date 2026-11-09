import { translations } from "./translations";

type TranslationValue = string | number | boolean | null | undefined | TranslationObject;

type TranslationObject = {
  [key: string]: TranslationValue;
};

export function t(lang: "es" | "en", key: string): string {
  const keys = key.split(".");

  let value: TranslationValue = translations[lang] as TranslationObject;

  for (const k of keys) {
    if (typeof value !== "object" || value === null) {
      return key;
    }

    value = value[k];
  }

  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : key;
}