"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  console.log("LANGUAGE IS:", lang);

  return (
    <div className="flex gap-2">
      <button onClick={() => setLang("es")}>ES</button>
      <button onClick={() => setLang("en")}>EN</button>

      <p>{lang}</p>
    </div>
  );
}