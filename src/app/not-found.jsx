

'use client'
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

// Komponentni default export qilish shart
export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: "96px", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Sahifa topilmadi
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Kechirasiz, siz qidirayotgan sahifa mavjud emas.
      </Typography>

      {/* "Go back home" button */}
      <Button component={Link} href="/" variant="contained" size="large">
        Bosh Sahifaga Qaytish
      </Button>
    </Box>
  );
}
