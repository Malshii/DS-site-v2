import Head from "next/head";
import AboutHeader from "@/components/about/AboutHeader";
import AboutTeamExpertise from "@/components/about/AboutTeamExpertise";
import TeamPage from "@/components/about/TeamPage";
import CallToAction from "@/components/home/CallToAction";

export default function AboutUs({ isDropdownOpen }) {
  return (
    <>
      <Head>
        <title>About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand</title>
        <meta
          name="description"
          content="Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies."
        />
        {/* Additional meta tags for SEO and social sharing */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand" />
        <meta property="og:description" content="Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdcdigital.net/about" />
        <meta property="og:image" content="https://gdcdigital.net/assets/images/og-image.jpg" /> {/* Replace with actual image URL */}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand" />
        <meta name="twitter:description" content="Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies." />
        <meta name="twitter:image" content="https://gdcdigital.net/assets/images/og-image.jpg" /> {/* Replace with actual image URL */}
        
        {/* Additional meta tags */}
        <meta name="keywords" content="digital marketing agency, SEO, Google Ads, web development, New Zealand, digital strategies, GDC Digital Solutions" />
        <meta name="author" content="GDC Digital Solutions" />
        <link rel="canonical" href="https://gdcdigital.net/about" />
      </Head>

      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/assets/images/global-bg.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Main content */}
        <div className={`relative z-10 transition-all duration-300`}>
          <AboutHeader isDropdownOpen={isDropdownOpen} />
          <AboutTeamExpertise />
          <TeamPage />
          <CallToAction />
        </div>
      </section>
    </>
  );
}