// pages/contact-us.js
import ContactUs from "@/components/ContactUs";

// Metadata Generation
export async function generateMetadata() {
  const siteUrl = 'https://gdcdigital.net';
  const pageUrl = `${siteUrl}/contact-us`;
  const imageUrl = `${siteUrl}/assets/images/contact-page.jpg`;
  const title = 'Contact GDC Digital Solutions - Digital Marketing Experts';
  const description = "Contact GDC Digital Solutions - New Zealand's digital marketing experts. Specialists in SEO, Google Ads & web development.";

  return {
    // Basic Meta Tags
    title,
    description,
    
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    
    // Keywords and Author
    keywords: 'contact GDC Digital, digital marketing agency NZ, SEO services, Google Ads management, web development New Zealand, social media marketing, digital strategy consultation',
    author: 'GDC Digital Solutions',
    
    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'GDC Digital Solutions',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Contact GDC Digital Solutions',
        },
      ],
      type: 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    
    // Schema.org / JSON-LD
    other: {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact GDC Digital Solutions",
        "description": "Contact page for GDC Digital Solutions, a leading digital marketing agency in New Zealand",
        "mainEntity": {
          "@type": "Organization",
          "name": "GDC Digital Solutions",
          "url": siteUrl,
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
      })
    },
  };
}

// Main Component
export default function ContactUsPage() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen">
      <ContactUs />
    </section>
  );
}