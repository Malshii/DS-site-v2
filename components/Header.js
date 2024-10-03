"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    "Website Development",
    "Google Ads",
    "SEO / Copywriting",
    "NFC Cards",
  ];

  // Handle dropdown open and close for Services
  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
    setIsAboutOpen(false); // Ensure "About Us" dropdown is closed
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
  };

  // Handle dropdown open and close for About Us
  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true);
    setIsServicesOpen(false); // Ensure "Services" dropdown is closed
  };

  const handleAboutMouseLeave = () => {
    setIsAboutOpen(false);
  };

  // Handle scroll to toggle background on header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle rotating services text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/Digital Solution.png"
              alt="GDC Digital Solutions Logo"
              width={500}
              height={500}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <nav className="flex space-x-10 relative">
            <Link
              href="#top"
              className="text-customGray hover:text-white text-xl font-bold"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center text-customGray hover:text-white text-xl font-bold focus:outline-none">
                Services
                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-transparent rounded-xl shadow-xl p-6 flex space-x-6 z-50"
                  style={{ minWidth: "800px", zIndex: 50 }}
                >
                  <Link
                    href="/services/development"
                    className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                  >
                    <CodeBracketIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Website Development</span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">
                      Build professional and engaging websites.
                    </span>
                  </Link>

                  <Link
                    href="/services/google-ads"
                    className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                  >
                    <CurrencyDollarIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Google Ads</span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">
                      Optimize your ads to reach the right audience.
                    </span>
                  </Link>

                  <Link
                    href="/services/seo"
                    className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                  >
                    <ChartBarIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">SEO / Copywriting</span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">
                      Enhance your content for better search rankings.
                    </span>
                  </Link>

                  <Link
                    href="/services/nfc-cards"
                    className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                  >
                    <LightBulbIcon className="w-12 h-12 mb-2 text-customGray group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">NFC Cards</span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">
                      Innovate with contactless technology.
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button className="flex items-center text-customGray hover:text-white text-xl font-bold focus:outline-none">
                About Us
                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-transparent rounded-xl shadow-xl z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:text-white"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#careers"
                    className="block px-4 py-2 text-gray-700 hover:text-white"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            <Button className="border-2 border-customGray bg-transparent text-customGray hover:bg-transparent hover:border-white hover:text-white px-6 py-2 rounded-full text-xl font-bold transition-colors duration-300">
              Contact Now
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Banner Section */}
      <section id="top" className="relative pt-32 transition-all duration-300">
        <div
          className={`absolute inset-0 w-full h-full z-0`}
          style={{
            backgroundImage: "url('/assets/svg/wave.svg')",
            backgroundSize: "cover", // You can try "contain" if it fits better
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className={`relative z-10 ${
            isServicesOpen || isAboutOpen ? "mt-28" : "" // Add margin-top when any dropdown is open
          }`}
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
                src="/assets/images/banner-right-image.png"
                alt="team meeting"
                width={800}
                height={600}
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
