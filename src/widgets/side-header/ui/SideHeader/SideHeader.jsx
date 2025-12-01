"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import { ToggleThemeButton } from "@/features/toggle-theme";
import { LanguageSwitcher } from "@/features/language-switcher";
import { useTranslation } from "@/shared/lib/i18n";

// ICON IMPORTS
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Desktop navigatsiya uchun linklar
const navLinks = [
  { key: "nav.home", href: "/", icon: <HomeIcon fontSize="small" /> },
  {
    key: "nav.courses",
    href: "/courses",
    icon: <SchoolIcon fontSize="small" />,
  },
  {
    key: "nav.pricing",
    href: "/pricing",
    icon: <AttachMoneyIcon fontSize="small" />,
  },
  { key: "nav.about", href: "/about", icon: <InfoIcon fontSize="small" /> },
  {
    key: "nav.contact",
    href: "/contact",
    icon: <ContactMailIcon fontSize="small" />,
  },
];

// O'rnatilgan Side Header Kengligi
const SIDE_HEADER_WIDTH = 80;

export const SideHeader = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: SIDE_HEADER_WIDTH,
        height: "calc(100vh - 80px)",
        position: "fixed",
        top: 40,
        left: 40,
        bgcolor: "background.paper",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        borderRadius: "20px",
        
      }}
    >
      {/* 1. Logo */}
      <Typography
        variant="h6"
        component={Link}
        href="/"
        sx={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "text.primary",
          textAlign: "center",
          mb: 2,
          fontSize: "1rem",
        }}
      >
        {t("app.title").split(" ")[0]}
      </Typography>

      <Divider sx={{ width: "80%", mb: 2 }} />

      {/* 2. Nav Linklar */}
      <List sx={{ width: "100%", flexGrow: 1, p: 0 }}>
        {navLinks.map((link) => (
          <ListItem key={link.key} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              sx={{
                flexDirection: "column",
                textAlign: "center",
                py: 1.5,
                color: "text.primary", // Ikonka va Matn uchun rangni o'rnatish
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              {/* Ikonka */}
              <Box sx={{ fontSize: "20px", mb: 0.5 }}>{link.icon}</Box>

              {/* Matn */}
              <Typography
                variant="caption"
                sx={{ color: "inherit", fontWeight: 600 }}
              >
                {t(link.key)}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* 3. Theme va Language Switcherlar (Pastda) */}
      <Box
        sx={{
          mt: "auto",
          mb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        <LanguageSwitcher />
        <ToggleThemeButton />
      </Box>
    </Box>
  );
};
