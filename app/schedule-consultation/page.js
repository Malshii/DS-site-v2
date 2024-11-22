import React from 'react';
import ScheduleConsultation from '@/components/booking/ScheduleConsultation';

export const generateMetadata = async () => {
  return {
    title: 'Schedule a Consultation | GDC Digital Solutions - Web Design & Google Ads',
    description: 'Schedule a consultation with GDC Digital Solutions. Let our experts craft tailored digital marketing strategies, including Google Ads and SEO, to grow your business.',
    keywords: 'digital marketing consultation, GDC Digital Solutions, web design consultation, Google Ads strategy, SEO consultation, digital marketing experts',
    openGraph: {
      title: 'Schedule a Consultation | GDC Digital Solutions',
      description: 'Book your free digital marketing consultation with our experts.',
      type: 'website',
      url: 'https://gdcdigital.net/schedule-consultation',
      siteName: 'GDC Digital Solutions',
      locale: 'en_NZ',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://gdcdigital.net/schedule-consultation',
    },
  };
};

const ConsultationPageClient = () => {
  return (
    <ScheduleConsultation />
  );
};

export default ConsultationPageClient;