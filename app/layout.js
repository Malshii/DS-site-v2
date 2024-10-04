"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Function to dynamically add margin to <div> elements with a specific id
    const specificDivs = document.querySelectorAll("#move-down");

    // Apply margin-top to those specific <div> elements only
    specificDivs.forEach((div) => {
      div.style.marginTop = isDropdownOpen ? "150px" : "0px";
      div.style.transition = "margin-top 0.3s ease"; // Smooth transition
    });
  }, [isDropdownOpen]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header setIsDropdownOpen={setIsDropdownOpen} isDropdownOpen={isDropdownOpen} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
