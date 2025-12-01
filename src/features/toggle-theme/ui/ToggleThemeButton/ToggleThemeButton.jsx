// src/features/toggle-theme/ui/ToggleThemeButton/ToggleThemeButton.jsx

import React, { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Oy
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Quyosh

import { ColorModeContext } from "@/shared/theme/ThemeProvider";

export const ToggleThemeButton = () => {
  // 1. Joriy temani (light/dark) aniqlash uchun useTheme hooki
  const theme = useTheme();

  // 2. ThemeProvider dan toggleColorMode funksiyasini olish
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="inherit"
      aria-label="toggle dark/light mode"
    >
      {/* Joriy tema Dark bo'lsa, Quyosh (Light) ikonkasi, aks holda Oy (Dark) ikonkasi */}
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
