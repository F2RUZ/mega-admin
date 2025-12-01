// src/app/layout.jsx

import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/widgets/header/ui/Header/Header"; // Header'ni import qilish

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header /> {/* Header'ni joylashtirish */}
          <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
