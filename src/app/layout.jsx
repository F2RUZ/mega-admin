// src/app/layout.jsx

import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import { LangProvider } from "@/features/language-switcher";
import "./globals.css";
import { Inter } from "next/font/google";

import { Box } from "@mui/material";
import { SideHeader } from "@/widgets/side-header/ui/SideHeader/SideHeader";
import { MobileHeader } from "@/widgets/mobile-header/ui/MobileHeader/MobileHeader";

const inter = Inter({ subsets: ["latin"] });
const SIDE_HEADER_WIDTH = 80;
const LEFT_MARGIN = 120;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LangProvider>
          <ThemeProvider>
            {/* 1. Mobile Header (Faqat Mobile/Tabletda ko'rinadi) */}
            <MobileHeader />

            {/* 2. Side Header (Faqat Desktopda ko'rinadi) */}
            <SideHeader />

            {/* Asosiy Kontent */}
            <Box
              component="main"
              sx={{
                // Mobil rejimda Side Headerga margin shart emas
                ml: { xs: 0, md: `${LEFT_MARGIN}px` },
                // ...
              }}
            >
              <main style={{ padding: "20px" }}>{children}</main>
            </Box>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
