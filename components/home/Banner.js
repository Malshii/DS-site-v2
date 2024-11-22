"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ isServicesOpen, isAboutOpen }) => {
  const services = [
    "Website Development",
    "Google Ads",
    "SEO / Copywriting",
    "NFC Cards",
  ];

  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative pt-32 transition-all duration-300">
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/svg/wave.svg')",
        }}
      ></div>

      <div
        className={`relative z-10 ${
          isServicesOpen || isAboutOpen ? "mt-20" : ""
        }`}
        id="move-down"
      >
        <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between px-20">
          {/* Left Content Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left animate-slideInLeft">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              We Make{" "}
              <span
                key={currentService}
                className="text-customYellow inline-block animate-slideInUp"
              >
                {services[currentService]}
              </span>
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/schedule-consultation"
                className="px-6 py-3 border-2 border-customGray text-customGray font-semibold hover:bg-customLightGray hover:text-white transition-colors rounded-full"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center animate-slideInRight">
            <Image
              src="/assets/images/hero-bg.webp"
              alt="team meeting"
              width={900}
              height={600}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;