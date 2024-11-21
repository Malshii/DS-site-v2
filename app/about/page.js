import AboutHeader from "@/components/about/AboutHeader";
import AboutTeamExpertise from "@/components/about/AboutTeamExpertise";
import TeamPage from "@/components/about/TeamPage";
import CallToAction from "@/components/home/CallToAction";

// Method 1: Using metadata object (for Next.js 13+)
export const metadata = {
  title: 'About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand',
  description: 'Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies.',
  keywords: 'digital marketing agency, SEO, Google Ads, web development, New Zealand, digital strategies, GDC Digital Solutions',
  openGraph: {
    title: 'About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand',
    description: 'Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies.',
    url: 'https://gdcdigital.net/about',
    siteName: 'GDC Digital Solutions',
    images: [
      {
        url: 'https://gdcdigital.net/assets/images/og-image.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GDC Digital Solutions | Leading Digital Marketing Agency in New Zealand',
    description: 'Learn about GDC Digital Solutions, a top digital marketing agency in New Zealand specializing in SEO, Google Ads, web development, and innovative digital strategies.',
    images: ['https://gdcdigital.net/assets/images/og-image.jpg'], // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://gdcdigital.net/about',
  },
};

export default function AboutUs({ isDropdownOpen }) {
  return (
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
  );
}