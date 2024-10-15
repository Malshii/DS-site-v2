import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  // Accept isDropdownOpen prop
  return (
    <div>
      <main>
        <Banner />
        <Services />
        <TestimonialSection />
        {/* <RecentProjects /> */}
        <CallToAction />
      </main>
    </div>
  );
}
