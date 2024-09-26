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
      className="relative bg-white py-10 flex items-center overflow-hidden"
    >
      {/* Left gradient image */}
      <img
        src="/assets/images/baner-dec-left.png" // Replace with your actual left gradient path
        alt="Left Gradient"
        className="absolute left-0 top-0 h-full object-cover z-0"
        style={{ width: "300px" }} // Adjust width as needed
      />

      {/* Right gradient image */}
      <img
        src="/assets/images/baner-dec-right.png" // Replace with your actual right gradient path
        alt="Right Gradient"
        className="absolute right-0 top-0 h-full object-cover z-0"
        style={{ width: "300px" }} // Adjust width as needed
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
          <h6 className="text-red-500 font-semibold uppercase mb-2">
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
              className="text-blue-500 inline-block"
            >
              {services[currentService]}
            </motion.span>{" "}
            {/* & <span className="text-red-500">Marketing</span> */}
          </h2>

          {/* Form Section */}
          <form className="mt-6 max-w-lg flex items-center rounded-full overflow-hidden bg-blue-500">
            <input
              type="text"
              placeholder="Your website URL..."
              className="flex-1 px-4 py-3 text-white bg-blue-500 focus:outline-none placeholder-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-red-500 font-semibold hover:bg-gray-100 transition-colors rounded-full"
            >
              Analyze Site
            </button>
          </form>
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
