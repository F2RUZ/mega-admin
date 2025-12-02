// src/widgets/why-choose-us/ui/WhyChooseUs/WhyChooseUs.jsx
"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "@/shared/lib/i18n";

// Ikonkalar
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
// 🚀 YANGI IKONKALAR
import PersonIcon from "@mui/icons-material/Person";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

// Entities
import { AdvantageCard } from "@/entities/advantage-card/ui/AdvantageCard/AdvantageCard";

// ... Animatsiya Variatsiyalari (o'zgarishsiz qoladi) ...

const containerVariants = {
  // ...
};

const cardItemVariants = {
  // ...
};


const ADVANTAGES = [
  { key: "item1", icon: AccessTimeFilledIcon },
  { key: "item2", icon: GroupIcon },
  { key: "item3", icon: TrendingUpIcon },
  { key: "item4", icon: LaptopChromebookIcon },
  { key: "item5", icon: PersonIcon }, // 👈️ 5-element
  { key: "item6", icon: ConnectWithoutContactIcon }, // 👈️ 6-element
];

export const WhyChooseUs = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{ pt: 0, pb: 14 }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 1. Sarlavha va Subtitle (o'zgarishsiz qoladi) */}
      <Box textAlign="center" mb={7}>
        <Typography
          component={motion.h2}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variant="h3"
          fontWeight={800} // Qalinlashtirildi
          // 🚀 YANGILANGAN STIL: Primary (Ko'k) va Text Primary (Qora/Oq) gradienti
          sx={{
            // theme.palette.primary.main (Ko'k) dan theme.palette.text.primary (Matn rangi) ga o'tish
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.text.primary} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1.5,
          }}
        >
          {t("why.title")}
        </Typography>

        <Divider
          sx={{
            width: 80,
            mx: "auto",
            bgcolor: "primary.main",
            height: 4,
            borderRadius: 2,
          }}
        />

        <Typography
          component={motion.p}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          variant="h6"
          color="text.secondary"
          mt={3}
          maxWidth={700}
          mx="auto"
        >
          {/* 🚀 TUZATILGAN QISM: t() funksiyasi orqali chaqirish */}
          {t("why.subtitle")}
        </Typography>
      </Box>

      {/* 2. Kartalarni Joylashtirish (Grid orqali) */}
      <Grid container spacing={4} component={motion.div}>
        {ADVANTAGES.map((advantage, index) => (
          <Grid
            item
            xs={12}
            sm={6} // O'rta ekranda 2 ta ustun
            md={3} // 🚀 Katta ekranda 3 ta ustun (4 emas!) - 6 ta element 2 qatorga (3+3) chiroyli joylashadi.
            key={advantage.key}
            component={motion.div}
            variants={cardItemVariants}
          >
            <AdvantageCard
              title={t(`why.${advantage.key}.title`)}
              description={t(`why.${advantage.key}.desc`)}
              icon={advantage.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
