// /app/about/page.js (or wherever your About page is located)

import AboutHeader from "@/components/about/AboutHeader";
import AboutTeamExpertise from "@/components/about/AboutTeamExpertise";
import CallToAction from "@/components/home/CallToAction";

export default function AboutUs() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/assets/images/global-bg.jpg')" }} // Replace with the actual path of your image
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Optional overlay for better readability */}
      
      {/* Main content */}
      <div className="relative z-10">
        <AboutHeader />
        <AboutTeamExpertise />
        <CallToAction />
      </div>
    </div>
  );
}
