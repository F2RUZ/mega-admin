// src/shared/theme/ThemeProvider.jsx

import React, { useState, useMemo, createContext } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

// 1. Theme Context yaratish
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// 2. Theme Provider komponenti
export const ThemeProvider = ({ children }) => {
  // Boshlang'ich holatni localStorage'dan olish mumkin, hozircha 'light'
  const [mode, setMode] = useState("light");

  // Context qiymatini optimallashtirish
  const colorMode = useMemo(
    () => ({
      // Theme ni o'zgartirish funksiyasi
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Tanlangan mode ga qarab theme ni tanlash
  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {/* MUI ning standart stilizatsiyasini o'rnatish (fon rangini berish) */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
