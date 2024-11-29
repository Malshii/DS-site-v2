"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  CodeBracketIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  ChevronDownIcon,
  Bars3Icon,
  PlusIcon,
  XMarkIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = ({ setIsDropdownOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
    setIsDropdownOpen(true);
  };
  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
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

  // Modified image preloading logic
  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        "/assets/images/Digital Solution.webp",
        "/assets/images/Digital Solution Logo.webp",
      ];

      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = document.createElement("img");
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
      } catch (error) {
        console.warn("Image preloading failed:", error);
      }
    };

    preloadImages();
  }, []);

  // Modified LogoImage component
  const LogoImage = () => {
    const logoSrc =
      pathname === "/" || isScrolled
        ? "/assets/images/Digital Solution.webp"
        : "/assets/images/Digital Solution Logo.webp";

    return (
      <Image
        src={logoSrc}
        alt="GDC Digital Solutions Logo"
        width={200}
        height={50}
        className="h-auto w-auto"
        priority={true}
        loading="eager"
        sizes="200px"
        quality={85}
      />
    );
  };

  // Create conditional wrapper component
  const ConditionalMotion = ({ children }) => {
    if (isMobile) {
      return (
        <header className="fixed top-0 left-0 w-full z-50 transition-colors bg-transparent">
          {children}
        </header>
      );
    }

    return (
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {children}
      </motion.header>
    );
  };

  return (
    <ConditionalMotion>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-20">
        <Link href="/" className="flex items-center">
          <LogoImage />
        </Link>

        <nav className="hidden lg:flex space-x-10">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? isScrolled
                  ? "text-customGray hover:text-customYellow"
                  : "text-customGray hover:text-customYellow"
                : isScrolled
                ? "text-customGray hover:text-customYellow"
                : "text-white hover:text-customYellow"
            } text-xl font-bold`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              aria-label="Services menu"
              className={`flex items-center ${
                pathname === "/"
                  ? isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-customGray hover:text-customYellow"
                  : isScrolled
                  ? "text-customGray hover:text-customYellow"
                  : "text-white hover:text-customYellow"
              } text-xl font-bold`}
            >
              Services
              <ChevronDownIcon
                className="w-4 h-4 ml-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </button>

            {isServicesOpen && (
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${
                  isScrolled ? "bg-white" : "bg-transparent"
                } rounded-xl shadow-xl p-6 grid grid-cols-4 gap-6 z-50`}
                style={{ minWidth: "800px", zIndex: 50 }}
                role="menu"
                aria-label="Services menu"
              >
                {/* First Row */}
                <Link
                  href="/services/development"
                  className={`flex flex-col items-center text-center ${
                    pathname === "/" && !isScrolled
                      ? "text-customGray hover:text-customGray"
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
                      ? "text-customGray hover:text-customGray"
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
                        ? "text-gray-500"
                        : "text-white"
                    } group-hover:text-customYellow`}
                  >
                    Optimize your ads to reach the right audience.
                  </span>
                </Link>

                <Link
                  href="/services/seo"
                  className={`flex flex-col items-center text-center ${
                    pathname === "/" && !isScrolled
                      ? "text-customGray hover:text-customGray"
                      : isScrolled
                      ? "text-gray-700 hover:text-customYellow"
                      : "text-white hover:text-customYellow"
                  } group`}
                >
                  <PresentationChartLineIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
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
                      ? "text-customGray hover:text-customGray"
                      : isScrolled
                      ? "text-gray-700 hover:text-customYellow"
                      : "text-white hover:text-customYellow"
                  } group`}
                >
                  <DevicePhoneMobileIcon className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
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

          <Link
            href="/about"
            className={`${
              pathname === "/"
                ? isScrolled
                  ? "text-customGray hover:text-customYellow"
                  : "text-customGray hover:text-customYellow"
                : isScrolled
                ? "text-customGray hover:text-customYellow"
                : "text-white hover:text-customYellow"
            } text-xl font-bold`}
          >
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={handleCaseStudiesMouseEnter}
            onMouseLeave={handleCaseStudiesMouseLeave}
          >
            <button
              aria-expanded={isCaseStudiesOpen}
              aria-haspopup="true"
              aria-label="Case Studies menu"
              className={`flex items-center ${
                pathname === "/"
                  ? isScrolled
                    ? "text-customGray hover:text-customYellow"
                    : "text-customGray hover:text-customYellow"
                  : isScrolled
                  ? "text-customGray hover:text-customYellow"
                  : "text-white hover:text-customYellow"
              } text-xl font-bold`}
            >
              Case Studies
              <ChevronDownIcon
                className="w-4 h-4 ml-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </button>

            {isCaseStudiesOpen && (
              <div
                className={`absolute left-0 mt-2 w-60 ${
                  isScrolled ? "bg-white" : "bg-transparent"
                } rounded-xl shadow-xl z-50`}
                role="menu"
                aria-label="Case Studies menu"
              >
                <Link
                  href="/case-studies/web-development"
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
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className={`border-2 ${
              pathname === "/"
                ? isScrolled
                  ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                  : "border-customGray text-customGray hover:text-white hover:border-white hover:bg-transparent"
                : isScrolled
                ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                : "border-white text-white hover:text-customYellow hover:border-customYellow hover:bg-transparent"
            } bg-transparent px-6 py-2 rounded-full text-xl font-bold transition-colors duration-300`}
          >
            Contact Us Now
          </Link>
        </nav>

        <div className="flex lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <XMarkIcon
                className="w-6 h-6 text-black transition-transform duration-300"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="w-6 h-6 text-black transition-transform duration-300"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      <ul
        className={`absolute top-full left-0 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[75vh] opacity-100 overflow-y-auto"
            : "max-h-0 hidden"
        }`}
        style={{ zIndex: 100 }}
        role="menu"
      >
        <li>
          <Link
            href="/"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="relative">
          <button
            className="flex justify-between items-center w-full py-2 px-4 text-left font-light text-gray-800 hover:text-customYellow"
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
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-ads"
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO / Copywriting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nfc-cards"
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NFC Cards
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="relative">
          <Link
            href="/about"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </li>

        <li role="none">
          <button
            className="flex justify-between items-center w-full py-2 px-4 text-left font-light text-gray-800 hover:text-customYellow"
            onClick={() => handleMobileDropdownToggle("services")}
            aria-expanded={activeDropdown === "services"}
            aria-label="Services submenu"
          >
            <span className="flex items-center">
              {activeDropdown === "services" ? (
                <MinusIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <PlusIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              Services
            </span>
          </button>
          {activeDropdown === "case-studies" && (
            <ul className="pl-4 bg-gray-50 border-l border-gray-200">
              <li>
                <Link
                  href="/case-studies/web-development"
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/google-ads"
                  className="block py-2 px-11 hover:text-customYellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Google Ads
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/contact-us"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Now
          </Link>
        </li>
      </ul>
    </ConditionalMotion>
  );
};

export default Header;
