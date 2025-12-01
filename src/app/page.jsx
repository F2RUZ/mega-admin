// src/app/page.jsx
"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "@/shared/lib/i18n";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      {/* --- 1. Hero Title --- */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          lineHeight: 1.1,
          mb: 2,
          mt: 0,
        }}
      >
        {t("landing.welcome")}
      </Typography>

      {/* --- 2. Hero Subtitle/Description --- */}
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          mb: 4,
          mx: "auto",
          maxWidth: 700,
        }}
      >
        {/* Bu matnni translations.js ga qo'shish kerak */}
        {t(
          "landing.subtitle",
          "Sizni dunyo miqyosidagi onlayn taʼlim kurslariga taklif etamiz. Oʻz kelajagingizni hozirdan boshlang!"
        )}
      </Typography>

      {/* --- 3. CTA Button (Call to Action) --- */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 6 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<SchoolIcon />}
          component={Link}
          href="/courses"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1rem",
            fontWeight: 700,
            bgcolor: "primary.main", // Rangni MUI theme dan oladi
          }}
        >
          {t("nav.courses")}
        </Button>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          href="/pricing"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          {t("nav.pricing")}
        </Button>
      </Box>

      {/* --- 4. Placeholder Image/Animation --- */}
      <Box
        sx={{
          height: 350,
          bgcolor: "action.selected", // Temaga mos rang
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.disabled",
          mt: 4,
        }}
      ></Box>
    </Container>
  );
}
