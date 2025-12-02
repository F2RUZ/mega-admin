
"use client";

import React, { useState, createContext, useMemo, useEffect } from "react";

export const LanguageContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // Mount holatini kuzatish

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("appLanguage") || "uz"; // Default 'uz'
      setLang(storedLang);
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (lang && isMounted) {
      localStorage.setItem("appLanguage", lang);
    }
  }, [lang, isMounted]);

  const contextValue = useMemo(
    () => ({
      lang: lang || "uz", 
      setLang,
      availableLangs: ["uz", "ru", "en"],
      changeLang: (newLang) => {
        setLang(newLang);
      },
    }),
    [lang]
  );

  if (!isMounted) {
    return null; 
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
