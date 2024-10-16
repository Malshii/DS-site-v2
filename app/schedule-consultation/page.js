"use client";

import { useState, useEffect, useRef } from "react";
import ServiceSelection from "../../components/booking/ServiceSelection";
import GuestForm from "../../components/booking/GuestForm";
import { motion } from "framer-motion";

// Mock unavailable dates for demonstration
const unavailableDates = ["2024-10-03", "2024-10-07", "2024-10-12"];

export default function ScheduleConsultation({ isServicesOpen, isAboutOpen }) {
  const [service, setService] = useState("");
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleGuestInfoChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleGuestFormSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${guestInfo.name}`);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen overflow-auto"
      style={{
        backgroundImage: "url('/assets/images/consulting.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main content */}
      <div
        className={`relative z-10 transition-all duration-300 ${
          showGuestForm ? "pt-60" : "pt-20"
        }`} // Dynamically adjust padding-top when the form is shown
      >
        <div
          className={`relative flex flex-col items-center justify-center min-h-screen text-white text-center px-6 transition-all duration-300`}
        >
          {/* Only move this section down when dropdown is open */}
          <motion.div
            id="move-down"
            className={`transition-all duration-300 relative z-10 ${
              isServicesOpen || isAboutOpen ? "mt-60" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">Schedule a Consultation</h1>

            {/* Service Selection */}
            <ServiceSelection
              service={service}
              setService={setService}
            />

            {/* Guest Form */}
            {showGuestForm && (
              <GuestForm
                guestInfo={guestInfo}
                handleGuestInfoChange={handleGuestInfoChange}
                selectedService={service}
                handleGuestFormSubmit={handleGuestFormSubmit}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
