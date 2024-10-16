"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ isServicesOpen, isAboutOpen }) => {
  const services = [
    "Website Development",
    "Google Ads",
    "SEO / Copywriting",
    "NFC Cards",
  ];

  const [currentService, setCurrentService] = useState(0);

  // Handle rotating services text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative pt-32 transition-all duration-300">
      <div
        className={`absolute inset-0 w-full h-full z-0`}
        style={{
          backgroundImage: "url('/assets/svg/wave.svg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Main content affected by the dropdown */}
      <div
        className={`relative z-10 ${
          isServicesOpen || isAboutOpen ? "mt-20" : ""
        }`} // Add margin-top when any dropdown is open
        id="move-down" // Adding the ID here to control this content with dropdown state
      >
        <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between px-20">
          <motion.div
            className="lg:w-1/2 w-full text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-md sm:text-lg md:text-xl text-customGray font-semibold uppercase mb-2">
              Welcome to GDC Digital Solutions
            </h5>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              We Make{" "}
              <motion.span
                key={currentService}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-customYellow inline-block"
              >
                {services[currentService]}
              </motion.span>
            </h2>

            {/* Buttons Section */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-6 py-3 bg-customYellow text-white font-semibold hover:bg-customLightGray transition-colors rounded-full"
                onClick={() => console.log("Analyze Your Site clicked")}
              >
                Analyze Your Site
              </button>
              <Link
                href="/schedule-consultation"
                className="px-6 py-3 border-2 border-customGray text-customGray font-semibold hover:bg-customLightGray hover:text-white transition-colors rounded-full"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/assets/images/hero-bg.png"
              alt="team meeting"
              width={900}
              height={600}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
