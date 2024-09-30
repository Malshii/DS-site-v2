"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion

const services = [
  "Digital Ideas",
  "SEO Marketing",
  "Creative Designs",
  "Brand Development",
  "Content Strategy",
]; // Add the services you provide

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
      className="relative bg-white pt-5 flex items-center overflow-hidden"
    >
      {/* SVG Wave as background */}
      <img
        src="/assets/svg/wave.svg" // Update this path to where you've saved the SVG
        alt="Wave Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
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
            <button
              className="px-6 py-3 border-2 border-customGray text-customGray font-semibold hover:bg-customLightGray hover:text-white transition-colors rounded-full"
              onClick={() => console.log("Schedule a Consultation clicked")}
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>

        {/* Right image motion */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ x: 100, opacity: 0 }} // Start position
          animate={{ x: 0, opacity: 1 }} // End position
          transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
        >
          <img
            src="/assets/images/banner-right-image.png"
            alt="team meeting"
            className="max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
