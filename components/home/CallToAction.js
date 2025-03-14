// ConsultationCTA.jsx
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ConsultationCTA = () => {
  return (
    <section className="relative px-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/assets/images/hero-bg.jpg")',
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="container text-center mx-auto px-6 py-20 md:py-24 lg:py-32 relative z-20">
        <div>
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Discuss Your Business Goals & Schedule A Free Consultation
            Today
          </h2>

          {/* CTA Button */}
          <Link href="/schedule-consultation">
            <span className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors duration-300">
              Book Free Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;