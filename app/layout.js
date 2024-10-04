// /app/layout.js (or wherever your RootLayout is located)

"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import AboutHeader from "@/components/about/AboutHeader"; // Import your AboutHeader if needed here

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track if dropdown is open

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        {/* Pass the dropdown state to AboutHeader if needed */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
