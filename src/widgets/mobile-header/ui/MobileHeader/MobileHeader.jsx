// src/widgets/mobile-header/ui/MobileHeader/MobileHeader.jsx
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

  // Temaga qarab ranglar va gradientni dinamik tanlash
  const isDarkMode = theme.palette.mode === "dark";

  const headerStyle = {
    // Yangi talablar: Topdan 20px, yonlardan 20px va borderRadius
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
        // AppBar ni Box ichiga olamiz, yoki AppBar ni to'g'ridan-to'g'ri Box kabi stil beramiz
        // AppBar o'zi Paper/Box ga asoslangan, shuning uchun stilda to'g'ridan-to'g'ri o'zgartirishlar kiritamiz

        position="static" // Joylashuvni ota Box dan boshqarish uchun static qoldiramiz
        sx={headerStyle} // Yangi dinamik stillarni qo'llash
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
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

          {/* Switcherlar va Menu Button */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {/* LanguageSwitcher va ToggleThemeButton o'z rangini avtomatik to'g'rilashi kerak, 
               chunki ular ColorModeContext'dan foydalanadi. */}
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

      {/* AppBar position fixed bo'lgani uchun, u qoplab qo'ygan joyni bo'sh qoldirish uchun
         alohida Toolbar qo'shiladi (faqat mobil rejimda) */}
      <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
    </>
  );
};
