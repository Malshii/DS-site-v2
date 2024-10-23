"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = ({ setIsDropdownOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState(""); // Track mobile dropdown state
  const pathname = usePathname();

  // Scroll behavior to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle mobile dropdown
  const handleMobileDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  // Desktop dropdown handlers for Services and About Us
  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
    setIsDropdownOpen(true);
  };
  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
    setIsDropdownOpen(false);
  };
  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true);
    setIsDropdownOpen(true);
  };
  const handleAboutMouseLeave = () => {
    setIsAboutOpen(false);
    setIsDropdownOpen(false);
  };
  const handleCaseStudiesMouseEnter = () => {
    setIsCaseStudiesOpen(true);
    setIsDropdownOpen(true);
  };
  const handleCaseStudiesMouseLeave = () => {
    setIsCaseStudiesOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                pathname === "/"
                  ? "/assets/images/Digital Solution.png"
                  : isScrolled
                  ? "/assets/images/Digital Solution.png"
                  : "/assets/images/Digital Solution Logo.png"
              }
              alt="GDC Digital Solutions Logo"
              width={200}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-white hover:text-customGray"
                  : isScrolled
                  ? "text-customGray hover:text-customYellow"
                  : "text-white hover:text-customYellow"
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
                  pathname === "/"
                    ? isScrolled
                      ? "text-customGray hover:text-customYellow"
                      : "text-white hover:text-customGray"
                    : isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-white hover:text-customYellow"
                } text-xl font-bold`}
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
                  {/* Add Services Dropdown items */}
                  <Link
                    href="/services/development"
                    className={`flex flex-col items-center text-center ${
                      pathname === "/" && !isScrolled
                        ? "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    } group`}
                  >
                    <CodeBracketIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Website Development</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500"
                          : "text-white"
                      } group-hover:text-customYellow`}
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
                      } group-hover:text-customYellow`}
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
                          ? "text-gray-500"
                          : "text-white"
                      } group-hover:text-customYellow`}
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
                    <CodeBracketIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">NFC Cards</span>
                    <span
                      className={`text-sm ${
                        pathname === "/" && !isScrolled
                          ? "text-customGray"
                          : isScrolled
                          ? "text-gray-500"
                          : "text-white"
                      } group-hover:text-customYellow`}
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
                  pathname === "/"
                    ? isScrolled
                      ? "text-customGray hover:text-customYellow"
                      : "text-white hover:text-customGray"
                    : isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-white hover:text-customYellow"
                } text-xl font-bold`}
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
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/careers"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleCaseStudiesMouseEnter}
              onMouseLeave={handleCaseStudiesMouseLeave}
            >
              <button
                className={`flex items-center ${
                  pathname === "/"
                    ? isScrolled
                      ? "text-customGray hover:text-customYellow"
                      : "text-white hover:text-customGray"
                    : isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-white hover:text-customYellow"
                } text-xl font-bold`}
              >
                Case Studies
                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" />
              </button>

              {isCaseStudiesOpen && (
                <div
                  className={`absolute left-0 mt-2 w-60 ${
                    isScrolled ? "bg-white" : "bg-transparent"
                  } rounded-xl shadow-xl z-50`}
                >
                  <Link
                    href="/case-studies/website-development"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    Website Development
                  </Link>
                  <Link
                    href="/case-studies/google-ads"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    Google Ads
                  </Link>
                  <Link
                    href="/case-studies/seo-copywriting"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    SEO/ Copywriting
                  </Link>
                  <Link
                    href="/case-studies/nfc-cards"
                    className={`block px-4 py-2 ${
                      pathname === "/"
                        ? isScrolled
                          ? "text-customGray hover:text-customYellow"
                          : "text-customGray hover:text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-customYellow"
                        : "text-white hover:text-customYellow"
                    }`}
                  >
                    NFC Cards
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              href="/contact-us"
              className={`border-2 ${
                pathname === "/"
                  ? isScrolled
                    ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                    : "border-white text-white hover:text-customGray hover:border-customGray hover:bg-transparent"
                  : isScrolled
                  ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                  : "border-white text-white hover:text-customYellow hover:border-customYellow hover:bg-transparent"
              } bg-transparent px-6 py-2 rounded-full text-xl font-bold transition-colors duration-300`}
            >
              Contact Us Now
            </Link>
          </nav>

          {/* Hamburger Menu Icon for Mobile on the Right */}
          <div className="flex lg:hidden ml-auto">
            {/* Mobile Menu Toggle Button */}
            <button onClick={toggleMenu} className="lg:hidden">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-black transition-transform duration-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-black transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <ul
          className={`absolute top-full left-0 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[75vh] opacity-100 overflow-y-auto"
              : "max-h-0 hidden"
          }`}
          style={{ zIndex: 100 }}
        >
          <li>
            <Link
              href="/"
              className="block py-2 px-11 font-light text-gray-800"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              className="flex justify-between items-center w-full py-2 px-4 text-left font-light text-gray-800"
              onClick={() => handleMobileDropdownToggle("services")}
            >
              <span className="flex items-center">
                {activeDropdown === "services" ? (
                  <MinusIcon className="w-5 h-5 mr-2" />
                ) : (
                  <PlusIcon className="w-5 h-5 mr-2" />
                )}
                Services
              </span>
            </button>
            {activeDropdown === "services" && (
              <ul className="pl-4 bg-gray-50 border-l border-gray-200">
                {/* Map through services dropdown */}
                <li>
                  <Link
                    href="/services/development"
                    className="block py-2 px-11"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/google-ads"
                    className="block py-2 px-11"
                  >
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="block py-2 px-11">
                    SEO / Copywriting
                  </Link>
                </li>
                <li>
                  <Link href="/services/nfc-cards" className="block py-2 px-11">
                    NFC Cards
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              className="flex justify-between items-center w-full py-2 px-4 text-left font-light text-gray-800"
              onClick={() => handleMobileDropdownToggle("about")}
            >
              <span className="flex items-center">
                {activeDropdown === "about" ? (
                  <MinusIcon className="w-5 h-5 mr-2" />
                ) : (
                  <PlusIcon className="w-5 h-5 mr-2" />
                )}
                About Us
              </span>
            </button>
            {activeDropdown === "about" && (
              <ul className="pl-4 bg-gray-50 border-l border-gray-200">
                <li>
                  <Link href="/about" className="block py-2 px-11">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="block py-2 px-11">
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              className="flex justify-between items-center w-full py-2 px-4 text-left font-light text-gray-800"
              onClick={() => handleMobileDropdownToggle("case-studies")}
            >
              <span className="flex items-center">
                {activeDropdown === "case-studies" ? (
                  <MinusIcon className="w-5 h-5 mr-2" />
                ) : (
                  <PlusIcon className="w-5 h-5 mr-2" />
                )}
                Case Studies
              </span>
            </button>
            {activeDropdown === "case-studies" && (
              <ul className="pl-4 bg-gray-50 border-l border-gray-200">
                <li>
                  <Link
                    href="/case-studies/website-development"
                    className="block py-2 px-11"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies/google-ads"
                    className="block py-2 px-11"
                  >
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies/seo-copywriting"
                    className="block py-2 px-11"
                  >
                    SEO/ Copywriting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies/nfc-cards"
                    className="block py-2 px-11"
                  >
                    NFC Cards
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className="block py-2 px-11 font-light text-gray-800"
            >
              Contact Now
            </Link>
          </li>
        </ul>
      </motion.header>
    </>
  );
};

export default Header;
