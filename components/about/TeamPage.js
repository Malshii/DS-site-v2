"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TeamTitleBar from "./TeamTitleBar";

// Define the teamMembers array with updated positions to match the design
const teamMembers = [
  {
    image: "/assets/images/team/Danyon-Fernando.webp",
    name: "Danyon Fernando",
    position: "Business Analyst",
    qualifications:
      "Bachelor of Arts with Honours - Victoria University of Wellington",
    certifications: [
      {
        name: "AgilePM® Foundation",
        issuer: "APMG International",
        date: "Sep 2021",
      },
    ],
  },
  {
    image: "/assets/images/team/Vazin-Shareef.webp",
    name: "Vazin Shareef",
    position: "Chief Information Officer",
    qualifications:
      "Bachelor of Commerce (BCom) - Victoria University of Wellington",
  },
  {
    image: "/assets/images/team/Ruwani.webp",
    name: "Ruwani Kokawala",
    position: "Google Ads Specialist/ SEO",
    qualifications:
      "Master of Science Technology Management - Southeast Missouri State University, USA",
  },
  {
    image: "/assets/images/team/Malshi.webp",
    name: "Malshi Kulasinghe",
    position: "Web Developer/ App Development",
    qualifications:
      "Bachelor of Science (Hons) Information Technology & Management - University of Moratuwa, Sri Lanka",
  },
];

const TeamPage = () => {
  // State for tracking which member is being hovered/focused
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle mouse and touch interactions
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <TeamTitleBar />

      <section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-screen-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(e, index)}
            >
              {/* Member image */}
              <div className="h-[400px] md:h-[500px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale transition-all duration-300"
                />

                {/* Overlay that appears on hover (lime green with name/position) */}
                <div
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 ease-in-out
    ${activeIndex === index ? "bg-customYellow h-auto" : "bg-transparent h-0"}`}
                >
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-black">
                      {member.name}
                    </h3>
                    <h6 className="text-black mb-2">{member.position}</h6>
                    <p className="text-black text-sm mb-2">
                      {member.qualifications}
                    </p>

                    {/* Certification section */}
                    {member.certifications &&
                      member.certifications.length > 0 && (
                        <div className="mt-3 border-t border-black pt-2">
                          <h4 className="font-medium text-black mb-1">
                            Licenses & Certifications
                          </h4>
                          {member.certifications.map((cert, i) => (
                            <div key={i} className="text-sm mb-1">
                              <div className="font-medium">{cert.name}</div>
                              <div>{cert.issuer}</div>
                              <div className="text-xs">Issued {cert.date}</div>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TeamPage;
