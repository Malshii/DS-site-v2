import { useState, useEffect } from "react";
import Modal from "./Modal";
import CalendarComponent from "./CalendarComponent";
import GuestForm from "./GuestForm";
import { FaLaptopCode, FaSearch, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceSelection({ service, setService }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState({});
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const today = new Date();
  const unavailableDates = ["2024-10-03", "2024-10-07", "2024-10-12"];

  useEffect(() => {
    generateAvailableDates(currentMonth);
  }, [currentMonth]);

  const services = [
    {
      value: "Website Development",
      label: "Website Development",
      icon: <FaLaptopCode />,
      meetingLink: "https://meetings.hubspot.com/malshi-website-dev", // Example unique link per service
    },
    {
      value: "Google Ads",
      label: "Google Ads",
      icon: <FaBullhorn />,
      meetingLink: "https://meetings.hubspot.com/malshi-google-ads",
    },
    {
      value: "SEO / Copywriting",
      label: "SEO / Copywriting",
      icon: <FaSearch />,
      meetingLink: "https://meetings.hubspot.com/malshi-seo-copywriting",
    },
    {
      value: "NFC Cards",
      label: "NFC Cards",
      icon: <FaPaintBrush />,
      meetingLink: "https://meetings.hubspot.com/malshi-nfc-cards",
    },
  ];

  const handleSelectService = (selectedService) => {
    setService(selectedService);
    setIsModalOpen(true);
  };

  const handleNextStage = () => {
    if (stage === 1 && selectedDate) {
      // Check if the selected slot is already booked
      if (bookedSlots[selectedDate]) {
        alert("This date and time are already booked. Please select another slot.");
        return;
      }
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
    }
  };

  const handleFinish = () => {
    // Mark the selected date as booked for the specific service
    setBookedSlots((prev) => ({
      ...prev,
      [selectedDate]: true,
    }));

    setIsModalOpen(false);
    setStage(1);
    setGuestInfo({ name: "", email: "", phone: "" });
    setSelectedDate("");
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(nextMonth);
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
        isUnavailable: unavailableDates.includes(formattedDate) || bookedSlots[formattedDate],
        isPast: d < today,
      });
    }
    setAvailableDates(dates);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {services.map((item) => (
          <div
            key={item.value}
            onClick={() => handleSelectService(item.value)}
            className={`cursor-pointer w-64 h-64 bg-white bg-opacity-20 rounded-lg shadow-md p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
              ${service === item.value ? "border-2 border-customYellow" : ""}`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-6xl text-white mb-4">{item.icon}</div>
              <h3 className="font-bold text-customYellow text-2xl">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {stage === 1 && (
          <>
            <h2 className="text-2xl text-customYellow font-bold mb-4 text-center">
              SELECT A DATE
            </h2>
            <CalendarComponent
              availableDates={availableDates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              currentMonth={currentMonth}
              handlePrevMonth={handlePrevMonth}
              handleNextMonth={handleNextMonth}
            />
            <button
              onClick={handleNextStage}
              disabled={!selectedDate}
              className="mt-4 bg-customYellow text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-customGray transition duration-300"
            >
              Reserve Date
            </button>
          </>
        )}
        {stage === 2 && (
          <>
            <h2 className="text-2xl text-customYellow font-bold mb-4 text-center">
              FILL OUT YOUR INFORMATION
            </h2>
            <GuestForm
              guestInfo={guestInfo}
              handleGuestInfoChange={(e) => {
                const { name, value } = e.target;
                setGuestInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
              }}
              selectedDate={selectedDate}
              selectedService={service}
              handleGuestFormSubmit={(e) => {
                e.preventDefault();
                handleNextStage();
              }}
            />
          </>
        )}
        {stage === 3 && (
          <>
            {/* Wrapper with Background Image */}
            <div
              className="relative p-10 rounded-lg"
              style={{
                backgroundImage: "url('/assets/images/success-background.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Success Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/finish-consultant.png"
                  alt="Success"
                  width={240}
                  height={240}
                  className="w-60 h-60"
                />
              </div>

              {/* Animated Success Message */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <h2 className="text-3xl text-customYellow font-bold mb-4">
                  You have successfully scheduled a consultation!
                </h2>
              </motion.div>

              <p className="text-center text-customGray mb-6">
                Your booking for {guestInfo.name} on {selectedDate} is confirmed.
              </p>

              <button
                onClick={handleFinish}
                className="mt-4 bg-customYellow max-w-sm text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-customGray transition duration-300"
              >
                Finish
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
