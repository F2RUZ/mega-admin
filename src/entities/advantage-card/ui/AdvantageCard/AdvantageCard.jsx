"use client";

import React from "react";
import { Box, Typography, Paper, useTheme, Stack } from "@mui/material";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const iconVariants = {
  hidden: { y: -10, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const AdvantageCard = ({ title, description, icon: IconComponent }) => {
  const theme = useTheme();

  return (
    <motion.div>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 2,
          borderTop: `4px solid ${theme.palette.primary.main}`,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.shadows[8],
          },
          height: "100%", // Karta balandligi ota-ona konteynerga moslashadi
          display: "flex", // Ichki Stack ni to'liq balandlikda cho'zish uchun
          flexDirection: "column",
        }}
      >
        <Stack
          spacing={2}
          alignItems="flex-start"
          component={motion.div}
          initial="hidden"
          animate="visible"
          flexGrow={1}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <Box
            component={motion.div}
            variants={iconVariants}
            sx={{
              p: 1.5,
              borderRadius: "50%",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : theme.palette.primary.main + "1A",
              color: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {IconComponent && <IconComponent fontSize="large" />}
          </Box>

          <Typography
            variant="h6"
            fontWeight={700}
            component={motion.p}
            variants={itemVariants}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component={motion.p}
            variants={itemVariants}
            flexGrow={1} // Eng uzun matnli karta balandligini oshirish uchun bo'shliq qoldiradi
          >
            {description}
          </Typography>
        </Stack>
      </Paper>
    </motion.div>
  );
};
