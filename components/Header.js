"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons
import { motion } from "framer-motion"; // Importing framer-motion

const Header = () => {
  // State to handle dropdown visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Function to handle dropdown visibility toggle
  const handleDropdownClick = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Starts off the screen above
      animate={{ y: 0, opacity: 1 }} // Slides down into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      className="sticky top-0 bg-white z-50 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-20">
        <Link href="/" className="text-xl font-bold">
          GDC<span className="text-red-500">DS</span>
        </Link>
        <nav className="flex space-x-10 relative">
          <Link href="#top" className="hover:text-red-500">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick(setIsServicesOpen)}
              className="flex items-center hover:text-red-500 focus:outline-none"
            >
              Services
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto bg-white border border-gray-200 rounded shadow-lg flex space-x-4 p-4 z-50"
                style={{ minWidth: "600px" }} // Ensures the menu is wide enough to appear centered
              >
                <Link
                  href="#google-ads"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <CurrencyDollarIcon className="w-10 h-10 mb-2" />
                  <span>Google Ads</span>
                </Link>
                <Link
                  href="#seo"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <ChartBarIcon className="w-10 h-10 mb-2" />
                  <span>Search Engine Optimisation</span>
                </Link>
                <Link
                  href="#strategy"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <LightBulbIcon className="w-10 h-10 mb-2" />
                  <span>Online Strategy</span>
                </Link>
                <Link
                  href="#facebook"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 mb-2" />
                  <span>Facebook Campaigns</span>
                </Link>
                <Link
                  href="#automation"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <EnvelopeIcon className="w-10 h-10 mb-2" />
                  <span>Email Automation</span>
                </Link>
                <Link
                  href="#development"
                  className="flex flex-col items-center text-gray-700 hover:text-red-500"
                >
                  <CodeBracketIcon className="w-10 h-10 mb-2" />
                  <span>Website Development</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="#portfolio" className="hover:text-red-500">
            Portfolio
          </Link>
          <Link href="#blog" className="hover:text-red-500">
            Blog
          </Link>

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick(setIsAboutOpen)}
              className="flex items-center hover:text-red-500 focus:outline-none"
            >
              About Us
              <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <Link
                  href="#about-us"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                >
                  About Us
                </Link>
                <Link
                  href="#vacancies"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                >
                  Vacancies
                </Link>
                <Link
                  href="#internships"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <Button className="bg-red-500 text-white">Contact Now</Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
