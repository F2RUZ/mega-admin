// src/features/mobile-nav/ui/MobileDrawer/MobileDrawer.jsx
"use client";

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useTranslation } from "@/shared/lib/i18n";
import { ToggleThemeButton } from "@/features/toggle-theme";
import { LanguageSwitcher } from "@/features/language-switcher";

const navLinks = [
  { key: "nav.home", href: "/" },

  { key: "nav.courses", href: "/courses" },

  { key: "nav.pricing", href: "/pricing" },

  { key: "nav.about", href: "/about" },

  { key: "nav.contact", href: "/contact" },
];

export const MobileDrawer = ({ open, onClose }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Dark Mode uchun tanlangan qora-ko'k rang
  const deepDarkBg = "#111724ff";

  // Temani tekshirish
  const isDarkMode = theme.palette.mode === "dark";

  // Fon va Matn ranglarini dinamik aniqlash
  const bgColor = isDarkMode ? deepDarkBg : theme.palette.background.paper;
  const textColor = isDarkMode ? "#E0E0E0" : theme.palette.text.primary;

  // Divider va Hover ranglarini dinamik aniqlash
  const dividerColor = isDarkMode
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
  const hoverColor = isDarkMode
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.04)";

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        // 🎨 Dinamik fon
        bgcolor: bgColor,
        // 🎨 Dinamik matn rangi
        color: textColor,
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {/* 1. Logo/Sarlavha qismi */}
      <List sx={{ pt: 3, pb: 1 }}>
        <ListItem>
          <ListItemText
            primary={t("app.title")}
            primaryTypographyProps={{
              variant: "h6",
              fontWeight: "bold",
              // Logo rangi brend rangida qoladi
              color: theme.palette.primary.main,
            }}
          />
        </ListItem>
      </List>
      {/* Dinamik Divider rangi */}
      <Divider sx={{ bgcolor: dividerColor }} />

      {/* 2. Navigatsiya Linklari */}
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.key} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              sx={{
                py: 1.5,
                "&:hover": {
                  // Dinamik Hover rangi
                  bgcolor: hoverColor,
                },
              }}
            >
              <ListItemText
                primary={t(link.key)}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* 3. Theme va Language Switcherlar (Pastda) */}
      <Box
        sx={{
          p: 2,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            // Bu yerda Switcherlar ikonkalari ham to'g'ri rangni oladi
          }}
        >
          <LanguageSwitcher />
          <ToggleThemeButton />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            // Paper komponenti uchun ham dinamik fon
            bgcolor: bgColor,
            color: textColor,
          },
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};
