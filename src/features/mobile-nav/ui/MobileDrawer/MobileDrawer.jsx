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
} from "@mui/material";
import Link from "next/link";
import { useTranslation } from "@/shared/lib/i18n";

// Navigatsiya linklari (Header dan olingan)
const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.pricing", href: "/pricing" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
];

export const MobileDrawer = ({ open, onClose }) => {
  const { t } = useTranslation();

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={t("app.title")}
            primaryTypographyProps={{ variant: "h6", fontWeight: "bold" }}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.key} disablePadding>
            <ListItemButton component={Link} href={link.href}>
              <ListItemText primary={t(link.key)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {drawerContent}
    </Drawer>
  );
};
