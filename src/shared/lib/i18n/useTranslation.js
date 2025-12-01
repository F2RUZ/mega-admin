// src/shared/lib/i18n/useTranslation.js

"use client"; // Context ishlatilganligi sababli

import { useContext } from "react";
import { LanguageContext } from "@/features/language-switcher/LangProvider";
import { translations } from "./translations";

/**
 * Tarjima qilish funksiyasi (t) va joriy tilni (lang) qaytaradigan hook.
 * @returns {{t: (key: string) => string, lang: string}}
 */
export const useTranslation = () => {
  const { lang } = useContext(LanguageContext);

  /**
   * Berilgan kalit bo'yicha joriy tildagi tarjimani qaytaradi.
   * Agar tarjima topilmasa, kalitni o'zini (yoki tushunarli xato matnini) qaytaradi.
   */
  const t = (key) => {
    // Joriy til (uz/ru/en) uchun tarjimalarni olish
    const currentTranslations = translations[lang] || translations["uz"];

    // Tarjimani qaytarish
    return currentTranslations[key] || `[${key}]`;
  };

  return { t, lang };
};
