"use client";

import { useState, useEffect, useRef } from "react";
import ServiceSelection from "../../components/booking/ServiceSelection";
import CalendarComponent from "../../components/booking/CalendarComponent";
import CaptchaComponent from "../../components/booking/CaptchaComponent";
import GuestForm from "../../components/booking/GuestForm";
import { motion } from "framer-motion";

// Mock unavailable dates for demonstration
const unavailableDates = ["2024-10-03", "2024-10-07", "2024-10-12"];

export default function ScheduleConsultation({ isServicesOpen, isAboutOpen }) {
  const [service, setService] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const [captchaError, setCaptchaError] = useState("");
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const calendarRef = useRef(null); // Ref to scroll to the calendar

  useEffect(() => {
    if (showCalendar) {
      // Scroll to the calendar when it's visible
      calendarRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showCalendar]);

  const today = new Date();

  const checkAvailability = () => {
    if (service) {
      setShowCalendar(true);
      generateAvailableDates(currentMonth);
    } else {
      alert("Please select a service first.");
    }
  };

  const generateAvailableDates = (month) => {
    const dates = [];
    const startOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);

    for (
      let d = new Date(startOfMonth);
      d <= endOfMonth;
      d.setDate(d.getDate() + 1)
    ) {
      const formattedDate = d.toISOString().split("T")[0];
      dates.push({
        date: formattedDate,
        isUnavailable: unavailableDates.includes(formattedDate),
        isPast: d < today,
      });
    }
    setAvailableDates(dates);
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date.");
    } else if (!captchaVerified) {
      setCaptchaError("Please complete the CAPTCHA verification.");
    } else {
      setShowGuestForm(true);
      setCaptchaError("");
    }
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setCaptchaError("");
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(prevMonth);
    generateAvailableDates(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(nextMonth);
    generateAvailableDates(nextMonth);
  };

  const handleGuestInfoChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleGuestFormSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${guestInfo.name} on ${selectedDate}`);
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
          showCalendar ? "pt-60" : "pt-20"
        }`} // Dynamically adjust padding-top when the calendar is shown
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
              checkAvailability={checkAvailability}
            />

            {/* Only show the calendar after selecting a service */}
            {service && (
              <div ref={calendarRef} className="mt-10 w-full max-w-4xl m-auto">
                <CalendarComponent
                  availableDates={availableDates}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  currentMonth={currentMonth}
                  handlePrevMonth={handlePrevMonth}
                  handleNextMonth={handleNextMonth}
                />

                {/* CAPTCHA and Booking Button */}
                {selectedDate && (
                  <>
                    <CaptchaComponent
                      handleCaptcha={handleCaptcha}
                      captchaError={captchaError}
                    />
                    {captchaVerified && (
                      <div className="flex justify-center items-center m-4">
                        <button
                          onClick={handleBooking}
                          className="w-full md:w-auto bg-customYellow hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded shadow transition duration-300"
                        >
                          Reservation
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Guest Form */}
            {showGuestForm && (
              <GuestForm
                guestInfo={guestInfo}
                handleGuestInfoChange={handleGuestInfoChange}
                selectedDate={selectedDate}
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
