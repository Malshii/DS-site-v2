import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import CallToAction from "@/components/home/CallToAction";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GDC Digital Solutions - Your Trusted Digital Marketing Partner</title>
        <meta 
          name="description" 
          content="Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!"
        />
        
        {/* Basic SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, Google Ads management, web development, social media marketing, digital strategy, NZ digital agency, digital solutions"
        />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GDC Digital Solutions" />
        <meta property="og:title" content="GDC Digital Solutions - Your Trusted Digital Marketing Partner" />
        <meta 
          property="og:description" 
          content="Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!"
        />
        <meta property="og:url" content="https://gdcdigital.net/" />
        <meta property="og:image" content="https://gdcdigital.net/assets/images/og-image.jpg" /> {/* Replace with actual image URL */}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GDC Digital Solutions - Your Trusted Digital Marketing Partner" />
        <meta 
          name="twitter:description" 
          content="Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!"
        />
        <meta name="twitter:image" content="https://gdcdigital.net/assets/images/og-image.jpg" /> {/* Replace with actual image URL */}
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gdcdigital.net/" />
        
        {/* Structured data for organization and services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GDC Digital Solutions",
            "url": "https://gdcdigital.net",
            "logo": "https://gdcdigital.net/assets/images/logo.png", // Replace with actual logo URL
            "description": "Digital marketing agency providing comprehensive solutions for business growth",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "New Zealand"
              // Add more address details as needed
            },
            "sameAs": [
              // Add your social media profile URLs
              "https://www.linkedin.com/company/gdc-digital",
              "https://www.facebook.com/gdcdigital"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Management",
                    "description": "Professional Google Ads campaign management for better ROI",
                    "url": "https://gdcdigital.net/services/google-ads"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services",
                    "description": "Comprehensive SEO solutions to improve your website's visibility",
                    "url": "https://gdcdigital.net/services/seo"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom website development solutions",
                    "url": "https://gdcdigital.net/services/development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "NFC Cards",
                    "description": "Smart contactless card solutions",
                    "url": "https://gdcdigital.net/services/nfc-cards"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Structured data for website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GDC Digital Solutions",
            "url": "https://gdcdigital.net",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://gdcdigital.net/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>

      <div>
        <main>
          <Banner />
          <Services />
          <CallToAction />
        </main>
      </div>
    </>
  );
}