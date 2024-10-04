// /components/about/AboutHeader.js

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHeader({ isDropdownOpen }) {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-white text-center px-6"
      style={{
        backgroundPositionY: scrollY * 0.5, // Parallax effect
        height: isDropdownOpen ? "600px" : "500px", // Dynamically increase height if dropdown is open
        marginTop: isDropdownOpen ? "50px" : "0px", // Adjust the margin to push content down when dropdown is open
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg max-w-3xl">
          At GDC Digital Solutions, we are dedicated to empowering businesses
          through innovative digital strategies. Our team of experts specializes
          in offering cutting-edge solutions that enhance communication,
          streamline operations, and drive growth. With over a decade of
          industry experience and a global network of partners, we are committed
          to delivering excellence at every step of the journey.
        </p>
      </motion.div>
    </div>
  );
}
