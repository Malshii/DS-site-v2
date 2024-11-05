"use client";
import localFont from "next/font/local";
import Head from "next/head"; // Import the Head component
import Script from "next/script"; // Import the Script component from next/script
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

const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

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

    // Dynamically load HubSpot script if it doesn't exist already
    const existingScript = document.getElementById("hs-script-loader");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://js.hs-scripts.com/${hubspotPortalId}.js`;
      script.id = "hs-script-loader";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [isDropdownOpen]);

  return (
    <html lang="en">
      <head>
        <title>GDC Digital Solutions</title>
        <meta
          name="description"
          content="Your Blueprint for Digital Success" // Add a relevant description here
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
