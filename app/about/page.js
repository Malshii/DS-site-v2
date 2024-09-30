// /app/about/page.js (or wherever your About page is located)

import AboutHeader from "@/components/about/AboutHeader";
import AboutTeamExpertise from "@/components/about/AboutTeamExpertise";
import CallToAction from "@/components/home/CallToAction";

export default function AboutUs() {
  return (
    <>
      <AboutHeader />
      <AboutTeamExpertise />
      <CallToAction />
    </>
  );
}
