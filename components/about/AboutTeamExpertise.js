// /components/about/AboutTeamExpertise.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function AboutTeamExpertise() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Custom intersection observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visibility required to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-10 px-20 text-white bg-black opacity-80"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Content Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-customYellow">
                We are the experts of Team Communication
              </h2>
              <p className="mt-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-customYellow">
                  8,560,342
                </h3>
                <p className="mt-2">Projects</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-customYellow">4</h3>
                <p className="mt-2">Services</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-customYellow">
                  1,500+
                </h3>
                <p className="mt-2">Integrated partners</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Section */}
          <motion.div
            className="flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src="/assets/images/about-left-image.png" // Ensure the path is correct
              alt="World Map"
              width={400} // You can adjust based on actual image size
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
