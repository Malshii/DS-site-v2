"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons
import { motion } from "framer-motion"; // Importing framer-motion

const Header = () => {
  // State to handle dropdown visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Handlers for opening and closing dropdowns on hover
  const handleMouseEnter = (setter) => {
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    setter(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Starts off the screen above
      animate={{ y: 0, opacity: 1 }} // Slides down into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      className="sticky top-0 bg-white z-50 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-20">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/images/Digital Solution.png" // Replace with the actual path to your logo image
            alt="GDC Digital Solutions Logo"
            className="h-20 w-auto" // Adjust the height and width as needed
          />
        </Link>

        <nav className="flex space-x-10 relative">
          <Link href="#top" className="hover:text-customYellow">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
            onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
          >
            <button className="flex items-center hover:text-customYellow focus:outline-none">
              Services
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex space-x-6 z-50"
                style={{ minWidth: "800px" }} // Adjust the width to make it appear centered and spacious
              >
                <Link
                  href="#development"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <CodeBracketIcon className="w-12 h-12 mb-2 text-customYellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Website Development</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Build professional and engaging websites.
                  </span>
                </Link>
                <Link
                  href="#google-ads"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <CurrencyDollarIcon className="w-12 h-12 mb-2 text-customYellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Google Ads</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Optimize your ads to reach the right audience.
                  </span>
                </Link>
                <Link
                  href="#seo"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <ChartBarIcon className="w-12 h-12 mb-2 text-customYellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">SEO / Copywriting</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Enhance your content for better search rankings.
                  </span>
                </Link>
                <Link
                  href="#strategy"
                  className="flex flex-col items-center text-center text-gray-700 hover:text-customYellow group"
                >
                  <LightBulbIcon className="w-12 h-12 mb-2 text-customYellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">NFC Cards</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">
                    Innovate with contactless technology.
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link href="#portfolio" className="hover:text-customYellow">
            Portfolio
          </Link>
          <Link href="#blog" className="hover:text-customYellow">
            Blog
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
            onMouseLeave={() => handleMouseLeave(setIsAboutOpen)}
          >
            <button className="flex items-center hover:text-customYellow focus:outline-none">
              About Us
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <Link
                  href="#about-us"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-customYellow"
                >
                  About Us
                </Link>
                <Link
                  href="#vacancies"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-customYellow"
                >
                  Vacancies
                </Link>
                <Link
                  href="#internships"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-customYellow"
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <Button className="bg-customYellow text-white hover:bg-customGray">
            Contact Now
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
