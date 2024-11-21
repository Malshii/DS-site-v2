import Head from 'next/head';
import WebsiteDevelopmentCaseStudy from '@/components/case-studies/WebsiteDevelopmentCaseStudy';

export default function WebDevelopmentCaseStudyPage() {
  return (
    <>
      <Head>
        <title>Web Development Case Studies | GDC Digital Solutions</title>
        <meta
          name="description"
          content="Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth."
        />
        {/* Basic SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Web Development Case Studies | GDC Digital Solutions" />
        <meta 
          property="og:description" 
          content="Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth." 
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gdcdigital.net/case-studies/web-development" />
        <meta property="og:image" content="https://gdcdigital.net/assets/images/web-development-case-study.jpg" /> {/* Replace with actual image URL */}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Case Studies | GDC Digital Solutions" />
        <meta 
          name="twitter:description" 
          content="Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth." 
        />
        <meta name="twitter:image" content="https://gdcdigital.net/assets/images/web-development-case-study.jpg" /> {/* Replace with actual image URL */}
        
        {/* Additional meta tags */}
        <meta 
          name="keywords" 
          content="web development case studies, custom website development, web design portfolio, NZ web developers, website case studies, user experience design, business websites, web development projects, New Zealand web development" 
        />
        <meta name="author" content="GDC Digital Solutions" />
        <link rel="canonical" href="https://gdcdigital.net/case-studies/web-development" />
        
        {/* Structured data for case studies */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Web Development Case Studies | GDC Digital Solutions",
            "publisher": {
              "@type": "Organization",
              "name": "GDC Digital Solutions",
              "url": "https://gdcdigital.net"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gdcdigital.net/case-studies/web-development"
            },
            "description": "Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.",
            "articleSection": "Case Studies",
            "articleBody": "Web development portfolio showcasing custom website development projects and their business impact.",
            "about": {
              "@type": "Service",
              "name": "Web Development",
              "provider": {
                "@type": "Organization",
                "name": "GDC Digital Solutions"
              }
            }
          })}
        </script>
      </Head>

      <div>
        <WebsiteDevelopmentCaseStudy />
      </div>
    </>
  );
}