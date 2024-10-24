import AboutHeader from "@/components/about/AboutHeader";
import AboutTeamExpertise from "@/components/about/AboutTeamExpertise";
import TeamPage from "@/components/about/TeamPage";
import CallToAction from "@/components/home/CallToAction";

export default function AboutUs({ isDropdownOpen }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/global-bg.jpg')",
        backgroundAttachment: "fixed", // Keeps background fixed
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main content */}
      <div
        className={`relative z-10 transition-all duration-300`}
      >
        {/* Pass isDropdownOpen to AboutHeader */}
        <AboutHeader isDropdownOpen={isDropdownOpen} />
        <AboutTeamExpertise />
        <TeamPage />
        <CallToAction />
      </div>
    </section>
  );
}
