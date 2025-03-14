"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Banner = ({ isServicesOpen, isAboutOpen }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  // Content for the banner
  const content = [
    { highlighted: "Website", bottom: "Development" },
    { highlighted: "Google", bottom: "Ads" },
    { highlighted: "Facebook", bottom: "Ads" },
    { highlighted: "SEO /", bottom: "Copywriting" },
    { highlighted: "App", bottom: "Development" },
    { highlighted: "Business", bottom: "Analysis" }, 
    { highlighted: "Consulting", bottom: "" },    
  ];
  
  const marqueeContainerRef = useRef(null);
  
  useEffect(() => {
    // Function to update screen size state
    const updateScreenSize = (width) => {
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024
      });
    };

    // Initial size detection
    updateScreenSize(window.innerWidth);

    // Set up resize observer for responsive adjustments
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? window.innerWidth;
      updateScreenSize(width);
    });

    resizeObserver.observe(document.body);
    
    // Function to determine which word is most visible
    const checkVisibleWord = () => {
      if (!marqueeContainerRef.current) return;
      
      const containerRect = marqueeContainerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      const words = document.querySelectorAll('.scroll-word');
      let closestWord = null;
      let closestDistance = Infinity;
      
      words.forEach((word, index) => {
        const wordRect = word.getBoundingClientRect();
        const wordCenter = wordRect.left + wordRect.width / 2;
        const distance = Math.abs(containerCenter - wordCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestWord = word;
        }
      });
      
      if (closestWord) {
        const newIndex = parseInt(closestWord.dataset.index, 10);
        if (!isNaN(newIndex) && newIndex !== visibleIndex) {
          setVisibleIndex(newIndex);
        }
      }
    };
    
    // Set up interval to check visible word
    const visibilityInterval = setInterval(checkVisibleWord, 100);

    return () => {
      resizeObserver.disconnect();
      clearInterval(visibilityInterval);
    };
  }, [visibleIndex]);

  // Determine appropriate text sizes based on screen size
  const getHeadingSize = () => {
    if (screenSize.isMobile) return "text-4xl";
    if (screenSize.isTablet) return "text-5xl sm:text-6xl";
    return "text-5xl sm:text-6xl md:text-7xl lg:text-8xl";
  };

  // Determine banner height based on screen size
  const getBannerHeight = () => {
    if (screenSize.isMobile) return "min-h-[80vh]";
    if (screenSize.isTablet) return "min-h-[85vh]";
    return "min-h-[90vh]";
  };

  // Create duplicated content for continuous scrolling
  const scrollWords = [...content, ...content, ...content];

  return (
    <section
      className={`relative transition-all duration-300 ${getBannerHeight()} bg-black bg-opacity-40 overflow-hidden`}
      style={{
        backgroundImage: "url('/assets/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* CSS for the scrolling effect */}
      <style jsx>{`
        @keyframes scrollWords {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move by 1/3 for complete cycle */
          }
        }
        
        .scroll-container {
          position: relative;
          background-color: #FFBF00;
          border-radius: 9999px;
          overflow: hidden;
          padding: 8px 0;
          width: 80%;
          margin: 0 auto;
        }
        
        .scroll-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scrollWords 40s linear infinite;
        }
        
        .scroll-word {
          color: #333333;
          font-weight: bold;
          padding: 0 20px;
        }
      `}</style>

      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 
          ${isServicesOpen || isAboutOpen ? "mt-16" : ""}
          ${screenSize.isMobile ? "pt-16" : screenSize.isTablet ? "pt-20" : "pt-24 lg:py-32 pb-5"}`}
      >
        <div className="flex flex-col items-center justify-center h-full min-h-[70vh]">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className={`${getHeadingSize()} font-bold leading-tight text-white`}>
              We make
              
              {/* Single yellow container with scrolling words */}
              <div className="mt-4 mb-6">
                <div className="scroll-container" ref={marqueeContainerRef}>
                  <div className="scroll-content">
                    {scrollWords.map((item, index) => (
                      <span 
                        key={index} 
                        className="scroll-word"
                        data-index={index % content.length}
                      >
                        {item.highlighted}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom text that changes based on visible word */}
              <div className="text-white text-center h-20">
                {content[visibleIndex].bottom}
              </div>
            </h1>

            <p className="text-white text-base sm:text-lg mt-4 sm:mt-6 mx-auto max-w-xl px-2">
              We make exceptional digital marketing, web & app development,
              consulting, for startups and enterprises.
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link
                href="/schedule-consultation"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-customYellow text-gray-900 font-semibold hover:bg-opacity-90 transition-colors rounded-full text-sm sm:text-base"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;