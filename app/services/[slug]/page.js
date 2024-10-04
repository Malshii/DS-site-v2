"use client"; // This marks the component as a Client Component

import CallToAction from "@/components/home/CallToAction";
import CustomCodedWebsites from "@/components/services/CustomCodedWebsites";
import Packages from "@/components/services/Packages";
import ProcessFlow from "@/components/services/ProcessFlow";
import WebDevelopmentBenefits from "@/components/services/WebDevelopment";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

// Define the service details
const serviceDetails = {
  development: {
    heading: "Website Development",
    description: "Build professional and engaging websites.",
    image: "/assets/images/services/6.png", // Example image for the service
  },
  "google-ads": {
    heading: "Google Ads",
    description: "Optimize your ads to reach the right audience.",
    image: "/assets/images/services/7.png", // Example image for the service
  },
  seo: {
    heading: "SEO/ Copywriting",
    description: "Enhance your content for better search rankings.",
    image: "/assets/images/services/8.png", // Example image for the service
  },
  "nfc-cards": {
    heading: "NFC Cards",
    description: "Innovate with contactless technology.",
    image: "/assets/images/services/9.png", // Example image for the service
  },
};

// Client-side component receiving the slug as `params`
export default function ServicePage({ params, isServicesOpen, isAboutOpen }) {
  const { slug } = params; // Access the dynamic segment of the URL
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  // Fetch the service details for the slug
  const service = serviceDetails[slug];

  if (!service) {
    notFound(); // Renders a 404 page if the service isn't found
  }

  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative flex items-center justify-center min-h-[600px] bg-gray-800 text-white">
        {/* Gradient Overlay with Image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-customGray via-black to-transparent"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.heading}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Inner content div for margin control */}
        <div
          id="move-down"
          className={`container relative z-10 mx-auto px-20 text-center transition-all duration-300 ${
            isServicesOpen || isAboutOpen ? "mt-20" : ""
          }`}
        >
          {/* Animated Heading */}
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {service.heading
              .split(" ")[0]
              .split("")
              .map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    animation: `fadeIn 0.05s ease forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {letter}
                </span>
              ))}{" "}
            <span className="block text-customYellow">
              {service.heading
                .split(" ")[1]
                .split("")
                .map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block"
                    style={{
                      animation: `fadeIn 0.05s ease forwards`,
                      animationDelay: `${
                        (index + service.heading.split(" ")[0].length) * 0.1
                      }s`,
                      opacity: 0,
                    }}
                  >
                    {letter}
                  </span>
                ))}
            </span>
          </h1>

          <p className="text-lg text-white mb-6">{service.description}</p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="border-2 text-white px-6 py-3 rounded-full transition-all"
          >
            Contact Now
          </a>
        </div>

        {/* Down Arrow Icon with Motion */}
        <motion.div
          className="absolute bottom-10 transform -translate-x-1/2 z-20 cursor-pointer"
          animate={{ y: [0, 10, 0] }} // Creates a bounce effect
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown}
        >
          <ChevronDoubleDownIcon className="h-20 w-20 text-white" />
        </motion.div>

        {/* CSS Keyframes for fade-in effect */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Render Different Sections Based on Service Heading */}
      {service.heading === "Website Development" && (
        <section id="next-section">
          <WebDevelopmentBenefits />
          <CustomCodedWebsites />
          <ProcessFlow />
          <Packages />
        </section>
      )}

      {service.heading === "Google Ads" && (
        <section id="next-section" className="py-12 bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Maximize Your Reach with Google Ads
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We optimize your campaigns to target the right audience, driving
              conversions.
            </p>
          </div>
        </section>
      )}

      {service.heading === "SEO / Copywriting" && (
        <section id="next-section" className="py-12 bg-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Boost Your SEO and Content Strategy
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We provide SEO services and high-quality content to improve your
              rankings.
            </p>
          </div>
        </section>
      )}

      {service.heading === "NFC Cards" && (
        <section id="next-section" className="py-12 bg-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Innovate with NFC Cards
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We offer NFC cards that provide a seamless, contactless
              experience.
            </p>
          </div>
        </section>
      )}

      <CallToAction />
    </>
  );
}
