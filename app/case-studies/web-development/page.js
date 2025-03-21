// app/case-studies/web-development/page.js
import CaseStudiesList from '@/components/case-studies/web-development/CaseStudiesList';

// Metadata for the index page
export const metadata = {
  title: 'Web Development Case Studies | GDC Digital Solutions',
  description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
  
  // Basic Meta Tags
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  
  // Open Graph
  openGraph: {
    title: 'Web Development Case Studies | GDC Digital Solutions',
    description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
    url: 'https://gdcdigital.net/case-studies/web-development',
    siteName: 'GDC Digital Solutions',
    type: 'website',
  },
};

export default function WebDevelopmentCaseStudiesPage() {
  return (
    <main>
      <CaseStudiesList />
    </main>
  );
}