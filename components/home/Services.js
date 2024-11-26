"use client";

import { useEffect, useState } from "react";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const services = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: "Website Development",
    description:
      "Create stunning, user-friendly websites to enhance your brand's online presence and drive growth.",
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
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSingleColumn(window.innerWidth < 640);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility state based on intersection
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        // Trigger when element is 20% visible
        threshold: 0.2,
        // Start observing slightly before the element comes into view
        rootMargin: "50px",
      }
    );

    // Get the section element and start observing
    const section = document.getElementById("services-section");
    if (section) {
      observer.observe(section);
    }

    // Initial resize check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="services-section"
      className="about-us section py-10 sm:py-20 lg:py-40 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg.webp')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image Section */}
          <div
            className={`lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-start ${
              isVisible ? "animate-fade-slide-left" : "invisible"
            }`}
          >
            <Image
              src="/assets/images/services.webp"
              alt="Person Graphic"
              width={600}
              height={600}
              className="rounded-lg w-full sm:w-4/5 lg:w-3/4"
              priority
            />
          </div>

          {/* Services Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`flex items-center ${
                      isVisible ? "animate-fade-slide-up" : "invisible"
                    } ${
                      isSingleColumn ? "bg-customYellow rounded-lg p-4" : ""
                    }`}
                    style={{
                      animationDelay: `${0.2 + index * 0.2}s`,
                    }}
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
                  </div>
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
