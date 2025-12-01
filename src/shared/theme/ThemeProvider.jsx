// src/shared/theme/ThemeProvider.jsx
"use client";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

import React, { useState, useMemo, createContext, useEffect } from "react"; // useEffect qo'shildi

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider = ({ children }) => {
  // Boshlang'ich holatni localStorage'dan olish
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("themeMode") || "light";
    }
    return "light";
  });

  // Holat o'zgarganda localStorage ga yozish
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // ... colorMode context kodi o'zgarmadi

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // ... theme useMemo kodi o'zgarmadi
  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
