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
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsSingleColumn(window.innerWidth < 640);
      }, 100);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    const section = document.getElementById("services-section");
    if (section) {
      observer.observe(section);
    }

    setIsSingleColumn(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="services-section"
      className="relative py-10 sm:py-20 lg:py-40 min-h-[600px] overflow-hidden"
    >
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bg.webp"
          alt="Background"
          fill
          priority
          fetchPriority="high"
          className="object-cover mix-blend-overlay"
          sizes="100vw"
          quality={75}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image Section - Optimized */}
          <div
            className={`lg:w-1/2 w-full mb-8 lg:mb-0`}
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 0.5s ease-in-out' 
            }}
          >
            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/assets/images/services.webp"
                  alt="Services Illustration"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-contain"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`flex items-start ${
                      isSingleColumn ? "bg-customYellow rounded-lg p-4" : ""
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.5s ease-in-out ${index * 0.2}s, transform 0.5s ease-in-out ${index * 0.2}s`,
                    }}
                  >
                    <div className="p-3 rounded-full bg-white mr-4 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-customYellow" />
                    </div>
                    <div className="flex-1">
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