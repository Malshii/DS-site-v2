"use client";

import { usePathname } from "next/navigation"; // To get current path
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid"; // For dropdown icons
import { motion } from "framer-motion"; // For animations
import Image from "next/image"; // For images
import { Button } from "./ui/button";

const Header = ({ setIsDropdownOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Track Services dropdown state
  const [isAboutOpen, setIsAboutOpen] = useState(false); // Track About Us dropdown state
  const [isScrolled, setIsScrolled] = useState(false); // Track if page has been scrolled
  const [currentService, setCurrentService] = useState(0); // Track current service being displayed in rotation

  const pathname = usePathname(); // Get current path for conditional styling

  const services = [
    "Website Development",
    "Google Ads",
    "SEO / Copywriting",
    "NFC Cards",
  ]; // Services to rotate

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

  // Functions to control dropdown state
  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true); // Open the dropdown
    setIsDropdownOpen(true); // Notify parent layout to adjust margin
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false); // Close the dropdown
    setIsDropdownOpen(false); // Notify parent layout to reset margin
  };

  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true); // Open About Us dropdown
    setIsDropdownOpen(true); // Notify parent layout to adjust margin
  };

  const handleAboutMouseLeave = () => {
    setIsAboutOpen(false); // Close About Us dropdown
    setIsDropdownOpen(false); // Notify parent layout to reset margin
  };

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
              src={
                pathname === "/"
                  ? "/assets/images/Digital Solution.png" // Default logo for homepage
                  : isScrolled
                  ? "/assets/images/Digital Solution.png" // Same logo on scroll
                  : "/assets/images/Digital Solution Logo.png" // New logo for other pages before scroll
              }
              alt="GDC Digital Solutions Logo"
              width={500}
              height={500}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <nav className="flex space-x-10 relative">
            <Link
              href="/"
              className={`${
                pathname === "/" || isScrolled
                  ? "text-customGray"
                  : "text-white"
              } ${
                isScrolled ? "hover:text-customYellow" : "hover:text-white"
              } text-xl font-bold`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={`flex items-center ${
                  pathname === "/" || isScrolled
                    ? "text-customGray"
                    : "text-white"
                } ${
                  isScrolled
                    ? "hover:text-customYellow"
                    : pathname === "/"
                    ? "hover:text-white"
                    : "hover:text-customYellow"
                } text-xl font-bold focus:outline-none`}
              >
                Services
                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
              </button>
              {isServicesOpen && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${
                    isScrolled ? "bg-white" : "bg-transparent"
                  } rounded-xl shadow-xl p-6 flex space-x-6 z-50`}
                  style={{ minWidth: "800px", zIndex: 50 }}
                >
                  <Link
                    href="/services/development"
                    className={`flex flex-col items-center text-center ${
                      pathname === "/" && !isScrolled
                        ? "text-customGray hover:text-white" // On homepage and not scrolled: white hover
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow" // On homepage and scrolled: customYellow hover
                        : "text-white hover:text-customYellow" // On other pages: customYellow hover
                    } group`}
                  >
                    <CodeBracketIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Website Development</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500 hover:text-customYellow"
                          : "text-white hover:text-customYellow"
                      }`}
                    >
                      Build professional and engaging websites.
                    </span>
                  </Link>

                  <Link
                    href="/services/google-ads"
                    className={`flex flex-col items-center text-center ${
                      pathname === "/" && !isScrolled
                        ? "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    } group`}
                  >
                    <CurrencyDollarIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Google Ads</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500 hover:text-customYellow"
                          : "text-white hover:text-customYellow"
                      }`}
                    >
                      Optimize your ads to reach the right audience.
                    </span>
                  </Link>

                  <Link
                    href="/services/seo"
                    className={`flex flex-col items-center text-center ${
                      pathname === "/" && !isScrolled
                        ? "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    } group`}
                  >
                    <ChartBarIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">SEO / Copywriting</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500 hover:text-customYellow"
                          : "text-white hover:text-customYellow"
                      }`}
                    >
                      Enhance your content for better search rankings.
                    </span>
                  </Link>

                  <Link
                    href="/services/nfc-cards"
                    className={`flex flex-col items-center text-center ${
                      pathname === "/" && !isScrolled
                        ? "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    } group`}
                  >
                    <LightBulbIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">NFC Cards</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500 hover:text-customYellow"
                          : "text-white hover:text-customYellow"
                      }`}
                    >
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
              <button
                className={`flex items-center ${
                  pathname === "/" || isScrolled
                    ? "text-customGray"
                    : "text-white"
                } ${
                  isScrolled
                    ? "hover:text-customYellow"
                    : pathname === "/"
                    ? "hover:text-white"
                    : "hover:text-customYellow"
                } text-xl font-bold focus:outline-none`}
              >
                About Us
                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
              </button>
              {isAboutOpen && (
                <div
                  className={`absolute left-0 mt-2 w-40 ${
                    isScrolled ? "bg-white" : "bg-transparent"
                  } rounded-xl shadow-xl z-50`}
                >
                  <Link
                    href="/about"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow" // On homepage and scrolled: customYellow hover
                          : "text-customGray hover:text-white" // On homepage and not scrolled: white hover
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow" // On other pages and scrolled: customYellow hover
                        : "text-white hover:text-customYellow" // On other pages and not scrolled: customYellow hover
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#careers"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow" // On homepage and scrolled: customYellow hover
                          : "text-customGray hover:text-white" // On homepage and not scrolled: white hover
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow" // On other pages and scrolled: customYellow hover
                        : "text-white hover:text-customYellow" // On other pages and not scrolled: customYellow hover
                    }`}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Button
              className={`border-2 ${
                pathname === "/" || isScrolled
                  ? "border-customGray"
                  : "border-white"
              } bg-transparent ${
                pathname === "/" || isScrolled
                  ? "text-customGray"
                  : "text-white"
              } ${
                isScrolled
                  ? "hover:text-customYellow hover:border-customYellow"
                  : "hover:text-white hover:border-white"
              } px-6 py-2 rounded-full text-xl font-bold transition-colors duration-300`}
              style={{ backgroundColor: "transparent" }} // Explicitly set background to transparent
            >
              Contact Now
            </Button>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
