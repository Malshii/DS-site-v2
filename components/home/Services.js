"use client";

import { motion } from "framer-motion"; // Importing framer-motion for animations
import { useInView } from "react-intersection-observer"; // Importing useInView to trigger animations on view
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"; // Importing Heroicons for icons
import Image from "next/image";

const services = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: "Website Development",
    description:
      "Create stunning, user-friendly websites to enhance your brand’s online presence and drive growth.",
  },
  {
    id: 2,
    icon: PresentationChartLineIcon,
    title: "Google Ads",
    description:
      "Boost your business with targeted Google Ads that convert clicks into loyal customers.",
  },
  {
    id: 3,
    icon: GlobeAltIcon,
    title: "SEO / Copywriting",
    description:
      "Increase visibility with compelling, SEO-friendly content that drives meaningful traffic.",
  },
  {
    id: 4,
    icon: MagnifyingGlassIcon,
    title: "NFC Cards",
    description:
      "Modern, eco-friendly NFC cards for seamless networking and lasting connections.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will re-trigger every time the section comes into view
    threshold: 0.2, // The percentage of the component that needs to be visible to trigger the animation
  });

  return (
    <section
      id="about"
      ref={ref} // Attach the ref to the section
      className="about-us section py-10 sm:py-20 lg:py-40 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg.png')", // Update the path to your background image
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image Section */}
          <motion.div
            className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate only if in view
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/assets/images/services.png" // Update the path to your actual image
              alt="Person Graphic"
              width={600} // Adjust the width for responsiveness
              height={600} // Adjust the height for responsiveness
              className="rounded-lg w-full sm:w-4/5 lg:w-3/4" // Update responsive width classes for scaling
            />
          </motion.div>

          {/* Services Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    } // Animate only if in view
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  >
                    <div className="p-3 rounded-full bg-white mr-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-customYellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {service.title}
                      </h4>
                      <p className="text-white text-sm sm:text-base">
                        {service.description}
                      </p>
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

export default Services;
