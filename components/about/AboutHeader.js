// /app/about/page.js (or wherever your About page is located)

import Image from "next/image";

export default function AboutHeader() {
  return (
    <section className="relative bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/project-1.jpeg" // Update this path to your image
          alt="Team Working"
          width={1920} // Set default width (adjust based on your design)
          height={1080} // Set default height (adjust based on your design)
          className="w-full h-full object-cover opacity-60" // Keep your original Tailwind CSS classes
          priority // Optional: to prioritize loading this image
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
        {" "}
        {/* Adjusted height here */}
        <div className="text-center px-4">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>

          {/* Watch Video Button */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-white bg-customYellow px-6 py-3 rounded-full shadow-lg hover:bg-customGray transition-all"
            >
              <span className="text-lg">Watch video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.482A1 1 0 008 8.882v6.235a1 1 0 001.555.832l5.197-3.482a1 1 0 000-1.664z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Shape SVG at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[150px]"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
