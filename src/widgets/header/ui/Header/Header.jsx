// src/widgets/header/ui/Header/Header.jsx
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ToggleThemeButton } from "@/features/toggle-theme";
import { LanguageSwitcher } from "@/features/language-switcher";
import { MobileDrawer } from "@/features/mobile-nav/ui/MobileDrawer/MobileDrawer"; // Yangi import
import { useTranslation } from "@/shared/lib/i18n";

const navLinks = [
  { key: "nav.courses", href: "/courses" },
  { key: "nav.pricing", href: "/pricing" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
];

export const Header = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky" // Skroll qilinganda turadi
        sx={{
          bgcolor: "background.paper", // Orqa fonni tushiramiz
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Engil soya
          transition: "0.3s",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1440,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* --- 1. Logo (Always Visible) --- */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            {t("app.title").split(" ")[0]}
          </Typography>

          {/* --- 2. Desktop Nav Links --- */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.key}
                // color="inherit" ni olib tashlaymiz
                component={Link}
                href={link.href}
                sx={{
                  // MATN RANGINI ANIQ BELGILAYMIZ
                  color: "text.primary", // <---- MUHIM O'ZGATIRISH: Light mode'da qora rangni ta'minlash
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { color: "primary.main", bgcolor: "transparent" },
                }}
              >
                {t(link.key)}
              </Button>
            ))}
          </Box>

          {/* --- 3. Features (Switcherlar) --- */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              ml: { xs: 1, md: 4 },
              alignItems: "center",
              // IKONKA RANGINI ANIQ BELGILAYMIZ
              color: "text.primary", // <---- MUHIM O'ZGATIRISH: Ikonka ranglari Light mode'da qora bo'lishi uchun
            }}
          >
            <LanguageSwitcher />
            <ToggleThemeButton />

            {/* Burger Menu Button (Mobile Only) */}
            <IconButton
              color="inherit" // Box dan meros oladi (endi qora)
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* --- 4. Mobile Menu --- */}
      <MobileDrawer open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};
