"use client";
import React, { useState } from "react";
import Image from "next/image";

// Check icon component with outlined design
const CheckIcon = ({ className }) => (
  <div className="flex items-center justify-center w-6 h-6 rounded-sm border-2 border-amber-400 mr-2">
    <svg
      className={`h-4 w-4 text-amber-400 ${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 13.5L4 10L3 11L7.5 15.5L17.5 5.5L16.5 4.5L7.5 13.5Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const ServiceCard = ({ title, items, iconSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl p-6 transition-all duration-300 h-full shadow-md ${
        isHovered ? "bg-customGray text-white" : "bg-white text-gray-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 mr-3 relative">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon
              className={isHovered ? "text-amber-400" : "text-amber-400"}
            />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-400 rounded-tl-lg"></div>
    </div>
  );
};

const ServicesSection = () => {
  const serviceCards = [
    {
      title: "Digital Marketing",
      items: ["Google & Facebook Ads", "SEO / Copywriting"],
      iconSrc: "/assets/images/icons/2.png",
    },
    {
      title: "Consulting & Strategy",
      items: ["Business Strategy & Consulting"],
      iconSrc: "/assets/images/icons/3.png",
    },
    {
      title: "Web & App Development",
      items: ["Website Development", "App Development"],
      iconSrc: "/assets/images/icons/4.png",
    },
  ];

  return (
    <section className="bg-white">
      {/* Main Services Section */}
      <div className="container mx-auto px-40 py-16">
        {/* First Row: Title + Description and First Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-customGray mb-6">
              Explore unique digital solutions service
            </h2>
            <p className="text-gray-600">
              Crafting compelling digital experiences that captivate audiences
              and drive meaningful connections. Our digital solutions combines
              innovation, strategy, and expertise to fuel your online success.
            </p>
          </div>

          {/* Right Column: First Card */}
          <div>
            <ServiceCard
              title={serviceCards[0].title}
              items={serviceCards[0].items}
              iconSrc={serviceCards[0].iconSrc}
            />
          </div>
        </div>

        {/* Second Row: Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.slice(1).map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              items={card.items}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;