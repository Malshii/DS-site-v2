"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle dropdown in sidebar
  const toggleDropdown = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Navigation links with dropdown items
  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "Digital Marketing",
      href: "/digital-marketing",
      hasDropdown: true,
      dropdownItems: [
        { name: "Google & Facebook Ads", href: "/services/google-ads" },
        { name: "SEO/ Copywriting", href: "/services/seo" },
      ],
    },
    {
      name: "Web & App Development",
      href: "/development",
      hasDropdown: true,
      dropdownItems: [
        { name: "Website development", href: "/services/development" },
        { name: "App development", href: "/services/app-development" },
      ],
    },
    {
      name: "Consulting & Strategy",
      href: "/consulting",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Business Analysis & Consulting",
          href: "/services/business-consulting",
        },
      ],
    },
    { name: "About Us", href: "/about", hasDropdown: false },
    {
      name: "Case Studies",
      href: "/case-studies",
      hasDropdown: true,
      dropdownItems: [
        { name: "Website development", href: "/case-studies/web-development" },
        { name: "Google Ads", href: "/case-studies/google-ads" },
      ],
    },
    { name: "Contact Us Now", href: "/contact-us", hasDropdown: false },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-10 ${
          isScrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/Digital Solution Logo.webp"
              alt="GDC Digital Solutions Logo"
              width={240}
              height={60}
              className="h-auto w-auto"
              priority={true}
              loading="eager"
              sizes="240px"
              quality={85}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="menu-button text-white hover:text-customYellow focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Overlay when sidebar is open */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-80 bg-customGray z-50 overflow-y-auto shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-customGray">
              <button
                onClick={toggleSidebar}
                className="text-white hover:text-customYellow focus:outline-none"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={item.name} className="py-1">
                    {item.hasDropdown ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={`text-lg ${
                              pathname === item.href ||
                              pathname.startsWith(item.href + "/")
                                ? "text-customYellow font-medium"
                                : "text-white"
                            } hover:text-customYellow transition-colors`}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-white hover:text-customYellow focus:outline-none transition-transform duration-200"
                            aria-expanded={expandedItems[index]}
                          >
                            {expandedItems[index] ? (
                              <ChevronDownIcon className="w-5 h-5" />
                            ) : (
                              <ChevronRightIcon className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        <AnimatePresence>
                          {expandedItems[index] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-4 pt-2 space-y-3 border-l border-gray-700">
                                {item.dropdownItems.map((dropdownItem) => (
                                  <li key={dropdownItem.name}>
                                    <Link
                                      href={dropdownItem.href}
                                      className={`block text-sm ${
                                        pathname === dropdownItem.href
                                          ? "text-customYellow font-medium"
                                          : "text-gray-300"
                                      } hover:text-customYellow transition-colors`}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-lg ${
                          pathname === item.href
                            ? "text-customYellow font-medium"
                            : "text-white"
                        } hover:text-customYellow transition-colors`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links or Additional Info */}
            <div className="p-6 border-t border-gray-700 mt-6">
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Contact Us</p>
                <p className="text-white">digital@gdcgroup.co.nz</p>
                <p className="text-white">021 246 3988</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
