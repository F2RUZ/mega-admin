"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
} from "@mui/material"; // useTheme import qilindi
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ToggleThemeButton } from "@/features/toggle-theme";
import { LanguageSwitcher } from "@/features/language-switcher";

import { MobileDrawer } from "@/features/mobile-nav/ui/MobileDrawer/MobileDrawer";
import { useTranslation } from "@/shared/lib/i18n";

export const MobileHeader = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); // Temani olish

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isDarkMode = theme.palette.mode === "dark";

  const headerStyle = {
    position: "fixed",
    top: 20,
    left: 20,
    right: 20,
    width: "calc(100% - 40px)", // Ekranning 100% minus 20px chap va 20px o'ng
    zIndex: theme.zIndex.appBar + 1, // Boshqa kontent ustida turishi uchun
    borderRadius: "20px",
    boxShadow: theme.shadows[6],
    display: { xs: "block", md: "none" },
    ...(isDarkMode
      ? {
          background: "linear-gradient(to right, #121b2bff, #102a44ff)",
          color: "#FFFFFF", // Oq matn
        }
      : {
          bgcolor: "background.paper", // Oq fon
          color: "text.primary", // Qora matn
        }),
  };

  return (
    <>
      <AppBar
        position="static" // Joylashuvni ota Box dan boshqarish uchun static qoldiramiz
        sx={headerStyle} // Yangi dinamik stillarni qo'llash
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit", // Ota-elementdan rangni oladi
            }}
          >
            {t("app.title").split(" ")[0]}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <LanguageSwitcher />
            <ToggleThemeButton />

            <IconButton
              color="inherit" // AppBar'dan rangni oladi (Dark/Light ga mos)
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileDrawer open={mobileOpen} onClose={handleDrawerToggle} />

      <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
    </>
  );
};
