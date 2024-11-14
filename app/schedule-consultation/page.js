import HubSpotMeeting from "@/components/booking/HubSpotMeeting";

export default function ScheduleConsultation() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/consulting.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Blur Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Flex Centering Wrapper with Added Padding for Spacing */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 pt-24 pb-4">
        {/* Card Container */}
        <div
          id="move-down"
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-full max-w-6xl mx-auto"
        >
          {/* Title Centered in the Card */}
          <div className="flex items-center justify-center mb-10">
            <h1 className="text-4xl text-white font-bold text-center">
              Schedule a Consultation
            </h1>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-full text-white">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center p-4 md:col-span-3">
              <img
                src="/assets/images/contact-form-image.webp"
                alt="Consulting"
                className="w-full h-auto"
              />
            </div>

            {/* Right Column - HubSpot Meeting */}
            <div className="flex flex-col items-center justify-center text-center px-6 md:col-span-2">
              {/* HubSpot Meeting Integration */}
              <div className="w-full">
                <HubSpotMeeting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
