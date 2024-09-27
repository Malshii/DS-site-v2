
import Banner from "@/components/home/Banner";
import AboutUs from "@/components/home/AboutUs";
import TestimonialSection from "@/components/home/TestimonialSection";
import RecentProjects from "@/components/home/RecentProjects";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <AboutUs />
        <TestimonialSection />
        <RecentProjects />
        <CallToAction />
      </main>
    </div>
  );
}
