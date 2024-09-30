"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import Link from "next/link"; // Importing Next.js Link
import Image from "next/image";

const services = [
  "Website Development",
  "Google Ads",
  "SEO / Copywriting",
  "NFC Cards",
];

const Banner = () => {
  const [currentService, setCurrentService] = useState(0);

  // Function to handle vertical text swap effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative bg-white pt-10 flex items-center overflow-hidden"
    >
      {/* SVG Wave as background */}
      <Image
        src="/assets/svg/wave.svg" // Ensure the path is correct
        alt="Wave Background"
        layout="fill" // This makes the image fill its container
        objectFit="cover" // Mimics the behavior of object-cover in CSS
        className="absolute inset-0 w-full h-full z-0" // Retain your Tailwind CSS classes
      />

      {/* Main content */}
      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between px-20">
        {/* Left content motion */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -100, opacity: 0 }} // Start position
          animate={{ x: 0, opacity: 1 }} // End position
          transition={{ duration: 0.8, delay: 0 }} // Animation duration and no delay
        >
          <h6 className="text-customGray font-semibold uppercase mb-2">
            Welcome to GDC Digital Solutions
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
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
            </motion.span>{" "}
          </h2>

          {/* Button Section */}
          <div className="mt-6 flex gap-4">
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

        {/* Right image motion */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ x: 100, opacity: 0 }} // Start position
          animate={{ x: 0, opacity: 1 }} // End position
          transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
        >
          <Image
            src="/assets/images/banner-right-image.png"
            alt="team meeting"
            width={800} // Replace with the actual width of your image
            height={600} // Replace with the actual height of your image
            className="max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
