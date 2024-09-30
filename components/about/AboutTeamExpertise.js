// /app/components/AboutTeamExpertise.js

import Image from "next/image";

export default function AboutTeamExpertise() {
  return (
    <section className="relative py-10 px-20">
      <div className="container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Content Section */}
          <div className="space-y-6">
            {/* Heading Section */}
            <div className="text-left">
              <h2 className="text-3xl font-bold text-customYellow">
                We are the experts of Team Communication
              </h2>
              <p className="text-gray-600 mt-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {/* People Using */}
              <div>
                <h3 className="text-4xl font-bold text-customYellow">
                  8,560,342
                </h3>
                <p className="text-gray-600 mt-2">Projects</p>
              </div>

              {/* Employees */}
              <div>
                <h3 className="text-4xl font-bold text-customYellow">4</h3>
                <p className="text-gray-600 mt-2">Services</p>
              </div>

              {/* Partners */}
              <div>
                <h3 className="text-4xl font-bold text-customYellow">1,500+</h3>
                <p className="text-gray-600 mt-2">Integrated partners</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image Section */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/about-left-image.png" // Ensure the path is correct
              alt="World Map"
              width={1200} // Set a default width (you can adjust this value based on your image size)
              height={800} // Set a default height (adjust as needed)
              className="w-3/4" // Keep your original Tailwind CSS classes
              layout="responsive" // Helps in maintaining responsiveness like in the original img tag
            />
          </div>
        </div>
      </div>
    </section>
  );
}
