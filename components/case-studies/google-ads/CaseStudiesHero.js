"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CaseStudiesHero = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Split the title into words instead of letters
  const title = "GDC Consultants Case Study";
  const titleWords = title.split(" ");

  return (
    <section className="relative h-screen w-full flex items-center text-white overflow-hidden px-4 sm:px-8 md:px-16">
      {/* Snow Animation Background */}
      <div
        id="snow"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      ></div>

      {/* Content */}
      <div
        id="move-down"
        className="relative z-10 w-full container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pt-20 px-4 sm:px-8 md:px-16"
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start max-w-xl space-y-6"
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h5 className="text-sm sm:text-md uppercase tracking-widest font-semibold">
            Driving Results for Engineering Excellence
          </h5>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight flex flex-wrap"
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`${
                  word === "Consultants" ? "whitespace-nowrap" : ""
                }`}
              >
                {word}
                {index < titleWords.length - 1 && " "}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-base sm:text-lg mt-4 text-white leading-relaxed">
            Discover how GDC Consultants, a leading engineering consultancy in
            New Zealand, leveraged Google Ads to boost their online presence,
            attract high-quality leads, and optimize advertising costs.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8">
            <motion.button
              className="bg-white text-customYellow px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center md:justify-end mt-8 md:mt-0"
          variants={rightContentVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/assets/images/google-ads/gdc-ads.png"
              alt="Google Ads Success"
              className="h-80 sm:h-96 md:h-100 w-auto object-contain"
              width={550}
              height={550}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
