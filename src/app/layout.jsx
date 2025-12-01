// src/app/layout.jsx

import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";

// Shriftni yuklash
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ThemeProvider ni qo'shish */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
