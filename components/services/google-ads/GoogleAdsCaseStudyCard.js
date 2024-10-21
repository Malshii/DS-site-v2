import React from "react";
import { motion } from "framer-motion";

const GoogleAdsCaseStudyCard = () => {
  return (
    <motion.div
      className="py-16 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="container max-w-6xl mx-auto border border-customYellow rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center relative"
        style={{
          backgroundImage: "url(/assets/images/google-ads-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex-1 md:pr-8 mb-6 md:mb-0 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            GDC CONSULTANTS
          </h2>
          <p className="text-7xl font-extrabold text-customYellow mb-4">200%</p>
          <p className="text-lg font-medium text-gray-700 mb-6">
            Increase in Leads from Digital Marketing Campaigns
          </p>
          <motion.button
            className="text-customYellow hover:text-white border border-customYellow hover:bg-customGray hover:border-none rounded-full px-8 py-3 font-semibold transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            View Success Story
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/images/google-ads/gdc-ads.png"
            alt="Tilers Tools Google Ads Success Screenshot"
            className="w-full max-w-[400px] mx-auto transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GoogleAdsCaseStudyCard;
