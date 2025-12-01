// src/widgets/header/ui/Header/Header.jsx

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { ToggleThemeButton } from "@/features/toggle-theme"; // Feature import qilinmoqda

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* Logo/Project Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          MEGA SCHOOL
        </Typography>

        {/* Boshqa navigatsiya elementlari bu yerda bo'ladi */}
        {/* Nav Linklar */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Theme Toggle Button */}
        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
};
