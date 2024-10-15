export default function CustomCodedWebsites() {
  // Array of hexagon points
  const hexagonPoints = [
    "Tailored Uniquely to Your Needs",
    "Superior Security",
    "Enhanced Speed & Performance",
    "Optimized SEO & Clean Code",
    "Scalability & Longevity",
    "Total Control & Ownership",
  ];

  return (
    <section className="relative bg-black py-12 text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/services/6.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-customYellow">Custom-coded websites: </span>
            Unlock the power of flexibility and performance
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Manage your business with a mature marketing strategy, develop your
            business so that it grows rapidly.
          </p>
        </div>

        {/* Right Side: Hexagon Grid */}
        <div className="mt-8 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* Dynamically render hexagons */}
          {hexagonPoints.map((point, index) => (
            <div
              key={index}
              className="hexagon-container flex items-center justify-center"
            >
              <div className="hexagon-content text-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {point}
                </p>{" "}
                {/* Responsive font sizes */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
