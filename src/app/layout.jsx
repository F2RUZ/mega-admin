// src/app/layout.jsx

import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import { LangProvider } from "@/features/language-switcher"; // LangProvider import qilinmoqda
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/widgets/header/ui/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* LangProvider ni ThemeProvider ustiga o'rnatish */}
        <LangProvider>
          <ThemeProvider>
            <Header />
            <main style={{ minHeight: "80vh", padding: "20px" }}>
              {children}
            </main>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
