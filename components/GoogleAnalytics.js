// components/GoogleAnalytics.jsx
'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

const GA_MEASUREMENT_ID = 'G-G4X6P45YTZ'

// Separate component for tracking
function GoogleAnalyticsTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

// Main Google Analytics component
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracking />
      </Suspense>
    </>
  )
}