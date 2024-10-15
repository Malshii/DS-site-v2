import { FaLaptopCode, FaSearch, FaPaintBrush, FaBullhorn } from "react-icons/fa";

export default function ServiceSelection({ service, setService }) {
  const services = [
    { value: "Website Development", label: "Website Development", icon: <FaLaptopCode /> },
    { value: "Google Ads", label: "Google Ads", icon: <FaBullhorn /> },
    { value: "SEO / Copywriting", label: "SEO / Copywriting", icon: <FaSearch /> },
    { value: "NFC Cards", label: "NFC Cards", icon: <FaPaintBrush /> },
  ];

  const handleSelectService = (selectedService) => {
    setService(selectedService);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {services.map((item) => (
        <div
          key={item.value}
          onClick={() => handleSelectService(item.value)}
          className={`cursor-pointer w-64 h-64 bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
            ${service === item.value ? "border-2 border-yellow-500" : ""}`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-6xl text-yellow-500 mb-4">{item.icon}</div>
            <h3 className="font-bold text-customYellow text-2xl">{item.label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
