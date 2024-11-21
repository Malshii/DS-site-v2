import Head from 'next/head';
import ContactUs from "@/components/ContactUs";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact GDC Digital Solutions | Digital Marketing Experts in New Zealand</title>
        <meta
          name="description"
          content="Contact GDC Digital Solutions for expert digital marketing services in New Zealand. Get SEO, Google Ads, web development, and social media strategies to grow your business."
        />
        {/* Basic SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Contact GDC Digital Solutions | Digital Marketing Experts in New Zealand" />
        <meta 
          property="og:description" 
          content="Contact GDC Digital Solutions for expert digital marketing services in New Zealand. Get SEO, Google Ads, web development, and social media strategies to grow your business." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdcdigital.net/contact-us" />
        <meta property="og:image" content="https://gdcdigital.net/assets/images/contact-page.jpg" /> {/* Replace with actual image URL */}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact GDC Digital Solutions | Digital Marketing Experts in New Zealand" />
        <meta 
          name="twitter:description" 
          content="Contact GDC Digital Solutions for expert digital marketing services in New Zealand. Get SEO, Google Ads, web development, and social media strategies to grow your business." 
        />
        <meta name="twitter:image" content="https://gdcdigital.net/assets/images/contact-page.jpg" /> {/* Replace with actual image URL */}
        
        {/* Additional meta tags */}
        <meta 
          name="keywords" 
          content="contact GDC Digital, digital marketing agency NZ, SEO services, Google Ads management, web development New Zealand, social media marketing, digital strategy consultation" 
        />
        <meta name="author" content="GDC Digital Solutions" />
        <link rel="canonical" href="https://gdcdigital.net/contact-us" />
        
        {/* Structured data for organization and contact page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact GDC Digital Solutions",
            "description": "Contact page for GDC Digital Solutions, a leading digital marketing agency in New Zealand",
            "mainEntity": {
              "@type": "Organization",
              "name": "GDC Digital Solutions",
              "url": "https://gdcdigital.net",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "", // Add your contact number
                "contactType": "customer service",
                "areaServed": "New Zealand",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "New Zealand"
                // Add more address details as needed
              },
              "sameAs": [
                // Add your social media profile URLs
                "https://www.linkedin.com/company/gdc-digital",
                "https://www.facebook.com/gdcdigital"
              ]
            },
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                {
                  "@type": "Service",
                  "name": "SEO Services",
                  "description": "Professional SEO services to improve your website's visibility"
                },
                {
                  "@type": "Service",
                  "name": "Google Ads Management",
                  "description": "Expert Google Ads campaign management for better ROI"
                },
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom website development solutions"
                },
                {
                  "@type": "Service",
                  "name": "NFC Cards",
                  "description": "Innovate with contactless technology"
                }
              ]
            }
          })}
        </script>
      </Head>

      <section className="relative bg-cover bg-center bg-no-repeat min-h-screen">
        <ContactUs />
      </section>
    </>
  );
}