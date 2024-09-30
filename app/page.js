import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import TestimonialSection from "@/components/home/TestimonialSection";
import RecentProjects from "@/components/home/RecentProjects";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
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
