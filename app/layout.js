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

const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const hubspotChatflowId = process.env.NEXT_PUBLIC_TICKET_BOT_ID;

export default function RootLayout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Function to dynamically add margin to <div> elements with a specific id
    const specificDivs = document.querySelectorAll("#move-down");
    specificDivs.forEach((div) => {
      div.style.marginTop = isDropdownOpen ? "150px" : "0px";
      div.style.transition = "margin-top 0.3s ease";
    });

    const trackingScriptId = "hs-tracking-code";
    if (!document.getElementById(trackingScriptId)) {
      const trackingScript = document.createElement("script");
      trackingScript.src = `https://js.hs-scripts.com/6187835.js`;
      trackingScript.id = trackingScriptId;
      trackingScript.async = true;
      trackingScript.defer = true;
      document.head.appendChild(trackingScript);
    }

    const chatbotScriptId = "hs-chatbot-loader";
    if (!document.getElementById(chatbotScriptId)) {
      const chatbotScript = document.createElement("script");
      chatbotScript.src = `https://js.hs-scripts.com/6187835.js`;
      chatbotScript.id = chatbotScriptId;
      chatbotScript.async = true;
      chatbotScript.defer = true;
      chatbotScript.onload = () => {
        setTimeout(() => {
          window.HubSpotConversations?.widget.load({
            chatflowId: 51899598,
            portalId: 6187835,
          });
        }, 2000); // Add a 1-second delay
      };
      document.body.appendChild(chatbotScript);
    }
  }, [isDropdownOpen]);

  return (
    <html lang="en">
      <head>
        <title>GDC Digital Solutions</title>
        <meta name="description" content="Your Blueprint for Digital Success" />
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
