import { FaBullhorn, FaUsers, FaQuestionCircle } from "react-icons/fa"; // Using react-icons for icons

// Data for the web development benefits
const benefitsData = [
  {
    icon: <FaBullhorn className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "First Impressions Matter",
    description:
      "A professional website establishes credibility and helps build trust from the moment a visitor lands on your page.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Reach More Customers",
    description:
      "Your website makes you accessible to a larger audience. It’s your digital storefront, attracting visitors whether they’re across the street or across the world.",
  },
  {
    icon: <FaQuestionCircle className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Convert Visitors to Customers",
    description:
      "Your website can turn interest into action, providing valuable information and guiding visitors to make purchases, book services, or contact you directly.",
  },
];

export default function WebDevelopmentBenefits() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-customGray mb-10">
        Why Choose Our{" "}
        <span className="text-customYellow inline-block">
          Website Development
        </span>{" "}
        Services
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically render the benefits */}
          {benefitsData.map((benefit, index) => (
            <div key={index} className="text-center text-customGray">
              {benefit.icon}
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
