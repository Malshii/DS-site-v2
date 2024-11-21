import Head from 'next/head';
import GoogleAdsCaseStudyCard from '@/components/case-studies/GoogleAdsCaseStudy';

export default function GoogleAdsCaseStudyPage() {
  return (
    <>
      <Head>
        <title>Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions</title>
        <meta
          name="description"
          content="Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand."
        />
        {/* Basic SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions" />
        <meta 
          property="og:description" 
          content="Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand." 
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gdcdigital.net/case-studies/google-ads" />
        <meta property="og:image" content="https://gdcdigital.net/assets/images/google-ads-case-study.jpg" /> {/* Replace with actual image URL */}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions" />
        <meta 
          name="twitter:description" 
          content="Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand." 
        />
        <meta name="twitter:image" content="https://gdcdigital.net/assets/images/google-ads-case-study.jpg" /> {/* Replace with actual image URL */}
        
        {/* Additional meta tags */}
        <meta name="keywords" content="Google Ads case studies, PPC success stories, digital marketing ROI, Google Ads agency NZ, paid advertising case studies, Google Ads campaigns, New Zealand digital marketing" />
        <meta name="author" content="GDC Digital Solutions" />
        <link rel="canonical" href="https://gdcdigital.net/case-studies/google-ads" />
        
        {/* Additional structured data for case studies */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Google Ads Case Studies | Proven Campaign Success",
            "publisher": {
              "@type": "Organization",
              "name": "GDC Digital Solutions",
              "url": "https://gdcdigital.net"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gdcdigital.net/case-studies/google-ads"
            },
            "description": "Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand."
          })}
        </script>
      </Head>

      <div>
        <GoogleAdsCaseStudyCard />
      </div>
    </>
  );
}