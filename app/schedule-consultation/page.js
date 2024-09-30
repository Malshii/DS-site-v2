// pages/ScheduleConsultation.js

"use client";

import { useState } from "react";
import ServiceSelection from "../../components/booking/ServiceSelection";
import CalendarComponent from "../../components/booking/CalendarComponent";
import CaptchaComponent from "../../components/booking/CaptchaComponent";
import GuestForm from "../../components/booking/GuestForm";

// Mock unavailable dates for demonstration
const unavailableDates = ["2024-10-03", "2024-10-07", "2024-10-12"];

export default function ScheduleConsultation() {
  const [service, setService] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [captchaVerified, setCaptchaVerified] = useState(true); // State to manage CAPTCHA
  const [captchaError, setCaptchaError] = useState(""); // State to manage CAPTCHA error
  const [showGuestForm, setShowGuestForm] = useState(false); // Control form display
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const today = new Date(); // Get today's date

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
      const formattedDate = d.toISOString().split("T")[0]; // Format as YYYY-MM-DD
      dates.push({
        date: formattedDate,
        isUnavailable: unavailableDates.includes(formattedDate),
        isPast: d < today, // Mark dates in the past
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
      setShowGuestForm(true); // Show guest form after booking is confirmed
      setCaptchaError(""); // Reset error message after successful booking
    }
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setCaptchaError(""); // Clear error when CAPTCHA is completed
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
    <div className="container mx-auto py-10 px-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        Schedule a Consultation
      </h1>

      {!showGuestForm && (
        <>
          <ServiceSelection
            service={service}
            setService={setService}
            checkAvailability={checkAvailability}
          />

          {showCalendar && (
            <CalendarComponent
              availableDates={availableDates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              currentMonth={currentMonth}
              handlePrevMonth={handlePrevMonth}
              handleNextMonth={handleNextMonth}
            />
          )}

          {selectedDate && (
            <CaptchaComponent
              handleCaptcha={handleCaptcha}
              captchaError={captchaError}
            />
          )}

          {selectedDate && captchaVerified && (
            <div className="flex justify-center items-center mt-4">
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

      {showGuestForm && (
        <GuestForm
          guestInfo={guestInfo}
          handleGuestInfoChange={handleGuestInfoChange}
          selectedDate={selectedDate}
          selectedService={service}
          handleGuestFormSubmit={handleGuestFormSubmit}
        />
      )}
    </div>
  );
}
