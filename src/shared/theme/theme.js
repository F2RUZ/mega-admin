// src/shared/theme/theme.js

import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";

// Barcha temalarda umumiy bo'lgan sozlamalar (Masalan, Tipografiya, Animatsiya)
const baseSettings = {
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    // ... TZ da belgilangan shrift o'lchamlarini qo'shish mumkin
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Dark/Light o'tish animatsiyasi
          transition: "background-color 0.2s, color 0.2s",
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseSettings,
  palette: lightPalette,
});

export const darkTheme = createTheme({
  ...baseSettings,
  palette: darkPalette,
});
