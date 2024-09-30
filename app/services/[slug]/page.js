// /app/services/[slug]/page.js

import Image from "next/image";
import { notFound } from "next/navigation";

// Define the service details
const serviceDetails = {
  development: {
    heading: "Website Development",
    description: "Build professional and engaging websites.",
  },
  "google-ads": {
    heading: "Google Ads",
    description: "Optimize your ads to reach the right audience.",
  },
  seo: {
    heading: "SEO / Copywriting",
    description: "Enhance your content for better search rankings.",
  },
  "nfc-cards": {
    heading: "NFC Cards",
    description: "Innovate with contactless technology.",
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
    <section
      id="top"
      className="relative bg-white flex items-center justify-center min-h-[50vh] overflow-hidden"
    >
      {/* Background Wave */}
      <div className="absolute inset-0">
        <Image
          src="/assets/svg/wave2.svg" // Path to your SVG file
          alt="Wave Background"
          layout="fill" // This allows the image to fill the parent container
          objectFit="cover" // This preserves the object-cover behavior
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {service.heading}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>
    </section>
  );
}
