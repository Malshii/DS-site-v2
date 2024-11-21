import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import CallToAction from "@/components/home/CallToAction";

export async function generateMetadata() {
  // Base metadata
  const metadata = {
    title: "GDC Digital Solutions - Your Trusted Digital Marketing Partner",
    description: "Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!",
    keywords: "digital marketing agency, SEO services, Google Ads management, web development, social media marketing, digital strategy, NZ digital agency, digital solutions",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      type: "website",
      siteName: "GDC Digital Solutions",
      title: "GDC Digital Solutions - Your Trusted Digital Marketing Partner",
      description: "Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!",
      url: "https://gdcdigital.net/",
      images: [
        {
          url: "https://gdcdigital.net/assets/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "GDC Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "GDC Digital Solutions - Your Trusted Digital Marketing Partner",
      description: "Boost your business with GDC Digital Solutions, experts in Google Ads, SEO, social media marketing, and web development. Get tailored digital marketing strategies today!",
      images: ["https://gdcdigital.net/assets/images/og-image.jpg"],
    },
    alternates: {
      canonical: "https://gdcdigital.net/",
    },
  };

  // Structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GDC Digital Solutions",
    "url": "https://gdcdigital.net",
    "logo": "https://gdcdigital.net/assets/images/logo.png",
    "description": "Digital marketing agency providing comprehensive solutions for business growth",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "New Zealand"
    },
    "sameAs": [
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
  };

  const websiteSchema = {
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
  };

  return {
    ...metadata,
    other: {
      'script:ld+json': [
        JSON.stringify(organizationSchema),
        JSON.stringify(websiteSchema)
      ]
    }
  };
}

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <CallToAction />
    </main>
  );
}