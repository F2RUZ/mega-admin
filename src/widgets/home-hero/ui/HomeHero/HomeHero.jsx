"use client";

import React from "react";
import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "@/shared/lib/i18n";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles"; // Styled komponentlar uchun


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const AnimatedShape = styled(motion(Box))(({ theme }) => ({
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  opacity: 0.5,
  zIndex: -1, // Matn ostida turishi uchun
}));

const MockupContainer = styled(motion(Box))(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.08)"
      : "rgba(0,0,0,0.05)",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[8],
}));

const MockupScreen = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "70%",
  bgcolor: theme.palette.mode === "dark" ? "#0A0A0A" : "#E0E0E0",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.disabled,
  fontSize: "0.8rem",
  border: `1px solid ${theme.palette.divider}`,
}));


export const HomeHero = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 15 },
        minHeight: "calc(100vh - 80px)", // Viewport balandligini to'g'irlash
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Mobilda ustma-ust
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 8, md: 5 }, // Mobilda katta bo'shliq
        px: { xs: 3, md: 5 },
        position: "relative", // Absolut joylashgan shakllar uchun
        overflow: "hidden", // Chetdan chiqib ketmaslik uchun
      }}
    >
      <Stack
        spacing={3}
        maxWidth={{ xs: "100%", md: "50%" }}
        textAlign={{ xs: "center", md: "left" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {/* A. Katta Sarlavha (H1) */}
        <Typography
          component={motion.h1}
          variants={itemVariants}
          variant="h2"
          fontWeight="bold"
          sx={{
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.text.primary,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.8rem" }, // Shrift hajmi optimallashtirildi
            lineHeight: 1.15,
          }}
        >
          {t("home.hero.title")}
        </Typography>

        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="h6"
          color="text.secondary"
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          {t("home.hero.description")}
        </Typography>

        <Stack
          component={motion.div}
          variants={itemVariants}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={3}
        >
          <Button
            variant="contained"
            size="large"
            href="/try-lesson"
            component={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            startIcon={<PlayArrowIcon />}
            sx={{ py: 1.5, px: 3, fontSize: "1rem", fontWeight: 600 }}
          >
            {t("home.hero.cta.try")}
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="/courses"
            component={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ py: 1.5, px: 3, fontSize: "1rem", fontWeight: 600 }}
          >
            {t("home.hero.cta.courses")}
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // Mobilda yashiringan
          flex: 1, // Mavjud bo'sh joyni egallaydi
          maxWidth: { md: "45%" },
          height: { xs: 300, md: 450 }, // Balandlikni oshirdik
          minWidth: 300,
          position: "relative", // Ichidagi absolut elementlar uchun
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedShape
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          sx={{
            width: 100,
            height: 100,
            bgcolor: "primary.light",
            borderRadius: "50%",
            top: "10%",
            left: "5%",
          }}
        />
        <AnimatedShape
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          sx={{
            width: 150,
            height: 150,
            bgcolor: "secondary.light",
            top: "40%",
            right: "0%",
            transform: "rotate(25deg)",
          }}
        />
        <AnimatedShape
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 720 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          sx={{
            width: 200,
            height: 200,
            bgcolor: "info.light",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Uchburchak
            bottom: "5%",
            left: "15%",
          }}
        />

        <MockupContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          sx={{ width: "90%", height: "80%", zIndex: 1 }} // Shakllar ustida turishi uchun
        >
          <MockupScreen>
            <Typography variant="body2" color="text.disabled">
              Til o'rganish platformasi
            </Typography>
          </MockupScreen>
        </MockupContainer>
      </Box>
    </Box>
  );
};
