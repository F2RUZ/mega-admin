// src/features/language-switcher/LangProvider.jsx
"use client"; 

import React, { useState, createContext, useMemo } from "react";

export const LanguageContext = createContext(null);

export const LangProvider = ({ children }) => {
  // TZ bo'yicha tillar: EN, RU, UZ. Boshlang'ich tilni 'uz' qilamiz.
  const [lang, setLang] = useState("uz");

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      // Agar ko'proq til bo'lsa, ularni shu yerda saqlash mumkin
      availableLangs: ["uz", "ru", "en"],
      // Tilni o'zgartirish funksiyasi
      changeLang: (newLang) => {
        setLang(newLang);
      },
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
