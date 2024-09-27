"use client";

import { motion } from "framer-motion"; // Importing framer-motion for animations
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons for icons

const services = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: "Website Development",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    id: 2,
    icon: PresentationChartLineIcon,
    title: "Google Ads",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    id: 3,
    icon: GlobeAltIcon,
    title: "SEO / Copywriting",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    id: 4,
    icon: MagnifyingGlassIcon,
    title: "NFC Cards",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="about-us section py-40 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg.png')", // Update the path to your background image
      }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image Section */}
          <motion.div
            className="lg:w-1/3 w-full mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="/assets/images/about-left-image.png" // Update the path to your actual image
              alt="Person Graphic"
              className="rounded-lg"
            />
          </motion.div>

          {/* Services Section */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="flex items-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  >
                    <div className="p-3 rounded-full bg-white mr-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-customYellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{service.title}</h4>
                      <p className="text-white">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
