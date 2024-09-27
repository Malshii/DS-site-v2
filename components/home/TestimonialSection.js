// components/PortfolioSection.js
"use client";
import { useState } from "react";

export default function TestimonialSection() {
  const services = [
    {
      title: "SEO Analysis",
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      title: "Website Reporting",
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      title: "Performance Tests",
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      title: "Data Analysis",
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-semibold mb-8">
          Our clients say{" "}
          <span className="text-customYellow">we rock</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-50">
      {/* Hidden Content - Appears on Hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-customLightYellow to-customYellow text-white 
        flex flex-col justify-center items-center p-4 transform transition-transform 
        duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
      {/* Visible Content - Hidden on Hover */}
      <div
        className="absolute inset-0 flex justify-center items-center bg-white transition-transform 
        duration-500 ease-in-out transform group-hover:-translate-y-full"
      >
        <img
          src="/assets/images/portfolio-image.png" // Ensure the image path is correct
          alt={title}
          // className="h-32 w-32"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150"; // Placeholder if the image fails to load
          }}
        />
      </div>
    </div>
  );
}
