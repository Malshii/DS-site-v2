import CallToAction from "@/components/home/CallToAction";
import CustomCodedWebsites from "@/components/services/CustomCodedWebsites";
import Packages from "@/components/services/Packages";
import ProcessFlow from "@/components/services/ProcessFlow";
import WebDevelopmentBenefits from "@/components/services/WebDevelopment";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the service details
const serviceDetails = {
  development: {
    heading: "Website Development",
    description: "Build professional and engaging websites.",
    image: "/assets/images/about-left-image.png", // Example image for the service
  },
  "google-ads": {
    heading: "Google Ads",
    description: "Optimize your ads to reach the right audience.",
    image: "/assets/images/google-ads.png", // Example image for the service
  },
  seo: {
    heading: "SEO / Copywriting",
    description: "Enhance your content for better search rankings.",
    image: "/assets/images/seo.png", // Example image for the service
  },
  "nfc-cards": {
    heading: "NFC Cards",
    description: "Innovate with contactless technology.",
    image: "/assets/images/nfc-cards.png", // Example image for the service
  },
};

// Server-side component receiving the slug as `params`
export default function ServicePage({ params }) {
  const { slug } = params; // Access the dynamic segment of the URL

  // Fetch the service details for the slug
  const service = serviceDetails[slug];

  if (!service) {
    notFound(); // Renders a 404 page if the service isn't found
  }

  return (
    <>
      <section className="relative pt-32 flex flex-col md:flex-row items-center justify-between px-20 py-6 bg-white">
        {/* Left Side - Text Content with taller height */}
        <div className="bg-customYellow text-white px-20 rounded-tr-xl rounded-bl-xl relative z-10 min-h-[400px] flex items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{service.heading}</h1>
            <p className="mb-6 text-xl">{service.description}</p>
            {/* Call to Action Button */}
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all"
            >
              Contact now
            </a>
          </div>
        </div>

        {/* Right Side - Image/Illustration */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 h-full flex-grow">
          <Image
            src={service.image} // Path to the service's specific image
            alt={service.heading}
            width={400}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Optional Background Decorative Shape */}
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-pink-100"></div>
      </section>

      {/* Render Different Sections Based on Service Heading */}
      {service.heading === "Website Development" && (
        <>
          <WebDevelopmentBenefits />
          <CustomCodedWebsites />
          <ProcessFlow />
          <Packages />
        </>
      )}

      {service.heading === "Google Ads" && (
        <section className="py-12 bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Maximize Your Reach with Google Ads
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We optimize your campaigns to target the right audience, driving
              conversions.
            </p>
          </div>
        </section>
      )}

      {service.heading === "SEO / Copywriting" && (
        <section className="py-12 bg-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Boost Your SEO and Content Strategy
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We provide SEO services and high-quality content to improve your
              rankings.
            </p>
          </div>
        </section>
      )}

      {service.heading === "NFC Cards" && (
        <section className="py-12 bg-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Innovate with NFC Cards
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We offer NFC cards that provide a seamless, contactless
              experience.
            </p>
          </div>
        </section>
      )}

      <CallToAction />
    </>
  );
}
